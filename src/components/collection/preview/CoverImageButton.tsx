import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

type CoverImageButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const CoverImageButton = ({
  className,
  ...props
}: CoverImageButtonProps): JSX.Element => {
  return (
    <button
      className={clsx(
        'border-2 border-black px-4 py-1 rounded text-black font-bold text-lg z-10 bg-[#ECEEEF]',
        className
      )}
      {...props}
    >
      {props.children}
    </button>
  )
}

export default CoverImageButton
