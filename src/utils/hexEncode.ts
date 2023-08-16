export function hexEncode(string: string): string {
  let hex: string
  let result = '0x'

  for (let i = 0; i < string.length; i++) {
    hex = string.charCodeAt(i).toString(16)
    result += ('0' + hex).slice(-2)
  }

  return result
}
