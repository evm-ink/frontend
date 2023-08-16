import { useQuery } from '@tanstack/react-query'
import { useAuth } from './auth/useAuth'

export function useProtectedRouteCheck() {
  const { login } = useAuth()

  return useQuery({
    queryKey: ['protected-auth-check'],
    queryFn: async () => {
      const { success } = await login()
      return success
    },
    initialData: null,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    cacheTime: 0,
    staleTime: 0,
  })
}
