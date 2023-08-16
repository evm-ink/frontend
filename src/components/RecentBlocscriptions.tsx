import BlockscriptionsFilters from './BlockscriptionsFilters'
import RecentBlockscriptionCardsSection from './RecentBlockscriptionCardsSection'

import { getPlatformNamePrefix } from '@/utils/getPlatformNamePrefix'

const RecentBlocscriptions = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-center text-4xl font-semibold mb-10 text-black dark:text-white">
        Recent {getPlatformNamePrefix()}scriptions
      </h1>
      <BlockscriptionsFilters className="mb-16" />
      <RecentBlockscriptionCardsSection />
    </div>
  )
}

export default RecentBlocscriptions
