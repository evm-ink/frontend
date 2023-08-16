import clsx from 'clsx'
import { useParams } from 'react-router-dom'

import CollectionBlockscriptionCardsSection from '@/components/CollectionBlockscriptionCardsSection'

interface CollectionCardsSectionProps {
  className?: string
  isMintable?: boolean
  collectionName?: string
  claimedCount?: number
  price?: string
  contractAddress?: string
  mintType: string
  maxClaimCount: number
}

const CollectionCardsSection = ({
  className,
  isMintable,
  collectionName,
  claimedCount,
  price,
  contractAddress,
  mintType,
  maxClaimCount,
}: CollectionCardsSectionProps): JSX.Element => {
  const { collectionNameSlug } = useParams()

  return (
    <div
      className={clsx(
        'w-full px-4 flex flex-wrap items-center justify-center my-20',
        className
      )}
    >
      <CollectionBlockscriptionCardsSection
        canClaim={
          +maxClaimCount === 0 && isMintable
            ? true
            : (claimedCount ?? 0) < maxClaimCount
        }
        name={collectionName ?? ''}
        slug={collectionNameSlug ?? ''}
        price={price ?? '0'}
        collectionContractAddress={contractAddress ?? ''}
        mintType={mintType}
      />
    </div>
  )
}

export default CollectionCardsSection
