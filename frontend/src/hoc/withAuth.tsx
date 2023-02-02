import { ComponentType } from 'react'
import useAuth from '../hook/useAuth'
import { Navigate } from 'react-router-dom'

const withAuth = (AuthComponent: ComponentType) => {
  const AuthCheck = () => {
    const { token } = useAuth()
    if (token === null) {
      return <Navigate to="/login" replace />
    }
    return <AuthComponent />
  }
  return AuthCheck
}
export default withAuth
