import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { formatEther } from 'viem'
import { useAccount } from 'wagmi'

import { useGetUserCollections } from '@/hooks/useGetUserCollections.query'

import { getPlatformNamePrefix } from '@/utils/getPlatformNamePrefix'
import { chains } from '@/utils/rainbowkit'

interface UserCollectionsProps {
  className?: string
  address?: string
}

const UserCollections = ({
  className,
  address,
}: UserCollectionsProps): JSX.Element => {
  const { data, isLoading } = useGetUserCollections(address)

  const { address: loggedInUserAddress } = useAccount()

  const isCreator =
    address?.toLocaleLowerCase() === loggedInUserAddress?.toLocaleLowerCase()

  return (
    <div
      className={clsx(
        'w-full lg:w-3/4 text-center bg-[rgba(225,226,226,0.5)] dark:bg-zinc-700 px-10 py-6 rounded-3xl overflow-x-scroll lg:overflow-x-hidden',
        className
      )}
    >
      <table className="w-full text-center text-slate-800 dark:text-slate-200 p-10">
        <thead className="">
          <tr className="border-b border-[#202025]">
            <td className="whitespace-nowrap px-2 py-3 font-bold text-left">
              <h1 className="text-base">Name</h1>
            </td>
            <td className="whitespace-nowrap px-2 py-3 font-bold">
              <h1 className="text-base">Claimed #</h1>
            </td>
            <td className="whitespace-nowrap px-2 py-3 font-bold">
              <h1 className="text-base">Total #</h1>
            </td>
            <td className="whitespace-nowrap px-2 py-3 font-bold">
              <h1 className="text-base">
                Price per {getPlatformNamePrefix()}scription
              </h1>
            </td>
          </tr>
        </thead>
        <tbody>
          {isLoading &&
            new Array(5).fill(0).map((_, i) => (
              <tr
                key={i}
                className={clsx(
                  'hover:bg-slate-200 dark:hover:bg-zinc-600',
                  i + 1 === 5 ? 'border-none' : 'border-b border-[#202025]'
                )}
              >
                <td className=" px-2 py-3 font-normal">
                  <div className="flex gap-4 items-center justify-start text-base font-medium underline underline-offset-4">
                    <div className="w-10 aspect-square flex-shrink-0 rounded-full bg-gray-700 dark:bg-zinc-500 animate-pulse" />
                    <div className="w-full h-6 bg-gray-700 dark:bg-zinc-500 animate-pulse rounded-lg"></div>
                  </div>
                </td>
                <td className="px-2 xl:px-4 py-3 xl:py-6 text-center">
                  <div className="inline-block w-full h-6 bg-gray-700 dark:bg-zinc-500 animate-pulse rounded-lg"></div>
                </td>
                <td className="px-2 xl:px-4 py-3 xl:py-6 text-center">
                  <div className="inline-block w-full h-6 bg-gray-700 dark:bg-zinc-500 animate-pulse rounded-lg"></div>
                </td>
                <td className="px-2 xl:px-4 py-3 xl:py-6 h-6 text-center">
                  <div className="inline-block w-full h-6 bg-gray-700 dark:bg-zinc-500 animate-pulse rounded-lg"></div>
                </td>
              </tr>
            ))}
          {!isLoading &&
            data?.collections.map((collection, i) => {
              return (
                <tr
                  key={i}
                  className={clsx(
                    'hover:bg-slate-200 dark:hover:bg-zinc-600 text-slate-700 dark:text-slate-100',
                    i + 1 === data?.collections?.length
                      ? 'border-none'
                      : 'border-b border-[#202025]'
                  )}
                >
                  <td className="whitespace-nowrap px-2 py-3 font-normal">
                    <Link
                      to={
                        isCreator
                          ? `/preview/${collection.slug}`
                          : `/collections/${collection.slug}`
                      }
                    >
                      <div className="flex gap-4 items-center justify-start text-base font-medium underline underline-offset-4">
                        <img
                          className="w-10 aspect-square rounded-full"
                          src={
                            collection.logo_image_url ||
                            collection?.banner_image_url ||
                            'https://placehold.jp/10/09090b/ffffff/50x50.png?text=Collection'
                          }
                          onError={({ currentTarget }) => {
                            currentTarget.onerror = null // prevents looping
                            currentTarget.src =
                              'https://placehold.jp/10/09090b/ffffff/50x50.png?text=Collection'
                          }}
                          alt=""
                        />
                        <p className="capitalize font-bold">
                          {collection.name}
                        </p>
                      </div>
                    </Link>
                  </td>
                  <td className="whitespace-nowrap px-2 xl:px-4 py-3 xl:py-6 font-normal">
                    <p className="text-base font-medium">{collection.minted}</p>
                  </td>
                  <td className="whitespace-nowrap px-2 xl:px-4 py-3 xl:py-6 font-normal">
                    <p className="text-base font-medium">
                      {collection.total_supply}
                    </p>
                  </td>
                  <td className="whitespace-nowrap px-2 xl:px-4 py-3 xl:py-6 font-normal">
                    <p className="text-base font-medium">
                      {formatEther(BigInt(collection.price))}{' '}
                      {chains[0].nativeCurrency.symbol}
                    </p>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default UserCollections
