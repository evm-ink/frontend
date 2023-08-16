import clsx from 'clsx'
import { useState } from 'react'
import { Modal } from 'react-responsive-modal'
import { toast } from 'react-toastify'
import { useAccount } from 'wagmi'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import { v4 as uuidv4 } from 'uuid'

import { formatBytes } from '@/utils/formatBytes'

interface InscribeTextModalProps {
  className?: string
  isOpen: boolean
  onCloseModal: () => void
  onNextClick: (file: File) => void
}

const MAX_CONTENT_SIZE = 98 * 1_000 // 98 KB

const InscribeTextModal = ({
  className,
  isOpen,
  onCloseModal,
  onNextClick,
}: InscribeTextModalProps): JSX.Element => {
  const [text, setText] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { address, isConnected } = useAccount()
  const { openConnectModal } = useConnectModal()

  const contentSize = new Blob([text]).size ?? 0

  const handleNext = async () => {
    setIsLoading(true)
    try {
      if (!text) return toast.error('Textarea is empty')

      const blob = new Blob([text], { type: 'text/plain' })

      const file = new File([blob], `${uuidv4()}.txt`, {
        lastModified: Date.now(),
        type: 'text/plain',
      })

      onNextClick(file)
    } catch (error) {
      console.log(error)
    } finally {
      setText('')
      setIsLoading(false)
    }
  }

  return (
    <Modal
      open={isOpen}
      onClose={onCloseModal}
      center
      closeOnOverlayClick={false}
      classNames={{
        modal: 'rounded-[24px] w-full dark:bg-zinc-900',
        closeIcon: 'dark:invert',
      }}
    >
      <div
        className={clsx(
          'p-4 flex flex-col items-center justify-center gap-4',
          className
        )}
      >
        <h2 className="font-medium text-xl dark:text-white">
          Add your text below
        </h2>
        {/* <div className="text-gray-500">
          <p>If single, we will inscribe exactly what is there.</p>
          <p>If bulk, we will inscribe one for every new line.</p>
        </div> */}
        {/* <div className="w-1/2">
          <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex">
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
              <div className="flex items-center pl-3">
                <input
                  id="vue-checkbox-list"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 "
                />
                <label
                  htmlFor="vue-checkbox-list"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                >
                  Single
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
              <div className="flex items-center pl-3">
                <input
                  id="react-checkbox-list"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 "
                />
                <label
                  htmlFor="react-checkbox-list"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                >
                  Bulk
                </label>
              </div>
            </li>
          </ul>
        </div> */}
        <div className="w-full">
          {/* <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your message
          </label> */}
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            id="message"
            rows={4}
            className={clsx(
              'block mb-1 p-2.5 w-full text-md text-gray-900 dark:text-white bg-gray-50 dark:bg-zinc-800 rounded-lg border border-gray-300 ',
              contentSize > MAX_CONTENT_SIZE
                ? 'ring-red-500 border-red-500 bg-red-100 outline-none'
                : 'ring-blue-500 border-blue-500 outline-none'
            )}
            placeholder="Add your text here..."
          />
          <div className="flex justify-between">
            <p className="text-red-400 text-sm font-medium">
              {contentSize > MAX_CONTENT_SIZE && 'Content size exceeds 96KB'}
            </p>
            <p className="text-gray-400 text-sm font-medium">
              Content Size: {formatBytes(contentSize)}
            </p>
          </div>
        </div>
        {address && isConnected ? (
          <button
            type="button"
            disabled={isLoading}
            onClick={handleNext}
            className="text-white min-w-[150px] bg-[#0E76FD] hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none disabled:bg-slate-500"
          >
            {isLoading ? 'Loading...' : 'Next'}
          </button>
        ) : (
          <button
            type="button"
            onClick={openConnectModal}
            className="text-white min-w-[150px] bg-[#0E76FD] hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none disabled:bg-slate-500"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </Modal>
  )
}

export default InscribeTextModal
