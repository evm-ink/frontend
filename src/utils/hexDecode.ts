export function hexDecode(hexString: string): string {
  const hexes = hexString.replace('0x', '').match(/.{1,2}/g) || []

  let result = ''

  for (let j = 0; j < hexes.length; j++) {
    result += String.fromCharCode(parseInt(hexes[j], 16))
  }

  return result
}
