import { useQuery } from '@tanstack/react-query'

import { graphqlClient } from '../lib/gqlClient'
import { GetCollectionsDocument } from '../gql/operations-types'
import { useGetTokenFromCookies } from './auth/useGetTokenFromCookies'

export function useGetUserCollections(creator?: string) {
  const token = useGetTokenFromCookies()

  const query = useQuery(
    ['user-collections', creator, token],
    async () => {
      return graphqlClient.request(
        GetCollectionsDocument,
        {
          limit: 1000,
          where: {
            ...(creator && { creator: { _eq: creator?.toLocaleLowerCase() } }),
          },
        },
        { ...(token && { Authorization: `Bearer ${token}` }) }
      )
    },
    { enabled: !!creator }
  )

  return query
}
