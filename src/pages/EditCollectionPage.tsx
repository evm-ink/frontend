import { useMemo } from 'react'
import clsx from 'clsx'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import {
  FaTwitter,
  FaGlobeAmericas,
  FaInstagram,
  FaDiscord,
} from 'react-icons/fa'

import TextInput from '@/components/common/TextInput'
import SocialInput from '@/components/common/SocialInput'
import TextArea from '@/components/common/TextArea'

import {
  editCollectionSchema,
  EditCollectionSchema,
} from '@/schemas/editCollectionSchema'

interface CreateCollectionPageProps {
  className?: string
}

const CreateCollectionPage = ({
  className,
}: CreateCollectionPageProps): JSX.Element => {
  const initialValues: EditCollectionSchema = useMemo(() => {
    return {
      description: '',
      name: '',
      discordUsername: '',
      externalUrl: '',
      instagramUsername: '',
      mediumUsername: '',
      telegramUsername: '',
      twitterUsername: '',
    }
  }, [])

  const methods = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(editCollectionSchema),
  })

  const onSubmit = (formValues: unknown) => {
    console.log(formValues)
  }

  return (
    <div className={clsx('w-full max-w-screen-sm mx-auto my-10', className)}>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <h4 className="text-2xl font-bold py-2">Details</h4>
          <TextInput
            label="Collection Name"
            name="name"
            placeholder="eg. doodle, metaVerse"
          />
          <ReactTooltip
            id={`name-tooltip`}
            place="right"
            content="Hello world! I'm a Tooltip"
          />
          <TextArea
            placeholder="Collection Description..."
            label="Collection Description"
            name="description"
            characterLimit={1000}
          />
          <ReactTooltip
            id={`description-tooltip`}
            place="right"
            content="Hello world! I'm a Tooltip"
          />
          <div className="border-b-2 border-gray-200 dark:border-b-slate-700 pt-5 pb-4" />
          <h4 className="text-2xl font-bold py-2">Socials</h4>
          <div className="grid grid-cols-1 gap-4">
            <SocialInput
              className="w-full"
              label="Your Website"
              prefix="https://"
              name="externalUrl"
              placeholder={window.location.host}
              optional
              suffixElement={<FaGlobeAmericas />}
            />
            <SocialInput
              className="w-full"
              label="Twitter"
              prefix="https://twitter.com/"
              name="twitterUsername"
              placeholder="@username"
              optional
              suffixElement={<FaTwitter />}
            />
            <SocialInput
              className="w-full"
              label="Instagram"
              prefix="https://instagram.com/"
              name="instagramUsername"
              placeholder="@username"
              optional
              suffixElement={<FaInstagram />}
            />
            <SocialInput
              className="w-full"
              label="Discord"
              prefix="https://discordapp.com/users/"
              name="discordUsername"
              placeholder="@username"
              optional
              suffixElement={<FaDiscord />}
            />
            <SocialInput
              className="w-full"
              label="Nostr"
              prefix=""
              name="nostrUsername"
              placeholder="@username"
              optional
            />
          </div>
          <button
            type="submit"
            className="mt-10 border-2 border-black dark:border-white dark:text-white rounded py-2 px-5 font-bold text-lg duration-150 hover:shadow-md"
          >
            Update Collection Details ↗
          </button>
        </form>
      </FormProvider>
    </div>
  )
}

export default CreateCollectionPage
