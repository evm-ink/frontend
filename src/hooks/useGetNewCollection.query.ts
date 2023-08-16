import { useQuery } from '@tanstack/react-query'

import { graphqlClient } from '../lib/gqlClient'
import { GetNewCollectionByIdDocument } from '../gql/operations-types'
import { useGetTokenFromCookies } from './auth/useGetTokenFromCookies'
import { createCollectionStatusMapping } from '@/schemas/createCollectionStatus'

export function useGetNewCollection(collectionUUID?: string) {
  const token = useGetTokenFromCookies()

  const query = useQuery(
    ['new-collection', collectionUUID, token],
    async () => {
      return graphqlClient.request(
        GetNewCollectionByIdDocument,
        {
          id: collectionUUID ?? '',
        },
        { ...(token && { Authorization: `Bearer ${token}` }) }
      )
    },
    {
      enabled: !!collectionUUID && !!token,
      refetchInterval: (data) =>
        data?.new_collections_by_pk?.status ===
        createCollectionStatusMapping.complete
          ? false
          : 2_000,
      retry: 2,
    }
  )

  return query
}
