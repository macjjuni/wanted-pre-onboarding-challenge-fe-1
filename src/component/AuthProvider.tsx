import { useState, useEffect, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext, type AuthProp } from '../store'

// Token 유무로 인증관리
const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<AuthProp>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const auth = localStorage.getItem('token')
    if (auth !== null) {
      setToken(auth)
      return
    }
    navigate('/login')
  }, [token])

  return <AuthContext.Provider value={{ token, setToken }}>{children}</AuthContext.Provider>
}

export default AuthProvider
