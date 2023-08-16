import { useQuery } from '@tanstack/react-query'

import { graphqlClient } from '../lib/gqlClient'
import { GetNewCollectionFilesInfoDocument } from '../gql/operations-types'
import { useGetTokenFromCookies } from './auth/useGetTokenFromCookies'

export function useGetNewCollectionFilesInfo(collectionId: string) {
  const token = useGetTokenFromCookies()

  const query = useQuery({
    queryKey: ['get-new-collection-files-info', collectionId, token],
    queryFn: async () => {
      return graphqlClient.request(
        GetNewCollectionFilesInfoDocument,
        { collectionId },
        { ...(token && { Authorization: `Bearer ${token}` }) }
      )
    },
    enabled: !!collectionId && !!token,
  })

  return query
}
