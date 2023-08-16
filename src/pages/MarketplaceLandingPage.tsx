import clsx from 'clsx'

import MarketplaceBanner from '@/components/marketplace/landing/MarketplaceBanner'
import MarketplaceChainsFilter from '@/components/marketplace/landing/MarketplaceChainsFilter'
import MarketplaceSearchFilter from '@/components/marketplace/landing/MarketplaceSearchFilter'
import MarketplaceBlockscriptionTypesFilter from '@/components/marketplace/landing/MarketplaceBlockscriptionTypeFilter'
import MarketplaceListingViewSwitch from '@/components/marketplace/landing/MarketplaceListingViewSwitch'
import MarketplaceDurationFilter from '@/components/marketplace/landing/MarketplaceDurationFilter'
import MarketplaceGridViewSection from '@/components/marketplace/landing/MarketplaceGridViewSection'

interface MarketplaceLandingPageProps {
  className?: string
}

const MarketplaceLandingPage = ({
  className,
}: MarketplaceLandingPageProps): JSX.Element => {
  return (
    <main className={clsx('container mx-auto py-7', className)}>
      <MarketplaceBanner className="mb-2" />
      <div className="flex items-center justify-between py-9 border-b-[1px] border-b-gray-400">
        <MarketplaceChainsFilter />
        <MarketplaceSearchFilter />
      </div>
      <div className="flex items-center justify-between py-6">
        <MarketplaceBlockscriptionTypesFilter />
        <div className="flex items-center gap-3">
          <MarketplaceDurationFilter />
          <MarketplaceListingViewSwitch />
        </div>
      </div>
      <MarketplaceGridViewSection />
    </main>
  )
}

export default MarketplaceLandingPage
