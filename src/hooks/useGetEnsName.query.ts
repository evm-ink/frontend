import { useQuery } from '@tanstack/react-query'

import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const transport = http(
  `https://eth-mainnet.g.alchemy.com/v2/${import.meta.env.VITE_ALCHEMY_API_KEY}`
)

const client = createPublicClient({
  chain: mainnet,
  transport,
})

export function useGetEnsName(address: string) {
  const query = useQuery(
    ['get-ens-name', address],
    async () => {
      const name = await client.getEnsName({
        address: address?.toLocaleLowerCase() as '0x${string}',
      })

      return name
    },
    {
      enabled: !!address,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      cacheTime: 24 * 60 * 60,
      staleTime: Infinity,
    }
  )

  return query
}
