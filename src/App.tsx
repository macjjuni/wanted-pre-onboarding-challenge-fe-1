import { useEffect, useState, createContext, Dispatch, SetStateAction } from 'react'
import Main from './layout/main'
import Header from './layout/header'

// =================== 전역관리 ===================
type AuthDispatchType = Dispatch<SetStateAction<string>>
export interface AuthProp {
  token: string
  setToken: AuthDispatchType
}
export const AuthDispatch = createContext<AuthProp | null>(null)
// =================== 전역관리 ===================

const App = () => {
  const [token, setToken] = useState<string>('')
  console.log(token)

  useEffect(() => {
    const auth = localStorage.getItem('token')
    auth !== null && setToken(auth)
  }, [])

  return (
    <AuthDispatch.Provider value={{ token, setToken }}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </AuthDispatch.Provider>
  )
}

export default App
