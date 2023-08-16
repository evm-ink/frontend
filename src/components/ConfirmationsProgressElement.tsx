import { useEffect, useState } from 'react'
import { useWaitForTransaction } from 'wagmi'

import ProgressComponent from './ProgressComponent'

type Props = {
  trxHash: string
  textColor?: string
}

const ConfirmationsProgressElement = ({
  trxHash,
  textColor = '#202025',
}: Props) => {
  const CONFIRMATION_COUNT = 5
  const [currentConfirmationCount, setCurrentConfirmationCount] = useState(0)
  const [nextConfirmationCount, setNextConfirmationCount] = useState(1)

  const { data, isLoading } = useWaitForTransaction({
    hash: trxHash as '0x${string}',
    confirmations: nextConfirmationCount,
  })

  useEffect(() => {
    if (data && !isLoading) {
      setCurrentConfirmationCount(nextConfirmationCount)

      if (nextConfirmationCount < CONFIRMATION_COUNT) {
        setNextConfirmationCount((prevState) => prevState + 1)
      }
    }
  }, [data, isLoading, nextConfirmationCount])

  return (
    <div className="w-full">
      <h4 className="font-bold text-md mb-2" style={{ color: textColor }}>
        Current Confirmations:{' '}
        {currentConfirmationCount > CONFIRMATION_COUNT
          ? CONFIRMATION_COUNT
          : currentConfirmationCount}
        /{CONFIRMATION_COUNT}
      </h4>
      <ProgressComponent
        progress={Math.ceil(
          (currentConfirmationCount / CONFIRMATION_COUNT) * 100
        )}
        duration={500}
      />
    </div>
  )
}

export default ConfirmationsProgressElement
