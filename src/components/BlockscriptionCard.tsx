import { Link, useNavigate } from 'react-router-dom'

import SmartContentRenderer from './SmartContentRenderer'
import { useGetEnsName } from '@/hooks/useGetEnsName.query'
import { getPlatformNamePrefix } from '@/utils/getPlatformNamePrefix'
import { truncateAddress } from '@/utils/truncateAddress'
import { getRelativeTime } from '@/utils/getRelativeTime'
import { formatBytes } from '@/utils/formatBytes'
import { getMimeTypeFromDataUrl } from '@/utils/getMimeTypeFromDataUrl'

type Props = {
  position: number
  contentUri: string
  ownerAddress: string
  creatorAddress?: string
  createdAt: string
  trxHash: string
  mimeType?: string
}

const BlockscriptionCard = ({
  position,
  contentUri,
  ownerAddress,
  // creatorAddress,
  createdAt,
  trxHash,
  mimeType,
}: Props) => {
  const navigate = useNavigate()

  const { data: ownerEnsName } = useGetEnsName(ownerAddress)
  // const { data: creatorEnsName } = useGetEnsName(creatorAddress)

  return (
    <div
      className="max-w-[400px] flex max-h-[600px] bg-white dark:bg-zinc-900 rounded-3xl shadow-lg dark:shadow-md shadow-gray-200 dark:shadow-zinc-800 duration-300 hover:-translate-y-1 flex-col gap-3 items-center justify-between cursor-pointer overflow-hidden dark:border-[1px] dark:border-zinc-700"
      onClick={() => {
        navigate(
          `/${getPlatformNamePrefix().toLocaleLowerCase()}-scriptions/${trxHash}`
        )
      }}
    >
      <h1 className="w-full text-center pt-4 text-xl xl:text-2xl font-bold text-black dark:text-white">
        {getPlatformNamePrefix().toLocaleUpperCase()}S #
        {Intl.NumberFormat('en-US').format(position)}
      </h1>
      <div className="relative w-full px-4">
        <SmartContentRenderer url={contentUri} mimeType={mimeType ?? ''} />
      </div>
      <div className="w-full px-4 flex items-center justify-between text-sm lg:text-md">
        <p className="font-medium text-black dark:text-white">
          {(
            mimeType?.split('/')[1] ||
            getMimeTypeFromDataUrl(contentUri)?.split('/')?.[1] ||
            'Text'
          ).toLocaleUpperCase()}
        </p>
        <p className="font-medium text-black  dark:text-white">
          {formatBytes(new Blob([contentUri]).size)}
        </p>
        <p className="font-medium text-black dark:text-white">
          {getRelativeTime(createdAt)}
        </p>
      </div>
      <div className="w-full px-4 pb-2">
        {/* <h4 className="text-lg font-bold mb-2 text-black flex items-center justify-between">
          Creator:{' '}
          <Link
            onClick={(e) => e.stopPropagation()}
            className="text-gray-600 hover:underline underline-offset-4"
            to={`/address/${ownerAddress}`}
          >
            {creatorEnsName ? creatorEnsName : truncateAddress(creatorAddress)}
          </Link>
        </h4> */}
        <h4 className="text-md font-bold mb-2 text-black dark:text-white flex items-center justify-between gap-2 whitespace-nowrap">
          Owned By:{' '}
          <Link
            onClick={(e) => e.stopPropagation()}
            className="text-gray-600 dark:text-gray-300 hover:underline underline-offset-4 truncate"
            to={`/address/${ownerAddress}`}
          >
            {ownerEnsName ? ownerEnsName : truncateAddress(ownerAddress)}
          </Link>
        </h4>
      </div>
    </div>
  )
}

export default BlockscriptionCard
