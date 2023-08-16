import { ErrorMessage } from '@hookform/error-message'
import clsx from 'clsx'
import { useFormContext } from 'react-hook-form'
import { ImInfo } from 'react-icons/im'

interface SocialInputProps {
  className?: string
  label: string
  prefix: React.ReactNode
  name: string
  placeholder?: string
  optional?: boolean
  hasInfo?: boolean
  suffixElement?: React.ReactNode
}

const SocialInput = ({
  className,
  label,
  prefix,
  name,
  placeholder,
  optional = false,
  hasInfo = false,
  suffixElement,
}: SocialInputProps): JSX.Element => {
  const { register, getFieldState } = useFormContext()

  const { error } = getFieldState(name)

  return (
    <div>
      <label
        htmlFor={name}
        className="flex gap-2 items-center justify-between mb-2 text-base font-normal text-[rgba(30,30,30,1)] dark:text-white"
      >
        <div className="flex gap-2 items-center">
          {label}{' '}
          {hasInfo && (
            <ImInfo
              data-tooltip-id={`${name}-tooltip`}
              size={16}
              className="text-gray-500"
            />
          )}
        </div>
        {optional && (
          <p className="text-gray-400 text-sm font-medium">(Optional)</p>
        )}
      </label>
      <div className={clsx('flex', className)}>
        <span className="inline-flex items-center pl-3 text-sm text-gray-900 border border-r-0 border-gray-300 rounded-l-md font-medium bg-[rgba(236,238,239,1)] dark:bg-zinc-700 dark:text-white flex-shrink-0">
          {prefix}
        </span>
        <div className="relative flex items-center w-full">
          <input
            type="text"
            id={name}
            className={clsx(
              'rounded-none rounded-r-lg border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 border-l-0 p-2.5 pl-0 bg-[rgba(236,238,239,1)] dark:bg-zinc-700 dark:text-white',
              { 'bg-red-100': !!error }
            )}
            placeholder={placeholder}
            autoComplete="off"
            {...register(name)}
          />
          <div className="absolute right-3">{suffixElement}</div>
        </div>
      </div>
      <ErrorMessage
        name={name}
        render={({ message }) => (
          <p className="mt-1 text-sm text-red-600">{message}</p>
        )}
      />
    </div>
  )
}

export default SocialInput
