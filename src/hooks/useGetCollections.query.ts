import { useInfiniteQuery } from '@tanstack/react-query'

import { graphqlClient } from '../lib/gqlClient'
import { GetCollectionsDocument } from '../gql/operations-types'

export function useGetCollections(perPageCount: number) {
  const query = useInfiniteQuery(
    ['collections', perPageCount],
    async ({ pageParam = 1 }) => {
      return graphqlClient.request(GetCollectionsDocument, {
        limit: perPageCount,
        offset: (pageParam - 1) * perPageCount,
      })
    },
    {
      getNextPageParam: (lastPage, allPages) =>
        lastPage?.collections?.length == perPageCount
          ? allPages.length + 1
          : undefined,
    }
  )

  return query
}
