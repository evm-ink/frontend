import { Navigate } from 'react-router-dom'

import { useProtectedRouteCheck } from '@/hooks/useProtectedRouteCheck'

import pendingApprovalAsset from '@/assets/pending_approval.svg'

type ProtectedRouteProps = {
  children: React.ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps): React.ReactNode => {
  const { data: hasAuth, isLoading } = useProtectedRouteCheck()

  if (isLoading || hasAuth === null)
    return (
      <div className="w-full min-h-[70vh] flex flex-col gap-10 items-center justify-center">
        <img className="w-auto lg:w-1/4" src={pendingApprovalAsset} alt="" />
        <p className="text-4xl font-bold dark:text-white text-center">
          Awaiting Signature...
        </p>
      </div>
    )

  if (hasAuth === false) {
    return <Navigate to="/" replace />
  }

  return children
}

export default ProtectedRoute
