export function isFileSizeValid(
  file: File,
  maxFileSizeInBytes: number
): boolean {
  if (!file) throw new Error('File is required')

  if (file.size <= 0) throw new Error('File size invalid')

  if (file.size > maxFileSizeInBytes) return false

  return true
}
