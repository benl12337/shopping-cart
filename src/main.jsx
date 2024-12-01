import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Shop from './routes/Shop.jsx'
import Cart from './routes/Cart.jsx'
import Gallery, { loader as galleryLoader } from './routes/Gallery.jsx'
import Product, { loader as productLoader } from './routes/Product.jsx'
import Homepage from './routes/Homepage.jsx'


// Set up the Browser routes here
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/shop",
    element: <Shop />,
    children: [
      {
        path: "category/:categoryId",
        element: <Gallery />,
        loader: galleryLoader,
      },
      {
        path: "product/:productId",
        element: < Product/>,
        loader: productLoader,
      },
    ]
  },
  {
    path: "/cart",
    element: <Cart/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
