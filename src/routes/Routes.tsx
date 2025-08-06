import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "../App"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: null,
    children: [
      {
        path: '/',
        element: null,
      }
    ]
  }
])

export function Routes() {
  return <RouterProvider router={router}/>
}