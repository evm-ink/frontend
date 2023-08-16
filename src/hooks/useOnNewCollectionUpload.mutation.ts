import { useMutation } from '@tanstack/react-query'

import { graphqlClient } from '../lib/gqlClient'
import { useGetTokenFromCookies } from './auth/useGetTokenFromCookies'
import { OnNewCollectionUploadDocument } from '../gql/operations-types'

export function useOnNewCollectionUploadMutation() {
  const token = useGetTokenFromCookies()

  const mutation = useMutation({
    mutationFn: async (uuid: string) => {
      return graphqlClient.request(
        OnNewCollectionUploadDocument,
        { new_collection_uuid: uuid },
        { ...(token && { Authorization: `Bearer ${token}` }) }
      )
    },
  })

  return mutation
}
