import { useEffect, useState } from 'react'
import { Token } from '../utils/token'

type TokenTypes = string | null

const useAuth = () => {
  const [token, setToken] = useState<TokenTypes>(null)

  useEffect(() => {
    const tokenVal = Token.getToken()
    if (tokenVal === null) {
      return
    }
    setToken(tokenVal)
  }, [])

  return { token }
}

export default useAuth
