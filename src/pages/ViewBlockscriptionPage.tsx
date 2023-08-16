import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import dayjs from 'dayjs'
import { isAddress, isAddressEqual, parseEther } from 'viem'
import { useAccount } from 'wagmi'
import { toast } from 'react-toastify'
import { prepareSendTransaction, sendTransaction } from 'wagmi/actions'
import { Helmet } from 'react-helmet-async'
import clsx from 'clsx'
import { useClipboard } from 'use-clipboard-copy'
import { LuClipboardCopy, LuClipboardCheck } from 'react-icons/lu'
import { RiFullscreenLine } from 'react-icons/ri'
import { TbListDetails } from 'react-icons/tb'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'

import ConfirmationsProgressElement from '@/components/ConfirmationsProgressElement'
import SmartContentRenderer from '@/components/SmartContentRenderer'

import Spinner from '@/components/Spinner'

import { useGetInscriptionByTrxHash } from '@/hooks/useGetInscriptionByTrxHash.query'
import { useGetInscriptionTransfers } from '@/hooks/useGetInscriptionTransfers.query'
import { useGetInscriptionTraits } from '@/hooks/useGetInscriptionTraits.query'

import { truncateAddress } from '@/utils/truncateAddress'
import { chains } from '@/utils/rainbowkit'
import { getPlatformNamePrefix } from '@/utils/getPlatformNamePrefix'
import { getRelativeTime } from '@/utils/getRelativeTime'
// import { getDataTypeFromDataUrl } from '../utils/getDataTypeFromDataUrl'
// import { getMimeTypeFromDataUrl } from '../utils/getMimeTypeFromDataUrl'
// import { formatBytes } from '../utils/formatBytes'

// import { ReactComponent as NotFoundSVG } from '@/assets/404.svg'
import notFoundImage from '@/assets/404.png'

const ViewBlockscriptionPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [txHash, setTxHash] = useState<string>()
  const [showTraits, setShowTraits] = useState(false)

  const { trxHash } = useParams()
  const { address, isConnected } = useAccount()
  const { copied, copy } = useClipboard({
    copiedTimeout: 2000,
    onSuccess() {
      toast.success('Copied URL to clipboard')
    },
  })

  const { data, isLoading: isInscriptionLoading } = useGetInscriptionByTrxHash(
    trxHash ?? ''
  )
  const inscription = data?.inscriptions?.[0]
  const { data: inscriptionTraitsData } = useGetInscriptionTraits({
    trxHash: trxHash ?? '',
  })
  const { data: blockscriptionTransfers } = useGetInscriptionTransfers(
    inscription?.trx_hash
  )

  const regex = /^data:([a-zA-Z0-9]+\/[a-zA-Z0-9]+)/
  const mimeTypeMatch = inscription?.content_uri.match(regex)?.[1]

  const handleTransfer = async (transferAddress: string) => {
    setIsLoading(true)
    try {
      if (!isAddress(transferAddress)) return toast.error('Invalid address')

      if (address && isConnected && transferAddress && trxHash) {
        const request = await prepareSendTransaction({
          to: transferAddress,
          value: parseEther('0'),
          data: trxHash as '0x${string}',
        })
        const { hash } = await sendTransaction(request)
        setTxHash(hash)

        toast.success(
          `${getPlatformNamePrefix()}scription transferred successfully`
        )
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.message?.split('.')?.[0] ?? 'Something went wrong')
      setTxHash(undefined)
    } finally {
      setIsLoading(false)
    }
  }

  if (isInscriptionLoading) {
    return (
      <main className="flex flex-row mt-10 gap-10 flex-wrap lg:flex-nowrap items-center justify-center min-h-[90vh]">
        <Spinner />
      </main>
    )
  }

  if (!isInscriptionLoading && data?.inscriptions?.length === 0 && trxHash) {
    return (
      <main className="container mx-auto flex flex-col gap-4 items-center justify-center min-h-[80vh]">
        {/* <NotFoundSVG className="w-1/2 h-auto" /> */}
        <img className="w-1/3 h-auto mb-10" src={notFoundImage} alt="" />
        <div className="text-center text-neutral-800 dark:text-neutral-100 text-[64px] font-extrabold leading-[69px]">
          Content you are searching <br />
          for is not found
        </div>
        <h1 className="dark:text-neutral-300 text-3xl font-bold">
          <Link to={'/'}>
            <span className="underline underline-offset-4 hover:text-blue-700">
              Return to home page
            </span>
          </Link>
        </h1>
        {/* <ConfirmationsProgressElement trxHash={trxHash} /> */}
      </main>
    )
  }

  return (
    <main className="min-h-[calc(65vh)] flex flex-col gap-5 items-center justify-center my-20">
      <Helmet>
        <title>View {getPlatformNamePrefix()}scription</title>
      </Helmet>
      <div className="flex flex-col gap-3 items-center justify-center mb-7">
        {/* <h1 className="text-6xl font-extrabold text-[#202025]">
          {getPlatformNamePrefix()}scription
        </h1> */}
        {/* <p className="font-bold leading-9 flex gap-2">
          Created at{' '}
          {dayjs(inscription?.created_at).format(
            'DD MMM YYYY hh:mm A'
          )}
          <span className="text-slate-400 font-normal">
            {getRelativeTime(inscription?.created_at)}
          </span>
        </p> */}
      </div>
      <div className="min-h-[300px] w-full max-w-screen-xl rounded-[32px] p-8 gap-5 flex flex-wrap lg:flex-nowrap bg-[rgba(225,226,226,0.5)] dark:bg-zinc-700">
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          <div className="w-full aspect-square object-cover rounded-2xl border">
            <SmartContentRenderer
              url={inscription?.content_uri ?? ''}
              mimeType={inscription?.mtype ?? ''}
            />
          </div>
          <div className="flex gap-6 items-center justify-end px-4 dark:text-white">
            <button
              onClick={() => {
                if (copied) return

                copy(window.location.href)
              }}
            >
              {copied ? (
                <LuClipboardCheck
                  className="font-bold text-green-500"
                  size={24}
                />
              ) : (
                <LuClipboardCopy className="font-bold" size={24} />
              )}
            </button>
            {mimeTypeMatch === 'text/html' ? (
              <button
                onClick={() => {
                  const win = window.open('', '_blank')
                  win?.document?.write(
                    `<html><head><meta charset="UTF-8"><link rel="icon" type="image/png" href="${
                      window.location.origin
                    }/favicon.png"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Preview ${getPlatformNamePrefix()}scription</title></head><style>body{margin:0;}iframe{display:block;background:#fff;border:none;height:100vh;width:100vw;}</style><iframe src="${
                      inscription?.content_uri
                    }" scrolling="no"></iframe></html>`
                  )
                  win?.document?.close()
                }}
              >
                <RiFullscreenLine className="font-bold" size={24} />
              </button>
            ) : null}
          </div>
          {inscriptionTraitsData?.inscription_traits?.length ? (
            <div className="flex flex-col gap-1">
              <div
                className="py-2 flex border-b-2 border-b-gray-300 dark:border-b-slate-700 items-center gap-2 justify-between cursor-pointer"
                onClick={() => setShowTraits((prevState) => !prevState)}
              >
                <h4 className="font-bold text-xl flex items-center gap-2">
                  <TbListDetails /> Traits
                </h4>
                <div className="px-4">
                  {showTraits ? (
                    <FaCaretUp size={18} />
                  ) : (
                    <FaCaretDown size={18} />
                  )}
                </div>
              </div>
              <div
                className={clsx(
                  'flex flex-wrap gap-1',
                  showTraits ? 'visible' : 'hidden'
                )}
              >
                {inscriptionTraitsData?.inscription_traits?.map((trait, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 hover:bg-white border-2 border-gray-200 rounded-lg grow w-fit h-fit flex flex-col items-center justify-center shadow-sm p-2 text-gray-500 text-sm gap-1"
                  >
                    <h4 className="font-medium">{trait.trait_type}</h4>
                    <h4 className="font-semibold text-black">
                      {trait.trait_value}
                    </h4>
                    <p className="text-normal">
                      {trait.trait_percent}% have this trait
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
        <div className="flex flex-col justify-between w-full lg:w-2/3 gap-10">
          <div className="w-full flex flex-col gap-1">
            <div className="h-12 w-full bg-white dark:bg-zinc-800 dark:text-slate-100 flex items-center py-1 px-3 rounded">
              <Link
                to={`/address/${inscription?.creator_address}`}
                className="w-full"
              >
                <h1 className="text-base font-bold hover:underline hover:underline-offset-4 truncate">
                  Created By: {inscription?.creator_address as string}
                </h1>
              </Link>
            </div>
            <div className="h-12 w-full bg-white dark:bg-zinc-800 dark:text-slate-100 flex items-center py-1 px-3 rounded">
              <Link
                to={`/address/${inscription?.owner_address}`}
                className="w-full"
              >
                <h1 className="text-base font-bold hover:underline hover:underline-offset-4 truncate">
                  Owned By: {inscription?.owner_address as string}
                </h1>
              </Link>
            </div>
            <div
              className={clsx(
                'h-12 w-full bg-white dark:bg-zinc-800 dark:text-slate-100 flex items-center py-1 px-3 rounded',
                !inscription?.confirmed && 'flex-col !items-start !h-fit pb-2'
              )}
            >
              <h1 className={clsx('text-base font-bold')}>
                Status:{' '}
                {isLoading ? (
                  <span className={clsx('text-[#3863e4]')}>
                    Transferring...
                  </span>
                ) : (
                  <span
                    className={clsx(
                      inscription?.confirmed
                        ? 'text-[rgba(32,205,91,1)]'
                        : 'text-[rgba(240,185,11,1)]'
                    )}
                  >
                    {inscription?.confirmed ? 'Confirmed' : 'Unconfirmed'}
                  </span>
                )}
              </h1>
              {inscription?.confirmed ? null : (
                <ConfirmationsProgressElement
                  trxHash={inscription?.trx_hash ?? ''}
                />
              )}
            </div>
            {/* <div className="h-12 w-full bg-white flex items-center py-1 px-3 rounded">
              <h1 className="text-base font-bold truncate">
                File Type:{' '}
                <span className="uppercase">
                  {getDataTypeFromDataUrl(inscription?.content_uri ?? '')}{' '}
                </span>
                <span className="text-slate-400 font-normal">
                  {getMimeTypeFromDataUrl(inscription?.content_uri ?? '')}
                </span>
              </h1>
            </div>
            <div className="h-12 w-full bg-white flex items-center py-1 px-3 rounded">
              <h1 className="text-base font-bold truncate">
                File Size:{' '}
                {formatBytes(new Blob([inscription?.content_uri ?? '']).size)}
              </h1>
            </div> */}
            <div className="h-12 w-full bg-white dark:bg-zinc-800 dark:text-slate-100 flex items-center py-1 px-3 rounded gap-2">
              <h1 className="text-base font-bold truncate">
                Created:{' '}
                {dayjs(inscription?.created_at).format('DD MMM YYYY hh:mm A')}
              </h1>
              <span className="text-slate-400 font-normal">
                {getRelativeTime(inscription?.created_at)}
              </span>
            </div>
            {/* <div className="h-12 w-full bg-white flex items-center py-1 px-3 rounded">
              <h1 className="text-base font-bold truncate">
                ID: {inscription?.position}
              </h1>
            </div>
            <div className="h-12 w-full bg-white flex items-center py-1 px-3 rounded">
              <h1 className="text-base font-bold truncate">
                Creation Block: {inscription?.block_number}
              </h1>
            </div>
            <div className="h-12 w-full bg-white flex items-center py-1 px-3 rounded">
              <h1 className="text-base font-bold truncate">
                Creation Transaction: {inscription?.trx_hash}
              </h1>
            </div>
            <div className="h-12 w-full bg-white flex items-center py-1 px-3 rounded">
              <h1 className="text-base font-bold truncate">
                Creation Fee: [[TODO]] {chains[0].nativeCurrency.symbol}
              </h1>
            </div> */}
          </div>
          <div className="">
            <a
              className="flex items-center justify-center border-black dark:border-white border-2 px-5 py-1 h-11 rounded font-bold text-lg w-fit dark:text-white"
              href={`${chains[0].blockExplorers.etherscan.url}/tx/${trxHash}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Explorer ↗
            </a>
          </div>
        </div>
      </div>
      {inscription?.owner_address &&
      address &&
      isAddressEqual(
        inscription?.owner_address as '0x${string}',
        address as '0x${string}'
      ) ? (
        <div className="min-h-[100px] w-full xl:max-w-[900px] rounded-[32px] p-8 gap-5 bg-[rgba(225,226,226,0.5)] dark:bg-zinc-700">
          <div>
            <form
              className="flex flex-row gap-3 items-center"
              onSubmit={(e) => {
                e.preventDefault()
                const transferAddress = (
                  e.currentTarget.elements.namedItem('transferAddress') as {
                    value: string
                  }
                )?.value

                handleTransfer(transferAddress)
              }}
            >
              <input
                name="transferAddress"
                type="text"
                className="border-2 border-gray-300 w-2/3 px-4 h-12 rounded"
                placeholder="Enter transfer address"
                required
                disabled={Boolean(txHash) || !inscription?.confirmed}
              />
              <button
                disabled={
                  isLoading || Boolean(txHash) || !inscription?.confirmed
                }
                type="submit"
                className="h-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-3 py-2.5 focus:outline-none  disabled:bg-slate-500 w-1/3 disabled:hover:bg-slate-500 disabled:cursor-not-allowed"
              >
                {isLoading
                  ? 'Loading...'
                  : `Transfer ${getPlatformNamePrefix()}scription`}
              </button>
            </form>
            {txHash ? (
              <ConfirmationsProgressElement
                trxHash={txHash}
                textColor="#f7fbfa"
              />
            ) : null}
          </div>
        </div>
      ) : null}

      {blockscriptionTransfers?.inscription_transfers?.length ? (
        <div className="min-h-[100px] w-full xl:max-w-[900px] rounded-[32px] p-6 xl:p-8 gap-5 bg-[rgba(225,226,226,0.5)] dark:bg-zinc-700 lg:overflow-x-hidden overflow-x-scroll">
          <table className="w-full text-left text-base">
            <thead>
              <tr className="border-b border-[#202025] text-slate-800">
                {/* <td className="whitespace-nowrap px-4 py-6 font-medium">
                  <h1 className="">Type</h1>
                </td> */}
                <td className="whitespace-nowrap px-2 xl:px-4 py-3 xl:py-6 font-medium">
                  <h1 className="">Transferred at</h1>
                </td>
                <td className="whitespace-nowrap px-2 xl:px-4 py-3 xl:py-6 font-medium">
                  <h1 className="">From Address</h1>
                </td>
                <td className="whitespace-nowrap px-2 xl:px-4 py-3 xl:py-6 font-medium">
                  <h1 className="">To Address</h1>
                </td>
                <td className="whitespace-nowrap px-2 xl:px-4 py-3 xl:py-6 font-medium">
                  <h1 className="">Status</h1>
                </td>
                <td className="whitespace-nowrap px-2 xl:px-4 py-3 xl:py-6 font-medium">
                  <h1 className="">Explore Transaction</h1>
                </td>
              </tr>
            </thead>
            <tbody>
              {blockscriptionTransfers?.inscription_transfers?.map(
                (transfer, i) => {
                  return (
                    <tr
                      key={i}
                      className="border-b border-[#202025] hover:bg-slate-200 text-slate-700 text-base"
                    >
                      {/* <td className="whitespace-nowrap px-4 py-6 font-normal">
                        <h1 className="">
                          Transfer
                        </h1>
                      </td> */}
                      <td className="whitespace-nowrap px-2 xl:px-4 py-3 xl:py-6 font-normal">
                        <h1 className="">
                          {getRelativeTime(transfer.transferred_at)}
                        </h1>
                      </td>
                      <td className="whitespace-nowrap px-2 xl:px-4 py-3 xl:py-6 font-normal">
                        <Link
                          className="underline underline-offset-4"
                          to={`/address/${transfer.from_address}`}
                        >
                          <h1 className="">
                            {truncateAddress(transfer.from_address)}
                          </h1>
                        </Link>
                      </td>
                      <td className="whitespace-nowrap px-2 xl:px-4 py-3 xl:py-6 font-normal">
                        <Link
                          className="underline underline-offset-4"
                          to={`/address/${transfer.to_address}`}
                        >
                          <h1 className="">
                            {truncateAddress(transfer.to_address)}
                          </h1>
                        </Link>
                      </td>
                      <td
                        className="whitespace-nowrap px-2 xl:px-4 py-3 xl:py-6"
                        style={{
                          color: transfer.confirmed
                            ? 'rgba(32, 205, 91, 1)'
                            : 'rgba(240, 185, 11, 1)',
                        }}
                      >
                        <h1
                          className={`text-base font-bold ${
                            transfer.confirmed
                              ? ''
                              : ' underline underline-offset-4'
                          }`}
                        >
                          {transfer.confirmed ? 'Confirmed' : 'Pending'}
                        </h1>
                      </td>
                      <td className="whitespace-nowrap px-2 xl:px-4 py-3 xl:py-6 font-normal">
                        <a
                          className="underline underline-offset-4"
                          href={`${chains[0].blockExplorers?.default?.url}/tx/${transfer.transferring_trx}`}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <h1 className="text-base">
                            {truncateAddress(transfer.transferring_trx)}
                          </h1>
                        </a>
                      </td>
                    </tr>
                  )
                }
              )}
            </tbody>
          </table>
        </div>
      ) : null}
    </main>
  )
}

export default ViewBlockscriptionPage
