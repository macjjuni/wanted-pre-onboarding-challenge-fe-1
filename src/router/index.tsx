import { RouteObject } from 'react-router-dom'
import Layout from '../layout'
import Home from '../pages/home'
import Login from '../pages/login'
import Join from '../pages/join'
import Detail from '../pages/detail'
import Write from '../pages/write'
import Error from '../pages/error'
import withAuth from '../hoc/withAuth'

// (🔑) => 로그인 권한이 필요한 컴포넌트들
const AuthHome = withAuth(Home)
const AuthDetail = withAuth(Detail)
const AuthWrite = withAuth(Write)

interface IPageList {
  id: string
  path: string
  title: string
  element: React.ReactNode
}

export const pageList: IPageList[] = [
  { id: '0', path: '/', title: 'Todo List', element: <AuthHome /> },
  { id: '1', path: '/login', title: '로그인', element: <Login /> },
  { id: '2', path: '/join', title: '회원가입', element: <Join /> },
  { id: '3', path: '/write', title: 'Todo 작성', element: <AuthWrite /> },
  { id: '4', path: '/todo/:id', title: 'Todo', element: <AuthDetail /> },
  { id: '5', path: '*', title: 'Not Found - 404', element: <Error /> },
]

export const pages: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    id: 'root',
    children: pageList.map((page) => {
      return {
        path: page.path,
        element: page.element,
      }
    }),
    errorElement: <Error />,
  },
]
