import { RouteObject } from 'react-router-dom'
import App from './App'
import Home from './pages/home'
import Login from './pages/login'
import Join from './pages/join'
import ErrorPage from './pages/error'

interface PageInfoProp {
  id: string
  path: string
  title: string
  auth: boolean
}

export const pageInfo: PageInfoProp[] = [
  { id: '0', path: '/', title: 'Home', auth: true },
  { id: '1', path: '/login', title: 'Login', auth: false },
  { id: '2', path: '/join', title: 'Join', auth: false },
]

export const pages: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'join',
        element: <Join />,
      },
    ],
  },
  {
    path: '*',
    element: <App />,
    children: [
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]
