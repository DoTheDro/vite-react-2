import { useState, useEffect } from 'react'
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
  RouterProvider,
  Outlet
} from 'react-router-dom'
import './App.css'
import useFetch from './useFetch'

//Page
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import Shop from './Pages/Shop'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products').then(res => {
    if (res.ok) {
      return res.json()
    } else {
      console.log("Failed to fetch API")
    }
  }).then(data => {
    setProducts(data)
  })
  }, [])


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop currentProducts={products} />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
