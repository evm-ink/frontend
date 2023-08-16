import clsx from 'clsx'

interface MarketplaceGridViewCardProps {
  className?: string
}

const MarketplaceGridViewCard = ({
  className,
}: MarketplaceGridViewCardProps): JSX.Element => {
  return (
    <div
      className={clsx(
        'w-full rounded-lg h-fit flex-col justify-start items-start inline-flex bg-zinc-300',
        className
      )}
    >
      <div className="w-full aspect-square overflow-hidden rounded-t-lg">
        <img
          src="https://picsum.photos/400"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full flex flex-col gap-4 px-4 py-6">
        <div className="w-full flex-col justify-start items-start gap-2 flex">
          <div className="w-full text-black text-xl font-black leading-normal">
            DANKBOTS #3482
          </div>
          <div className="w-full opacity-50 text-black text-base font-semibold leading-tight">
            Owner: 0x3243454...grde455
          </div>
        </div>
        <div className="w-full flex items-center justify-between gap-2">
          <div className="text-stone-900 text-xl font-black leading-9">
            0.32 ETH
          </div>
          <div className="w-[120px] h-10 p-1 bg-blue-600 rounded-lg justify-center items-center gap-1 flex">
            <div className="text-white text-lg font-bold leading-9">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketplaceGridViewCard
