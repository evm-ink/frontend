import clsx from 'clsx'

interface InfoPillProps {
  className?: string
  infoKey: string
  infoValue: string
}

const InfoPill = ({
  className,
  infoKey,
  infoValue,
}: InfoPillProps): JSX.Element => {
  return (
    <div
      className={clsx(
        'flex items-center justify-center px-3 py-1 text-lg font-medium bg-[#ECEEEF] text-[#7A7A7A] rounded gap-1',
        className
      )}
    >
      {infoKey}
      <span className="font-bold text-black">{infoValue}</span>
    </div>
  )
}

export default InfoPill
