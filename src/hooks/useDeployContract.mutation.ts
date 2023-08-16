import { useMutation } from '@tanstack/react-query'
import { useAccount } from 'wagmi'
import { useAccountModal } from '@rainbow-me/rainbowkit'
import { getWalletClient, waitForTransaction } from '@wagmi/core'

import { abi } from '@/artifacts/collection.contract.json'
import { chains } from '@/utils/rainbowkit'

export function useDeployCollectionContractMutation() {
  const { address, isConnected } = useAccount()
  const { openAccountModal } = useAccountModal()

  const mutation = useMutation({
    mutationFn: async ({ bytecode }: { bytecode: `0x${string}` }) => {
      if (!address || !isConnected) return openAccountModal?.()

      const walletClient = await getWalletClient()

      const hash = await walletClient?.deployContract({
        abi,
        account: address,
        chain: chains[0],
        bytecode,
      })
      if (!hash) throw new Error('Hash not found')

      const result = await waitForTransaction({ confirmations: 3, hash })

      return result.transactionHash
    },
  })

  return mutation
}
