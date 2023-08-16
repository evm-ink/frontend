import { GetNonceDocument } from '@/gql/operations-types'
import { graphqlClient } from '@/lib/gqlClient'

export async function getNonce(): Promise<string> {
  const response = await graphqlClient.request(GetNonceDocument)

  const nonce = response?.signedMessage?.message

  if (!nonce) throw new Error('nonce could not be generated')

  return nonce
}
