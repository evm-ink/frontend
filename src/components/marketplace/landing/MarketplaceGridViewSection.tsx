import clsx from 'clsx'
import MarketplaceGridViewCard from './MarketplaceGridViewCard'

interface MarketplaceGridViewSectionProps {
  className?: string
}

const MarketplaceGridViewSection = ({
  className,
}: MarketplaceGridViewSectionProps): JSX.Element => {
  return (
    <div
      className={clsx(
        'grid grid-flow-row gap-4 container text-neutral-600 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
        className
      )}
    >
      {new Array(12).fill(0).map((_, i) => (
        <MarketplaceGridViewCard key={i} />
      ))}
    </div>
  )
}

export default MarketplaceGridViewSection
