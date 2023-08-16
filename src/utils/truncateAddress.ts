export function truncateAddress(address: string, charCount = 6): string {
  if (address.length <= 8) {
    return address
  }

  const prefix = address.slice(0, charCount)
  const suffix = address.slice(-charCount)

  return prefix + '...' + suffix
}
