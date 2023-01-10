import { RouteObject } from 'react-router-dom'
import App from './App'
import Home from './pages/home'
import Login from './pages/login'
import Join from './pages/join'
import Detail from './pages/detail'
import Write from './pages/write'
import ErrorPage from './pages/error'
import { getTodoList } from './api/todo'

interface PageInfoProp {
  id: string
  path: string
  title: string
  auth: boolean
}

export const pageInfo: PageInfoProp[] = [
  { id: '0', path: '/', title: 'Todo List', auth: true },
  { id: '1', path: '/login', title: '로그인', auth: false },
  { id: '2', path: '/join', title: '회원가입', auth: false },
  { id: '3', path: '/write', title: 'Todo 작성', auth: false },
  { id: '3', path: '/todo', title: 'Todo', auth: false },
]

export const pages: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    id: 'root',
    children: [
      {
        path: '/',
        loader: () => {
          return getTodoList()
        },
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'join',
        element: <Join />,
      },
      {
        path: '/todo/:id',
        element: <Detail />,
      },
      {
        path: '/write',
        element: <Write />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]
