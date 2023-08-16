export function getTokenKey(address?: string): string {
  return `${address?.toLocaleLowerCase() ?? ''}-token`
}
