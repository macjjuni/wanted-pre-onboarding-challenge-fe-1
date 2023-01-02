import { FC } from 'react'

import Home from './pages/home'
import Login from './pages/login'
import Join from './pages/join'

interface RouteProp {
  id: string
  path: string
  title: string
  element: FC
}

export const routes: RouteProp[] = [
  { id: '0', path: '/', title: '홈', element: Home },
  { id: '1', path: '/login', title: '로그인', element: Login },
  { id: '2', path: '/join', title: '회원가입', element: Join },
]
