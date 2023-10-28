import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'

import Home from './pages/Home'
import LogIn from './pages/LogIn/index.tsx'
import Room from './pages/Room/index.tsx'
import SignUp from './pages/SignUp/index.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/room",
    children: [
      {
        path: ":slug",
        element: <Room />,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')!)
  .render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
