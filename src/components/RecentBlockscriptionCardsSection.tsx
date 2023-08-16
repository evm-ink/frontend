import React from 'react'
import clsx from 'clsx'
import { useSearchParams } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'

import BlockscriptionCardsSection from './BlockscriptionCardsSection'
import { filters } from './BlockscriptionsFilters'

import { useGetInscriptions } from '@/hooks/useGetInscriptions.query'

type Props = { className?: string }

const PER_PAGE_COUNT = 25

const RecentBlockscriptionCardsSection = ({ className }: Props) => {
  const { ref, inView } = useInView({
    trackVisibility: true,
    delay: 250,
    threshold: 0,
  })
  const [searchParams] = useSearchParams()

  const searchString = searchParams.get('search') ?? ''
  const contentType = searchParams.get('contentType') ?? ''

  const {
    data,
    isLoading,
    isFetchingNextPage,
    isError,
    fetchNextPage,
    hasNextPage,
  } = useGetInscriptions({
    perPageCount: PER_PAGE_COUNT,
    category: filters.find((filter) => filter.value == contentType)?.value,
    searchPosition: searchString,
  })

  React.useEffect(() => {
    if (inView && (!isLoading || !isFetchingNextPage) && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage, isLoading, isFetchingNextPage, hasNextPage])

  if (isError) {
    return <div>Error loading data</div>
  }

  return (
    <div
      className={clsx('container mx-auto px-2 flex flex-col gap-10', className)}
    >
      <BlockscriptionCardsSection
        inscriptions={
          data?.pages?.flatMap((obj) => obj.inscriptions).filter(Boolean) ?? []
        }
        isLoading={isLoading || isFetchingNextPage}
        perPageCount={PER_PAGE_COUNT}
      />
      {!isLoading && hasNextPage ? (
        <section className="w-full h-20" ref={ref}></section>
      ) : null}
    </div>
  )
}

export default RecentBlockscriptionCardsSection
