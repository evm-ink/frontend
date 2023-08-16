import { useMutation } from '@tanstack/react-query'

import { graphqlClient } from '@/lib/gqlClient'
import { useGetTokenFromCookies } from '@/hooks/auth/useGetTokenFromCookies'

export type GetPresignedUrlProps = {
  fileName: string
  fileType: string
}

export type PresignedUrlResponse = {
  objectUrl: string
  presignedUrl: string
}

export function useGetPresignedUrlMutation() {
  const token = useGetTokenFromCookies()

  const mutation = useMutation({
    mutationFn: async ({ fileName, fileType }: GetPresignedUrlProps) => {
      const response = await graphqlClient.request(
        '',
        { fileName, fileType },
        { ...(token && { Authorization: `Bearer ${token}` }) }
      )

      console.log(response)

      return {
        objectUrl: '',
        presignedUrl: '',
      }
    },
  })

  return mutation
}
