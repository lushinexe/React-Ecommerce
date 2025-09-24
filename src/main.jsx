import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CartContent from './Components/CartContent/CartContent.jsx'
import App from './App.jsx'
import ContextProvider from './Context/Context.jsx'
import './index.css'
import Products from './Components/Products/Products.jsx'
import Checkout from './Components/CartContent/Checkout.jsx'
import ItemDetail from './Components/Products/ItemDetail.jsx'
import Home from './Components/Home/Home.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'checkout',
        element: <Checkout />
      },
      {
        path: 'category/:categoryId',
        element: <Products />
      },
      {
        path: 'item/:itemId',
        element: <ItemDetail />
      },
      {
        path: 'cart',
        element: <CartContent />
      }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>
)
