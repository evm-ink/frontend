import { useMutation } from '@tanstack/react-query'

import { graphqlClient } from '../lib/gqlClient'
import { useGetTokenFromCookies } from './auth/useGetTokenFromCookies'
import {
  CreateCollectionDocument,
  CreateCollectionMutationVariables,
} from '@/gql/operations-types'

export function useCreateCollectionMutation() {
  const token = useGetTokenFromCookies()

  const mutation = useMutation({
    mutationFn: (props: CreateCollectionMutationVariables) => {
      return graphqlClient.request(
        CreateCollectionDocument,
        { ...props },
        { ...(token && { Authorization: `Bearer ${token}` }) }
      )
    },
  })

  return mutation
}
