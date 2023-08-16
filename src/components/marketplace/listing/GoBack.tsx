import clsx from 'clsx'
import { BiArrowBack } from 'react-icons/bi'

interface GoBackProps {
  className?: string
}

const GoBack = ({ className }: GoBackProps): JSX.Element => {
  return (
    <button className={clsx('flex gap-2 p-2', className)}>
      <BiArrowBack className="dark:text-white" size={24} />
      <p className="text-black dark:text-white text-base font-semibold hover:underline hover:underline-offset-4">
        Go Back
      </p>
    </button>
  )
}

export default GoBack
