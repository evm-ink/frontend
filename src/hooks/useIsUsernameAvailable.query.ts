import { useQuery } from '@tanstack/react-query'
import { graphqlClient } from '../lib/gqlClient'

export function useIsUsernameAvailableQuery(username: string) {
  const query = useQuery(
    ['is-username-available', username],
    async () => {
      return graphqlClient.request('', { username })
    },
    {
      enabled: !!username,
      staleTime: 0,
      cacheTime: 0,
    }
  )

  return query
}
