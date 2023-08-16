import { GetLazyClaimArgumentsDocument } from '@/gql/operations-types'
import { graphqlClient } from '@/lib/gqlClient'

export async function getLazyClaimArguments(
  uuid: string,
  slug: string,
  token: string
) {
  return graphqlClient.request(
    GetLazyClaimArgumentsDocument,
    {
      id: uuid,
      slug,
    },
    { ...(token && { Authorization: `Bearer ${token}` }) }
  )
}
