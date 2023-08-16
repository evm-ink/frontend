import clsx from 'clsx'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FaTrash } from 'react-icons/fa'
import { ErrorMessage } from '@hookform/error-message'
import { useAccount } from 'wagmi'
import { toast } from 'react-toastify'

import FileDragAndDropZone from '@/components/common/FileDragAndDropZone'
import TextInput from '@/components/common/TextInput'
import TextArea from '@/components/common/TextArea'
import UsernameInput from '@/components/common/UsernameInput'

import { useCreateProfileMutation } from '@/hooks/useCreateProfile.mutation'
import {
  CreateProfileSchema,
  createProfileSchema,
} from '@/schemas/createProfileSchema'
import { getBase64FromFile } from '@/utils/getBase64StringFromFile'

interface CreateProfilePageProps {
  className?: string
}

const initialValues: CreateProfileSchema = {
  name: '',
  username: '',
  bio: '',
  profileImageUrl: '',
  isUsernameAvailable: false,
}

const CreateProfilePage = ({
  className,
}: CreateProfilePageProps): JSX.Element => {
  const { address, isConnected } = useAccount()

  const { mutate } = useCreateProfileMutation()

  const methods = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(createProfileSchema),
  })

  const profileImageUrl = methods.watch('profileImageUrl')

  const handleProfileImageFile = async (file: File) => {
    console.log(file)
    const base64Url = await getBase64FromFile(file)

    methods.setValue('profileImageUrl', base64Url as string)
  }

  const onSubmit = (formValues: unknown) => {
    if (!address || !isConnected)
      return toast.error('Connect your wallet to proceed')

    try {
      console.log(formValues)
      // TODO Handle Profile creation
      mutate()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main
      className={clsx(
        'w-full max-w-screen-sm mx-auto my-20',
        'flex flex-col items-center justify-center',
        className
      )}
    >
      <h1 className="font-bold text-black dark:text-white text-4xl mb-4">
        Create your profile
      </h1>
      <p className="font-medium text-gray-500 text-lg mb-10">
        This is how you will appear on the platform
      </p>

      <div className="mb-10 w-[200px]">
        {profileImageUrl ? (
          <div className="group relative w-full aspect-square !max-w-[200px] rounded-2xl overflow-hidden">
            <img
              src={profileImageUrl}
              alt=""
              className="w-full max-w-[200px] h-full object-cover group-hover:blur-sm"
            />
            <div className="absolute inset-0 bg-transparent group-hover:bg-gray-800 opacity-40 w-full h-full flex items-center justify-center duration-300">
              <button
                className="invisible duration-100 group-hover:visible flex bg-white rounded-full w-20 h-20 items-center justify-center"
                onClick={() => methods.setValue('profileImageUrl', '')}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ) : (
          <FileDragAndDropZone
            className="!w-full !min-h-0 aspect-square max-w-[200px]"
            accept={{ 'image/*': [] }}
            onFiles={(files) => {
              if (files.length) {
                handleProfileImageFile(files?.[0])
              }
            }}
            mainText={
              <p className="text-center text-xs font-bold dark:text-white">
                Upload Profile Image
              </p>
            }
          />
        )}
        <ErrorMessage
          name="profileImageUrl"
          errors={methods.formState.errors}
          render={({ message }) => (
            <p className="mt-1 text-sm text-red-600">{message}</p>
          )}
        />
      </div>

      <FormProvider {...methods}>
        <form
          className="w-full flex flex-col gap-4"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <TextInput
            label="Account Name"
            name="name"
            placeholder="Enter your name here"
          />
          <UsernameInput name="username" />
          <TextArea
            label="Bio"
            name="bio"
            placeholder="Write about yourself here..."
            characterLimit={1000}
            optional
          />
          <button
            type="submit"
            className="mt-5 border-2 border-black dark:border-white dark:text-white rounded py-2 px-5 font-bold text-lg duration-150 hover:shadow-md"
          >
            Create Profile
          </button>
        </form>
      </FormProvider>
    </main>
  )
}

export default CreateProfilePage
