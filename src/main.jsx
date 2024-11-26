import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Shop from './routes/Shop.jsx'
import Gallery, { loader as galleryLoader } from './routes/Gallery.jsx'
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
        path: ":categoryId",
        element: <Gallery />,
        loader: galleryLoader,
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
