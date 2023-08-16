import clsx from 'clsx'

interface AssetBlockchainInfoProps {
  className?: string
}

const AssetBlockchainInfo = ({
  className,
}: AssetBlockchainInfoProps): JSX.Element => {
  return (
    <div className={clsx(className)}>
      <div className="w-full h-11 p-2.5 border border-b-0 border-zinc-800 justify-start items-center gap-16 inline-flex">
        <div className="grow shrink basis-0 text-zinc-700 text-base font-bold leading-normal">
          Contract Address
        </div>
        <div className="text-neutral-500 text-base font-medium leading-normal">
          0x9a53...ca8f
        </div>
      </div>
      <div className="w-full h-11 p-2.5 border border-b-0 border-zinc-800 justify-start items-center gap-16 inline-flex">
        <div className="grow shrink basis-0 text-zinc-700 text-base font-bold leading-normal">
          Token ID
        </div>
        <div className="text-neutral-500 text-base font-medium leading-normal">
          7225
        </div>
      </div>
      <div className="w-full h-11 p-2.5 border border-b-0 border-zinc-800 justify-start items-center gap-16 inline-flex">
        <div className="grow shrink basis-0 text-zinc-700 text-base font-bold leading-normal">
          Token Standard
        </div>
        <div className="text-neutral-500 text-base font-medium leading-normal">
          ERC-721
        </div>
      </div>
      <div className="w-full h-11 p-2.5 border border-zinc-800 justify-start items-center gap-16 inline-flex">
        <div className="grow shrink basis-0 text-zinc-700 text-base font-bold leading-normal">
          Blockchain
        </div>
        <div className="text-neutral-500 text-base font-medium leading-normal">
          Ethereum
        </div>
      </div>
    </div>
  )
}

export default AssetBlockchainInfo
