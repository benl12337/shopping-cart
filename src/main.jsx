import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './Root.jsx'
import DefaultPage from './routes/DefaultPage.jsx'
import Mens, { loader as mensLoader } from './routes/Mens.jsx'
import Womens, { loader as womensLoader } from './routes/Womens.jsx'
import Jewelry, {loader as jewelryLoader} from './routes/Jewelry.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {index: true, element: <DefaultPage/>},
      {path: "/mens", element: <Mens/>, loader: mensLoader },
      {path: "/womens", element: <Womens/>, loader: womensLoader },
      {path: "/jewelry", element: <Jewelry/>, loader: jewelryLoader },
    ]
    
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
