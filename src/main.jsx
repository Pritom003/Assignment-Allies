import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './COMPONENTS/Routs/Routs';
import AuthiProvider from './COMPONENTS/Providers/AuthiProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import router from './COMPONENTS/Routs/MAIN.jsx';
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
<div className='max-w-6xl mx-auto'>
<React.StrictMode>
  <QueryClientProvider client={queryClient}>
  <AuthiProvider> <RouterProvider router={router} /></AuthiProvider>
  </QueryClientProvider>
   
  </React.StrictMode>,
</div>
)
