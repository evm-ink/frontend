import { useEffect } from 'react'
import clsx from 'clsx'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { toast } from 'react-toastify'
import { parseEther } from 'viem'
import { FaInfoCircle } from 'react-icons/fa'

import { useUpdateNewCollectionMutation } from '@/hooks/useUpdateNewCollection.mutation'
import { useDeployCollectionContractMutation } from '@/hooks/useDeployContract.mutation'

import TextInput from '@/components/common/TextInput'
import Spinner from '@/components/Spinner'

import { chains } from '@/utils/rainbowkit'
import { createCollectionStatusMapping } from '@/schemas/createCollectionStatus'

interface MintAndDeployFormProps {
  className?: string
  bytecode?: string
  newCollectionUUID?: string
  newCollectionStatus?: string
  onSubmitSuccess?: () => void
}

const mintAndDeployFormSchema = z.object({
  price: z.coerce.number().nonnegative().or(z.literal('')),
  maxMintsPerAddress: z.coerce.number().int().nonnegative().or(z.literal('')),
})

type MintAndDeployFormValues = z.infer<typeof mintAndDeployFormSchema>

const initialValues: MintAndDeployFormValues = {
  price: '',
  maxMintsPerAddress: '',
}

const MintAndDeployForm = ({
  className,
  bytecode,
  newCollectionUUID,
  newCollectionStatus,
  onSubmitSuccess,
}: MintAndDeployFormProps): JSX.Element => {
  const methods = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(mintAndDeployFormSchema),
  })

  const { mutateAsync, isLoading, isSuccess } = useUpdateNewCollectionMutation()
  const {
    mutateAsync: deployCollectionContract,
    isLoading: isDeployingContract,
    isSuccess: contractDeploySuccess,
  } = useDeployCollectionContractMutation()

  useEffect(() => {
    if (newCollectionStatus === createCollectionStatusMapping.complete) {
      onSubmitSuccess?.()
    } else if (
      newCollectionStatus === 'failed_file' ||
      newCollectionStatus === 'canceled_file'
    ) {
      window.location.reload()
    }
  }, [newCollectionStatus, onSubmitSuccess])

  const onSubmit = async (formValues: MintAndDeployFormValues) => {
    try {
      if (!newCollectionUUID)
        return toast.error('New Collection UUID is required')

      const { update_new_collections_by_pk } = await mutateAsync({
        id: newCollectionUUID,
        max_claim: formValues.maxMintsPerAddress.toString() || '0',
        price: parseEther(formValues.price.toString() || '0', 'wei').toString(),
      })

      if (!update_new_collections_by_pk)
        return toast.error('Could not update new collection')
    } catch (error) {
      console.log(error)
    }
  }

  const onDeployContractClick = async () => {
    try {
      if (bytecode) {
        await deployCollectionContract({
          bytecode: bytecode as `0x${string}`,
        })
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
          <h4 className="text-2xl font-bold py-2 dark:text-white">
            Mint & Deploy Section
          </h4>
          <TextInput
            label="Mint Price"
            name="price"
            placeholder="Enter Amount"
            suffixElement={
              <p className="font-medium text-[#1e1e1e] dark:text-white">{`in ${chains[0]?.nativeCurrency?.symbol}`}</p>
            }
            disabled={
              !!newCollectionStatus &&
              newCollectionStatus !==
                createCollectionStatusMapping.waiting_collection_info
            }
          />
          <p className="text-sm -mt-2 text-gray-500 dark:text-gray-400">
            For free mints, leave the field blank or enter 0
          </p>
          <TextInput
            label="Maximum mints per Address"
            name="maxMintsPerAddress"
            placeholder="Number of mints"
            disabled={
              !!newCollectionStatus &&
              newCollectionStatus !==
                createCollectionStatusMapping.waiting_collection_info
            }
          />
          <p className="text-sm -mt-2 text-gray-500 dark:text-gray-400">
            For unlimited mints per address, leave the field blank or enter 0
          </p>

          {contractDeploySuccess &&
          newCollectionStatus ===
            createCollectionStatusMapping.waiting_contract_deployment ? (
            <div className="w-full mt-6 px-4 py-2 rounded-2xl flex items-center gap-4 bg-green-300">
              <FaInfoCircle className="text-black flex-shrink-0" size={48} />
              <div className="flex flex-col gap-4">
                <p className="text-lg font-bold text-black">
                  Waiting for your contract to be deployed and receive 10
                  confirmations prior to proceeding to the next step{' '}
                </p>
              </div>
            </div>
          ) : null}

          {bytecode ? (
            <button
              type="button"
              onClick={onDeployContractClick}
              disabled={
                (!!newCollectionStatus &&
                  newCollectionStatus !==
                    createCollectionStatusMapping.waiting_contract_deployment) ||
                isLoading ||
                isDeployingContract ||
                contractDeploySuccess
              }
              className={clsx(
                'mt-10 border-2 border-black dark:border-white dark:text-white rounded py-2 px-5 font-bold text-lg duration-150 hover:shadow-md flex items-center justify-center gap-4',
                {
                  'cursor-not-allowed bg-gray-500 opacity-30':
                    (!!newCollectionStatus &&
                      newCollectionStatus !==
                        createCollectionStatusMapping.waiting_contract_deployment) ||
                    isLoading ||
                    isDeployingContract ||
                    contractDeploySuccess,
                }
              )}
            >
              {isDeployingContract
                ? 'Deploying Collection...'
                : 'Deploy Collection  ↗'}{' '}
              {isDeployingContract ? <Spinner /> : null}
            </button>
          ) : (
            <button
              type="submit"
              disabled={
                (!!newCollectionStatus &&
                  newCollectionStatus !==
                    createCollectionStatusMapping.waiting_collection_info) ||
                isLoading ||
                isDeployingContract ||
                isSuccess
              }
              className={clsx(
                'mt-10 border-2 border-black dark:border-white dark:text-white rounded py-2 px-5 font-bold text-lg duration-150 hover:shadow-md flex items-center justify-center gap-4',
                {
                  'cursor-not-allowed bg-gray-500 opacity-30':
                    (!!newCollectionStatus &&
                      newCollectionStatus !==
                        createCollectionStatusMapping.waiting_collection_info) ||
                    isLoading ||
                    isDeployingContract ||
                    isSuccess,
                }
              )}
            >
              Next ↗ {isLoading || isSuccess ? <Spinner /> : null}
            </button>
          )}
        </form>
      </FormProvider>
    </div>
  )
}

export default MintAndDeployForm
