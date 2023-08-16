import clsx from 'clsx'

interface AssetPurchaseSectionProps {
  className?: string
}

const AssetPurchaseSection = ({
  className,
}: AssetPurchaseSectionProps): JSX.Element => {
  return (
    <div className={clsx(className)}>
      <div className="w-full h-[164px] p-5 bg-gray-100 rounded-[10px] flex-col justify-start items-start gap-5 inline-flex">
        <div className="justify-start items-start gap-5 inline-flex">
          <div className="text-stone-900 text-[32px] font-bold leading-[44px]">
            $30,267.04
          </div>
          <div className="px-[15px] py-2.5 bg-amber-300 bg-opacity-20 rounded justify-start items-start gap-2.5 flex">
            <div className="text-stone-900 text-base font-bold leading-normal">
              34.2 ETH
            </div>
          </div>
        </div>
        <div className="w-[611px] justify-start items-start gap-5 inline-flex">
          <div className="grow shrink basis-0 h-[60px] px-5 py-[15px] bg-blue-600 rounded justify-center items-center gap-2.5 flex">
            <div className="text-white text-2xl font-bold leading-[30px]">
              Buy now
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssetPurchaseSection
