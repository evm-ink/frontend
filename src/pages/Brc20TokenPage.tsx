import { useState } from 'react'
import clsx from 'clsx'
import { createAvatar } from '@dicebear/core'
import { initials } from '@dicebear/collection'
import { useAccount } from 'wagmi'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import {
  prepareSendTransaction,
  sendTransaction,
  waitForTransaction,
} from '@wagmi/core'
import { toast } from 'react-toastify'
import { parseEther } from 'viem'

import { useGetBrc20Tokens } from '@/hooks/useGetBrc20Tokens.query'
import {
  GetBrc20TokensQuery,
  GetBrc20TokensQueryVariables,
  Order_By,
} from '@/gql/operations-types'
import { hexEncode } from '@/utils/hexEncode'
import Spinner from '@/components/Spinner'
import { useQueryClient } from '@tanstack/react-query'

function formatNumber(num: number) {
  const nf = new Intl.NumberFormat('en-US')
  return nf.format(num)
}

const sortOptions: {
  label: string
  value: GetBrc20TokensQueryVariables['order_by']
}[] = [
  {
    label: 'Most Unique Owners',
    value: { stats: { holders: Order_By.DescNullsLast } },
  },
  {
    label: 'Least Unique Owners',
    value: { stats: { holders: Order_By.AscNullsLast } },
  },
  { label: 'Highest Supply', value: { max_supply: Order_By.DescNullsLast } },
  { label: 'Lowest Supply', value: { max_supply: Order_By.AscNullsLast } },
  {
    label: 'Highest Mint Limit',
    value: { mint_limit: Order_By.DescNullsLast },
  },
  { label: 'Lowest Mint Limit', value: { mint_limit: Order_By.AscNullsLast } },
]

interface Brc20TokenPageProps {
  className?: string
}

const Brc20TokenPage = ({ className }: Brc20TokenPageProps): JSX.Element => {
  const [showOnlyMintableToken, setShowOnlyMintableTokens] = useState(false)
  const [orderBy, setOrderBy] =
    useState<GetBrc20TokensQueryVariables['order_by']>()

  const { data, isLoading, hasNextPage, fetchNextPage } = useGetBrc20Tokens(
    25,
    orderBy
  )

  const tokens =
    data?.pages?.flatMap((obj) => obj.brc20_tokens).filter(Boolean) ?? []

  return (
    <div
      className={clsx(
        'container mx-auto py-10 flex flex-col gap-10 items-center',
        className
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-4 w-full">
        <h1 className="font-bold text-5xl dark:text-white">Top Tokens</h1>
        <div className="flex gap-4">
          {/* <input
            className="px-4 py-2 border border-gray-300 rounded-md"
            type="text"
            placeholder="Search"
          /> */}

          <label className="relative inline-flex items-center cursor-pointer">
            <span className="mr-3 text-sm font-medium text-gray-600">
              Show only mintable tokens
            </span>
            <div className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={showOnlyMintableToken}
                onChange={() =>
                  setShowOnlyMintableTokens((prevState) => !prevState)
                }
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" />
            </div>
          </label>

          <select
            name="filters"
            id="filters"
            className="px-4 py-2 border border-gray-300 rounded-md appearance-none font-bold"
            onChange={(e) => {
              const label = e.target.value
              const sortObj = sortOptions.find((obj) => obj.label === label)
              setOrderBy(sortObj?.value)
            }}
          >
            <option value="" disabled selected>
              Set display order
            </option>
            {sortOptions.map((obj, i) => (
              <option key={i} value={obj.label}>
                {obj.label}
              </option>
            ))}
            {/* <option value="Latest">Latest</option>
            <option value="Oldest">Oldest</option>
            <option value="Most Transactions">Most Transactions</option>
            <option value="Least Transactions">Least Transactions</option> */}
          </select>
          <button
            className="bg-red-500 text-white px-4 rounded-md font-bold"
            onClick={() => {
              setOrderBy(undefined)
              setShowOnlyMintableTokens(false)
            }}
          >
            Clear All
          </button>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full">
          <thead className="border-b-2 border-b-black dark:border-b-white">
            <tr className="font-bold text-lg dark:text-white text-left">
              {/* <th className="py-4 px-2 whitespace-nowrap">Sr. No.</th> */}
              <th className="py-4 px-2 whitespace-nowrap">Token</th>
              {/* <th className="py-4 px-2 whitespace-nowrap">Price</th>
              <th className="py-4 px-2 whitespace-nowrap">Market Cap</th> */}
              <th className="py-4 px-2 whitespace-nowrap">Protocol</th>
              <th className="py-4 px-2 whitespace-nowrap">Total Supply</th>
              <th className="py-4 px-2 whitespace-nowrap">Minted %</th>
              <th className="py-4 px-2 whitespace-nowrap">Mint Limit</th>
              <th className="py-4 px-2 whitespace-nowrap">Owners</th>
              {/* <th className="py-4 px-2 whitespace-nowrap">Transactions</th> */}
              <th className="py-4 px-2 whitespace-nowrap">Status</th>
            </tr>
          </thead>
          <tbody className="">
            {tokens
              .filter((token) =>
                showOnlyMintableToken
                  ? token.max_supply !== token.minted_total
                  : true
              )
              .map((token, index) => (
                <tr
                  key={index}
                  className="text-md dark:text-white text-left border-b-2 border-b-slate-300"
                >
                  {/* <td className="py-4 font-bold">#{index + 1}</td> */}
                  <td className="py-4 px-2">
                    <div className="flex gap-2">
                      <div className="shrink-0 border border-gray-300 rounded-md p-1 w-20 h-20">
                        <img
                          className="w-full h-full object-cover rounded-sm"
                          src={createAvatar(initials, {
                            seed: token.tick,
                            backgroundType: ['gradientLinear'],
                            fontSize: 40,
                          }).toDataUriSync()}
                          alt="token"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h1 className="font-bold text-2xl text-blue-600 dark:text-blue-400 uppercase">
                          {token.tick}
                        </h1>

                        <p className="text-md text-gray-600 dark:text-gray-300 font-medium">
                          Total Minted{' '}
                          {formatNumber(
                            +(
                              BigInt(token.minted_total) /
                              BigInt(token.decimal_digits)
                            ).toString()
                          )}
                        </p>
                      </div>
                    </div>
                  </td>
                  {/* <td className="py-4 font-bold">-</td>
                <td className="py-4 font-bold">-</td> */}
                  <td className="py-4 px-2 uppercase">{token.protocol}</td>
                  <td className="py-4 px-2">
                    {formatNumber(
                      +(
                        BigInt(token.max_supply) / BigInt(token.decimal_digits)
                      ).toString()
                    )}
                  </td>
                  <td className="py-4 px-2">
                    {formatNumber(
                      (+(
                        BigInt(token.minted_total) /
                        BigInt(token.decimal_digits)
                      ).toString() /
                        +(
                          BigInt(token.max_supply) /
                          BigInt(token.decimal_digits)
                        ).toString()) *
                        100
                    )}
                    %
                  </td>
                  <td className="py-4 px-2">
                    {formatNumber(
                      +(
                        BigInt(token.mint_limit) / BigInt(token.decimal_digits)
                      ).toString()
                    )}
                  </td>
                  <td className="py-4 px-2">
                    {formatNumber(token.stats?.holders ?? 0)}
                  </td>
                  {/* <td className="py-4 px-2">{formatNumber(36_458)}</td> */}
                  <td className="py-4 px-2">
                    {token.max_supply === token.minted_total ? (
                      <button
                        type="button"
                        className="border px-4 py-2 rounded-md text-red-500 bg-slate-100 font-medium shadow-sm opacity-50 cursor-not-allowed"
                      >
                        Minted
                      </button>
                    ) : (
                      <MintNowButton token={token} />
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {hasNextPage && (
        <button
          className="w-fit px-6 py-3 rounded-md text-white bg-blue-500 font-medium shadow-sm hover:shadow-md duration-100"
          type="button"
          disabled={isLoading || !hasNextPage}
          onClick={() => {
            if (!hasNextPage) return

            fetchNextPage()
          }}
        >
          Load More
        </button>
      )}
    </div>
  )
}

export default Brc20TokenPage

const MintNowButton = ({
  token,
}: {
  token: GetBrc20TokensQuery['brc20_tokens'][0]
}) => {
  const [isMinting, setIsMinting] = useState(false)

  const queryClient = useQueryClient()

  const { address, isConnected } = useAccount()
  const { openConnectModal } = useConnectModal()

  const handleMintNowClick = async () => {
    try {
      if (isMinting) return

      if (!address || !isConnected) return openConnectModal?.()

      if (!token) throw new Error('Token not found!')

      setIsMinting(true)

      const mintObj = {
        p: token.protocol,
        op: 'mint',
        tick: token.tick,
        amt: (
          BigInt(token.mint_limit) / BigInt(token.decimal_digits)
        ).toString(),
      }
      const mintObjStr = JSON.stringify(mintObj)
      const hexString = hexEncode('data:,' + mintObjStr)
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

      queryClient.invalidateQueries(['brc-20-tokens'])

      toast.success(`Tokens Minted successfully!`)

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error)
      toast.error(error?.message?.split('.')?.[0] ?? 'Something went wrong')
    } finally {
      setIsMinting(false)
    }
  }

  return (
    <button
      type="button"
      disabled={isMinting}
      className="border px-4 py-2 rounded-md text-green-500 bg-white font-medium shadow-sm hover:shadow-md duration-100 whitespace-nowrap flex items-center justify-center gap-2"
      onClick={handleMintNowClick}
    >
      {isMinting && <Spinner />}
      {isMinting ? '' : 'Mint Now'}
    </button>
  )
}
