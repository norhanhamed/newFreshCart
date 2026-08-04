
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Login from "./Pages/Login/Login"
import Register from './Pages/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import { Toaster } from 'react-hot-toast';
function App() {
const routes = createBrowserRouter([
   {path:"/",element: <Layout/> , children:[
    {path:"login", element: <Login/> },
    {path: "signup", element: <Register/> },
      {path: "*", element: <NotFound /> }
 
  ] }
],
 
     {
    basename: "/newFreshCart",
  }
)
  return (
    <>
    <RouterProvider  router={routes}></RouterProvider>
  <Toaster />
   </>
  )
}

export default App
