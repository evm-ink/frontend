import { useMutation } from '@tanstack/react-query'

import {
  UpdateNewCollectionsByIdDocument,
  UpdateNewCollectionsByIdMutationVariables,
} from '@/gql/operations-types'
import { graphqlClient } from '@/lib/gqlClient'
import { useGetTokenFromCookies } from './auth/useGetTokenFromCookies'

export function useUpdateNewCollectionMutation() {
  const token = useGetTokenFromCookies()

  const mutation = useMutation({
    mutationFn: async ({
      id,
      max_claim,
      price,
    }: UpdateNewCollectionsByIdMutationVariables) => {
      return graphqlClient.request(
        UpdateNewCollectionsByIdDocument,
        {
          id,
          max_claim,
          price,
        },
        { ...(token && { Authorization: `Bearer ${token}` }) }
      )
    },
  })

  return mutation
}
