import { useEffect } from 'react'
import clsx from 'clsx'
import { useDebounce } from 'use-debounce'
import { useFormContext } from 'react-hook-form'

import TextInput from './TextInput'

interface UsernameInputProps {
  className?: string
  name: string
}

const UsernameInput = ({
  className,
  name,
}: UsernameInputProps): JSX.Element => {
  const { setValue, setError, watch } = useFormContext()

  const username = watch(name)

  const [debouncedUsername] = useDebounce(username, 300, {})

  useEffect(() => {
    setValue('isUsernameValid', false)
  }, [username, setValue, name])

  useEffect(() => {
    if (!debouncedUsername) return

    // TODO Check if username is available or not here & set error accordingly

    setError(
      name,
      { message: "Username isn't available" },
      { shouldFocus: true }
    )
  }, [debouncedUsername, setError, name])

  return (
    <div className={clsx(className)}>
      <TextInput label="Username" name="username" placeholder="Username" />
    </div>
  )
}

export default UsernameInput
