export function getMimeTypeFromDataUrl(dataUrl: string): string | null {
  const regex = /^data:([a-zA-Z0-9]+\/[a-zA-Z0-9]+)/
  const match = dataUrl.match(regex)

  return match?.[1] ?? null
}
