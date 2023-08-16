import { useInfiniteQuery } from '@tanstack/react-query'

import { graphqlClient } from '../lib/gqlClient'
import { GetNewCollectionFilesDocument } from '../gql/operations-types'
import { useGetTokenFromCookies } from './auth/useGetTokenFromCookies'

export function useGetNewCollectionFiles(
  collectionId: string,
  perPageCount: number
) {
  const token = useGetTokenFromCookies()

  const query = useInfiniteQuery({
    queryKey: ['get-new-collection-files', collectionId, perPageCount, token],
    queryFn: async ({ pageParam = 1 }) => {
      return graphqlClient.request(
        GetNewCollectionFilesDocument,
        {
          limit: perPageCount,
          offset: (pageParam - 1) * perPageCount,
          collectionId,
        },
        { ...(token && { Authorization: `Bearer ${token}` }) }
      )
    },
    enabled: !!collectionId && !!token,
    getNextPageParam: (lastPage, allPages) =>
      lastPage?.new_collection_files?.length == perPageCount
        ? allPages.length + 1
        : undefined,
  })

  return query
}
