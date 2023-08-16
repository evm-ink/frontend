import {
  GraphQLClient,
  RequestMiddleware,
  ResponseMiddleware,
} from 'graphql-request'
import { Cookies } from 'react-cookie'
import { toast } from 'react-toastify'

import { getTokenKey } from '@/utils/getTokenKey'

const cookies = new Cookies()

const requestMiddleware: RequestMiddleware = async (request) => {
  return {
    ...request,
    headers: {
      ...request.headers,
    },
  }
}

const responseMiddleware: ResponseMiddleware = (response) => {
  if (response instanceof Error) {
    const errors = JSON.parse(JSON.stringify(response))?.response?.errors ?? []

    if (errors?.[0]?.extensions?.code === 'invalid-jwt') {
      const message = errors?.[0]?.message || response.message
      toast.error(message ?? 'Something went wrong')

      const address = localStorage.getItem('address')
      cookies.remove(getTokenKey(address ?? ''))
      window.location.href = '/login'
    }

    const message = errors?.[0]?.message || response.message
    if (message.includes('Aborted')) return
    toast.error(message ?? 'Something went wrong')
  }
  // if (!(response instanceof Error) && response.errors) {
  //   console.log(response)
  //   const traceId = response.headers.get(`x-b3-trace-id`) || `unknown`
  //   console.error(
  //     `[${traceId}] Request error:
  //       status ${response.status}
  //       details: ${response.errors.map((_) => _.message).join(`, `)}`
  //   )
  // }
}

export const graphqlClient = new GraphQLClient(
  import.meta.env.VITE_HASURA_GRAPHQL_URL,
  { requestMiddleware, responseMiddleware }
)

export const graphqlClientWithSignal = (signal: AbortSignal) =>
  new GraphQLClient(import.meta.env.VITE_HASURA_GRAPHQL_URL, {
    requestMiddleware,
    responseMiddleware,
    signal,
  })
