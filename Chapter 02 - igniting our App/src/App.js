import React, {lazy, Suspense} from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
// import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurentMenu"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"


const Grocery = lazy(()=> import("./components/Grocery"))

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [

      {
        path: "/",
        element: <Body />
      },

      // {
      //   path: "/about",
      //   element: <About />
      // },

      {
        path: "/contact",
        element: <Contact />
      },

      {
        path: "restaurent/:resid",
        element: <RestaurantMenu />
      },

      {
        path: "grocery",
        element:<Suspense fallback={<h1>Loading......</h1>}><Grocery /></Suspense> 
      },
    ]
  },


])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)
