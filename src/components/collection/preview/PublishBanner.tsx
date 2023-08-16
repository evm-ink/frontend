import clsx from 'clsx'

interface PublishBannerProps {
  className?: string
  onPublishClick: () => void
}

const PublishBanner = ({
  className,
  onPublishClick,
}: PublishBannerProps): JSX.Element => {
  return (
    <div
      className={clsx(
        'h-[72px] bg-[#3863E4] flex items-center justify-center gap-5 z-50',
        className
      )}
    >
      <h4 className="text-white font-medium">
        You are currently in{' '}
        <span className="font-bold uppercase underline underline-offset-4">
          edit mode
        </span>
      </h4>
      <button
        className="bg-black text-white rounded py-1 px-5 font-bold text-lg"
        onClick={onPublishClick}
      >
        Publish ↗
      </button>
    </div>
  )
}

export default PublishBanner
