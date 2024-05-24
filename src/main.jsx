import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { router } from './router/app-router.jsx'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <NextUIProvider navigate={router}>
      <RouterProvider router={router} />
    </NextUIProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
