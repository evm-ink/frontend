import { Helmet } from 'react-helmet-async'

import UserBlocscriptions from '@/components/UserBlockscriptions'

const MyBlockscriptionsPage = () => {
  return (
    <>
      <Helmet>
        <title>User Blockscriptions</title>
      </Helmet>
      <UserBlocscriptions />
    </>
  )
}

export default MyBlockscriptionsPage
