import { useParams } from 'react-router-dom'
import { useAccount } from 'wagmi'

import ShowENSWithFallback from './ShowENSWithFallback'
import UserBlockscriptionCardsSection from './UserBlockscriptionCardsSection'

import { getPlatformNamePrefix } from '@/utils/getPlatformNamePrefix'

const UserBlocscriptions = () => {
  const { address } = useParams()
  const { address: loggedInUserAddress } = useAccount()

  if (!address) {
    return (
      <div className="w-full flex flex-col items-center">
        <h1 className="text-center text-3xl font-semibold mt-10 mb-4 text-red-600">
          Invalid address
        </h1>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col gap-5 mb-20">
        <h1 className="text-center text-6xl font-extrabold mt-10 mb-4 dark:text-white">
          {getPlatformNamePrefix()}scriptions owned by{' '}
          {address.toLocaleLowerCase() ===
          loggedInUserAddress?.toLocaleLowerCase()
            ? 'you'
            : null}
        </h1>
        {address.toLocaleLowerCase() !==
        loggedInUserAddress?.toLocaleLowerCase() ? (
          <ShowENSWithFallback ethAddress={address as '0x${string}'} />
        ) : null}
      </div>
      <UserBlockscriptionCardsSection ownerAddress={address} />
    </div>
  )
}

export default UserBlocscriptions
