import { useQuery } from '@tanstack/react-query'

import { graphqlClient } from '../lib/gqlClient'
import { GetInscriptionTransfersDocument } from '../gql/operations-types'

export function useGetInscriptionTransfers(trxHash?: string) {
  const query = useQuery(
    ['get-inscriptions-transfers', trxHash],
    async () => {
      return graphqlClient.request(GetInscriptionTransfersDocument, {
        trxHash: (trxHash?.toLocaleLowerCase() as string).toLocaleLowerCase(),
      })
    },
    { enabled: !!trxHash, refetchInterval: 10_000 }
  )

  return query
}
