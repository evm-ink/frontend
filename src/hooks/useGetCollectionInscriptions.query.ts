import { useInfiniteQuery } from '@tanstack/react-query'

import { graphqlClient } from '../lib/gqlClient'
import { GetCollectionInscriptionsDocument } from '../gql/operations-types'
import { useGetTokenFromCookies } from './auth/useGetTokenFromCookies'

export function useGetCollectionInscriptions({
  slug,
  perPageCount,
}: {
  slug: string
  perPageCount: number
}) {
  const token = useGetTokenFromCookies()

  const query = useInfiniteQuery(
    ['get-collection-inscriptions', perPageCount, slug],
    async ({ pageParam = 1 }) => {
      return graphqlClient.request(
        GetCollectionInscriptionsDocument,
        {
          limit: perPageCount,
          offset: (pageParam - 1) * perPageCount,
          slug,
        },
        { ...(token && { Authorization: `Bearer ${token}` }) }
      )
    },
    {
      enabled: !!slug,
      getNextPageParam: (lastPage, allPages) =>
        lastPage?.collection_inscriptions?.length == perPageCount
          ? allPages.length + 1
          : undefined,
      refetchInterval: 3_000,
    }
  )

  return query
}
