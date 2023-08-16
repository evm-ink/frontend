export function getDataTypeFromDataUrl(dataUrl: string): string | null {
  // Regular expression to extract the MIME type from the data URL
  const regex = /^data:(image|video|audio)\/([\w+]+);/i

  // Extract the MIME type from the data URL using regex
  const match = dataUrl.match(regex)

  if (match) {
    // match[1] contains the data type ('image', 'video', or 'audio')
    return match[1]
  } else {
    // No valid MIME type found
    return null
  }
}
