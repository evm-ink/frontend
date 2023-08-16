import React from 'react'
import clsx from 'clsx'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'

import BlockscriptionCardsSection from './BlockscriptionCardsSection'
import Spinner from './Spinner'

import { useGetInscriptions } from '@/hooks/useGetInscriptions.query'
import { getPlatformNamePrefix } from '@/utils/getPlatformNamePrefix'

import noDataSVG from '@/assets/no-data.svg'
import LoadingBlockscriptionsCard from './loading/LoadingBlockscriptionsCard'

type Props = { className?: string; ownerAddress: string }

const PER_PAGE_COUNT = 25

const UserBlockscriptionCardsSection = ({ className, ownerAddress }: Props) => {
  const { ref, inView } = useInView({
    trackVisibility: true,
    delay: 100,
    threshold: 0,
  })
  const {
    data,
    isLoading,
    isFetchingNextPage,
    isError,
    fetchNextPage,
    hasNextPage,
  } = useGetInscriptions({
    perPageCount: PER_PAGE_COUNT,
    ownerAddress: ownerAddress,
  })

  React.useEffect(() => {
    if (inView && (!isLoading || !isFetchingNextPage) && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage, isLoading, isFetchingNextPage, hasNextPage])

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-48">
        <Spinner />
      </div>
    )
  }

  if (!isLoading && (isError || data?.pages?.[0]?.inscriptions?.length == 0)) {
    return (
      <div className="flex flex-col items-center">
        <img className="max-w-[400px] mt-10" src={noDataSVG} alt="" />
        <h3 className="font-medium text-xl text-blue-500 mt-10 text-center">
          <Link to={'/'} className="underline underline-offset-8 font-bold">
            Easily create a new {getPlatformNamePrefix()}scription
          </Link>{' '}
          ↗
        </h3>
      </div>
    )
  }

  return (
    <div className={clsx('container mx-auto flex flex-col gap-10', className)}>
      <BlockscriptionCardsSection
        inscriptions={
          data?.pages?.flatMap((obj) => obj.inscriptions).filter(Boolean) ?? []
        }
        isLoading={isLoading || isFetchingNextPage}
        perPageCount={PER_PAGE_COUNT}
      />
      {!isLoading && hasNextPage ? (
        <section
          className="grid grid-flow-row gap-4 container text-neutral-600 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
          ref={ref}
        >
          {new Array(PER_PAGE_COUNT).fill(0).map((_, i) => (
            <LoadingBlockscriptionsCard key={i} />
          ))}
        </section>
      ) : isLoading ? (
        <section className="grid grid-flow-row gap-4 container text-neutral-600 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {new Array(PER_PAGE_COUNT).fill(0).map((_, i) => (
            <LoadingBlockscriptionsCard key={i} />
          ))}
        </section>
      ) : null}
    </div>
  )
}

export default UserBlockscriptionCardsSection
