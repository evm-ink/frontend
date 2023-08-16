import clsx from 'clsx'
import { AiFillFileUnknown } from 'react-icons/ai'

import Spinner from './Spinner'

import { useGetContentToRender } from '@/hooks/useGetContentToRender.query'

interface SmartContentRendererProps {
  className?: string
  url: string
  mimeType: string
}

const SmartContentRenderer = ({
  className,
  url,
  mimeType,
}: SmartContentRendererProps): JSX.Element => {
  const { data, isLoading } = useGetContentToRender({
    url: url,
    mimeType: mimeType,
  })

  return (
    <div
      className={clsx(
        'w-full aspect-square flex items-center justify-center rounded-3xl overflow-hidden bg-slate-100 dark:bg-zinc-700 text-gray-900 dark:text-gray-100',
        className
      )}
    >
      {isLoading ? (
        <Spinner />
      ) : !data ? (
        <></>
      ) : (
        renderContent({
          mimeType: data?.mimeType,
          url: data?.renderUrl,
          content: data?.renderContent,
        })
      )}
    </div>
  )
}

export default SmartContentRenderer

function renderContent({
  mimeType,
  url,
  content,
}: {
  mimeType: string
  url?: string
  content?: string
}) {
  const contentGroup = mimeType.split('/')[0]

  switch (contentGroup) {
    case 'image':
      return (
        <div className="w-full aspect-square">
          <img
            loading="lazy"
            className="w-full h-full object-cover"
            src={url}
            alt=""
          />
        </div>
      )

    case 'video':
      return (
        <video controls className="w-full aspect-square object-cover">
          <source src={url} type={mimeType} />
          Your browser does not support the video tag.
        </video>
      )

    case 'audio':
      return (
        <audio className="w-full aspect-square" controls loop>
          <source src={url} type={mimeType} />
          Your browser does not support the audio tag.
        </audio>
      )

    case 'text':
      return (
        <>
          {url ? (
            <div className="w-full aspect-square">
              <iframe
                className="min-w-full h-full aspect-square"
                src={url}
                sandbox=""
                loading="lazy"
              />
            </div>
          ) : null}
          {content ? (
            <pre className="text-sm font-medium px-2 py-2 w-full break-all whitespace-pre-wrap aspect-square flex items-center justify-center overflow-hidden">
              {content}
            </pre>
          ) : null}
        </>
      )

    default:
      return <AiFillFileUnknown size={48} />
  }
}
