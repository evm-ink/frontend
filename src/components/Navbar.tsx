import clsx from 'clsx'
import { useState } from 'react'
import {
  Link,
  NavLink,
  // useLocation
} from 'react-router-dom'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

import useDarkMode from '@/hooks/theme/useDarkMode'
import { getPlatformNamePrefix } from '@/utils/getPlatformNamePrefix'

import { ReactComponent as AppLogoSvg } from '@/assets/app-logo.svg'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const [isDarkMode, toggleDarkMode] = useDarkMode()

  // const { pathname } = useLocation()
  const { address, isConnected } = useAccount()

  return (
    <div className="fixed top-0 right-0 left-0 w-full bg-slate-50 dark:bg-zinc-950 border-b-slate-200 dark:border-b-slate-700 h-[90px] shadow-md border-b-2 z-50">
      <div className="flex flex-col h-full w-full container mx-auto lg:items-center lg:justify-between lg:flex-row px-4 py-8 lg:py-0 lg:px-4">
        <div className="flex flex-row items-center justify-between h-full">
          <Link to="/">
            <AppLogoSvg className="w-fit h-8 lg:h-10 xl:h-12 dark:text-white" />
          </Link>
          <HamburgerButton
            open={open}
            onClick={() => setOpen((prevState) => !prevState)}
          />
        </div>
        <nav
          className={clsx(
            open ? 'flex p-4' : 'hidden',
            'flex-col items-center flex-grow pb-4 lg:pb-0 lg:flex lg:justify-end lg:flex-row gap-4 bg-slate-50 dark:bg-zinc-950 z-50'
          )}
        >
          <DarkModeSwitch
            style={{}}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={28}
          />

          {isConnected && address ? (
            <NavLink
              to={`/profile/${address}`}
              className={({ isActive }) =>
                clsx(
                  'text-md font-medium py-2 flex items-center whitespace-nowrap',
                  isActive && '!font-bold',
                  'px-4 py-2 lg:p-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-100 rounded-lg lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                )
              }
            >
              My {getPlatformNamePrefix()}scriptions
            </NavLink>
          ) : null}
          {/* <NavLink
            to={`/collections`}
            end
            className={({ isActive }) =>
              clsx(
                'text-md font-medium py-2 flex items-center',
                isActive && '!font-bold',
                'px-4 py-2 lg:p-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-100 rounded-lg lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
              )
            }
          >
            Collections
          </NavLink> */}
          <NavLink
            to={`/tokens`}
            end
            className={({ isActive }) =>
              clsx(
                'text-md font-medium py-2 flex items-center',
                isActive && '!font-bold',
                'px-4 py-2 lg:p-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-100 rounded-lg lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
              )
            }
          >
            Tokens
          </NavLink>
          {/* <NavLink
            to={`/roadmap`}
            end
            className={({ isActive }) =>
              clsx(
                'text-md font-medium py-2 flex items-center',
                isActive && '!font-bold',
                'px-4 py-2 lg:p-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-100 rounded-lg lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
              )
            }
          >
            Roadmap
          </NavLink> */}

          <ConnectButton
            showBalance={false}
            accountStatus={'address'}
            chainStatus={'icon'}
          />

          {/* {address && isConnected && pathname !== '/create/collection' ? (
            <Link to="/create/collection">
              <button
                className={clsx(
                  'text-md font-medium py-2 flex items-center',
                  'px-4 py-2 mt-2 text-sm font-semibold text-gray-50 bg-blue-500 rounded-lg lg:mt-0 hover:text-white focus:text-white hover:bg-blue-600 focus:bg-bg-900 focus:outline-none focus:shadow-outline bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 text-center shadow-sm hover:shadow-md whitespace-nowrap'
                )}
              >
                Create Collection
              </button>
            </Link>
          ) : null} */}
        </nav>
      </div>
    </div>
  )
}

export default Navbar

const HamburgerButton = ({
  open,
  onClick,
}: {
  open: boolean
  onClick: () => void
}) => {
  return (
    <button
      className="lg:hidden rounded-lg focus:outline-none focus:shadow-outline dark:text-white"
      onClick={onClick}
    >
      <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
        {!open ? (
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        ) : (
          <path
            x-show="open"
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        )}
      </svg>
    </button>
  )
}
