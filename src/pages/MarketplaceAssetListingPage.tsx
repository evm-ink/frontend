import AssetActivity from '@/components/marketplace/listing/AssetActivity'
import AssetBlockchainInfo from '@/components/marketplace/listing/AssetBlockchainInfo'
import AssetInfo from '@/components/marketplace/listing/AssetInfo'
import AssetName from '@/components/marketplace/listing/AssetName'
import AssetOffers from '@/components/marketplace/listing/AssetOffers'
import AssetOwnershipInfo from '@/components/marketplace/listing/AssetOwnershipInfo'
import AssetPreview from '@/components/marketplace/listing/AssetPreview'
import AssetPurchaseSection from '@/components/marketplace/listing/AssetPurchaseSection'
import AssetTraits from '@/components/marketplace/listing/AssetTraits'
import AssetUserInteraction from '@/components/marketplace/listing/AssetUserInteraction'
import GoBack from '@/components/marketplace/listing/GoBack'
import clsx from 'clsx'

interface MarketplaceAssetListingPageProps {
  className?: string
}

const MarketplaceAssetListingPage = ({
  className,
}: MarketplaceAssetListingPageProps): JSX.Element => {
  return (
    <div
      className={clsx(
        'w-full max-w-screen-xl mx-auto py-10 flex flex-col gap-8',
        className
      )}
    >
      <GoBack className="" />
      <div className="flex gap-5">
        <div className="w-1/2 flex flex-col gap-5">
          <AssetPreview />
          <AssetBlockchainInfo />
          <AssetTraits />
        </div>
        <div className="w-1/2 flex flex-col gap-5">
          <AssetUserInteraction />
          <div className="w-full h-0.5 bg-zinc-800" />
          <AssetName />
          <AssetOwnershipInfo />
          <AssetInfo />
          <AssetPurchaseSection />
          <AssetOffers />
        </div>
      </div>
      <AssetActivity />
    </div>
  )
}

export default MarketplaceAssetListingPage
