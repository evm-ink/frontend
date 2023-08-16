import { useMutation } from '@tanstack/react-query'
import { AxiosProgressEvent, GenericAbortSignal } from 'axios'

import { axiosInstance } from '@/lib/axiosInstance'

export type FileUploadProps = {
  presignedUrl: string
  file: File
  signal?: GenericAbortSignal
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void
}

export function useFileUploadMutation() {
  const mutation = useMutation({
    mutationFn: async ({
      presignedUrl,
      file,
      signal,
      onUploadProgress,
    }: FileUploadProps) => {
      return axiosInstance.put<void>(presignedUrl, file, {
        headers: { 'Content-Type': file.type, 'x-amz-acl': 'public-read' },
        signal: signal,
        onUploadProgress: onUploadProgress,
        'axios-retry': {
          retries: 0,
        },
      })
    },
  })

  return mutation
}
