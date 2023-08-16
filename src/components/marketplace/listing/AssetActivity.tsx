import clsx from 'clsx'

interface AssetActivityProps {
  className?: string
}

const AssetActivity = ({ className }: AssetActivityProps): JSX.Element => {
  return (
    <div className={clsx(className)}>
      <div className="w-full h-fit px-5 py-4 bg-gray-100 rounded-[10px] border border-stone-300 flex-col justify-start items-start gap-4 inline-flex">
        <div className="text-black text-xl font-bold leading-normal">
          Activities
        </div>
        <div className="self-stretch h-[155px] flex-col justify-start items-start gap-px flex">
          <div className="self-stretch px-2.5 bg-stone-900 justify-start items-center gap-1 inline-flex">
            <div className="grow shrink basis-0 h-[38px] px-2.5 py-2 justify-start items-center gap-1 flex">
              <div className="text-white text-sm font-medium leading-snug">
                Event
              </div>
            </div>
            <div className="grow shrink basis-0 h-[38px] px-2.5 py-2 justify-start items-center gap-1 flex">
              <div className="text-white text-sm font-medium leading-snug">
                Price
              </div>
            </div>
            <div className="grow shrink basis-0 h-[38px] px-2.5 py-2 justify-start items-center gap-1 flex">
              <div className="text-white text-sm font-medium leading-snug">
                From
              </div>
            </div>
            <div className="grow shrink basis-0 h-[38px] px-2.5 py-2 justify-start items-center gap-1 flex">
              <div className="text-white text-sm font-medium leading-snug">
                To
              </div>
            </div>
            <div className="grow shrink basis-0 h-[38px] px-2.5 py-2 justify-start items-center gap-1 flex">
              <div className="text-white text-sm font-medium leading-snug">
                From
              </div>
            </div>
          </div>
          <div className="self-stretch px-2.5 py-1 justify-start items-center gap-1 inline-flex">
            <div className="grow shrink basis-0 h-[26px] px-2.5 py-1 justify-start items-center gap-1 flex">
              <div className="text-black text-xs font-bold leading-[18px] tracking-tight">
                List
              </div>
            </div>
            <div className="grow shrink basis-0 h-[30px] px-2.5 py-1 justify-start items-center gap-1 flex">
              <div className="text-stone-900 text-sm font-medium leading-snug">
                0.015 ETH
              </div>
            </div>
            <div className="grow shrink basis-0 h-[30px] px-2.5 py-1 justify-start items-center gap-1 flex">
              <div className="text-stone-900 text-sm font-medium leading-snug">
                @okaydun
              </div>
            </div>
            <div className="grow shrink basis-0 h-[30px] px-2.5 py-1 justify-start items-center gap-1 flex">
              <div className="text-stone-900 text-sm font-medium leading-snug">
                -
              </div>
            </div>
            <div className="grow shrink basis-0 h-[30px] px-2.5 py-1 justify-start items-center gap-1 flex">
              <div className="text-stone-900 text-sm font-medium leading-snug">
                2h ago
              </div>
            </div>
          </div>
          <div className="self-stretch px-2.5 py-1 justify-start items-center gap-1 inline-flex">
            <div className="grow shrink basis-0 h-[26px] px-2.5 py-1 justify-start items-center gap-1 flex">
              <div className="text-black text-xs font-bold leading-[18px] tracking-tight">
                List
              </div>
            </div>
            <div className="grow shrink basis-0 h-[30px] px-2.5 py-1 justify-start items-center gap-1 flex">
              <div className="text-stone-900 text-sm font-medium leading-snug">
                0.0152 ETH
              </div>
            </div>
            <div className="grow shrink basis-0 h-[30px] px-2.5 py-1 justify-start items-center gap-1 flex">
              <div className="text-stone-900 text-sm font-medium leading-snug">
                @okaydun
              </div>
            </div>
            <div className="grow shrink basis-0 h-[30px] px-2.5 py-1 justify-start items-center gap-1 flex">
              <div className="text-stone-900 text-sm font-medium leading-snug">
                -
              </div>
            </div>
            <div className="grow shrink basis-0 h-[30px] px-2.5 py-1 justify-start items-center gap-1 flex">
              <div className="text-stone-900 text-sm font-medium leading-snug">
                2h ago
              </div>
            </div>
          </div>
          <div className="self-stretch px-2.5 py-1 justify-start items-center gap-1 inline-flex">
            <div className="grow shrink basis-0 h-[26px] px-2.5 py-1 justify-start items-center gap-1 flex">
              <div className="text-black text-xs font-bold leading-[18px] tracking-tight">
                Minted
              </div>
            </div>
            <div className="grow shrink basis-0 h-[30px] px-2.5 py-1 justify-start items-center gap-1 flex">
              <div className="text-stone-900 text-sm font-medium leading-snug">
                0.050 ETH
              </div>
            </div>
            <div className="grow shrink basis-0 h-[30px] px-2.5 py-1 justify-start items-center gap-1 flex">
              <div className="text-stone-900 text-sm font-medium leading-snug">
                NullAddress
              </div>
            </div>
            <div className="grow shrink basis-0 h-[30px] px-2.5 py-1 justify-start items-center gap-1 flex">
              <div className="text-stone-900 text-sm font-medium leading-snug">
                @okaydun
              </div>
            </div>
            <div className="grow shrink basis-0 h-[30px] px-2.5 py-1 justify-start items-center gap-1 flex">
              <div className="text-stone-900 text-sm font-medium leading-snug">
                1y ago
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssetActivity
