import { Helmet } from 'react-helmet-async'
// import { useFlag } from '@unleash/proxy-client-react'

import RecentBlocscriptions from '@/components/RecentBlocscriptions'
import CreateBlockscriptionSection from '@/components/CreateBlockscriptionSection'

import { getPlatformNamePrefix } from '@/utils/getPlatformNamePrefix'

const LandingPage = () => {
  // const enabled = useFlag('create-inscription')

  return (
    <>
      <Helmet>
        <title>{getPlatformNamePrefix()}scription</title>
      </Helmet>
      {/* {enabled && ( */}
      <section className="flex flex-col w-full justify-center items-center mb-20">
        <CreateBlockscriptionSection />
        <div className="border-b-[1px] border-b-slate-500 w-full" />
      </section>
      {/* )} */}
      <RecentBlocscriptions />
    </>
  )
}

export default LandingPage
