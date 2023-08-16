import clsx from 'clsx'

interface CreateCollectionFormStepperProps {
  className?: string
  currentStep: number
}

const CreateCollectionFormStepper = ({
  className,
  currentStep,
}: CreateCollectionFormStepperProps): JSX.Element => {
  return (
    <div className={clsx(className)}>
      <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
        <li
          className={clsx(
            "flex md:w-full items-center sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700",
            currentStep === 1
              ? 'text-blue-600 dark:text-blue-500 font-bold'
              : null
          )}
        >
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-400 dark:after:text-gray-500 whitespace-nowrap">
            {[2, 3].includes(currentStep) ? (
              <CheckMarkSVG />
            ) : (
              <span className="mr-2">1.</span>
            )}
            Upload Asset
          </span>
        </li>
        <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
          <span
            className={clsx(
              "flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-400 dark:after:text-gray-500 whitespace-nowrap",
              currentStep === 2
                ? 'text-blue-600 dark:text-blue-500 font-bold'
                : null
            )}
          >
            {currentStep == 3 ? (
              <CheckMarkSVG />
            ) : (
              <span className="mr-2">2.</span>
            )}
            Mint & Deploy
          </span>
        </li>
        <li
          className={clsx(
            'flex items-center whitespace-nowrap',
            currentStep === 3
              ? 'text-blue-600 dark:text-blue-500 font-bold'
              : null
          )}
        >
          <span className="mr-2">3.</span>
          Collection Details
        </li>
      </ol>
    </div>
  )
}

export default CreateCollectionFormStepper

const CheckMarkSVG = () => {
  return (
    <svg
      className="!w-6 !h-6 sm:w-4 sm:h-4 mr-2.5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="green"
      viewBox="0 0 20 20"
    >
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
    </svg>
  )
}
