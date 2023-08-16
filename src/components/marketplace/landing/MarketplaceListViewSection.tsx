import clsx from 'clsx'

interface MarketplaceListViewSectionProps {
  className?: string
}

const MarketplaceListViewSection = ({
  className,
}: MarketplaceListViewSectionProps): JSX.Element => {
  return <div className={clsx(className)}></div>
}

export default MarketplaceListViewSection
