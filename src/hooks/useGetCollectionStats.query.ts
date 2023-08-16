import { GetCollectionStatsDocument } from '@/gql/operations-types'
import { graphqlClient } from '@/lib/gqlClient'
import { useQuery } from '@tanstack/react-query'
import { useGetTokenFromCookies } from './auth/useGetTokenFromCookies'

export function useGetCollectionStats() {
  const token = useGetTokenFromCookies()

  return useQuery({
    queryKey: ['collection-stats'],
    queryFn: async () => {
      return graphqlClient.request(
        GetCollectionStatsDocument,
        {},
        { ...(token && { Authorization: `Bearer ${token}` }) }
      )
    },
    enabled: !!token,
    refetchInterval: 1_000,
  })
}
