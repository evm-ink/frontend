import { SignInDocument } from '@/gql/operations-types'
import { graphqlClient } from '@/lib/gqlClient'

export type AuthenticationProps = {
  message: string
  sigR: `0x${string}`
  sigS: `0x${string}`
  sigV: `0x${string}`
}

export async function authenticate({
  message,
  sigR,
  sigS,
  sigV,
}: AuthenticationProps): Promise<string> {
  const response = await graphqlClient.request(SignInDocument, {
    message,
    sigR,
    sigS,
    sigV,
  })

  if (!response?.signIn?.token) throw new Error('Token could not be generated')

  return response.signIn.token
}
