import clsx from 'clsx'
import { BsGridFill } from 'react-icons/bs'
import { ImList2 } from 'react-icons/im'

interface MarketplaceListingViewSwitchProps {
  className?: string
}

const MarketplaceListingViewSwitch = ({
  className,
}: MarketplaceListingViewSwitchProps): JSX.Element => {
  return (
    <div
      className={clsx(
        'w-fit h-fit p-1 bg-gray-200 dark:bg-stone-900 rounded border dark:border-stone-700 justify-start items-start inline-flex',
        className
      )}
    >
      <button
        type="button"
        className="w-12 h-9 px-3 py-1 bg-slate-50 rounded justify-center items-center gap-1 flex"
      >
        <div className="w-6 h-6 relative flex items-center justify-center">
          <BsGridFill className="w-full h-full" />
        </div>
      </button>
      <button
        type="button"
        className="w-12 h-9 px-3 py-1 bg-gray-200 dark:bg-stone-900 justify-center items-center gap-1 flex"
      >
        <div className="w-6 h-6 relative flex items-center justify-center">
          <ImList2 className="w-full h-full dark:text-white" />
        </div>
      </button>
    </div>
  )
}

export default MarketplaceListingViewSwitch
