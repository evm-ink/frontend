import clsx from 'clsx'
import { Accept, useDropzone } from 'react-dropzone'
import { toast } from 'react-toastify'

import uploadIcon from '@/assets/icons/upload-icon.svg'

interface FileDragAndDropZoneProps {
  className?: string
  accept: Accept
  disabled?: boolean
  maxSize?: number
  maxFiles?: number
  multiple?: boolean
  mainText?: React.ReactNode
  subText?: React.ReactNode
  onFiles?: (files: File[]) => void
}

const FileDragAndDropZone = ({
  className,
  accept,
  disabled = false,
  maxSize,
  maxFiles = 1,
  multiple = false,
  onFiles,
  mainText,
  subText,
}: FileDragAndDropZoneProps): JSX.Element => {
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      accept: accept,
      maxFiles: maxFiles,
      maxSize: maxSize,
      multiple: multiple,
      onDropRejected(fileRejections) {
        toast.error(fileRejections?.[0]?.errors?.[0]?.message)
      },
      onError(err) {
        toast.error(err.message)
      },
      onDropAccepted(files) {
        onFiles?.(files)
      },
      disabled: disabled,
    })

  return (
    <div
      {...getRootProps({
        className: clsx(
          'relative min-h-[300px] flex flex-col items-center justify-center gap-5 rounded-3xl p-5',
          'w-full cursor-pointer shadow-sm hover:shadow-md duration-100 bg-[rgba(225,226,226,0.5)] dark:bg-zinc-700 border-dashed border-2 border-gray-500',
          {
            'bg-blue-100 dark:!bg-blue-400 !border-2 !border-[#2196f3]':
              isFocused,
          },
          {
            'bg-green-100 dark:!bg-green-400 !border-2 !border-[#00e676]':
              isDragAccept,
          },
          {
            'bg-red-100 dark:!bg-red-400 !border-2 !border-[#ff1744]':
              isDragReject,
          },
          { '!cursor-not-allowed': disabled },
          className
        ),
      })}
    >
      <input {...getInputProps()} />
      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
        <img src={uploadIcon} alt="" />
      </div>
      <div className="">
        <div>{mainText}</div>
        <div>{subText}</div>
      </div>
    </div>
  )
}

export default FileDragAndDropZone
