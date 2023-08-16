import { useMutation } from '@tanstack/react-query'

import { graphqlClient } from '../lib/gqlClient'

export function useEditCollectionMutation() {
  const mutation = useMutation({
    mutationFn: () => {
      return graphqlClient.request('', {})
    },
  })

  return mutation
}
