import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: [
    {
      [process.env.VITE_HASURA_GRAPHQL_URL as string]: {
        headers: {
          Authorization: `Bearer ${process.env.CODEGEN_USER_TOKEN}`,
        },
      },
    },
  ],
  documents: ['src/**/*.graphql'],
  generates: {
    './src/gql/operations-types.ts': {
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
    },
  },
}

export default config
