import clsx from 'clsx'

interface AssetOffersProps {
  className?: string
}

const AssetOffers = ({ className }: AssetOffersProps): JSX.Element => {
  return (
    <div className={clsx(className)}>
      <div className="w-full h-fit px-5 py-4 bg-gray-100 rounded-[10px] border border-stone-300 flex-col justify-start items-start gap-5 inline-flex">
        <div className="w-full text-black text-xl font-bold leading-normal">
          Offers
        </div>
        <div className="w-full h-[155px] flex-col justify-start items-start gap-px flex">
          <div className="self-stretch px-2.5 bg-stone-900 justify-start items-center gap-1 inline-flex">
            <div className="grow shrink basis-0 h-[38px] px-2.5 py-2 justify-start items-center gap-1 flex">
              <div className="text-white text-sm font-medium leading-snug">
                Price
              </div>
            </div>
            <div className="px-2.5 py-2 justify-start items-center gap-1 flex">
              <div className="text-white text-sm font-medium leading-snug">
                USD Price
              </div>
            </div>
            <div className="h-[38px] px-2.5 py-2 justify-start items-center gap-1 flex">
              <div className="text-white text-sm font-medium leading-snug">
                Floor Difference
              </div>
            </div>
            <div className="h-[38px] px-2.5 py-2 justify-start items-center gap-1 flex">
              <div className="text-white text-sm font-medium leading-snug">
                Expire
              </div>
            </div>
            <div className="h-[38px] px-2.5 py-2 justify-start items-center gap-1 flex">
              <div className="text-white text-sm font-medium leading-snug">
                From
              </div>
            </div>
          </div>
          <div className="self-stretch px-2.5 py-1 justify-start items-center gap-1 inline-flex">
            <div className="grow shrink basis-0 h-[26px] px-2.5 py-1 justify-start items-center gap-1 flex">
              <div className="text-black text-xs font-bold leading-[18px] tracking-tight">
                5 WETH
              </div>
            </div>
            <div className="h-[30px] px-2.5 py-1 justify-start items-center gap-1 flex">
              <div className="text-stone-900 text-sm font-medium leading-snug">
                $19,636.95
              </div>
            </div>
            <div className="h-[30px] px-2.5 py-1 justify-start items-center gap-1 flex">
              <div className="text-stone-900 text-sm font-medium leading-snug">
                25.0% up
              </div>
            </div>
            <div className="h-[30px] px-2.5 py-1 justify-start items-center gap-1 flex">
              <div className="text-stone-900 text-sm font-medium leading-snug">
                in 5 days
              </div>
            </div>
            <div className="h-[30px] px-2.5 py-1 justify-start items-center gap-1 flex">
              <div className="text-stone-900 text-sm font-medium leading-snug">
                randomNobal
              </div>
            </div>
          </div>
          <div className="self-stretch px-2.5 py-1 justify-start items-center gap-1 inline-flex">
            <div className="grow shrink basis-0 h-[26px] px-2.5 py-1 justify-start items-center gap-1 flex">
              <div className="text-black text-xs font-bold leading-[18px] tracking-tight">
                5 WETH
              </div>
            </div>
            <div className="h-[30px] px-2.5 py-1 justify-start items-center gap-1 flex">
              <div className="text-stone-900 text-sm font-medium leading-snug">
                $19,636.95
              </div>
            </div>
            <div className="h-[30px] px-2.5 py-1 justify-start items-center gap-1 flex">
              <div className="text-stone-900 text-sm font-medium leading-snug">
                25.0% up
              </div>
            </div>
            <div className="h-[30px] px-2.5 py-1 justify-start items-center gap-1 flex">
              <div className="text-stone-900 text-sm font-medium leading-snug">
                in 5 days
              </div>
            </div>
            <div className="h-[30px] px-2.5 py-1 justify-start items-center gap-1 flex">
              <div className="text-stone-900 text-sm font-medium leading-snug">
                randomNobal
              </div>
            </div>
          </div>
          <div className="self-stretch px-2.5 py-1 justify-start items-center gap-1 inline-flex">
            <div className="grow shrink basis-0 h-[26px] px-2.5 py-1 justify-start items-center gap-1 flex">
              <div className="text-black text-xs font-bold leading-[18px] tracking-tight">
                5 WETH
              </div>
            </div>
            <div className="h-[30px] px-2.5 py-1 justify-start items-center gap-1 flex">
              <div className="text-stone-900 text-sm font-medium leading-snug">
                $19,636.95
              </div>
            </div>
            <div className="h-[30px] px-2.5 py-1 justify-start items-center gap-1 flex">
              <div className="text-stone-900 text-sm font-medium leading-snug">
                25.0% up
              </div>
            </div>
            <div className="h-[30px] px-2.5 py-1 justify-start items-center gap-1 flex">
              <div className="text-stone-900 text-sm font-medium leading-snug">
                in 5 days
              </div>
            </div>
            <div className="h-[30px] px-2.5 py-1 justify-start items-center gap-1 flex">
              <div className="text-stone-900 text-sm font-medium leading-snug">
                randomNobal
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssetOffers
