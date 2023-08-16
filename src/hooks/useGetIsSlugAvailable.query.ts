import { useQuery } from '@tanstack/react-query'

import { graphqlClientWithSignal } from '../lib/gqlClient'
import { IsSlugAvailableDocument } from '../gql/operations-types'

export function useIsSlugAvailable({ slug }: { slug?: string }) {
  const query = useQuery({
    queryKey: ['is-slug-available', slug],
    queryFn: async ({ signal }) => {
      const result = await graphqlClientWithSignal(
        signal as AbortSignal
      ).request(IsSlugAvailableDocument, {
        slug,
      })

      if (
        result.collections?.length &&
        result.collections?.[0]?.slug === slug
      ) {
        return false
      }

      return true
    },
    enabled: !!slug,
    // refetchOnMount: false,
    // refetchOnReconnect: false,
    // refetchOnWindowFocus: false,
    // cacheTime: 0,
    // staleTime: 0,
  })

  return query
}
