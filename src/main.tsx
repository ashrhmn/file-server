import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil'

const client = new QueryClient()
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
