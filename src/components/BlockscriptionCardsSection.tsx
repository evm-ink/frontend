import { Inscriptions } from '../gql/operations-types'

import BlockscriptionCard from '@/components/BlockscriptionCard'
import emptyIllustration from '../assets/empty.svg'
import LoadingBlockscriptionsCard from './loading/LoadingBlockscriptionsCard'

type Props = {
  inscriptions: Inscriptions[]
  isLoading?: boolean
  perPageCount: number
}

const BlockscriptionCardsSection = ({
  inscriptions,
  isLoading = false,
  perPageCount,
}: Props) => {
  if (!isLoading && !inscriptions.length) {
    return (
      <div className="w-full h-fit p-4">
        <img className="w-[20vw]" src={emptyIllustration} alt="" />
      </div>
    )
  }

  return (
    <section className="grid grid-flow-row gap-4 container text-neutral-600 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {inscriptions.map((inscription, i) => {
        return (
          <BlockscriptionCard
            key={inscription?.position + i}
            position={inscription?.position}
            contentUri={inscription.content_uri}
            creatorAddress={inscription.creator_address}
            ownerAddress={inscription.owner_address}
            createdAt={inscription.created_at}
            trxHash={inscription.trx_hash}
            mimeType={inscription?.mtype}
          />
        )
      })}

      {isLoading
        ? new Array(perPageCount)
            .fill(0)
            .map((_, i) => <LoadingBlockscriptionsCard key={i} />)
        : null}
    </section>
  )
}

export default BlockscriptionCardsSection
