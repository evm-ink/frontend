import { CancelNewCollectionDocument } from '@/gql/operations-types'
import { graphqlClient } from '@/lib/gqlClient'
import { useMutation } from '@tanstack/react-query'
import { useGetTokenFromCookies } from './auth/useGetTokenFromCookies'

export function useCancelNewCollectionMutation() {
  const token = useGetTokenFromCookies()

  return useMutation({
    mutationFn: async (newCollectionUUID: string) => {
      return graphqlClient.request(
        CancelNewCollectionDocument,
        { newCollectionUUID },
        { ...(token && { Authorization: `Bearer ${token}` }) }
      )
    },
  })
}
