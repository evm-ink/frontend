import clsx from 'clsx'
import { FaShareAlt } from 'react-icons/fa'
import { LuCopy, LuMoreVertical } from 'react-icons/lu'

interface UserInteractionProps {
  className?: string
}

const AssetUserInteraction = ({
  className,
}: UserInteractionProps): JSX.Element => {
  return (
    <div className={clsx(className)}>
      <div className="w-full h-[34px] justify-start items-center gap-[532px] inline-flex">
        <div className="px-5 py-[5px] bg-zinc-100 rounded-[60px] justify-start items-start gap-2.5 flex">
          <div className="w-6 h-6 relative">
            <div className="w-[18px] h-[18px] left-[3px] top-[3px] absolute">
              <LuCopy />
            </div>
          </div>
        </div>
        <div className="h-6 justify-between items-center gap-4 flex">
          <div className="w-6 h-6 relative">
            <div className="w-4 h-[18px] left-[4px] top-[3px] absolute">
              <div className="w-4 h-[18px] left-0 top-0 absolute">
                <FaShareAlt />
              </div>
            </div>
          </div>
          <div className="w-6 h-6 relative">
            <LuMoreVertical />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssetUserInteraction
