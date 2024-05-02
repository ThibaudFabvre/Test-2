import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { MetaMaskProvider } from "@metamask/sdk-react";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MetaMaskProvider
      debug={false}
      sdkOptions={{
        dappMetadata: {
          name: "Example React Dapp",
          url: window.location.href,
        },
        infuraAPIKey: 'c9f96c89fbc443128ae4d71f1f650aa8',
        // Other options.
      }}
    >
    <App />
    </MetaMaskProvider>
  </React.StrictMode>,
)
