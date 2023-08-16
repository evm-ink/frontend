import { useQuery } from '@tanstack/react-query'

import { graphqlClient } from '../lib/gqlClient'
import { GetNewCollectionsDocument } from '../gql/operations-types'

export function useGetNewCollections() {
  const query = useQuery(
    ['new-collections'],
    async () => {
      return graphqlClient.request(GetNewCollectionsDocument, {})
    },
    {}
  )

  return query
}
