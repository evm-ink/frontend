import clsx from 'clsx'

interface AssetNameProps {
  className?: string
}

const AssetName = ({ className }: AssetNameProps): JSX.Element => {
  return (
    <div className={clsx(className)}>
      <div className="w-full text-stone-900 text-5xl font-bold leading-[62px]">
        DANKBOTS #3482
      </div>
    </div>
  )
}

export default AssetName
