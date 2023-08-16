import { useInfiniteQuery } from '@tanstack/react-query'

import { graphqlClient } from '../lib/gqlClient'
import {
  GetBrc20TokensDocument,
  GetBrc20TokensQueryVariables,
} from '@/gql/operations-types'

export function useGetBrc20Tokens(
  perPageCount: number,
  orderBy?: GetBrc20TokensQueryVariables['order_by'],
  where?: GetBrc20TokensQueryVariables['where']
) {
  const query = useInfiniteQuery(
    ['brc-20-tokens', perPageCount, orderBy, where],
    async ({ pageParam = 1 }) => {
      return graphqlClient.request(GetBrc20TokensDocument, {
        limit: perPageCount,
        offset: (pageParam - 1) * perPageCount,
        where: { max_supply: { _neq: '0' }, ...where },
        order_by: orderBy,
      })
    },
    {
      getNextPageParam: (lastPage, allPages) =>
        lastPage?.brc20_tokens?.length == perPageCount
          ? allPages.length + 1
          : undefined,
    }
  )

  return query
}
