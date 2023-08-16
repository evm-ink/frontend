import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useAccount } from 'wagmi'
import { useEffect } from 'react'

const Root = () => {
  const { address } = useAccount()

  useEffect(() => {
    localStorage.setItem('address', address ?? '')
  }, [address])

  return (
    <div className="relative">
      <Navbar />
      <div className="flex flex-col w-full mt-[90px] min-h-[calc(100vh-90px)] bg-slate-50 dark:bg-zinc-950 p-5 pb-14">
        <Outlet />
      </div>
    </div>
  )
}

export default Root
