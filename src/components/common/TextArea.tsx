import { ErrorMessage } from '@hookform/error-message'
import clsx from 'clsx'
import { useFormContext } from 'react-hook-form'
import { ImInfo } from 'react-icons/im'

interface TextAreaProps {
  className?: string
  label: string
  name: string
  placeholder: string
  characterLimit?: number
  optional?: boolean
  hasInfo?: boolean
}

const TextArea = ({
  className,
  label,
  name,
  placeholder,
  characterLimit,
  optional = false,
  hasInfo = false,
}: TextAreaProps): JSX.Element => {
  const { register, getFieldState, watch } = useFormContext()

  const { error } = getFieldState(name)

  const text = watch(name)

  return (
    <div className={clsx(className)}>
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
      <textarea
        id={name}
        rows={4}
        className={clsx(
          'block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-[rgba(236,238,239,1)] dark:bg-zinc-700 dark:text-white',
          { 'bg-red-100': !!error }
        )}
        autoComplete="off"
        placeholder={placeholder}
        {...register(name)}
      />
      {characterLimit ? (
        <p className="text-xs mt-1 text-right font-medium text-gray-500">
          {characterLimit - text.length} / {characterLimit} left
        </p>
      ) : null}
      <ErrorMessage
        name={name}
        render={({ message }) => (
          <p className="mt-1 text-sm text-red-600">{message}</p>
        )}
      />
    </div>
  )
}

export default TextArea
