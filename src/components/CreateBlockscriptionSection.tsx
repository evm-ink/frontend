import { useCallback, useEffect, useState } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { useDropzone } from 'react-dropzone'
import { toast } from 'react-toastify'
import { prepareSendTransaction, sendTransaction } from '@wagmi/core'
import { parseEther } from 'viem'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

import ConfirmationsProgressElement from './ConfirmationsProgressElement'
import SmartContentRenderer from './SmartContentRenderer'
import CreateBlockscriptionTabs from './CreateBlockscriptionTabs'
import InscribeTextModal from './modals/InscribeTextModal'
import InscribeTokenModal from './modals/InscribeTokenModal'

import { useGetInscriptionByTrxHash } from '@/hooks/useGetInscriptionByTrxHash.query'

import { getBase64FromFile } from '@/utils/getBase64StringFromFile'
import { hexEncode } from '@/utils/hexEncode'
import { chains } from '@/utils/rainbowkit'
import { getPlatformNamePrefix } from '@/utils/getPlatformNamePrefix'

import uploadIcon from '@/assets/icons/upload-icon.svg'

const CreateBlockscriptionSection = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [dataUrl, setDataUrl] = useState<string>()
  const [txHash, setTxHash] = useState<string>()
  const [currentTab, setCurrentTab] = useState('files')
  const [isTextModalOpen, setIsTextModalOpen] = useState(false)
  const [isTokenModalOpen, setIsTokenModalOpen] = useState(false)
  const [auxilliaryFile, setAuxilliaryFile] = useState<File | null>(null)

  const { address, isConnected } = useAccount()

  const { data } = useGetInscriptionByTrxHash(txHash as string)

  const { getRootProps, getInputProps, open, acceptedFiles, inputRef } =
    useDropzone({
      noClick: true,
      noKeyboard: true,
      accept: {
        'image/jpeg': ['.jpeg', '.jpg'],
        'image/gif': ['.gif'],
        'image/png': ['.png'],
        'image/svg': ['.svg'],
        'image/svg+xml': ['.svg'],
        'text/html': ['.html', '.htm'],
        'video/mp4': ['.mp4'],
        'video/webm': ['.webm'],
        'audio/wav': ['.wav'],
        'audio/mp3': ['.mp3'],
      },
      maxFiles: 1,
      maxSize: 98 * 1_000, // 98KB
      multiple: false,
      onDropRejected(fileRejections) {
        toast.error(fileRejections?.[0]?.errors?.[0]?.message)
      },
      onError(err) {
        toast.error(err.message)
      },
      disabled: isLoading || !isConnected,
    })

  const resetAcceptedFiles = useCallback(() => {
    acceptedFiles.length = 0
    acceptedFiles.splice(0, acceptedFiles.length)
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }, [acceptedFiles, inputRef])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;(async () => {
      if ((!acceptedFiles.length && !auxilliaryFile) || isLoading) return

      setIsLoading(true)

      const file = acceptedFiles[0] || auxilliaryFile

      try {
        const base64String = await getBase64FromFile(file)
        if (!base64String) throw new Error('Base64 string not found')
        setDataUrl(base64String as string)

        const hexString = hexEncode(base64String as string)
        if (!hexString) throw new Error('Hex string not found')

        try {
          if (!address || !isConnected) throw new Error('Wallet not connected!')

          const request = await prepareSendTransaction({
            to: address,
            value: parseEther('0'),
            data: hexString as '0x${string}',
          })
          const { hash } = await sendTransaction(request)

          setTxHash(hash)
          toast.success(
            `${getPlatformNamePrefix()}scription created successfully`
          )
          resetAcceptedFiles()
          setAuxilliaryFile(null)

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          toast.error(error?.message?.split('.')?.[0] ?? 'Something went wrong')
          resetAcceptedFiles()
          setAuxilliaryFile(null)
          setDataUrl(undefined)
          setTxHash(undefined)
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        toast.error(error?.message ?? 'Something went wrong')
        resetAcceptedFiles()
        setAuxilliaryFile(null)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [
    acceptedFiles,
    auxilliaryFile,
    address,
    isConnected,
    inputRef,
    isLoading,
    resetAcceptedFiles,
  ])

  return (
    <section className="w-full flex flex-col items-center justify-center gap-20 py-28">
      <h1 className="text-6xl font-extrabold text-black dark:text-white">
        Create {getPlatformNamePrefix()}scription
      </h1>
      <div>
        <CreateBlockscriptionTabs
          className="mb-5"
          currentTab={currentTab}
          onTabClick={(tab) => {
            if (isLoading) return

            if (tab === 'files') {
              setCurrentTab('files')
            } else if (tab === 'text') {
              setIsTextModalOpen(true)
            } else if (tab === 'token') {
              setIsTokenModalOpen(true)
            }
          }}
        />
        <div className="w-full flex flex-nowrap items-center justify-center gap-4">
          <div
            className={clsx(
              ' max-w-[850px] min-h-[300px] flex flex-col items-center justify-center gap-5 rounded-[32px] p-5 bg-[rgba(225,226,226,0.5)] dark:bg-zinc-700',
              dataUrl ? 'w-1/3' : 'w-full'
            )}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <img src={uploadIcon} alt="" />
            </div>
            <div className="">
              <h4 className="text-lg font-bold text-center dark:text-white">
                Drag and drop to upload your inscription
              </h4>
              <p className="text-center dark:text-gray-300">
                Supports JPEG, JPG, GIF, PNG, SVG, MP4, WEBM, WAV, MP3, HTML
                files.{' '}
                <span className="underline font-bold italic underline-offset-4">
                  Max 96KB
                </span>
              </p>
            </div>
            {address && isConnected ? (
              <button
                type="button"
                disabled={isLoading}
                className="text-white bg-[#0E76FD] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:[#0E76FD] focus:outline-none dark:focus:ring-blue-800 disabled:bg-slate-500"
                onClick={open}
              >
                {isLoading ? 'Loading...' : 'Select File'}
              </button>
            ) : (
              <ConnectButton />
            )}
          </div>
          {dataUrl ? (
            <div className="w-2/3 max-w-[650px] min-h-[300px] flex items-center justify-start gap-5 rounded-[32px] p-8 bg-[rgba(225,226,226,0.5)] dark:bg-zinc-700">
              <div className="w-2/5">
                {dataUrl ? (
                  <SmartContentRenderer url={dataUrl} mimeType="" />
                ) : null}
              </div>
              {txHash ? (
                <div className="w-3/5 h-full min-h-[225px] flex flex-col gap-5 items-start justify-between">
                  <div className="w-full flex flex-col gap-2">
                    <ConfirmationsProgressElement trxHash={txHash as string} />
                  </div>
                  <div className="flex flex-col gap-5">
                    <a
                      className="flex items-center justify-center border-black border-2 px-5 py-1 h-11 rounded font-bold text-lg"
                      href={`${chains[0].blockExplorers.etherscan.url}/tx/${txHash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Explorer ↗
                    </a>

                    {data?.inscriptions?.length ? (
                      <Link
                        className="flex items-center justify-center border-black border-2 px-5 py-1 h-11 rounded font-bold text-lg"
                        to={`/${getPlatformNamePrefix().toLocaleLowerCase()}-scriptions/${txHash}`}
                      >
                        View {getPlatformNamePrefix()}scription ↗
                      </Link>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
      <InscribeTextModal
        isOpen={isTextModalOpen}
        onCloseModal={() => setIsTextModalOpen(false)}
        onNextClick={(file) => {
          setIsTextModalOpen(false)

          resetAcceptedFiles()
          setAuxilliaryFile(file)
        }}
      />
      <InscribeTokenModal
        isOpen={isTokenModalOpen}
        onCloseModal={() => setIsTokenModalOpen(false)}
        onNextClick={() => {
          setIsTokenModalOpen(false)
        }}
      />
    </section>
  )
}

export default CreateBlockscriptionSection
