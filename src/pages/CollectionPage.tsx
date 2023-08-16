import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useAccount } from 'wagmi'

import CollectionBlockscriptionCardsSection from '@/components/CollectionBlockscriptionCardsSection'
import SocialLinks from '@/components/SocialLinks'

import { useGetCollection } from '@/hooks/useGetCollection.query'

const CollectionPage = () => {
  const { collectionNameSlug } = useParams()

  const { address } = useAccount()
  const { data, isLoading } = useGetCollection(collectionNameSlug, address)

  const collection = data?.collections?.[0]
  const claimedCount = collection?.inscriptions_aggregate?.aggregate?.count

  if (isLoading) return null

  if (!collectionNameSlug) {
    return (
      <div className="w-full min-h-[70vh] flex items-center justify-center">
        <h1 className="text-6xl font-extrabold  text-red-600">
          Collection Not Found!.
        </h1>
      </div>
    )
  }

  if (!isLoading && !collection) {
    return (
      <div className="w-full min-h-[70vh] flex items-center justify-center">
        <h1 className="text-6xl font-extrabold  text-red-600">
          Collection Not Found!.
        </h1>
      </div>
    )
  }

  return (
    <main>
      <Helmet>
        <title>{collection?.name?.toLocaleUpperCase()} Collection</title>
      </Helmet>
      <div className="mb-20">
        <div className="min-h-[calc(50vh)] flex flex-col gap-5 items-center justify-center my-20">
          {/* <div className="flex flex-col gap-3 items-center justify-center mb-7">
            <h1 className="text-6xl font-extrabold text-[#202025]">
              Collection
            </h1>
          </div> */}
          <div className="min-h-[300px] w-full container mx-auto rounded-[32px] p-8 gap-5 flex flex-wrap lg:flex-nowrap bg-[rgba(225,226,226,0.5)] dark:bg-zinc-700">
            <img
              src={collection?.banner_image_url}
              alt=""
              className="border w-full lg:w-1/3 max-h-[600px] aspect-square object-cover rounded-2xl"
            />

            <div className="flex flex-col justify-between w-full lg:w-2/3">
              <div className="w-full bg-white dark:bg-zinc-800 flex flex-col gap-3 py-3 px-4 rounded">
                <div>
                  <h1 className="text-2xl font-black mb-1 capitalize dark:text-white">
                    {collection?.name}
                  </h1>
                  <div className="w-full border-b border-[#cecece]" />
                </div>
                <p className="text-sm font-medium dark:text-slate-300">
                  {collection?.description || 'Description'}
                </p>
                <SocialLinks
                  iconSize={'16px'}
                  externalUrl={collection?.external_url}
                  discordUsername={collection?.discord_username}
                  instagramUsername={collection?.instagram_username}
                  mediumUsername={collection?.medium_username}
                  telegramUsername={collection?.telegram_username}
                  twitterUsername={collection?.twitter_username}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-[1px] border-b-slate-500 w-full" />
      <div className="w-full flex flex-wrap items-center justify-center mt-20">
        {/* <h1 className="text-center text-4xl font-semibold mb-4">
          Collection Inscriptions
        </h1> */}

        <CollectionBlockscriptionCardsSection
          canClaim={claimedCount === 0 && collection?.is_mintable}
          name={collection?.name ?? ''}
          slug={collectionNameSlug}
          price={collection?.price}
          mintType={collection?.mint_type ?? 'lazymint'}
          collectionContractAddress={collection?.contract_address as string}
        />
      </div>
    </main>
  )
}

export default CollectionPage
