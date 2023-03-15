import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import './App.css'
import useFetch from './useFetch'

//Page
import ShopLayout from './Pages/ShopLayout'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import Shop, { shopLoader } from './Pages/Shop'
import ViewProduct, { viewProductLoader } from './Pages/ViewProduct'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/vite-react-2/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<ShopLayout />}>
          <Route 
            index
            element={<Shop />} 
            loader={shopLoader}
          />
          <Route
            path=':id'
            element={<ViewProduct />} 
            loader={viewProductLoader}
          />
        </Route>
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
