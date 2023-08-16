import { secp256k1 } from '@noble/curves/secp256k1'
import { toHex } from 'viem'

export function splitSignature(signatureHex: string) {
  const { r, s } = secp256k1.Signature.fromCompact(signatureHex.slice(2, 130))
  const v = `0x${signatureHex.slice(130)}`

  return { sigR: toHex(r), sigS: toHex(s), sigV: v as `0x${string}` }
}
