import { useQuery } from '@tanstack/react-query'
import { graphqlClient } from '../lib/gqlClient'

export function useGetProfileQuery(address: string) {
  const query = useQuery(
    ['profile', address],
    async () => {
      return graphqlClient.request('', { accountAddress: address })
    },
    { enabled: !!address }
  )

  return query
}
