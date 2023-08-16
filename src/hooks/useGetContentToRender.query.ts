import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import parseDataUrl from 'parse-data-url'

// async function hash(string: string) {
//   const utf8 = new TextEncoder().encode(string)
//   const hashBuffer = await crypto.subtle.digest('SHA-256', utf8)
//   const hashArray = Array.from(new Uint8Array(hashBuffer))
//   const hashHex = hashArray
//     .map((bytes) => bytes.toString(16).padStart(2, '0'))
//     .join('')
//   return hashHex
// }

type RenderResult = {
  mimeType: string
  renderUrl?: string
  renderContent?: string
}

const renderUrl = (renderUrl: string, mimeType?: string) => {
  return { mimeType: mimeType || 'text/plain', renderUrl } as RenderResult
}

const renderContent = (renderContent: string, mimeType?: string) => {
  return {
    mimeType: mimeType || 'text/plain',
    renderContent: getParsedJsonStringOrFallback(renderContent),
  } as RenderResult
}

export function useGetContentToRender({
  url,
  mimeType,
}: {
  url: string
  mimeType: string
}) {
  return useQuery({
    queryKey: ['get-content-to-render', url, mimeType],
    queryFn: async () => {
      // Check if the url is a http[s] URL and branch out the execution accordingly.
      switch (isHttpUrl(url)) {
        case true:
          return handleHttpUrl(url, mimeType)

        case false:
        default:
          return handleDataUrl(url)
      }
    },
    enabled: !!url,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    cacheTime: 1000 * 60 * 30, //30 minutes
    staleTime: 1000 * 60 * 30, //30 minutes
  })
}

function isHttpUrl(url: string) {
  const urlPattern =
    /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,6}(:[0-9]+)?(\/.*)?$/i
  return urlPattern.test(url)
}

function isDirectlyRenderableMediaType(input: string) {
  return (
    ['image', 'video', 'audio'].includes(input.split('/')[0] ?? '') ||
    input.toLowerCase() === 'text/html'
  )
}

function blobToBase64(blob: Blob) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result as string)
    reader.onerror = reject
    reader.readAsDataURL(blob)
  })
}

function getParsedJsonStringOrFallback(string: string) {
  try {
    const result = JSON.parse(string)
    return JSON.stringify(result, null, 2)
  } catch (error) {
    return string
  }
}

async function handleHttpUrl(url: string, mimeType: string) {
  // If URL is directly renderable, return early. Else move to next processing step
  if (!!mimeType && isDirectlyRenderableMediaType(mimeType)) {
    return renderUrl(url, mimeType)
  }

  // Fetch Blob from URL
  const { data, headers } = await axios.get(url, { responseType: 'blob' })

  const _mimeType = headers['content-type'] as string

  if (_mimeType.toLowerCase() !== mimeType) {
    throw new Error('URL mimetype mismatch found!')
  }

  const base64String = await blobToBase64(data)

  return handleDataUrl(base64String)
}

async function handleDataUrl(url: string) {
  const parsedData = parseDataUrl(url)

  if (!parsedData) return handleInvalidDataUrl(url)

  return handleValidDataUrl(url, parsedData)
}

async function handleValidDataUrl(
  url: string,
  { contentType, base64, data, toBuffer }: parseDataUrl.DataUrl
) {
  // If Parsed data is directly renderable, return early. Else move to next processing step
  if (!!contentType && isDirectlyRenderableMediaType(contentType)) {
    return renderUrl(url, contentType)
  }

  const isBase64 = base64

  if (isBase64) {
    return renderContent(toBuffer().toString('utf-8'), contentType)
  }

  return renderContent(data, contentType)
}

async function handleInvalidDataUrl(url: string) {
  if (url.startsWith('data:,')) {
    return renderContent(url.replace('data:,', ''))
  } else if (url.startsWith('data:application/json,')) {
    return renderContent(url.replace('data:application/json,', ''))
  }

  console.log('NOTICE: Invalid URI found!', url)

  return renderContent(url)
}
