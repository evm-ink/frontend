import { useMemo } from 'react'
import clsx from 'clsx'
import { useParams, useSearchParams } from 'react-router-dom'
import { createAvatar } from '@dicebear/core'
import { identicon } from '@dicebear/collection'

import SocialLinks from '@/components/SocialLinks'
import ProfileTabs from '@/components/ProfileTabs'
import UserBlockscriptionCardsSection from '@/components/UserBlockscriptionCardsSection'
import ProfileImageWithDropzoneAndUpload from '@/components/file-upload/ProfileImageWithDropzoneAndUpload'
import BannerImageWithDropzoneAndUpload from '@/components/file-upload/BannerImageWithDropzoneAndUpload'
import UserCollections from '@/components/UserCollections'

import { getPlatformNamePrefix } from '@/utils/getPlatformNamePrefix'
import { useGetEnsNameAndAvatar } from '@/hooks/useGetEnsNameAndAvatar.query'
import { truncateAddress } from '@/utils/truncateAddress'

interface UserProfilePageProps {
  className?: string
}

const UserProfilePage = ({ className }: UserProfilePageProps): JSX.Element => {
  const { address } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  const currentTab =
    searchParams.get('currentTab') || `${getPlatformNamePrefix()}scriptions`

  const { data } = useGetEnsNameAndAvatar(address ?? '')

  const fallbackIdenticon = useMemo(() => {
    return createAvatar(identicon, {
      seed: address,
      backgroundColor: ['b6e3f4'],
      backgroundType: ['solid'],
    }).toDataUriSync()
  }, [address])

  return (
    <main className={clsx('h-full', className)}>
      <div className="absolute top-0 left-0 right-0 h-fit min-h-[calc(100vh-100px] bg-slate-50 dark:bg-zinc-950">
        <div className="relative w-full aspect-[4/1] h-full !max-h-[35vh] overflow-hidden">
          <BannerImageWithDropzoneAndUpload
            className=""
            // initialImageUrl={`https://loremflickr.com/1600/400/landscape`}
          />
        </div>
        <div className="max-w-screen-xl mx-auto h-full flex flex-col px-4 py-9 border-b-2 border-b-gray-200 dark:border-b-slate-700 mb-10">
          <div className="flex gap-8">
            <div className="-mt-20 z-20">
              <div className="flex flex-col items-center gap-1">
                <ProfileImageWithDropzoneAndUpload
                  className="relative shadow-md"
                  initialImageUrl={'' || fallbackIdenticon}
                  text="Upload profile image"
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-7">
              <div className="w-full flex gap-2 items-center justify-between">
                <h1 className="text-black font-black text-3xl dark:text-white">
                  {data?.ensName || truncateAddress(address ?? '', 12)}
                </h1>
                <SocialLinks
                  className="gap-4"
                  iconSize={'20px'}
                  externalUrl={''}
                  discordUsername={''}
                  instagramUsername={''}
                  mediumUsername={''}
                  telegramUsername={''}
                  twitterUsername={''}
                />
              </div>
              {/* <p className="text-black dark:text-slate-200 font-lg font-medium">
                Profile Biography
              </p> */}
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto">
          <div className="px-6">
            <ProfileTabs
              currentTab={currentTab}
              onTabClick={(tab) => {
                setSearchParams({ currentTab: tab })
              }}
            />
          </div>
          <div className="p-6 w-full mb-20 flex items-center justify-center">
            {(() => {
              switch (currentTab) {
                case 'collections':
                  return <UserCollections address={address} />

                case `${getPlatformNamePrefix()}scriptions`:
                default:
                  return (
                    <UserBlockscriptionCardsSection
                      ownerAddress={address ?? 'null'}
                    />
                  )
              }
            })()}
          </div>
        </div>
      </div>
    </main>
  )
}

export default UserProfilePage
