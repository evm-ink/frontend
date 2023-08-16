import clsx from 'clsx'

interface AssetInfoProps {
  className?: string
}

const AssetInfo = ({ className }: AssetInfoProps): JSX.Element => {
  return (
    <div className={clsx(className)}>
      <div className="w-full h-11 p-2.5 border border-b-0 border-zinc-800 justify-start items-center gap-16 inline-flex">
        <div className="grow shrink basis-0 text-zinc-700 text-base font-bold leading-normal">
          File Type
        </div>
        <div className="text-neutral-500 text-base font-medium leading-normal">
          SVG
        </div>
      </div>
      <div className="w-full h-11 p-2.5 border border-b-0 border-zinc-800 justify-start items-center gap-16 inline-flex">
        <div className="grow shrink basis-0 text-zinc-700 text-base font-bold leading-normal">
          FILE SIZE
        </div>
        <div className="text-neutral-500 text-base font-medium leading-normal">
          131.56 KB
        </div>
      </div>
      <div className="w-full h-11 p-2.5 border border-zinc-800 justify-start items-center gap-16 inline-flex">
        <div className="grow shrink basis-0 text-zinc-700 text-base font-bold leading-normal">
          CREATED
        </div>
        <div className="text-neutral-500 text-base font-medium leading-normal">
          July 13, 2023, 6:51 AM GMT+5:30
        </div>
      </div>
      <div className="my-6" />
      <div className="w-full h-11 p-2.5 border border-b-0 border-zinc-800 justify-start items-center gap-16 inline-flex">
        <div className="grow shrink basis-0 h-6 justify-start items-center gap-4 flex">
          <div className="text-zinc-700 text-base font-bold leading-normal">
            CREATION BLOCK
          </div>
          <div className="w-6 h-6 relative">
            <div className="w-[18px] h-[18px] left-[3px] top-[3px] absolute"></div>
          </div>
        </div>
        <div className="text-neutral-500 text-base font-medium leading-normal">
          798,467
        </div>
      </div>
      <div className="w-full h-11 p-2.5 border border-b-0 border-zinc-800 justify-start items-center gap-16 inline-flex">
        <div className="grow shrink basis-0 h-6 justify-start items-center gap-4 flex">
          <div className="text-zinc-700 text-base font-bold leading-normal">
            CREATION TRANSACTION
          </div>
          <div className="w-6 h-6 relative">
            <div className="w-[18px] h-[18px] left-[3px] top-[3px] absolute"></div>
          </div>
        </div>
        <div className="text-neutral-500 text-base font-medium leading-normal">
          b0a9a...6562b
        </div>
      </div>
      <div className="w-full h-11 p-2.5 border border-zinc-800 justify-start items-center gap-16 inline-flex">
        <div className="grow shrink basis-0 h-6 justify-start items-center gap-4 flex">
          <div className="text-zinc-700 text-base font-bold leading-normal">
            CREATION FEE
          </div>
        </div>
        <div className="text-neutral-500 text-base font-medium leading-normal">
          199,290 sats
        </div>
      </div>
    </div>
  )
}

export default AssetInfo
