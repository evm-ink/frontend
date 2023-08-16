import { useMutation } from '@tanstack/react-query'

import { graphqlClient } from '../lib/gqlClient'
import { GetNewCollectionUploadDocument } from '../gql/operations-types'
import { useGetTokenFromCookies } from './auth/useGetTokenFromCookies'

export function useGetNewCollectionUploadMutation() {
  const token = useGetTokenFromCookies()

  const mutation = useMutation({
    mutationFn: () => {
      return graphqlClient.request(
        GetNewCollectionUploadDocument,
        {},
        { ...(token && { Authorization: `Bearer ${token}` }) }
      )
    },
  })

  return mutation
}
