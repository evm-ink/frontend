import clsx from 'clsx'
import { getPlatformNamePrefix } from '@/utils/getPlatformNamePrefix'

type Props = { className?: string }

const ProjectTimeline = ({ className }: Props) => {
  return (
    <div className={clsx([className])}>
      <ol className="relative border-l border-gray-700">
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
            <SvgIconElement />
          </span>
          <h3 className="flex items-center mb-2 text-xl leading-4 font-semibold text-gray-900 dark:text-white">
            {getPlatformNamePrefix()}scription MVP release v0.1.0{' '}
            {/* <span className="text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-300 ml-3">
              Current Release
            </span> */}
          </h3>
          <time className="block mb-2 text-sm font-medium leading-none text-gray-500 dark:text-gray-300">
            Released on 22 June 2023.
          </time>
          <p className="mb-4 text-base font-normal text-gray-400">
            Get access to the most advanced inscription platform ever built.
            Inscribe multiple file types with a hyper gas-optimised platform
            made for ease of use with the fastest indexer in the industry. You
            also get access to contact us to launch your collections of
            inscriptions for a minimal fee to support development. You can come
            chat with us at{' '}
            <span className="hover:underline hover:underline-offset-4 text-blue-700">
              <a href="https://t.me/evmink" target="_blank">
                https://t.me/evmink
              </a>
            </span>
          </p>
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
            <SvgIconElement />
          </span>
          <h3 className="mb-2 text-xl leading-6 font-semibold text-gray-900 dark:text-white">
            {getPlatformNamePrefix()}scription Trailblazers v0.2.0
            <span className="text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-300 ml-3">
              Current Release
            </span>
          </h3>
          <time className="block mb-2 text-sm font-medium leading-none text-gray-500 dark:text-gray-300">
            Released on 20 July 2023.
          </time>
          <p className="text-base font-normal text-gray-400">
            With the trailblazers platform we intend to bring the option of
            permissionless UGC (user generated content) in both singles and
            collections. Along with the launch of collections we also intend to
            bring a pledge to claim inscription features and waitlists along
            with an experimental implementation of on-chain royalties.
          </p>
        </li>
        <li className="ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">
            <SvgIconElement />
          </span>
          <h3 className="mb-2 text-xl leading-6 font-semibold text-gray-900 dark:text-white">
            {getPlatformNamePrefix()}scription Growth v0.3.0
          </h3>
          <time className="block mb-2 text-sm font-medium leading-none text-gray-500 dark:text-gray-300">
            Expected release on 1 August 2023.
          </time>
          <p className="text-base font-normal text-gray-400 pb-10">
            With the growth release we intend to bring a fully decentralised
            marketplace to the inscriptions world. Your inscriptions will never
            be dependent on 3rd parties like openSea to allow you to trade it
            with the world. The go-to features would be bringing in an on-chain
            escrow contract and the ability to bid and accept bids on chain.
            This also comes with a dedicated launchpad to help verified projects
            port their collections seamlessly on the inscriptions infrastructure
            and also an ability for professional creators to get a pre-verified
            project to launch. We shall ensure the highest grade of security and
            user-friendly experience.
          </p>
        </li>
      </ol>
    </div>
  )
}

export default ProjectTimeline

const SvgIconElement = () => {
  return (
    <svg
      aria-hidden="true"
      className="w-3 h-3 text-blue-300"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}
