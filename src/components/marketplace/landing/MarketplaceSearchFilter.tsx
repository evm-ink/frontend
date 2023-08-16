import clsx from 'clsx'

interface MarketplaceSearchFilterProps {
  className?: string
}

const MarketplaceSearchFilter = ({
  className,
}: MarketplaceSearchFilterProps): JSX.Element => {
  return <div className={clsx(className)}></div>
}

export default MarketplaceSearchFilter
