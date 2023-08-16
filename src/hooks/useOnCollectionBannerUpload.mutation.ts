import { useMutation } from '@tanstack/react-query'

import { graphqlClient } from '../lib/gqlClient'
import { useGetTokenFromCookies } from './auth/useGetTokenFromCookies'
import { OnCollectionBannerUploadDocument } from '../gql/operations-types'

export function useOnCollectionUploadBannerMutation() {
  const token = useGetTokenFromCookies()

  const mutation = useMutation({
    mutationFn: async (slug: string) => {
      return graphqlClient.request(
        OnCollectionBannerUploadDocument,
        { slug },
        { ...(token && { Authorization: `Bearer ${token}` }) }
      )
    },
  })

  return mutation
}
