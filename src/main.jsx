import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx';
import ErrorPage from './pages/Error.jsx';
import Home from './pages/Home.jsx';

const router =createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)
