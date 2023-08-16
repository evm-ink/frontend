import clsx from 'clsx'
import { FormProvider, useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import CollectiblesDropzone from './CollectiblesDropzone'
import { createCollectionStatusMapping } from '@/schemas/createCollectionStatus'

interface UploadFormProps {
  className?: string
  newCollectionStatus?: string
  newCollectionProgress?: string
  onNewCollectionUUID: (uuid: string) => void
  onSubmitSuccess?: () => void
}

const uploadFormSchema = z.object({
  newCollectionUUID: z
    .string({ required_error: 'File cannot be empty' })
    .uuid('File cannot be empty'),
})

type UploadFormValues = z.infer<typeof uploadFormSchema>

const initialValues: UploadFormValues = {
  newCollectionUUID: '',
}

const UploadForm = ({
  className,
  newCollectionStatus,
  newCollectionProgress,
  onNewCollectionUUID,
  onSubmitSuccess,
}: UploadFormProps): JSX.Element => {
  const methods = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(uploadFormSchema),
  })

  const onSubmit = () => {
    onSubmitSuccess?.()
  }

  return (
    <div className={clsx(className)}>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <h4 className="text-2xl font-bold py-2 dark:text-white">
            Upload Section
          </h4>
          <div>
            <CollectiblesDropzone
              newCollectionProgress={newCollectionProgress}
              newCollectionStatus={newCollectionStatus}
              onNewCollectionUUID={(uuid) => {
                methods.setValue('newCollectionUUID', uuid, {
                  shouldValidate: true,
                })
                onNewCollectionUUID(uuid)
              }}
            />
            <ErrorMessage
              name="newCollectionUUID"
              render={({ message }) => (
                <p className="mt-1 text-sm text-red-600">{message}</p>
              )}
            />
          </div>
          <button
            type="submit"
            disabled={
              !!newCollectionStatus &&
              newCollectionStatus !==
                createCollectionStatusMapping.waiting_collection_info
            }
            className={clsx(
              'mt-10 border-2 border-black dark:border-white dark:text-white rounded py-2 px-5 font-bold text-lg duration-150 hover:shadow-md',
              {
                'cursor-not-allowed bg-gray-500 opacity-30':
                  !!newCollectionStatus &&
                  newCollectionStatus !==
                    createCollectionStatusMapping.waiting_collection_info,
              }
            )}
          >
            Next ↗
          </button>
        </form>
      </FormProvider>
    </div>
  )
}

export default UploadForm
