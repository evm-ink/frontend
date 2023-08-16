import { useQuery } from '@tanstack/react-query'

import { graphqlClient } from '../lib/gqlClient'
import { GetInscriptionByTrxHashDocument } from '../gql/operations-types'

export function useGetInscriptionByTrxHash(trxHash: string) {
  const query = useQuery(
    ['get-inscription', trxHash],
    async () => {
      return graphqlClient.request(GetInscriptionByTrxHashDocument, {
        trxHash: trxHash?.toLocaleLowerCase(),
      })
    },
    { enabled: !!trxHash, refetchInterval: 3_000 }
  )

  return query
}
