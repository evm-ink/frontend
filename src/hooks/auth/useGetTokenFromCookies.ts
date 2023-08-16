import { useCookies } from 'react-cookie'
import { useAccount } from 'wagmi'

import { getTokenKey } from '@/utils/getTokenKey'

export function useGetTokenFromCookies(): string {
  const { address } = useAccount()
  const [cookies] = useCookies([getTokenKey(address)])

  const token = cookies?.[getTokenKey(address)] ?? ''

  return token
}
