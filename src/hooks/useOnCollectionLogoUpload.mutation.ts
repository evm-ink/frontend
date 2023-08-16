import { useMutation } from '@tanstack/react-query'

import { graphqlClient } from '../lib/gqlClient'
import { useGetTokenFromCookies } from './auth/useGetTokenFromCookies'
import { OnCollectionLogoUploadDocument } from '../gql/operations-types'

export function useOnCollectionUploadLogoMutation() {
  const token = useGetTokenFromCookies()

  const mutation = useMutation({
    mutationFn: async (slug: string) => {
      return graphqlClient.request(
        OnCollectionLogoUploadDocument,
        { slug },
        { ...(token && { Authorization: `Bearer ${token}` }) }
      )
    },
  })

  return mutation
}
