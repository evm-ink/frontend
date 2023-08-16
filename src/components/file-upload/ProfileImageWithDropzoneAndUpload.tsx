import clsx from 'clsx'
import { useMemo, useState } from 'react'
import { toast } from 'react-toastify'
import { FaRegEdit, FaTrash } from 'react-icons/fa'
import { BsFillImageFill } from 'react-icons/bs'

import { useFileUploadMutation } from '@/hooks/file-upload/useFileUpload.mutation'

import FileDragAndDropZone from '@/components/common/FileDragAndDropZone'
import Spinner from '../Spinner'

interface ProfileImageWithDropzoneAndUploadProps {
  className?: string
  presignedUrl?: string
  initialImageUrl?: string
  text?: string
  canEdit?: boolean
  onUploadSuccess?: () => void
}

const ProfileImageWithDropzoneAndUpload = ({
  className,
  presignedUrl,
  initialImageUrl,
  text,
  canEdit = false,
  onUploadSuccess,
}: ProfileImageWithDropzoneAndUploadProps): JSX.Element => {
  const [profileImageUrl, setProfileImageUrl] = useState(() => {
    return initialImageUrl ?? ''
  })
  const [isUploading, setIsUploading] = useState(false)
  const [progressPercentage, setProgressPercentage] = useState(0)

  const abortController = useMemo(() => {
    return new AbortController()
  }, [])

  const { mutateAsync } = useFileUploadMutation()

  const handleProfileImageFile = async (file: File) => {
    try {
      if (!presignedUrl) throw new Error('Presigned URL is missing')

      setIsUploading(true)

      const objectUrl = URL.createObjectURL(file)

      setProfileImageUrl(objectUrl)

      // TODO Handle File upload to s3
      await mutateAsync({
        presignedUrl,
        file,
        signal: abortController.signal,
        onUploadProgress(progressEvent) {
          setProgressPercentage(Math.ceil((progressEvent.progress ?? 0) * 100))
        },
      })

      toast.success('Profile image set successfully')
      onUploadSuccess?.()

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error)
      toast.error(error?.message)
      setProfileImageUrl(initialImageUrl ?? '')
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div
      className={clsx(
        'mb-10 w-[200px] bg-gray-50 dark:bg-zinc-900 overflow-hidden rounded-3xl',
        className
      )}
    >
      {profileImageUrl ? (
        <div className="group relative w-full aspect-square !max-w-[200px] overflow-hidden rounded-3xl">
          <img
            src={profileImageUrl}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null // prevents looping
              currentTarget.src =
                'https://placehold.jp/20/09090b/ffffff/200x200.png?text=Profile+Image'
            }}
            alt=""
            className="w-full h-full object-cover rounded-3xl"
          />
          {isUploading ? (
            <div className="z-50 absolute bottom-3 right-3 w-fit h-fit p-1 text-xs bg-white flex items-center justify-center gap-1 rounded-2xl font-medium">
              <Spinner className="!w-4 !h-4 !mr-0" /> {progressPercentage}%
              uploaded
            </div>
          ) : null}
          {canEdit && (
            <div className="absolute inset-0 bg-transparent group-hover:bg-gray-800 group-hover:bg-opacity-40 w-full h-full flex items-center justify-center duration-300 backdrop-blur-none group-hover:backdrop-blur-sm">
              <button
                className="invisible opacity-0 duration-300 group-hover:visible group-hover:opacity-100 flex bg-white rounded-full w-20 h-20 items-center justify-center"
                onClick={() => setProfileImageUrl('')}
              >
                {isUploading ? <FaTrash size={24} /> : <FaRegEdit size={24} />}
              </button>
            </div>
          )}
        </div>
      ) : canEdit ? (
        <FileDragAndDropZone
          className="!w-full !min-h-0 aspect-square max-w-[200px] rounded-3xl !border-solid"
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
              handleProfileImageFile(files[0])
            }
          }}
          mainText={
            <p className="text-center text-xs font-bold dark:text-white">
              {text ?? 'Upload Image'}
            </p>
          }
        />
      ) : (
        <div className="bg-gray-300 dark:bg-zinc-900 w-full aspect-square max-w-[200px] rounded-3xl border-[1px] border-gray-600 !border-solid flex items-center justify-center">
          <BsFillImageFill size={48} className="dark:text-white" />
        </div>
      )}
    </div>
  )
}

export default ProfileImageWithDropzoneAndUpload
