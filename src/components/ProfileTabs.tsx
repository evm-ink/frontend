import clsx from 'clsx'
import { getPlatformNamePrefix } from '@/utils/getPlatformNamePrefix'

interface ProfileTabsProps {
  className?: string
  currentTab: string
  onTabClick: (tab: string) => void
}

const ProfileTabs = ({
  className,
  currentTab,
  onTabClick,
}: ProfileTabsProps): JSX.Element => {
  return (
    <div className={clsx(className)}>
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-500">
        <li className="">
          <ProfileTab
            tabLabel={`My ${getPlatformNamePrefix()}scriptions`}
            tabValue={`${getPlatformNamePrefix()}scriptions`}
            isActive={`${getPlatformNamePrefix()}scriptions` === currentTab}
            onTabClick={onTabClick}
          />
        </li>
        <li className="">
          <ProfileTab
            tabLabel={`My Collections`}
            tabValue={`collections`}
            isActive={`collections` === currentTab}
            onTabClick={onTabClick}
          />
        </li>
      </ul>
    </div>
  )
}

export default ProfileTabs

interface ProfileTabProps {
  className?: string
  tabLabel: string
  tabValue: string
  isActive?: boolean
  onTabClick: (tabValue: string) => void
}

const ProfileTab = ({
  className,
  tabLabel,
  tabValue,
  isActive = false,
  onTabClick,
}: ProfileTabProps): JSX.Element => {
  return (
    <button
      onClick={() => {
        onTabClick(tabValue)
      }}
      aria-current="page"
      className={clsx(
        'inline-block min-w-[100px] p-4 rounded-t-lg capitalize',
        isActive
          ? 'bg-blue-600 text-white border-blue-600 font-bold'
          : 'text-blue-600 bg-gray-300',
        className
      )}
    >
      {tabLabel}
    </button>
  )
}
