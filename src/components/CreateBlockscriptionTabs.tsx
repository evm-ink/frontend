import clsx from 'clsx'

interface CreateBlockscriptionTabsProps {
  className?: string
  currentTab: string
  onTabClick: (tab: string) => void
}

const CreateBlockscriptionTabs = ({
  className,
  currentTab,
  onTabClick,
}: CreateBlockscriptionTabsProps): JSX.Element => {
  return (
    <div className={clsx(className)}>
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-500">
        <li className="">
          <button
            onClick={() => {
              onTabClick('files')
            }}
            aria-current="page"
            className={clsx(
              'inline-block min-w-[100px] border p-4  rounded-t-lg capitalize',
              'files' === currentTab
                ? 'bg-blue-600 text-white border-blue-600 '
                : 'text-blue-600 bg-gray-100'
            )}
          >
            files
          </button>
        </li>
        <li className="">
          <button
            onClick={() => {
              onTabClick('text')
            }}
            aria-current="page"
            className={clsx(
              'inline-block min-w-[100px] border p-4 text-blue-600 bg-gray-100 rounded-t-lg capitalize',
              {
                'text-blue-600 hover:text-blue-600 border-blue-600 ':
                  'text' === currentTab,
              }
            )}
          >
            text
          </button>
        </li>
        <li className="">
          <button
            onClick={() => {
              onTabClick('token')
            }}
            aria-current="page"
            className={clsx(
              'inline-block min-w-[100px] border p-4 text-blue-600 bg-gray-100 rounded-t-lg capitalize',
              {
                'text-blue-600 hover:text-blue-600 border-blue-600 ':
                  'token' === currentTab,
              }
            )}
          >
            Token
          </button>
        </li>
      </ul>
    </div>
  )
}

export default CreateBlockscriptionTabs
