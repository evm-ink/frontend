import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { useInView } from 'react-intersection-observer'

import { useGetCollectionInscriptions } from '@/hooks/useGetCollectionInscriptions.query'

import CollectionBlockscriptionCard from './CollectionBlockscriptionCard'
import Spinner from './Spinner'

import noDataSVG from '@/assets/no-data.svg'

type Props = {
  className?: string
  name: string
  price: string
  canClaim?: boolean
  slug: string
  collectionContractAddress: string
  mintType: string
}

const PER_PAGE_COUNT = 25

const CollectionBlockscriptionCardsSection = ({
  className,
  name,
  price,
  canClaim = false,
  slug,
  collectionContractAddress,
  mintType,
}: Props) => {
  const [hideClaimedBlockscriptions, setHideClaimedBlockscriptions] =
    useState(false)

  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useGetCollectionInscriptions({
      perPageCount: PER_PAGE_COUNT,
      slug: slug,
    })

  const blockscriptions = data?.pages
    ?.flatMap((obj) => obj.collection_inscriptions)
    .filter(Boolean)
    .filter((obj) => (hideClaimedBlockscriptions ? !obj.claimed : true))

  const { ref, inView } = useInView({
    skip:
      hideClaimedBlockscriptions ||
      Boolean(data?.pages.length && !blockscriptions?.length),
  })

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage])

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-48">
        <Spinner />
      </div>
    )
  }

  if (isError) {
    return (
      <div className="w-full flex items-center justify-center dark:text-white">
        Error loading data
      </div>
    )
  }

  if (
    !isLoading &&
    (isError || data?.pages?.[0]?.collection_inscriptions?.length == 0)
  ) {
    return (
      <div className="flex flex-col items-center">
        <img className="max-w-[400px] mt-10" src={noDataSVG} alt="" />
        <h3 className="font-medium text-xl text-blue-500 mt-10 text-center">
          Collection Inscriptions will become visible once lazily minted
        </h3>
      </div>
    )
  }

  return (
    <div className={clsx('flex flex-col gap-10 w-full', className)}>
      <div className="w-full container flex items-center justify-end mb-10">
        <label className="relative inline-flex items-center cursor-pointer">
          <span className="mr-3 text-sm font-medium text-gray-600">
            Hide claimed Inscriptions
          </span>
          <div className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              checked={hideClaimedBlockscriptions}
              onChange={() =>
                setHideClaimedBlockscriptions((prevState) => !prevState)
              }
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" />
          </div>
        </label>
      </div>
      <section className="grid grid-flow-row gap-4 container mx-auto text-neutral-600 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {blockscriptions?.map((inscription, i) => {
          return (
            <CollectionBlockscriptionCard
              key={i}
              contentUri={inscription?.inscription?.content_uri ?? ''}
              name={`${name ?? ''} #${inscription?.position ?? ''}`}
              // creatorAddress={inscription.creator_address}
              ownerAddress={inscription?.inscription?.owner_address ?? ''}
              createdAt={inscription?.inscription?.created_at}
              mintType={mintType}
              trxHash={
                inscription?.trx_hash ??
                inscription?.inscription?.trx_hash ??
                ''
              }
              price={price}
              collectionContractAddress={collectionContractAddress}
              isClaimed={inscription.claimed}
              isAvailableToClaim={canClaim}
              mimeType={inscription?.inscription?.mtype}
            />
          )
        })}
      </section>
      {!isLoading && hasNextPage ? (
        <div className="flex items-center justify-center" ref={ref}>
          {data.pages?.length && !blockscriptions?.length ? null : <Spinner />}
        </div>
      ) : isLoading ? (
        <div className="flex items-center justify-center">
          <Spinner />
        </div>
      ) : null}
    </div>
  )
}

export default CollectionBlockscriptionCardsSection
