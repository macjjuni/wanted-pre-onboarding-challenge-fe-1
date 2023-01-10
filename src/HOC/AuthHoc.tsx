import { ComponentType } from 'react'
import useAuth from '../hook/useAuth'

const AuthHoc = (AuthComponent: ComponentType) => {
  const AuthCheck = () => {
    const { token } = useAuth()
    if (token === null) return <></>
    return <AuthComponent />
  }
  return AuthCheck
}
export default AuthHoc
