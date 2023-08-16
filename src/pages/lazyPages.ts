import loadable from '@loadable/component'

export const UserBlockscriptionsPage = loadable(
  () => import('./UserBlockscriptionsPage')
)
export const ViewBlockscriptionPage = loadable(
  () => import('./ViewBlockscriptionPage')
)
export const CollectionsPage = loadable(() => import('./CollectionsPage'))
export const CollectionPage = loadable(() => import('./CollectionPage'))
export const ViewCollectionPage = loadable(() => import('./ViewCollectionPage'))
export const RoadmapPage = loadable(() => import('./RoadmapPage'))
export const CreateCollectionPage = loadable(
  () => import('./CreateCollectionPage')
)
export const EditCollectionPage = loadable(() => import('./EditCollectionPage'))
export const PreviewCollectionPage = loadable(
  () => import('./PreviewCollectionPage')
)
export const CreateProfilePage = loadable(() => import('./CreateProfilePage'))
export const EditProfilePage = loadable(() => import('./EditProfilePage'))
export const UserProfilePage = loadable(() => import('./UserProfilePage'))

export const MarketplaceLandingPage = loadable(
  () => import('./MarketplaceLandingPage')
)
export const MarketplaceAssetListingPage = loadable(
  () => import('./MarketplaceAssetListingPage')
)
