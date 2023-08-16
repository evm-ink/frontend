import { useCallback } from 'react'
import { useAccount, useSignMessage } from 'wagmi'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import { toast } from 'react-toastify'
import { useCookies } from 'react-cookie'
import jwtDecode, { JwtPayload } from 'jwt-decode'

import { getNonce } from '@/utils/auth/getNonce'
import { authenticate } from '@/utils/auth/authenticate'
import { splitSignature } from '@/utils/auth/splitSignature'
import { getTokenKey } from '@/utils/getTokenKey'
import { isTokenValid } from '@/utils/auth/isTokenValid'

export function useAuth() {
  const { address, isConnected } = useAccount()
  const { signMessageAsync } = useSignMessage()
  const { openConnectModal } = useConnectModal()

  const [cookies, setCookies, removeCookies] = useCookies([
    getTokenKey(address),
  ])
  const cookieToken = cookies?.[getTokenKey(address)]

  const login = useCallback(async () => {
    try {
      if (!address || !isConnected) {
        openConnectModal?.()
        return { success: false }
      }

      if (cookieToken) {
        const tokenValid = isTokenValid(cookieToken)
        if (!tokenValid) {
          removeCookies(getTokenKey(address))
        }
        return { success: tokenValid }
      }

      const nonce = await getNonce()
      const signatureHex = await signMessageAsync({ message: nonce })
      const { sigR, sigS, sigV } = splitSignature(signatureHex)
      const token = await authenticate({
        message: nonce,
        sigR,
        sigS,
        sigV,
      })

      // Check if auth successful and proceed accordingly
      if (!token) {
        throw new Error('Failed to login')
      }

      // TODO ...
      const decoded = jwtDecode(token)
      setCookies(getTokenKey(address), token, {
        secure: true,
        expires: new Date(((decoded as JwtPayload).exp ?? 0) * 1_000),
      })
      return { success: true }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(error)

      if (!error?.message?.includes('User denied')) {
        toast.error(
          error?.message ?? error?.message?.split('.')?.[0] ?? 'Failed to login'
        )
      }
      return { success: false }
    }
  }, [
    signMessageAsync,
    address,
    isConnected,
    openConnectModal,
    cookieToken,
    setCookies,
    removeCookies,
  ])

  return { login } as const
}
