import clsx from 'clsx'
import {
  BsDiscord,
  BsGlobe,
  BsInstagram,
  BsMedium,
  BsTelegram,
  BsTwitter,
} from 'react-icons/bs'

interface SocialLinksProps {
  className?: string
  externalUrl?: string
  discordUsername?: string
  instagramUsername?: string
  mediumUsername?: string
  telegramUsername?: string
  twitterUsername?: string
  iconSize: number | string
}

const SocialLinks = ({
  className,
  externalUrl,
  discordUsername,
  instagramUsername,
  mediumUsername,
  telegramUsername,
  twitterUsername,
  iconSize = '16px',
}: SocialLinksProps): JSX.Element => {
  return (
    <div className={clsx('flex gap-3 dark:text-white', className)}>
      {externalUrl ? (
        <a href={externalUrl} target="_blank">
          <BsGlobe size={iconSize} />
        </a>
      ) : null}
      {discordUsername ? (
        <a
          href={`https://discordapp.com/users/${discordUsername}`}
          target="_blank"
        >
          <BsDiscord size={iconSize} />
        </a>
      ) : null}
      {instagramUsername ? (
        <a href={`https://instagram.com/${instagramUsername}`} target="_blank">
          <BsInstagram size={iconSize} />
        </a>
      ) : null}
      {mediumUsername ? (
        <a href={`https://medium.com/${mediumUsername}`} target="_blank">
          <BsMedium size={iconSize} />
        </a>
      ) : null}
      {telegramUsername ? (
        <a href={`https://t.me/${telegramUsername}`} target="_blank">
          <BsTelegram size={iconSize} />
        </a>
      ) : null}
      {twitterUsername ? (
        <a href={`https://twitter.com/${twitterUsername}`} target="_blank">
          <BsTwitter size={iconSize} />
        </a>
      ) : null}
    </div>
  )
}

export default SocialLinks
