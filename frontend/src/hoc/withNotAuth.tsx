import { ComponentType } from 'react'
import useAuth from '../hook/useAuth'
import { Navigate } from 'react-router-dom'

const withNotAuth = (AuthComponent: ComponentType) => {
  const AuthCheck = () => {
    const { token } = useAuth()
    if (token !== null) {
      return <Navigate to="/" replace />
    }
    return <AuthComponent />
  }
  return AuthCheck
}
export default withNotAuth
