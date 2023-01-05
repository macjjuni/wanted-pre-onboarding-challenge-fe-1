import { useContext } from 'react'
import { AuthContext, type AuthContextProp } from '../store'

const useAuth = () => {
  const { token, setToken } = useContext<AuthContextProp>(AuthContext)
  return { token, setToken }
}

export default useAuth
