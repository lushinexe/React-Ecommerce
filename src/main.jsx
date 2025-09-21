import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CartContent from './Components/CartContent/CartContent.jsx'
import App from './App.jsx'
import ContextProvider from './Context/Context.jsx'
import './index.css'
import SamsungPage from './Components/pages/SamsungPage.jsx'
import IphonePage from './Components/pages/IphonePage.jsx'
import XiaomiPage from './Components/pages/XiaomiPage.jsx'
import Checkout from './Components/CartContent/Checkout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/cart',
    element: <CartContent />
  },
  {
    path: '/SamsungPage',
    element: <SamsungPage />
  },
  {
    path: '/IphonePage',
    element: <IphonePage />
  },
  {
    path: '/XiaomiPage',
    element: <XiaomiPage />
  },
  {
    path: '/Checkout',
    element: <Checkout />
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>
)
