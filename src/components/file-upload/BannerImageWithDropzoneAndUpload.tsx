import clsx from 'clsx'
import { useMemo, useState } from 'react'
import { toast } from 'react-toastify'
import { FaRegEdit, FaTrash } from 'react-icons/fa'
// import { BsFillImageFill } from 'react-icons/bs'

import { useFileUploadMutation } from '@/hooks/file-upload/useFileUpload.mutation'

import FileDragAndDropZone from '@/components/common/FileDragAndDropZone'
import Spinner from '@/components/Spinner'

interface BannerImageWithDropzoneAndUploadProps {
  className?: string
  presignedUrl?: string
  initialImageUrl?: string
  text?: string
  canEdit?: boolean
  onUploadSuccess?: () => void
}

const BannerImageWithDropzoneAndUpload = ({
  className,
  presignedUrl,
  initialImageUrl,
  canEdit = false,
  onUploadSuccess,
}: BannerImageWithDropzoneAndUploadProps): JSX.Element => {
  const [bannerImageUrl, setBannerImageUrl] = useState(() => {
    return initialImageUrl ?? ''
  })
  const [isUploading, setIsUploading] = useState(false)
  const [progressPercentage, setProgressPercentage] = useState(0)

  const abortController = useMemo(() => {
    return new AbortController()
  }, [])

  const { mutateAsync } = useFileUploadMutation()

  const handleBannerImageFile = async (file: File) => {
    try {
      if (!presignedUrl) throw new Error('Presigned URL is missing')

      setIsUploading(true)

      const objectUrl = URL.createObjectURL(file)

      setBannerImageUrl(objectUrl)

      await mutateAsync({
        presignedUrl,
        file,
        signal: abortController.signal,
        onUploadProgress(progressEvent) {
          setProgressPercentage(Math.ceil((progressEvent.progress ?? 0) * 100))
        },
      })

      toast.success('Banner image set successfully')
      onUploadSuccess?.()

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error)
      toast.error(error?.message)
      setBannerImageUrl(initialImageUrl ?? '')
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div
      className={clsx(
        'w-full h-full bg-gray-50 dark:bg-zinc-900 overflow-hidden',
        className
      )}
    >
      {bannerImageUrl ? (
        <div className="group relative w-full h-full overflow-hidden ">
          <img
            src={bannerImageUrl}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null // prevents looping
              currentTarget.src =
                'https://placehold.jp/30/09090b/ffffff/1600x400.png?text=Banner+Image'
            }}
            alt=""
            className="w-full h-full object-cover"
          />
          {isUploading ? (
            <div className="z-50 absolute bottom-3 right-3 w-fit h-fit p-1 text-xs bg-white flex items-center justify-center gap-1  font-medium rounded-2xl">
              <Spinner className="!w-4 !h-4 !mr-0" /> {progressPercentage}%
              uploaded
            </div>
          ) : null}
          {canEdit && (
            <div className="absolute inset-0 bg-transparent group-hover:bg-gray-800 group-hover:bg-opacity-40 w-full h-full flex items-center justify-center duration-300 backdrop-blur-none group-hover:backdrop-blur-sm">
              <button
                className="invisible opacity-0 duration-300 group-hover:visible group-hover:opacity-100 flex bg-white rounded-full w-20 h-20 items-center justify-center"
                onClick={() => {
                  if (isUploading) {
                    abortController.abort()
                  }
                  setBannerImageUrl('')
                }}
              >
                {isUploading ? <FaTrash size={24} /> : <FaRegEdit size={24} />}
              </button>
            </div>
          )}
        </div>
      ) : canEdit ? (
        <FileDragAndDropZone
          className="!w-full !mb-0 !h-full !border-none !rounded-none"
          accept={{
            'image/jpeg': ['.jpeg', '.jpg'],
            'image/gif': ['.gif'],
            'image/png': ['.png'],
            'image/svg': ['.svg'],
            'image/svg+xml': ['.svg'],
          }}
          disabled={!canEdit}
          maxFiles={1}
          maxSize={1_000 * 1_024 * 1_024} // 1MB
          multiple={false}
          onFiles={(files) => {
            if (files?.length) {
              handleBannerImageFile(files[0])
            }
          }}
          mainText={
            <p className="text-lg font-bold text-gray-800 dark:text-white">
              Drag & drop Cover Image
            </p>
          }
          subText={<p className="text-center text-gray-500">Size 1600x400px</p>}
        />
      ) : (
        <div className="bg-gray-200 dark:bg-zinc-900 w-full h-full aspect-square flex items-center justify-center">
          {/* <BsFillImageFill size={48} className="dark:text-white" /> */}
        </div>
      )}
    </div>
  )
}

export default BannerImageWithDropzoneAndUpload
