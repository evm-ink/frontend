import clsx from 'clsx'

interface MarketplaceBannerProps {
  className?: string
}

const MarketplaceBanner = ({
  className,
}: MarketplaceBannerProps): JSX.Element => {
  return (
    <div
      className={clsx(
        'w-full aspect-[4/1] rounded-3xl overflow-hidden',
        className
      )}
    >
      <img
        className="w-full h-full object-cover"
        src="https://picsum.photos/1600/900"
        alt=""
      />
    </div>
  )
}

export default MarketplaceBanner
