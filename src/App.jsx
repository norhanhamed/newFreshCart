
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Login from "./Pages/Login/Login"
import Register from './Pages/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home/Home';
import UserProvider from './Context/User.Context';
function App() {
  const routes = createBrowserRouter([
    {
      path: "/", element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: "/category/:id", element: <h2>category </h2> },

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
  )
  return (
    <>
      <UserProvider >
        <RouterProvider router={routes}></RouterProvider>
        <Toaster />
      </UserProvider>
    </>
  )
}

export default App
