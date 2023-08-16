import { useEffect } from 'react'
import clsx from 'clsx'
import { useDebounce } from 'use-debounce'
import { useFormContext } from 'react-hook-form'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { ImCheckmark, ImCross } from 'react-icons/im'

import TextInput from './TextInput'
import Spinner from '@/components/Spinner'

import { useIsTokenAvailable } from '@/hooks/useGetIsTokenAvailable.query'

interface TickInputProps {
  className?: string
  name: string
  type: 'mint' | 'deploy'
}

const TickInput = ({ className, name, type }: TickInputProps): JSX.Element => {
  const { setValue, setError, clearErrors, watch } = useFormContext()

  const tick = watch(name)

  const [debouncedTick] = useDebounce(tick, 500, {})

  const { data, isLoading } = useIsTokenAvailable({
    tick: debouncedTick,
    ...(type === 'deploy' && { where: { protocol: { _eq: 'brc-20' } } }),
  })

  useEffect(() => {
    setValue('isTickAvailable', false)
  }, [tick, setValue])

  useEffect(() => {
    if (!tick) return

    if (type === 'mint') {
      if (!isLoading && !data?.available) {
        return setError(
          name,
          { message: "Tick isn't valid or fully minted" },
          { shouldFocus: true }
        )
      } else {
        setValue('protocol', data?.token?.protocol)
        setValue(
          'limit',
          (
            BigInt(data?.token?.mint_limit ?? '') /
            BigInt(data?.token?.decimal_digits ?? 1)
          ).toString()
        )
        setValue('isTickAvailable', true)
        return clearErrors(name)
      }
    } else if (type === 'deploy') {
      if (!isLoading && !data?.available) {
        setValue('isTickAvailable', true)
        return clearErrors(name)
      } else {
        return setError(
          name,
          { message: 'Tick is already taken' },
          { shouldFocus: true }
        )
      }
    }
  }, [isLoading, data, setError, clearErrors, name, type, setValue, tick])

  return (
    <div className={clsx(className)}>
      <TextInput
        className="w-full"
        label="Tick "
        name="tick"
        placeholder="4 characters like 'abcd'..."
        suffixElement={
          !tick || !debouncedTick ? null : isLoading ? (
            <Spinner className="!w-6" />
          ) : (data?.available && type === 'mint') ||
            (!data?.available && type === 'deploy') ? (
            <ImCheckmark className="w-6 h-6 text-green-400" />
          ) : (
            <ImCross className="w-6 h-6 text-red-400" />
          )
        }
      />
      {((debouncedTick.length > 0 && data?.available && type === 'mint') ||
        (debouncedTick.length > 0 &&
          !data?.available &&
          type === 'deploy')) && (
        <p className="dark:text-green-400 font-medium mt-2">Tick is valid 🎉</p>
      )}
      <ReactTooltip
        id={`tick-tooltip`}
        place="right"
        content="Hello world! I'm a Tooltip"
      />
    </div>
  )
}

export default TickInput
