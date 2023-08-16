import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import { configureChains, createConfig } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

import { mainnet } from 'wagmi/chains'
import { getPlatformNamePrefix } from './getPlatformNamePrefix'

const defaultChains = [mainnet]

export const { chains, publicClient } = configureChains(defaultChains, [
  alchemyProvider({
    apiKey:
      import.meta.env.VITE_ALCHEMY_API_KEY ||
      '_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC',
  }),
  publicProvider(),
])

const { connectors } = getDefaultWallets({
  appName: `${getPlatformNamePrefix()}scription`,
  projectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID,
  chains,
})

export const wagmiconfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})
