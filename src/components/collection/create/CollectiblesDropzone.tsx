import { useMemo, useState } from 'react'
import clsx from 'clsx'
import { IoMdCloudUpload, IoMdCloseCircleOutline } from 'react-icons/io'
import { ImCross } from 'react-icons/im'
import { FaCheck, FaInfoCircle, FaLightbulb } from 'react-icons/fa'

import FileDragAndDropZone from '@/components/common/FileDragAndDropZone'
import ProgressComponent from '@/components/ProgressComponent'
import Spinner from '@/components/Spinner'

import { axiosInstance } from '@/lib/axiosInstance'
import { useGetNewCollectionFilesInfo } from '@/hooks/useGetNewCollectionFilesInfo.query'
import { useGetNewCollectionUploadMutation } from '@/hooks/useGetNewCollectionUpload.mutation'
import { useOnNewCollectionUploadMutation } from '@/hooks/useOnNewCollectionUpload.mutation'
import { createCollectionStatusMapping } from '@/schemas/createCollectionStatus'
import { useCancelNewCollectionMutation } from '@/hooks/useCancelNewCollection.mutation'

interface CollectiblesDropzoneProps {
  className?: string
  newCollectionStatus?: string
  newCollectionProgress?: string
  onNewCollectionUUID: (uuid: string) => void
}

const CollectiblesDropzone = ({
  className,
  newCollectionStatus,
  newCollectionProgress,
  onNewCollectionUUID,
}: CollectiblesDropzoneProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const [progress, setProgress] = useState(0)
  const [newCollectionUUID, setNewCollectionUUID] = useState<string>()

  const { mutateAsync: getNewCollectionUploadMutateAsync } =
    useGetNewCollectionUploadMutation()
  const { mutateAsync: onNewCollectionUploadMutateAsync } =
    useOnNewCollectionUploadMutation()
  const { mutate: cancelNewCollection } = useCancelNewCollectionMutation()

  const { data: newCollectionFilesInfo } = useGetNewCollectionFilesInfo(
    newCollectionStatus ===
      createCollectionStatusMapping.waiting_collection_info
      ? (newCollectionUUID as string)
      : ''
  )

  const controller = useMemo(() => {
    return new AbortController()
  }, [])

  const handleFiles = async (files: File[]) => {
    setIsLoading(true)

    const file = files?.[0]

    if (!file) return setIsLoading(false)

    setFiles(files)

    try {
      const {
        new_collection_upload: { new_collection_uuid, pre_signed_url },
      } = await getNewCollectionUploadMutateAsync()

      await axiosInstance.put(pre_signed_url, file, {
        onUploadProgress(progressEvent) {
          setProgress(progressEvent?.progress ?? 0)
        },
        signal: controller.signal,
        headers: { 'Content-Type': file.type, 'x-amz-acl': 'public-read' },
        'axios-retry': { retries: 0 },
      })
      await onNewCollectionUploadMutateAsync(new_collection_uuid)
      setNewCollectionUUID(new_collection_uuid)
      onNewCollectionUUID(new_collection_uuid)
    } catch (error) {
      console.log(error)
      if (isLoading) {
        controller.abort()
      }
      setFiles([])
      setProgress(0)
      cancelNewCollection(newCollectionUUID as string)
      setNewCollectionUUID(undefined)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={clsx('flex flex-col gap-4', className)}>
      <FileDragAndDropZone
        accept={{ 'application/zip': ['.zip'] }}
        onFiles={handleFiles}
        disabled={isLoading || !!files.length}
        mainText={
          <h4 className="text-lg font-bold text-center dark:text-white">
            Upload your collectibles zip file
          </h4>
        }
      />

      {/* The progress tracking Section */}
      {files.length ? (
        <div className="flex flex-col gap-4 border p-4 rounded-3xl">
          <h1 className="text-2xl font-bold dark:text-white mb-4 pb-4 border-b-2 flex gap-2 items-center justify-between">
            {newCollectionUUID ? 'Processing' : 'Uploading'} your zip file...{' '}
            {!!newCollectionStatus &&
            newCollectionStatus ===
              createCollectionStatusMapping.waiting_collection_info ? (
              <span>Upload Successful</span>
            ) : (
              <span className="text-lg flex gap-2 items-center justify-center">
                {Math.ceil(
                  newCollectionUUID
                    ? +(newCollectionProgress ?? 0)
                    : progress * 100
                )}
                % done
                {/* <Spinner /> */}
              </span>
            )}
          </h1>
          {files.map((file, i) => (
            <div
              key={i}
              className="border w-full p-4 flex items-center gap-2 rounded-2xl shadow-sm"
            >
              <IoMdCloudUpload size={32} className="shrink-0 dark:text-white" />
              <p className="shrink-0 font-medium dark:text-white">
                {file.name}
              </p>
              <ProgressComponent
                duration={100}
                progress={Math.ceil(progress * 100)}
              />
              <p className="shrink-0 text-sm dark:text-white">
                {Math.ceil(progress * 100)}%
              </p>
              <button
                className="shrink-0 p-1"
                onClick={() => {
                  if (isLoading) {
                    controller.abort()
                  }
                  setFiles([])
                  setProgress(0)
                  setIsLoading(false)
                  cancelNewCollection(newCollectionUUID as string)
                  setNewCollectionUUID(undefined)
                }}
              >
                <IoMdCloseCircleOutline size={24} className="text-red-400" />
              </button>
            </div>
          ))}
          {newCollectionStatus ? (
            <>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 font-bold text-2xl relative">
                  {Object.values(createCollectionStatusMapping)
                    .filter(
                      (e) => e !== createCollectionStatusMapping.waiting_file
                    )
                    .includes(newCollectionStatus) ? (
                    <FaCheck className="text-green-600" />
                  ) : (
                    1
                  )}

                  {newCollectionStatus ===
                    createCollectionStatusMapping.waiting_file &&
                    newCollectionProgress !== '100' && (
                      <Spinner className="absolute !w-14 !h-14" />
                    )}
                </div>
                <div className="border w-full dark:bg-zinc-800 rounded-lg flex flex-col gap-2 p-2">
                  <h4 className="text-xl font-bold dark:text-white">
                    Waiting for your file
                  </h4>
                  <p className="dark:text-gray-300 text-sm">
                    Waiting for your file to finish uploading so that we can
                    start processing your collectibles
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 font-bold text-2xl relative">
                  {Object.values(createCollectionStatusMapping)
                    .filter(
                      (e) =>
                        e !== createCollectionStatusMapping.waiting_file &&
                        e !== createCollectionStatusMapping.checking_file
                    )
                    .includes(newCollectionStatus) ? (
                    <FaCheck className="text-green-600" />
                  ) : (
                    2
                  )}
                  {newCollectionStatus ===
                    createCollectionStatusMapping.checking_file &&
                    newCollectionProgress !== '100' && (
                      <Spinner className="absolute !w-14 !h-14" />
                    )}
                </div>
                <div className="border w-full dark:bg-zinc-800 rounded-lg flex flex-col gap-2 p-2">
                  <h4 className="text-xl font-bold dark:text-white">
                    Checking your file
                  </h4>
                  <p className="dark:text-gray-300 text-sm">
                    Checking your file for anomalies prior to starting the
                    processing of creating collectible inscriptions to prevent
                    gas wastage and preserve the users time.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 font-bold text-2xl relative">
                  {Object.values(createCollectionStatusMapping)
                    .filter(
                      (e) =>
                        e !== createCollectionStatusMapping.waiting_file &&
                        e !== createCollectionStatusMapping.checking_file &&
                        e !== createCollectionStatusMapping.processing_file
                    )
                    .includes(newCollectionStatus) ||
                  newCollectionProgress === '100' ? (
                    <FaCheck className="text-green-600" />
                  ) : (
                    3
                  )}

                  {newCollectionStatus ===
                    createCollectionStatusMapping.processing_file &&
                    newCollectionProgress !== '100' && (
                      <Spinner className="absolute !w-14 !h-14" />
                    )}
                </div>
                <div className="border w-full dark:bg-zinc-800 rounded-lg flex flex-col gap-2 p-2">
                  <h4 className="text-xl font-bold dark:text-white">
                    Processing your file
                  </h4>
                  <p className="dark:text-gray-300 text-sm">
                    Waiting for your file to finish uploading so that we can
                    start processing your collectibles
                  </p>
                </div>
              </div>
              {newCollectionStatus ===
              createCollectionStatusMapping.waiting_collection_info ? (
                <>
                  <h3 className="font-bold text-2xl dark:text-white pb-3 border-b-2 border-b-white">
                    Upload Summary
                  </h3>
                  <div className="flex flex-col gap-2 dark:text-white">
                    <div className="flex gap-2 items-center">
                      <h4 className="text-lg font-medium w-1/2">
                        Total Files Processed
                      </h4>
                      <h4 className="text-lg font-medium w-1/2">
                        Rejected Files Count
                      </h4>
                    </div>
                    <div className="flex gap-2 items-center">
                      <p className="text-md w-1/2">
                        {
                          newCollectionFilesInfo?.total_files_count?.aggregate
                            ?.count
                        }{' '}
                        Files
                      </p>
                      <p className="text-md w-1/2">
                        {
                          newCollectionFilesInfo?.rejected_files_count
                            ?.aggregate?.count
                        }{' '}
                        Files
                      </p>
                    </div>
                  </div>
                </>
              ) : null}
              {newCollectionFilesInfo?.rejected_files?.length ? (
                <div className="mb-4">
                  <h4 className="text-semibold text-xl dark:text-white pb-3 mb-4 border-b-[1px] border-b-slate-300">
                    Duplicates or Rejected Files {'>'}96KB
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    {newCollectionFilesInfo?.rejected_files?.map(
                      ({ url }, i) => (
                        <div className="relative w-full">
                          <p key={i} className="dark:text-white truncate">
                            File {i + 1} :{' '}
                            <span className="underline underline-offset-4">
                              {
                                new URL(url ?? '')?.pathname
                                  ?.split('/')
                                  ?.reverse()?.[0]
                              }
                            </span>
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              ) : null}
              {newCollectionFilesInfo?.rejected_files?.length ? (
                <div className="w-full px-4 py-2 rounded-2xl flex items-center gap-4 bg-red-600">
                  <FaInfoCircle
                    className="text-white flex-shrink-0"
                    size={48}
                  />
                  <div className="flex flex-col gap-4">
                    <p className="text-lg font-bold text-white">
                      The above displayed rejected/duplicate files have been
                      flagged for their file size & will be excluded from the
                      collection.
                    </p>
                    <button
                      className="flex items-center justify-center px-4 py-2 bg-white rounded-2xl font-semibold text-black"
                      onClick={() => {
                        if (isLoading) {
                          controller.abort()
                        }
                        setFiles([])
                        setProgress(0)
                        setIsLoading(false)
                        cancelNewCollection(newCollectionUUID as string)
                        setNewCollectionUUID(undefined)
                      }}
                    >
                      Reset Upload
                    </button>
                  </div>
                </div>
              ) : null}
              {newCollectionStatus === createCollectionStatusMapping.error && (
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 font-bold text-2xl">
                    <ImCross className="text-red-600" />
                  </div>
                  <div className="border w-full bg-red-200 rounded-lg flex flex-col gap-2 p-2">
                    <h4 className="text-xl font-bold">
                      Error occured while processing your collectibles
                    </h4>
                    <p className="text-gray-700 text-sm font-medium">
                      [Error Messages will be displayed here...]
                    </p>
                    <button className="mt-10 w-fit text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
                      Reset Upload
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : null}
        </div>
      ) : (
        <div className="w-full border border-dashed p-4 rounded-3xl flex flex-row gap-6">
          <FaLightbulb
            className="text-yellow-500 dark:text-yellow-300"
            size={48}
          />
          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-semibold dark:text-white">
              Guidelines for assets contained in your .zip file
            </h4>
            <div className="dark:text-white">
              <p className="">1) Assets must be of the following types only:</p>
              <div className="pl-4">
                <p className="dark:text-gray-300">
                  a) Images: JPEGs, GIFs, PNGs & SVGs
                </p>
                <p className="dark:text-gray-300">b) Videos: MP4s & WEBMs</p>
                <p className="dark:text-gray-300">c) Audios: WAVs & MP3s</p>
                <p className="dark:text-gray-300">d) HTML Files</p>
              </div>
            </div>
            <p className="dark:text-white">
              2) Individual assets cannot be larger than{' '}
              <span className="font-bold italic underline underline-offset-4">
                96KBs
              </span>
            </p>
            <p className="dark:text-white">
              3) Ensure no{' '}
              <span className="font-bold italic underline underline-offset-4">
                duplicate assets
              </span>{' '}
              are present in the .zip file as they will be discarded from the
              collection whilst processing.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default CollectiblesDropzone
