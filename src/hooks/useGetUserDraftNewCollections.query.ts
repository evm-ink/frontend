import { useQuery } from '@tanstack/react-query'

import { graphqlClient } from '../lib/gqlClient'
import { GetNewCollectionsDocument } from '../gql/operations-types'
import { createCollectionStatusMapping } from '@/schemas/createCollectionStatus'

export function useGetUserDraftNewCollections(creator?: string) {
  const query = useQuery(
    ['user-draft-new-collections', creator],
    async () => {
      return graphqlClient.request(GetNewCollectionsDocument, {
        where: {
          ...(creator && { creator: { _eq: creator?.toLocaleLowerCase() } }),
          status: {
            _nin: [
              createCollectionStatusMapping.complete,
              createCollectionStatusMapping.error,
            ],
          },
        },
      })
    },
    { enabled: !!creator }
  )

  return query
}
