import { useRef } from 'react'
import { Token } from '../utils/token'

type TokenTypes = string | null

const useAuth = () => {
  const tokenRef = useRef<TokenTypes>(Token.getToken())
  const token = tokenRef.current

  return { token }
}

export default useAuth
