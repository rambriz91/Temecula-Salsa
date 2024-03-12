import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx';
import ErrorPage from './pages/Error.jsx';
import Home from './pages/Home.jsx';
import Menu from './pages/Menu.jsx'
import Location from './pages/Location.jsx';
import Contact from './pages/Contact.jsx';

const router =createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/Menu',
        element: <Menu />,
      },
      {
        path: '/Location',
        element: <Location />
      },
      {
        path: '/Contact',
        element: <Contact />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)
