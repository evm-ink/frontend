import { Buffer } from 'buffer'
import { FaFileAlt } from 'react-icons/fa'

type Props = { contentUri: string; mimeType?: string; category?: string }

const CardContentUriRenderer = ({ contentUri, mimeType, category }: Props) => {
  return (
    <div className="w-full aspect-square flex items-center justify-center rounded-3xl overflow-hidden bg-slate-100 dark:bg-zinc-700 text-gray-900 dark:text-gray-100">
      {(() => {
        const regex = /^data:([a-zA-Z0-9]+\/[a-zA-Z0-9]+)/
        const match = contentUri.match(regex)

        switch (match?.[1] || mimeType || category) {
          case 'image/jpeg':
          case 'image/gif':
          case 'image/png':
          case 'image/svg':
          case 'image/svg+xml':
          case 'image':
            return (
              <div className="w-full aspect-square">
                <img
                  loading="lazy"
                  className="w-full aspect-square object-cover"
                  src={contentUri}
                  alt=""
                />
              </div>
            )

          case 'text/html':
          case 'html':
            return (
              <div className="w-full aspect-square">
                <iframe
                  className="min-w-full h-full aspect-square"
                  src={contentUri}
                  sandbox="allow-scripts"
                  loading="lazy"
                />
              </div>
            )

          case 'video/mp4':
          case 'video/webm':
          case 'video':
            return (
              <video controls className="w-full aspect-square object-cover">
                <source src={contentUri} type={match?.[1]} />
                Your browser does not support the video tag.
              </video>
            )

          case 'audio/mp3':
          case 'audio/mpeg':
          case 'audio/wav':
          case 'audio':
            return (
              <audio className="w-full aspect-square" controls loop>
                <source src={contentUri} type={match?.[1]} />
                Your browser does not support the audio tag.
              </audio>
            )

          case 'application/json':
            return (
              <p className="text-base font-medium px-4 py-4 w-full break-all whitespace-pre-wrap aspect-square flex items-center justify-center overflow-hidden">
                {(() => {
                  const possibleJsonString = contentUri.replace(
                    'data:application/json,',
                    ''
                  )
                  try {
                    const parsedData = JSON.parse(possibleJsonString)
                    return JSON.stringify(parsedData, null, 4)
                  } catch (error) {
                    return possibleJsonString
                  }
                })()}
              </p>
            )

          case 'text/plain':
          case 'text':
          case 'other':
            return (
              <p className="text-base font-medium px-4 py-4 w-full break-all whitespace-pre-wrap aspect-square flex items-center justify-center overflow-hidden">
                {(() => {
                  try {
                    const data = contentUri?.split(':,')?.[1]
                    if (data) {
                      let possibleJsonString
                      if (contentUri.includes('base64')) {
                        possibleJsonString = Buffer.from(data, 'base64')
                          .toString('utf-8')
                          .replace('”', '"')
                      } else {
                        possibleJsonString = data
                      }
                      try {
                        const parsedData = JSON.parse(possibleJsonString)
                        return JSON.stringify(parsedData, null, 4)
                      } catch (error) {
                        return possibleJsonString
                      }
                    } else {
                      return data
                    }
                  } catch (error) {
                    return contentUri.replace('data:,', '')
                  }
                })()}
              </p>
            )

          default:
            if (contentUri.includes('data:,')) {
              return (
                <p className="text-base font-medium px-4 py-4 w-full break-all whitespace-pre-wrap aspect-square flex items-center justify-center overflow-hidden">
                  {(() => {
                    const possibleJsonString = contentUri
                      .replace('data:,', '')
                      .replace('”', '"')
                    try {
                      const parsedData = JSON.parse(possibleJsonString)
                      return JSON.stringify(parsedData, null, 4)
                    } catch (error) {
                      return possibleJsonString
                    }
                  })()}
                  {/* {contentUri.replace('data:,', '')} */}
                </p>
              )
            }
            return <FaFileAlt size={32} />
        }
      })()}
    </div>
  )
}

export default CardContentUriRenderer
