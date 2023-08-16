import { useQuery } from '@tanstack/react-query'

import { graphqlClient } from '../lib/gqlClient'
import { GetInscriptionTraitsDocument } from '../gql/operations-types'

export function useGetInscriptionTraits({ trxHash }: { trxHash: string }) {
  const query = useQuery(
    ['get-inscription-traits', trxHash],
    async () => {
      return graphqlClient.request(GetInscriptionTraitsDocument, {
        where: {
          trx_hash: { _eq: trxHash?.toLocaleLowerCase() },
        },
      })
    },
    {
      enabled: !!trxHash,
    }
  )

  return query
}
