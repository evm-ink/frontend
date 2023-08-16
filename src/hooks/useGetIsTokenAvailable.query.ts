import { useQuery } from '@tanstack/react-query'

import { graphqlClientWithSignal } from '../lib/gqlClient'
import {
  Brc20_Tokens_Bool_Exp,
  GetBrc20TokensDocument,
} from '../gql/operations-types'

export function useIsTokenAvailable({
  tick,
  where,
}: {
  tick?: string
  where?: Omit<Brc20_Tokens_Bool_Exp, 'tick'>
}) {
  const query = useQuery({
    queryKey: ['is-token-available', tick, where],
    queryFn: async ({ signal }) => {
      const result = await graphqlClientWithSignal(
        signal as AbortSignal
      ).request(GetBrc20TokensDocument, {
        where: {
          tick: { _eq: tick?.toLowerCase() },
          ...where,
        },
      })

      if (
        result.brc20_tokens?.length &&
        result.brc20_tokens?.[0]?.tick.toLowerCase() === tick?.toLowerCase() &&
        result.brc20_tokens[0].max_supply !==
          result.brc20_tokens[0].minted_total
      ) {
        return { available: true, token: result.brc20_tokens[0] }
      }

      return { available: false, token: null }
    },
    enabled: !!tick,
    cacheTime: 0,
    staleTime: 0,
  })

  return query
}
