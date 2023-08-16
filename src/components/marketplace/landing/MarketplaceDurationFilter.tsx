import clsx from 'clsx'

interface MarketplaceDurationFilterProps {
  className?: string
}

const MarketplaceDurationFilter = ({
  className,
}: MarketplaceDurationFilterProps): JSX.Element => {
  return (
    <div
      className={clsx(
        'w-[230px] h-fit p-1 bg-gray-200 dark:bg-stone-900 rounded border dark:border-stone-700 justify-start items-start inline-flex',
        className
      )}
    >
      <button className="w-fit h-9 px-3 py-1 bg-slate-50 rounded justify-center items-center gap-1 flex">
        <div className="text-black text-base font-bold whitespace-nowrap">
          24 H
        </div>
      </button>
      <button className="w-fit h-9 px-3 py-1 bg-gray-200 dark:bg-stone-900 justify-center items-center gap-1 flex">
        <div className="text-neutral-500 text-base font-bold whitespace-nowrap">
          7 Days
        </div>
      </button>
      <button className="w-fit h-9 px-3 py-1 bg-gray-200 dark:bg-stone-900 justify-center items-center gap-1 flex">
        <div className="text-neutral-500 text-base font-bold whitespace-nowrap">
          30 days
        </div>
      </button>
    </div>
  )
}

export default MarketplaceDurationFilter
