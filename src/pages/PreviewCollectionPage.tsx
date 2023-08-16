import clsx from 'clsx'
import { useParams } from 'react-router-dom'
import { useAccount } from 'wagmi'
import { toast } from 'react-toastify'

import { useGetCollection } from '@/hooks/useGetCollection.query'
import { useGetCollectionUploadUrls } from '@/hooks/useGetCollectionUploadUrls.query'
import { useOnCollectionUploadBannerMutation } from '@/hooks/useOnCollectionBannerUpload.mutation'
import { useOnCollectionUploadLogoMutation } from '@/hooks/useOnCollectionLogoUpload.mutation'
import { useOnPublishMutation } from '@/hooks/useOnPublish.mutation'

import PublishBanner from '@/components/collection/preview/PublishBanner'
import SocialLinks from '@/components/SocialLinks'
// import CoverImageButton from '@/components/collection/preview/CoverImageButton'
import InfoPill from '@/components/collection/preview/InfoPill'
import CollectionCardsSection from '@/components/collection/preview/CollectionCardsSection'
import ProfileImageWithDropzoneAndUpload from '@/components/file-upload/ProfileImageWithDropzoneAndUpload'
import BannerImageWithDropzoneAndUpload from '@/components/file-upload/BannerImageWithDropzoneAndUpload'
import Spinner from '@/components/Spinner'

interface PreviewCollectionPageProps {
  className?: string
}

const PreviewCollectionPage = ({
  className,
}: PreviewCollectionPageProps): JSX.Element => {
  const { collectionNameSlug } = useParams()

  const { address } = useAccount()
  const { data, isLoading, refetch } = useGetCollection(
    collectionNameSlug,
    address
  )
  const collection = data?.collections?.[0]
  const claimedCount = collection?.inscriptions_aggregate?.aggregate?.count

  const isCreator =
    collection?.creator?.toLocaleLowerCase() === address?.toLocaleLowerCase()

  const { data: collectionUploadUrls } = useGetCollectionUploadUrls(
    isCreator ? collectionNameSlug : ''
  )

  const { mutate: onCollectionUploadBanner } =
    useOnCollectionUploadBannerMutation()
  const { mutate: onCollectionUploadLogo } = useOnCollectionUploadLogoMutation()
  const {
    mutateAsync: onPublish,
    isLoading: isPublishing,
    isSuccess: isPublished,
  } = useOnPublishMutation()

  if (isLoading) {
    return (
      <div className="w-full min-h-[80vh] flex items-center justify-center">
        <Spinner />
      </div>
    )
  }

  if (!collectionNameSlug || (!isLoading && !collection)) {
    return (
      <div className="w-full min-h-[70vh] flex items-center justify-center">
        <h1 className="text-6xl font-extrabold text-red-600">
          Collection Not Found!.
        </h1>
      </div>
    )
  }

  return (
    <main className={clsx(className)}>
      {isCreator && !collection?.is_mintable && !isPublished && (
        <PublishBanner
          className="fixed top-[90px] right-0 left-0 z-20"
          onPublishClick={async () => {
            if (isPublishing || isLoading) return

            await onPublish(collectionNameSlug)
            refetch()
            toast.success('Collection published successfully')
          }}
        />
      )}
      <div
        className={clsx(
          'absolute top-0 left-0 right-0 min-h-[calc(100vh-200px] bg-slate-50 dark:bg-zinc-950',
          collection?.is_mintable ? 'mt-0' : 'mt-[72px'
        )}
      >
        <div className="relative w-full md:aspect-[4/1] h-full md:!max-h-[35vh] max-h-[50vh] aspect-[2/1] overflow-hidden shadow-md">
          <BannerImageWithDropzoneAndUpload
            className="z-20"
            presignedUrl={
              collectionUploadUrls?.get_collection_upload_urls?.banner_url
            }
            initialImageUrl={collection?.banner_image_url}
            canEdit={isCreator}
            onUploadSuccess={() => onCollectionUploadBanner(collectionNameSlug)}
          />
          {/* <div className="absolute bottom-0 right-0 left-0 max-w-screen-xl mx-auto h-fit flex items-end justify-end p-4 z-10">
            <CoverImageButton>Edit</CoverImageButton>
            <CoverImageButton className="ml-2">Share</CoverImageButton>
          </div> */}
        </div>
        <div className="max-w-screen-xl mx-auto h-full flex flex-col px-4 py-9 border-b-2 border-b-gray-200 dark:border-b-slate-700 mb-10">
          <div className="flex gap-8  flex-wrap lg:flex-nowrap">
            <div className="-mt-20 z-20">
              <div className="flex flex-col items-center gap-1">
                <ProfileImageWithDropzoneAndUpload
                  className="relative shadow-md mb-5"
                  presignedUrl={
                    collectionUploadUrls?.get_collection_upload_urls?.logo_url
                  }
                  initialImageUrl={collection?.logo_image_url}
                  text="Upload logo image"
                  canEdit={isCreator}
                  onUploadSuccess={() =>
                    onCollectionUploadLogo(collectionNameSlug)
                  }
                />
                <p className="text-lg font-bold dark:text-slate-100">
                  Logo Image
                </p>
                <p className="text-sm text-gray-500">Size 200x200px</p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-7">
              <div className="w-full flex gap-2 items-center justify-between">
                <h1 className="text-black dark:text-white font-black text-3xl">
                  {collection?.name}
                </h1>
                <SocialLinks
                  className="gap-4"
                  iconSize={'20px'}
                  externalUrl={collection?.external_url}
                  discordUsername={collection?.discord_username}
                  instagramUsername={collection?.instagram_username}
                  mediumUsername={collection?.medium_username}
                  telegramUsername={collection?.telegram_username}
                  twitterUsername={collection?.twitter_username}
                />
              </div>
              <p className="text-black dark:text-slate-100 font-lg font-medium">
                {collection?.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                <InfoPill
                  infoKey="Total Supply"
                  infoValue={collection?.total_supply}
                />
                {/* <InfoPill infoKey="Unique Holders" infoValue="7421" /> */}
                <InfoPill
                  infoKey="Claimed Count"
                  infoValue={collection?.minted}
                />
                {+collection?.max_claim ? (
                  <InfoPill
                    infoKey="Max Claim Count"
                    infoValue={collection?.max_claim}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <CollectionCardsSection
          claimedCount={claimedCount}
          collectionName={collection?.name}
          contractAddress={collection?.contract_address}
          price={collection?.price}
          isMintable={collection?.is_mintable}
          mintType={collection?.mint_type ?? 'lazymint'}
          maxClaimCount={collection?.max_claim}
        />
      </div>
    </main>
  )
}

export default PreviewCollectionPage
