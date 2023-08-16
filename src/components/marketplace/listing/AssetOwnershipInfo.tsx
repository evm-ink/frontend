import clsx from 'clsx'

interface AssetOwnershipInfoProps {
  className?: string
}

const AssetOwnershipInfo = ({
  className,
}: AssetOwnershipInfoProps): JSX.Element => {
  return (
    <div className={clsx(className)}>
      <div className="w-full h-[68px] relative">
        <div className="w-1/3 h-[68px] px-5 py-2.5 border border-zinc-800 flex-col justify-center items-start inline-flex">
          <div className="text-stone-900 text-base font-bold leading-normal">
            Collections
          </div>
          <div className="text-neutral-500 text-base font-medium leading-normal">
            @mekaverse
          </div>
        </div>
        <div className="w-1/3 h-[68px] px-5 py-2.5 border border-zinc-800 flex-col justify-center items-start inline-flex">
          <div className="text-stone-900 text-base font-bold leading-normal">
            Creator
          </div>
          <div className="text-neutral-500 text-base font-medium leading-normal">
            0x9a53...ca8f
          </div>
        </div>
        <div className="w-1/3 h-[68px] px-5 py-2.5 border border-zinc-800 flex-col justify-center items-start inline-flex">
          <div className="text-stone-900 text-base font-bold leading-normal">
            Owner
          </div>
          <div className="text-neutral-500 text-base font-medium leading-normal">
            0x8ee47...bdd2
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssetOwnershipInfo
