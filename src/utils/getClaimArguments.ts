import { GetClaimArgumentsDocument } from '@/gql/operations-types'
import { graphqlClient } from '@/lib/gqlClient'

export async function getClaimArguments(inscription: string) {
  return graphqlClient.request(GetClaimArgumentsDocument, {
    inscription: inscription,
  })
}
