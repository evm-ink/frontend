import clsx from 'clsx'

interface LoadingBlockscriptionsCardProps {
  className?: string
}

const LoadingBlockscriptionsCard = ({
  className,
}: LoadingBlockscriptionsCardProps): JSX.Element => {
  return (
    <div
      className={clsx(
        'w-full max-w-[400px] flex h-full max-h-[600px] bg-white dark:bg-zinc-900 rounded-3xl shadow-lg dark:shadow-md shadow-gray-200 dark:shadow-zinc-800 duration-300 hover:-translate-y-1 flex-col gap-3 items-center justify-between cursor-loading overflow-hidden dark:border-[1px] dark:border-zinc-700',
        className
      )}
    >
      <div className="w-3/4 mt-4 h-8 animate-pulse bg-blue bg-gray-700 dark:bg-zinc-500 rounded-3xl" />
      <div className="w-full px-4 ">
        <div className="w-full aspect-square rounded-3xl animate-pulse bg-gray-700 dark:bg-zinc-500"></div>
      </div>
      <div className="w-full px-4 flex items-center justify-between gap-2">
        <div className="w-full h-4 rounded-full animate-pulse bg-gray-700 dark:bg-zinc-500" />
        <div className="w-full h-4 rounded-full animate-pulse bg-gray-700 dark:bg-zinc-500" />
        <div className="w-full h-4 rounded-full animate-pulse bg-gray-700 dark:bg-zinc-500" />
      </div>
      <div className="w-full px-4 pb-2">
        <h4 className="mb-2 flex items-center justify-between gap-2">
          <div className="w-full h-8 animate-pulse bg-gray-700 dark:bg-zinc-500 rounded-full" />
          <div className="w-full h-8 animate-pulse bg-gray-700 dark:bg-zinc-500 rounded-full" />
        </h4>
      </div>
    </div>
  )
}

export default LoadingBlockscriptionsCard
