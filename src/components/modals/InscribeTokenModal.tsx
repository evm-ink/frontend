import clsx from 'clsx'
import { useState } from 'react'
import { Modal } from 'react-responsive-modal'
// import { toast } from 'react-toastify'
import { useAccount } from 'wagmi'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  prepareSendTransaction,
  sendTransaction,
  waitForTransaction,
} from '@wagmi/core'
import { parseEther } from 'viem'

import TextInput from '../common/TextInput'
import { hexEncode } from '@/utils/hexEncode'
import { getPlatformNamePrefix } from '@/utils/getPlatformNamePrefix'
import { useNavigate } from 'react-router-dom'
import TickInput from '../common/TickInput'
import { ErrorMessage } from '@hookform/error-message'

interface InscribeTokenModalProps {
  className?: string
  isOpen: boolean
  onCloseModal: () => void
  onNextClick: () => void
}

const InscribeTokenModal = ({
  className,
  isOpen,
  onCloseModal,
  onNextClick,
}: InscribeTokenModalProps): JSX.Element => {
  const [actionType, setActionType] = useState<'mint' | 'deploy'>('mint')
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const { address, isConnected } = useAccount()
  const { openConnectModal } = useConnectModal()

  const handleHexString = async (hexString: string) => {
    setIsLoading(true)
    try {
      if (!hexString) throw new Error('Hex string not found')

      if (!address || !isConnected) throw new Error('Wallet not connected!')

      const request = await prepareSendTransaction({
        to: address,
        value: parseEther('0'),
        data: hexString as '0x${string}',
      })
      const { hash } = await sendTransaction(request)
      await waitForTransaction({
        confirmations: 5,
        hash,
      })

      toast.success(`Tokens Minted successfully!`)
      onNextClick()
      navigate(
        `/${getPlatformNamePrefix().toLocaleLowerCase()}-scriptions/${hash}`
      )
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error)
      toast.error(error?.message?.split('.')?.[0] ?? 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Modal
      open={isOpen}
      onClose={onCloseModal}
      center
      closeOnOverlayClick={false}
      classNames={{
        modal: 'rounded-[24px] w-full dark:bg-zinc-900',
        overlay: '!dark:bg-white',
        closeIcon: 'dark:invert',
      }}
    >
      <div
        className={clsx(
          'p-4 flex flex-col items-center justify-center gap-4',
          className
        )}
      >
        <h2 className="font-medium text-2xl dark:text-white">
          Token Inscriptions
        </h2>
        <a
          href="https://domo-2.gitbook.io/brc-20-experiment/"
          target="_blank"
          className="text-gray-500 underline underline-offset-4 font-mono"
        >
          Read more details about brc-20
        </a>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-4">
        <div className="w-1/2">
          <ul className="items-center w-full text-sm font-medium dark:text-white sm:flex">
            <li className="w-full ">
              <div className="w-full flex items-center justify-center pl-3">
                <input
                  id="vue-checkbox-list"
                  type="checkbox"
                  checked={actionType === 'mint'}
                  onChange={() => setActionType('mint')}
                  className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2"
                />
                <label
                  htmlFor="vue-checkbox-list"
                  className="w-fit  py-3 ml-2 text-lg font-medium dark:text-white "
                >
                  Mint
                </label>
              </div>
            </li>
            <li className="w-full ">
              <div className="w-full justify-center flex items-center pl-3">
                <input
                  id="react-checkbox-list"
                  type="checkbox"
                  checked={actionType === 'deploy'}
                  onChange={() => setActionType('deploy')}
                  className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 "
                />
                <label
                  htmlFor="react-checkbox-list"
                  className="w-fit py-3 ml-2 text-lg font-medium dark:text-white"
                >
                  Deploy
                </label>
              </div>
            </li>
          </ul>
        </div>

        {(() => {
          switch (actionType) {
            case 'deploy':
              return <DeployForm onSubmit={handleHexString} />

            case 'mint':
            default:
              return <MintForm onSubmit={handleHexString} />
          }
        })()}

        <div />

        {address && isConnected ? (
          <button
            type="submit"
            form="token-inscription-form"
            disabled={isLoading}
            className="text-white min-w-[150px] bg-[#0E76FD] hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none disabled:bg-slate-500 capitalize"
          >
            {isLoading ? `${actionType}ing...` : 'Next'}
          </button>
        ) : (
          <button
            type="button"
            onClick={openConnectModal}
            className="text-white min-w-[150px] bg-[#0E76FD] hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none disabled:bg-slate-500"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </Modal>
  )
}

export default InscribeTokenModal

const mintFormSchema = z.object({
  tick: z.string().min(4).max(20),
  amount: z
    .string()
    .transform((val) => +val)
    .pipe(z.number().int().positive()),
  protocol: z.string().length(6),
  limit: z.string().optional(),
  isTickAvailable: z.literal<boolean>(true),
})

const MintForm = ({ onSubmit }: { onSubmit: (hexString: string) => void }) => {
  const methods = useForm({
    defaultValues: {
      tick: '',
      amount: '1',
      protocol: 'brc-20',
      limit: '0',
      isTickAvailable: false,
    },
    resolver: zodResolver(mintFormSchema),
  })

  const handleSubmit = (formValues: z.input<typeof mintFormSchema>) => {
    console.log(methods.getValues('limit'), formValues.amount)
    if (+methods.getValues('limit') < +formValues.amount) {
      return methods.setError(
        'amount',
        {
          message: 'Amount exceeds token limit',
        },
        { shouldFocus: true }
      )
    }

    const mintObj = {
      p: formValues.protocol,
      op: 'mint',
      tick: formValues.tick,
      amt: formValues.amount,
    }
    const mintObjStr = JSON.stringify(mintObj)
    const dataString = `data:,${mintObjStr}`

    const hexString = hexEncode(dataString)

    onSubmit(hexString)
  }

  return (
    <FormProvider {...methods}>
      <form
        id="token-inscription-form"
        className="w-1/2 flex flex-col gap-4"
        onSubmit={methods.handleSubmit(handleSubmit)}
      >
        <TickInput name="tick" type="mint" />
        <TextInput
          type="number"
          name="amount"
          label="Amount"
          placeholder="Mint Amount"
        />
      </form>
    </FormProvider>
  )
}

const deployFormSchema = z
  .object({
    tick: z
      .string()
      .min(4)
      .max(20)
      .refine((val) => /[a-zA-Z]+/g.test(val), 'Only alphabets allowed'),
    totalSupply: z.string(),
    limitPerMint: z
      .string()
      .transform((val) => +val)
      .pipe(z.number().int().positive()),
    isTickAvailable: z.literal<boolean>(true),
  })
  .refine((obj) => +obj.totalSupply >= +obj.limitPerMint, {
    message: 'limit cannot exceed total supply',
    path: ['limitPerMint'],
  })
  .refine(
    (obj) => {
      return obj.isTickAvailable
    },
    {
      message: 'Tick is already takennnnnnnnnn',
      path: ['tick'],
    }
  )

const DeployForm = ({
  onSubmit,
}: {
  onSubmit: (hexString: string) => void
}) => {
  const methods = useForm({
    defaultValues: {
      tick: '',
      totalSupply: '21000000',
      limitPerMint: '1',
      isTickAvailable: false,
    },
    resolver: zodResolver(deployFormSchema),
  })

  const handleSubmit = (formValues: z.input<typeof deployFormSchema>) => {
    const deployObj = {
      p: 'brc-20',
      op: 'deploy',
      tick: formValues.tick,
      max: formValues.totalSupply,
      lim: formValues.limitPerMint,
    }
    const deployObjStr = JSON.stringify(deployObj)
    const dataString = `data:,${deployObjStr}`

    const hexString = hexEncode(dataString)

    onSubmit(hexString)
  }

  return (
    <FormProvider {...methods}>
      <form
        id="token-inscription-form"
        className="w-1/2 flex flex-col gap-4"
        onSubmit={methods.handleSubmit(handleSubmit)}
      >
        <TickInput name="tick" type="deploy" />
        {!methods.formState.errors.tick && (
          <ErrorMessage
            name="isTickAvailable"
            render={() => (
              <p className="-mt-2 text-sm text-red-600">
                {'Tick is not available'}
              </p>
            )}
          />
        )}
        <TextInput
          name="totalSupply"
          label="Total Supply"
          placeholder="Total Supply"
        />
        <TextInput
          name="limitPerMint"
          label="Limit per mint"
          placeholder="Limit per mint"
        />
      </form>
    </FormProvider>
  )
}
