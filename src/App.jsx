
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Login from "./Pages/Login/Login"
import Register from './Pages/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home/Home';
import UserProvider from './Context/User.Context';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Cart from './Pages/Cart/Cart';
import CartProvider from './Context/Cart.Context';
import Checkout from './Pages/Checkout/Checkout';
import AllOrders from './Pages/AllOrders/AllOrders';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Products from './Pages/Products/Products';
import Brands from './Pages/Brands/Brands';
import Categories from './Pages/Categories/Categories';
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>)
      , children: [
        { index: true, element: <Home /> },
        { path: "/category/:id", element: <h2>category </h2> },
        { path: "/cart", element: <Cart /> },
        { path: "/category", element: <Categories /> },
        { path: "/products", element: <Products /> },
        { path: "/chekout", element: <Checkout /> },
        { path: "/brands", element: <Brands /> },
        { path: "/allorders", element: <AllOrders /> },
        { path: "/product/:id", element: <ProductDetails /> },
        { path: "*", element: <NotFound /> }
      ]
    },
    {
      path: "/auth", element: <Layout />, children: [
        { path: "signup", element: <Register /> },
        { path: "login", element: <Login /> },

      ]
    }


  ],

    {
      basename: "/newFreshCart",
    }
  );
  const myClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={myClient} >
        <UserProvider >
          <CartProvider>
            <RouterProvider router={routes}></RouterProvider>
            <Toaster />
          </CartProvider>
        </UserProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
