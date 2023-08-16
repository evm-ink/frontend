import { useEffect } from 'react'
import clsx from 'clsx'
import { useDebounce } from 'use-debounce'
import { useFormContext } from 'react-hook-form'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { ImCheckmark, ImCross } from 'react-icons/im'

import SocialInput from './SocialInput'
import Spinner from '@/components/Spinner'
import { useIsSlugAvailable } from '@/hooks/useGetIsSlugAvailable.query'

interface SlugInputProps {
  className?: string
  name: string
}

const SlugInput = ({ className, name }: SlugInputProps): JSX.Element => {
  const { setValue, setError, clearErrors, watch } = useFormContext()

  const slug = watch(name)

  const [debouncedSlug] = useDebounce(slug, 500, {})

  const { data, isLoading } = useIsSlugAvailable({
    slug: debouncedSlug,
  })

  useEffect(() => {
    setValue('isSlugValid', false)
  }, [slug, setValue])

  useEffect(() => {
    if (!isLoading && !data) {
      return setError(
        name,
        { message: "Slug isn't available" },
        { shouldFocus: true }
      )
    } else {
      return clearErrors(name)
    }
  }, [isLoading, data, setError, clearErrors, name])

  return (
    <div className={clsx(className)}>
      <SocialInput
        className="w-full"
        label="Customized URL"
        prefix={`${window.location.origin}/collections/`}
        name="slug"
        placeholder="collection-name"
        suffixElement={
          !slug || !debouncedSlug ? null : isLoading ? (
            <Spinner className="!w-6" />
          ) : !data ? (
            <ImCross className="w-6 h-6 text-red-400" />
          ) : (
            <ImCheckmark className="w-6 h-6 text-green-400" />
          )
        }
      />
      {data && (
        <p className="dark:text-green-400 font-medium mt-2">
          Yay! Customized URL is Available 🎉
        </p>
      )}
      <ReactTooltip
        id={`slug-tooltip`}
        place="right"
        content="Hello world! I'm a Tooltip"
      />
    </div>
  )
}

export default SlugInput
