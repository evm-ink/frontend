import { useInfiniteQuery } from '@tanstack/react-query'

import { graphqlClient } from '../lib/gqlClient'
import { GetInscriptionsDocument, Order_By } from '../gql/operations-types'

export function useGetInscriptions({
  perPageCount,
  ownerAddress,
  category,
  searchPosition,
}: {
  perPageCount: number
  ownerAddress?: string
  category?: string
  searchPosition?: string
}) {
  const query = useInfiniteQuery(
    ['get-inscriptions', perPageCount, ownerAddress, category, searchPosition],
    async ({ pageParam = 1 }) => {
      return graphqlClient.request(GetInscriptionsDocument, {
        limit: perPageCount,
        offset: (pageParam - 1) * perPageCount,
        order_by: [{ position: Order_By.DescNullsLast }],
        where: {
          ...(ownerAddress && {
            owner_address: { _eq: ownerAddress.toLocaleLowerCase() },
          }),
          ...(category && {
            category: { _eq: category },
          }),
          ...(searchPosition && {
            position: { _eq: searchPosition },
          }),
        },
      })
    },
    {
      enabled: ownerAddress == undefined || !!ownerAddress,
      getNextPageParam: (lastPage, allPages) =>
        lastPage?.inscriptions?.length == perPageCount
          ? allPages.length + 1
          : undefined,
    }
  )

  return query
}
