<div align="center">
  <a href="https://evm.ink">
    <img src="https://github.com/evm-ink/frontend/blob/0c6003e1619dc920b8854852c5187fdb95d965f3/src/assets/app-logo.svg" alt="evm.ink" />
  </a>

  <h1>EVM.INK Frontend</h1>
  <ul align="left">
    <li>Seamlessly allows the user to connect their preferred choice of wallet to quickly create either a file-based or text-based or token (JSON) inscription.</li>
    <li>Connects to the indexer via a secure GraphQL endpoint to provide real-time view of the created inscriptions. Provides the user with the ability to filter by types and search by position as well.</li>
    <li>Lazy-scribed Collections!, we provide the ability for the user to upload a large zip file containing the supported files under 96KB each, set metadata, mint price, limit per mint and deploy a contract for the same. Once the collection is published, the creator gets the amount set per mint sans our cut.</li>
  </ul>
</div>

## Pre-requisites

Backend GraphQL endpoint & User Token for codegen

### Environment Variables

To run this project, you will need to add the environment variables mentioned in the `.env.example` file

### Alchemy API Key

1. Register a free account on [Alchemy](https://www.alchemy.com/)

2. Create a new Ethereum project

3. Copy the generated API key into your `.env` file.

## WalletConnect Project ID

1. Register a free account on [WalletConnect](https://cloud.walletconnect.com/app)

2. Copy the generated Project ID into your `.env` file

## Installation

Install `frontend` dependencies with yarn (recommended)

```bash
  cd frontend
```

```bash
  yarn install
```

## Generate GraphQL TS Codegen file

```bash
  yarn generate
```

## Run application locally

```bash
  yarn dev
```
