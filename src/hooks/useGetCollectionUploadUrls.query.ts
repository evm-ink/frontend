import { useQuery } from '@tanstack/react-query'
import { useGetTokenFromCookies } from './auth/useGetTokenFromCookies'
import { graphqlClient } from '@/lib/gqlClient'
import { GetCollectionUploadUrlsDocument } from '@/gql/operations-types'

export function useGetCollectionUploadUrls(slug?: string) {
  const token = useGetTokenFromCookies()

  const query = useQuery({
    queryKey: ['get-collection-upload-urls', slug, token],
    queryFn: async () => {
      return graphqlClient.request(
        GetCollectionUploadUrlsDocument,
        {
          slug: slug as string,
        },
        { ...(token && { Authorization: `Bearer ${token}` }) }
      )
    },
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    cacheTime: 4 * 60 * 1000, // 4 Mins
    enabled: !!slug && !!token,
  })

  return query
}
