import clsx from 'clsx'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import {
  FaTwitter,
  FaGlobeAmericas,
  FaInstagram,
  FaDiscord,
} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import TextInput from '@/components/common/TextInput'
import TextArea from '@/components/common/TextArea'
import SlugInput from '@/components/common/SlugInput'
import SocialInput from '@/components/common/SocialInput'
import { useCreateCollectionMutation } from '@/hooks/useCreateCollection.mutation'
import Spinner from '@/components/Spinner'
import { createCollectionStatusMapping } from '@/schemas/createCollectionStatus'

interface CollectionDetailsFormProps {
  className?: string
  newCollectionUUID?: string
  newCollectionStatus?: string
}

const collectionDetailsFormSchema = z.object({
  name: z.string().min(1).max(50),
  description: z.string().min(1).max(1000),
  slug: z.string().min(1).max(50),
  externalUrl: z.string().min(0).max(255).optional().or(z.literal('')),
  discordUsername: z.string().min(0).max(255).optional().or(z.literal('')),
  instagramUsername: z.string().min(0).max(255).optional().or(z.literal('')),
  twitterUsername: z.string().min(0).max(255).optional().or(z.literal('')),
  nostrUsername: z.string().min(0).max(255).optional().or(z.literal('')),
})

type CollectionDetailsFormValues = z.infer<typeof collectionDetailsFormSchema>

const initialValues: CollectionDetailsFormValues = {
  description: '',
  name: '',
  slug: '',
  externalUrl: '',
  discordUsername: '',
  instagramUsername: '',
  twitterUsername: '',
  nostrUsername: '',
}

const CollectionDetailsForm = ({
  className,
  newCollectionUUID,
  newCollectionStatus,
}: CollectionDetailsFormProps): JSX.Element => {
  const methods = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(collectionDetailsFormSchema),
  })

  const navigate = useNavigate()

  const { mutateAsync, isLoading, isSuccess } = useCreateCollectionMutation()

  const onSubmit = async (formValues: CollectionDetailsFormValues) => {
    try {
      const { create_collection } = await mutateAsync({
        description: formValues.description,
        name: formValues.name,
        slug: formValues.slug,
        new_collection_uuid: newCollectionUUID as string,
        discord_username: formValues.discordUsername,
        external_url: formValues.externalUrl
          ? `https://${formValues.externalUrl}`
          : formValues.externalUrl,
        instagram_username: formValues.instagramUsername,
        medium_username: formValues.nostrUsername,
        telegram_username: '',
        twitter_username: formValues.twitterUsername,
      })

      if (create_collection?.ok) {
        toast.success('Collection created successfully')
        navigate(`/preview/${formValues.slug}`, { replace: true })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={clsx(className)}>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <h4 className="text-2xl font-bold py-2 dark:text-white">Details</h4>
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
          <SlugInput name="slug" />
          <div className="border-b-2 border-gray-200 dark:border-b-slate-700 pt-5 pb-4" />
          <h4 className="text-2xl font-bold py-2 dark:text-white">Socials</h4>
          <div className="grid grid-cols-1 gap-4">
            <SocialInput
              className="w-full"
              label="Your Website"
              prefix="https://"
              name="externalUrl"
              placeholder={window.location.host}
              optional
              suffixElement={<FaGlobeAmericas className="dark:text-white" />}
            />
            <SocialInput
              className="w-full"
              label="Twitter"
              prefix="https://twitter.com/"
              name="twitterUsername"
              placeholder="@username"
              optional
              suffixElement={<FaTwitter className="dark:text-white" />}
            />
            <SocialInput
              className="w-full"
              label="Instagram"
              prefix="https://instagram.com/"
              name="instagramUsername"
              placeholder="@username"
              optional
              suffixElement={<FaInstagram className="dark:text-white" />}
            />
            <SocialInput
              className="w-full"
              label="Discord"
              prefix="https://discordapp.com/users/"
              name="discordUsername"
              placeholder="@username"
              optional
              suffixElement={<FaDiscord className="dark:text-white" />}
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
            disabled={
              isLoading ||
              (!!newCollectionStatus &&
                newCollectionStatus !== createCollectionStatusMapping.complete)
            }
            className={clsx(
              'mt-10 border-2 border-black dark:border-white dark:text-white rounded py-2 px-5 font-bold text-lg duration-150 hover:shadow-md flex items-center justify-center gap-4',
              {
                'cursor-not-allowed bg-gray-500 opacity-30':
                  isLoading ||
                  (!!newCollectionStatus &&
                    newCollectionStatus !==
                      createCollectionStatusMapping.complete),
              }
            )}
          >
            {isSuccess ? 'Continue to Preview ↗' : 'Create Collection'}{' '}
            {isLoading ? <Spinner /> : null}
          </button>
        </form>
      </FormProvider>
    </div>
  )
}

export default CollectionDetailsForm
