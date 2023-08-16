import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify'

import { isFileSizeValid } from '@/utils/isFileSizeValid'
import { getBase64FromFile } from '@/utils/getBase64StringFromFile'
import { hexEncode } from '@/utils/hexEncode'

type ImageUploaderProps = {
  disabled?: boolean
  onInputClick?: () => void
  onFile: (hexString: string | null) => void
}

const ImageUploader = ({
  disabled = false,
  onFile,
  onInputClick,
}: ImageUploaderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>()

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageChange: React.ChangeEventHandler<HTMLInputElement> = async (
    e
  ) => {
    setIsLoading(true)

    const file = e.target.files?.[0]

    try {
      if (
        file
        //  && file.type.includes('image/')
      ) {
        if (!isFileSizeValid(file, 10 * 1_024 * 1_024))
          throw new Error('File to large')

        const base64String = await getBase64FromFile(file)
        if (!base64String) throw new Error('Base64 string not found')

        const hexString = hexEncode(base64String as string)
        if (!hexString) throw new Error('Hex string not found')

        onFile(hexString)
      } else {
        onFile(null)
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.message ?? 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div>
      <input
        disabled={disabled || isLoading}
        ref={fileInputRef}
        style={{ display: 'none' }}
        type="file"
        accept="image/jpeg,image/gif,image/png,video/mp4,image/svg+xml,audio/mp3,video/webm,audio/wav"
        onChange={handleImageChange}
        multiple={false}
        onClick={(e) => {
          // eslint-disable-next-line @typescript-eslint/no-extra-semi
          ;(e.target as HTMLInputElement).value = ''
          onInputClick?.()
        }}
      />
      <button
        type="button"
        disabled={disabled || isLoading}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none disabled:bg-slate-500"
        onClick={handleClick}
      >
        {disabled || isLoading ? 'Loading...' : 'Select File'}
      </button>
    </div>
  )
}

export default ImageUploader
