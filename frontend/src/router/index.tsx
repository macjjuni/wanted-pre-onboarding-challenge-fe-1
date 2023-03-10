import { RouteObject } from 'react-router-dom'
import Layout from '../layout'
import Home from '../pages/home'
import Login from '../pages/login'
import Join from '../pages/join'
import Detail from '../pages/detail'
import Write from '../pages/write'
import Error from '../pages/error/404'
import NetworkError from '../pages/error/network'
import withAuth from '../hoc/withAuth'
import withNotAuth from '../hoc/withNotAuth'

// (π) => λ‘κ·ΈμΈ κΆνμ΄ νμν μ»΄ν¬λνΈλ€
const AuthHome = withAuth(Home)
const AuthDetail = withAuth(Detail)
const AuthWrite = withAuth(Write)

// (β) => λ‘κ·ΈμΈ κΆνμ΄ μμΌλ©΄ μλλ μ»΄ν¬λνΈλ€
const NotAuthLogin = withNotAuth(Login)
const NotAuthJoin = withNotAuth(Join)

interface IPageList {
  id: string
  path: string
  title: string
  element: React.ReactNode
}

export const pageList: IPageList[] = [
  { id: '0', path: '/', title: 'Todo List', element: <AuthHome /> },
  { id: '1', path: '/auth/login', title: 'λ‘κ·ΈμΈ', element: <NotAuthLogin /> },
  { id: '2', path: '/auth/join', title: 'νμκ°μ', element: <NotAuthJoin /> },
  { id: '3', path: '/todo/write', title: 'Todo μμ±', element: <AuthWrite /> },
  { id: '4', path: '/todo/:id', title: 'Todo', element: <AuthDetail /> },
  { id: '5', path: '/error', title: 'Todo', element: <NetworkError /> },
  { id: '6', path: '*', title: 'Not Found - 404', element: <Error /> },
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
