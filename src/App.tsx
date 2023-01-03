import { useEffect, useState, createContext, Dispatch, SetStateAction } from 'react'
import Header from './layout/header'
import Main from './layout/main'
import { ToastContainer } from 'react-toastify'

// =================== 전역관리 ===================
type AuthDispatchType = Dispatch<SetStateAction<string>>
export interface AuthProp {
  token: string
  setToken: AuthDispatchType
}
export const AuthDispatch = createContext<AuthProp | null>(null)

const App = () => {
  const [token, setToken] = useState<string>('')
  useEffect(() => {
    const auth = localStorage.getItem('token')
    if (auth !== null) setToken(auth)
  }, [])

  return (
    <AuthDispatch.Provider value={{ token, setToken }}>
      <div className="App">
        <Header />
        <Main />
      </div>
      <ToastContainer />
    </AuthDispatch.Provider>
  )
}

export default App
