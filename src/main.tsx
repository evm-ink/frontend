import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { chains, wagmiconfig } from './utils/rainbowkit'
import { WagmiConfig } from 'wagmi'
import {
  darkTheme,
  lightTheme,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit'
import { ToastContainer } from 'react-toastify'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'
import { CookiesProvider } from 'react-cookie'
// import { FlagProvider } from '@unleash/proxy-client-react'

import '@rainbow-me/rainbowkit/styles.css'
import 'react-responsive-modal/styles.css'
import 'react-toastify/dist/ReactToastify.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/900.css'

import './index.css'

import { getPlatformNamePrefix } from '@/utils/getPlatformNamePrefix'

import Root from '.'
import LandingPage from '@/pages/LandingPage'

import {
  // UserBlockscriptionsPage,
  ViewBlockscriptionPage,
  // CollectionPage,
  // CollectionsPage,
  // CreateCollectionPage,
  // CreateProfilePage,
  // EditCollectionPage,
  // EditProfilePage,
  PreviewCollectionPage,
  RoadmapPage,
  UserProfilePage,
  ViewCollectionPage,
  // MarketplaceLandingPage,
  // MarketplaceAssetListingPage,
} from '@/pages/lazyPages'
import ProtectedRoute from './components/auth/ProtectedRoute'
import Brc20TokenPage from './pages/Brc20TokenPage'

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 1 } },
})

// const config = {
//   url: 'http://localhost:3000/proxy', // Your front-end API URL or the Unleash proxy's URL (https://<proxy-url>/proxy)
//   clientKey: 'proxy-client-key', // A client-side API token OR one of your proxy's designated client keys (previously known as proxy secrets)
//   refreshInterval: 15, // How often (in seconds) the client should poll the proxy for updates
//   appName: 'your-app-name', // The name of your application. It's only used for identifying your application
// }

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<LandingPage />} />
      <Route
        path={`/${getPlatformNamePrefix().toLocaleLowerCase()}-scriptions/:trxHash`}
        element={<ViewBlockscriptionPage />}
      />
      <Route path="/address/:address?" element={<UserProfilePage />} />
      <Route
        path="/profile/:address?"
        element={
          <ProtectedRoute>
            <UserProfilePage />
          </ProtectedRoute>
        }
      />
      {/* <Route path="/collections" element={<CollectionsPage />} /> */}
      {/* <Route path="/address/:address?" element={<UserBlockscriptionsPage />} />, */}
      {/* <Route
        path="/collections/:collectionNameSlug"
        element={<CollectionPage />}
      /> */}
      <Route
        path="/collections/:collectionNameSlug"
        element={<ViewCollectionPage />}
      />
      <Route path="/roadmap" element={<RoadmapPage />} />
      {/* <Route
        path="/create/collection"
        element={
          <ProtectedRoute>
            <CreateCollectionPage />
          </ProtectedRoute>
        }
      /> */}
      {/* <Route
        path="/collections/:collectionNameSlug/edit"
        element={
          <ProtectedRoute>
            <EditCollectionPage />
          </ProtectedRoute>
        }
      /> */}
      <Route
        path="/preview/:collectionNameSlug"
        element={
          <ProtectedRoute>
            <PreviewCollectionPage />
          </ProtectedRoute>
        }
      />
      {/* <Route
        path="/profile/create"
        element={
          <ProtectedRoute>
            <CreateProfilePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile/:address/edit"
        element={
          <ProtectedRoute>
            <EditProfilePage />
          </ProtectedRoute>
        }
      /> */}
      {/*
      <Route path="/marketplace" element={<MarketplaceLandingPage />} />
      <Route
        path="/marketplace/:id"
        element={<MarketplaceAssetListingPage />}
      /> */}

      <Route path="/tokens" element={<Brc20TokenPage />} />

      <Route path="*" element={<Navigate to={'/'} />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <FlagProvider config={config}> */}
    <CookiesProvider>
      <HelmetProvider>
        <WagmiConfig config={wagmiconfig}>
          <RainbowKitProvider
            modalSize="compact"
            chains={chains}
            theme={{ lightMode: lightTheme(), darkMode: darkTheme() }}
          >
            <QueryClientProvider client={queryClient}>
              <RouterProvider router={router} />
            </QueryClientProvider>
            <ToastContainer
              position="top-right"
              autoClose={2000}
              pauseOnFocusLoss
              pauseOnHover
              theme="colored"
            />
          </RainbowKitProvider>
        </WagmiConfig>
      </HelmetProvider>
    </CookiesProvider>
    {/* </FlagProvider> */}
  </React.StrictMode>
)
