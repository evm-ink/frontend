import clsx from 'clsx'

interface AssetPreviewProps {
  className?: string
}

const AssetPreview = ({ className }: AssetPreviewProps): JSX.Element => {
  return (
    <div
      className={clsx('relative flex items-center justify-center', className)}
    >
      <img
        className="w-full h-full aspect-square object-cover rounded-lg"
        src="https://picsum.photos/500/600"
        alt=""
      />
    </div>
  )
}

export default AssetPreview
