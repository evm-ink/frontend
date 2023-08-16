import { useMutation } from '@tanstack/react-query'

import { OnPublishDocument } from '@/gql/operations-types'
import { graphqlClient } from '@/lib/gqlClient'

import { useGetTokenFromCookies } from './auth/useGetTokenFromCookies'

export function useOnPublishMutation() {
  const token = useGetTokenFromCookies()

  return useMutation({
    mutationFn: async (slug: string) => {
      return graphqlClient.request(
        OnPublishDocument,
        { slug },
        { ...(token && { Authorization: `Bearer ${token}` }) }
      )
    },
  })
}
