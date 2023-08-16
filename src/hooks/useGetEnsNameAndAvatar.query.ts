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

export function useGetEnsNameAndAvatar(address: string) {
  const query = useQuery(
    ['get-ens-name-and-avatar', address],
    async () => {
      const ensName =
        (await client.getEnsName({
          address: address?.toLocaleLowerCase() as '0x${string}',
        })) ?? ''
      let ensAvatar = ''
      if (ensName) {
        ensAvatar =
          (await client.getEnsAvatar({
            name: ensName as string,
          })) ?? ''
      }

      return { ensName, ensAvatar }
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
