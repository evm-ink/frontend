import { useMemo } from 'react'
import { chains } from '@/utils/rainbowkit'
import { createAvatar } from '@dicebear/core'
import { identicon } from '@dicebear/collection'

import { useGetEnsNameAndAvatar } from '@/hooks/useGetEnsNameAndAvatar.query'

type Props = {
  ethAddress: '0x${string}'
}

const ShowENSWithFallback = ({ ethAddress }: Props) => {
  const { data } = useGetEnsNameAndAvatar(ethAddress)

  const fallbackIdenticon = useMemo(() => {
    return createAvatar(identicon, {
      seed: ethAddress,
      backgroundColor: ['b6e3f4'],
      backgroundType: ['solid'],
    }).toDataUriSync()
  }, [ethAddress])

  return (
    <div className="flex justify-center">
      <a
        href={`${chains[0].blockExplorers.etherscan.url}/address/${ethAddress}`}
        className="bg-[#f1f1f1] py-3 px-5 rounded-xl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex gap-2 items-center">
          <img
            src={data?.ensAvatar || fallbackIdenticon}
            alt=""
            className="w-7 aspect-square rounded-full"
          />
          <h1 className="text-center text-base font-bold">
            {data?.ensName ? data?.ensName : ethAddress}
          </h1>
        </div>
      </a>
    </div>
  )
}

export default ShowENSWithFallback
