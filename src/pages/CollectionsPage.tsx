import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { formatEther } from 'viem'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Helmet } from 'react-helmet-async'

import { useGetCollections } from '@/hooks/useGetCollections.query'

import { chains } from '@/utils/rainbowkit'
import { getPlatformNamePrefix } from '@/utils/getPlatformNamePrefix'

const PER_PAGE_COUNT = 25

const CollectionsPage = () => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useGetCollections(PER_PAGE_COUNT)

  const collections = data?.pages
    ?.flatMap((obj) => obj.collections)
    .filter(Boolean)

  const { ref, inView } = useInView({
    skip: Boolean(data?.pages.length && !collections?.length),
  })

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage])

  // if (isLoading) {
  //   return (
  //     <div className="flex flex-col items-center justify-center h-48">
  //       <Spinner />
  //     </div>
  //   )
  // }

  if (isError) {
    return (
      <div className="w-full flex items-center justify-center dark:text-white">
        Error loading data
      </div>
    )
  }

  return (
    <main className="w-full flex flex-col flex-wrap justify-center items-center pt-20">
      <Helmet>
        <title>Collections</title>
      </Helmet>
      {/* <h1 className="mb-10 text-7xl font-extrabold">All Collections</h1> */}
      <div className="w-full lg:w-3/4 text-center bg-[rgba(225,226,226,0.5)] dark:bg-zinc-700 px-14 py-10 rounded-3xl overflow-x-scroll lg:overflow-x-hidden">
        <table className="w-full text-center text-slate-800 dark:text-slate-200 p-10">
          <thead className="">
            <tr className="border-b border-[#202025]">
              <td className="whitespace-nowrap px-2 xl:px-4 py-3 xl:py-6 font-bold text-left">
                <h1 className="text-base">Name</h1>
              </td>
              <td className="whitespace-nowrap px-2 xl:px-4 py-3 xl:py-6 font-bold">
                <h1 className="text-base">Claimed #</h1>
              </td>
              <td className="whitespace-nowrap px-2 xl:px-4 py-3 xl:py-6 font-bold">
                <h1 className="text-base">Total #</h1>
              </td>
              <td className="whitespace-nowrap px-2 xl:px-4 py-3 xl:py-6 font-bold">
                <h1 className="text-base">
                  Price per {getPlatformNamePrefix()}scription
                </h1>
              </td>
            </tr>
          </thead>
          <tbody>
            {collections?.map((collection, i) => {
              return (
                <tr
                  key={i}
                  className={clsx(
                    'border-b border-[#202025] hover:bg-slate-200 dark:hover:bg-zinc-600 text-slate-700 dark:text-slate-100',
                    i + 1 === collections?.length
                      ? 'border-none'
                      : 'border-b border-[#202025]'
                  )}
                >
                  <td className="whitespace-nowrap px-2 xl:px-4 py-3 xl:py-6 font-normal">
                    <Link to={`/collections/${collection.slug}`}>
                      <div className="flex gap-4 items-center justify-start text-base font-medium underline underline-offset-4">
                        <img
                          className="w-10 aspect-square rounded-full"
                          src={collection.banner_image_url ?? ''}
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

            {isLoading &&
              new Array(PER_PAGE_COUNT).fill(0).map((_, i) => (
                <tr
                  key={i}
                  className={clsx(
                    'hover:bg-slate-200 dark:hover:bg-zinc-600',
                    i + 1 === 5 ? 'border-none' : 'border-b border-[#202025]'
                  )}
                >
                  <td className="w-1/3 px-2 py-3 font-normal">
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
          </tbody>
        </table>
        {!isLoading && hasNextPage ? (
          <div className="flex items-center justify-center h-10" ref={ref}>
            {data.pages?.length && !collections?.length ? null : <></>}
          </div>
        ) : null}
      </div>
    </main>
  )
}

export default CollectionsPage
