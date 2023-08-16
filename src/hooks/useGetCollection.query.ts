import { useQuery } from '@tanstack/react-query'

import { graphqlClient } from '../lib/gqlClient'
import { GetCollectionDocument } from '../gql/operations-types'
import { useGetTokenFromCookies } from './auth/useGetTokenFromCookies'

export function useGetCollection(
  collectionSlug?: string,
  ownerAddress?: string
) {
  const token = useGetTokenFromCookies()

  const query = useQuery(
    ['collection', collectionSlug],
    async () => {
      return graphqlClient.request(
        GetCollectionDocument,
        {
          slug: collectionSlug as string,
          ...(ownerAddress && {
            ownerAddress: ownerAddress?.toLocaleLowerCase() as string,
          }),
        },
        { ...(token && { Authorization: `Bearer ${token}` }) }
      )
    },
    {
      enabled: !!collectionSlug,
      refetchInterval: 3_000,
    }
  )

  return query
}
