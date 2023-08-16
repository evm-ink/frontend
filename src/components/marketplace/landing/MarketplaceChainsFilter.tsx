import clsx from 'clsx'

interface MarketplaceChainsFilterProps {
  className?: string
}

const btnTexts = ['All Chains', 'Binance', 'Polygon', 'Ethereum', 'Arbitrum']

const MarketplaceChainsFilter = ({
  className,
}: MarketplaceChainsFilterProps): JSX.Element => {
  return (
    <div
      className={clsx('flex h-fit gap-3 items-center justify-start', className)}
    >
      {btnTexts.map((btnText, i) => (
        <FilterButton
          key={i}
          isActive={btnText === 'All Chains'}
          btnText={btnText}
          onClick={() => null}
        />
      ))}
    </div>
  )
}

export default MarketplaceChainsFilter

type FilterButtonProps = {
  className?: string
  btnText: string
  isActive?: boolean
  onClick: () => void
}

const FilterButton = ({
  className,
  btnText,
  isActive,
  onClick,
}: FilterButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'w-fit h-10 px-3 py-1 rounded flex justify-center items-center text-base font-bold leading-9',
        {
          'bg-stone-900 dark:bg-white text-white dark:text-black': isActive,
          'bg-gray-200 dark:bg-stone-900 text-neutral-500 dark:text-white':
            !isActive,
        },
        className
      )}
    >
      {btnText}
    </button>
  )
}
