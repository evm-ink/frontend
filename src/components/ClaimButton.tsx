import { useState } from 'react'
import { useAccount, useBalance } from 'wagmi'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import {
  prepareSendTransaction,
  sendTransaction,
  prepareWriteContract,
  writeContract,
  waitForTransaction,
} from '@wagmi/core'
import { toast } from 'react-toastify'
import { formatEther } from 'viem'
import { useParams } from 'react-router-dom'

import collectionContract from '@/artifacts/collection.contract.json'
import { getClaimArguments } from '@/utils/getClaimArguments'
import { chains } from '@/utils/rainbowkit'
import { getLazyClaimArguments } from '@/utils/getLazyClaimArguments'
import { useGetTokenFromCookies } from '@/hooks/auth/useGetTokenFromCookies'

interface Props {
  disabled?: boolean
  isAvailableToClaim?: boolean
  price: string
  mintType: string
  collectionContractAddress: string
  inscriptionTrxHash: string
}

const ClaimButton = ({
  disabled,
  isAvailableToClaim = false,
  price,
  mintType,
  collectionContractAddress,
  inscriptionTrxHash,
}: Props) => {
  const [isLoading, setIsLoading] = useState(false)

  const { collectionNameSlug } = useParams()
  const token = useGetTokenFromCookies()

  const { openConnectModal } = useConnectModal()
  const { address, isConnected } = useAccount()
  const { refetch } = useBalance({
    address: address,
    enabled: !!address && isConnected,
    formatUnits: 'wei',
  })

  const handleClick = async () => {
    setIsLoading(true)
    try {
      if (!isConnected) {
        return openConnectModal?.()
      }

      const balanceData = (await refetch()).data

      // TODO Check the user's balance is greater than claim price
      if (balanceData && BigInt(price) > (balanceData?.value ?? 0)) {
        return toast.error('Insufficient Balance')
      }

      if (mintType === 'lazymint') {
        const { lazy_claim } = await getLazyClaimArguments(
          inscriptionTrxHash,
          collectionNameSlug as string,
          token
        )

        if (!lazy_claim.calldata)
          return toast.error('The inscription has been claimed already')

        const config = await prepareSendTransaction({
          to: collectionContractAddress,
          data: `0x${lazy_claim.calldata}`,
          value: BigInt(price),
        })

        const { hash } = await sendTransaction(config)
        await waitForTransaction({ hash, confirmations: 10 })
        toast.success('Inscription claimed successfully')
        return
      }

      const { claim } = await getClaimArguments(inscriptionTrxHash)

      if (claim.claimed || !claim?.claimed)
        return toast.error('The inscription has been claimed already')

      const config = await prepareWriteContract({
        address: collectionContractAddress as '0x${string}',
        abi: collectionContract.abi,
        functionName: 'claim',
        args: [inscriptionTrxHash, claim?.signature],
        value: BigInt(price),
      })

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { hash } = await writeContract(config.request)
      await waitForTransaction({ hash, confirmations: 10 })
      toast.success('Inscription claimed successfully')

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (
        error?.message?.includes(
          'The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.'
        ) ||
        error?.message?.includes('Error: InvalidAmout()')
      ) {
        toast.error('Insufficient balance')
      } else if (error?.message?.includes('Error: UserAlreadyClaimed()')) {
        toast.error('You cannot claim anymore !')
      } else if (
        error?.message?.includes('Error: InvalidSignature()') ||
        error?.message?.includes('ECDSA: invalid signature length')
      ) {
        toast.error('Invalid Signature')
      } else if (error?.message?.includes('User rejected the request.')) {
        toast.error('User rejected the request')
      } else {
        console.log(error)
        toast.error('Something went wrong')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      type="button"
      disabled={disabled || isLoading || !isAvailableToClaim}
      className="cursor-pointer w-full  text-white font bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded-3xl text-sm px-5 py-2.5 focus:outline-none disabled:bg-slate-500 disabled:hover:bg-slate-500 disabled:cursor-not-allowed"
      onClick={(e) => {
        e.stopPropagation()
        handleClick()
      }}
    >
      {isLoading && !disabled
        ? 'Inscribing...'
        : disabled
        ? 'Inscribed'
        : `Claim for ${formatEther(BigInt(price ?? 0))}
          ${chains[0].nativeCurrency.symbol}`}
    </button>
  )
}

export default ClaimButton
