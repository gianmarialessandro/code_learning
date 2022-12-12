import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from 'react-dom/client'

import Navigation from "./components/Navigation"
import Root from "./pages/Root";
import JavaScript from "./pages/JavaScript";

import "./main.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "javascript",
        element: <JavaScript />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)


