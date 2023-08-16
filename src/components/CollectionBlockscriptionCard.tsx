import { Link, useNavigate } from 'react-router-dom'
import { TbClockEdit } from 'react-icons/tb'
import clsx from 'clsx'

import ClaimButton from './ClaimButton'
import SmartContentRenderer from './SmartContentRenderer'

import { useGetEnsName } from '@/hooks/useGetEnsName.query'
import { getRelativeTime } from '@/utils/getRelativeTime'
import { truncateAddress } from '@/utils/truncateAddress'
import { chains } from '@/utils/rainbowkit'
import { getPlatformNamePrefix } from '@/utils/getPlatformNamePrefix'

import inscribePlaceholder from '@/assets/inscribe-placeholder.png'

type Props = {
  contentUri: string
  name: string
  ownerAddress: string
  createdAt: string
  trxHash: string
  price: string
  collectionContractAddress: string
  mintType: string
  isClaimed?: boolean
  isAvailableToClaim?: boolean
  mimeType?: string
}

const CollectionBlockscriptionCard = ({
  contentUri,
  name,
  ownerAddress,
  createdAt,
  trxHash,
  price,
  collectionContractAddress,
  mintType,
  isClaimed = true,
  isAvailableToClaim = false,
  mimeType,
}: Props) => {
  const navigate = useNavigate()

  const { data: ownerEnsName } = useGetEnsName(ownerAddress)

  return (
    <div
      className={clsx(
        'w-full max-w-[400px] flex max-h-[600px] bg-white dark:bg-zinc-900 rounded-3xl shadow-lg dark:shadow-md shadow-gray-200 dark:shadow-zinc-800 duration-300 hover:-translate-y-1 flex-col items-center justify-between overflow-hidden dark:border-[1px] dark:border-zinc-700',
        isClaimed ? 'cursor-pointer' : 'cursor-default',
        { isClaimed: 'sepia' }
      )}
      style={{ filter: isClaimed ? 'invert(20%)' : '' }}
      onClick={() => {
        if (!isClaimed) return

        navigate(
          `/${getPlatformNamePrefix().toLocaleLowerCase()}-scriptions/${trxHash}`
        )
      }}
    >
      <div className="relative w-full">
        {isClaimed && (
          <div className="absolute top-4 right-2">
            <span className="bg-white shadow-sm z-10 text-gray-800 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-xl mr-2 border border-gray-200 justify-center gap-1">
              <TbClockEdit /> {getRelativeTime(createdAt)}
            </span>
          </div>
        )}
        {contentUri ? (
          <SmartContentRenderer
            url={contentUri ?? ''}
            mimeType={mimeType ?? ''}
          />
        ) : (
          <div className="w-full aspect-square">
            <img src={inscribePlaceholder} alt="" className="w-full h-full" />
          </div>
        )}
      </div>
      <div
        className={clsx('w-full p-4 h-full', 'flex flex-col justify-between')}
      >
        <div>
          <h4 className="text-2xl font-black mb-1 text-black dark:text-white capitalize">
            {name}
          </h4>
          {isClaimed && (
            <h4 className="text-lg font-medium mb-1 text-black dark:text-white flex items-center gap-2">
              Owner:{' '}
              <Link
                onClick={(e) => e.stopPropagation()}
                className="w-2/3 flex-shrink-0 hover:underline truncate"
                to={`/address/${ownerAddress}`}
              >
                {ownerEnsName ? ownerEnsName : truncateAddress(ownerAddress)}
              </Link>
            </h4>
          )}
        </div>
        {isClaimed && (
          <h4 className="text-md mb-3 dark:text-zinc-400">
            Txn link:{' '}
            <a
              onClick={(e) => e.stopPropagation()}
              className="hover:underline"
              href={`${chains[0].blockExplorers?.default.url}/tx/${trxHash}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              {truncateAddress(trxHash)}
            </a>
          </h4>
        )}
        <ClaimButton
          disabled={isClaimed}
          isAvailableToClaim={isAvailableToClaim}
          price={price}
          mintType={mintType}
          inscriptionTrxHash={trxHash}
          collectionContractAddress={collectionContractAddress}
        />
      </div>
    </div>
  )
}

export default CollectionBlockscriptionCard
