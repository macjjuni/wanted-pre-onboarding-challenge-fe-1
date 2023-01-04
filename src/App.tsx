import { useEffect, useState, createContext, Dispatch, SetStateAction } from 'react'
import Header from './layout/header'
import Main from './layout/main'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

// =================== 전역관리 ===================
type AuthDispatchType = Dispatch<SetStateAction<string | null>>
export interface AuthProp {
  token: string | null
  setToken: AuthDispatchType
}
export const AuthDispatch = createContext<AuthProp | null>(null)

const App = () => {
  const navigate = useNavigate()
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const auth = localStorage.getItem('token')
    if (auth !== null) {
      setToken(auth)
      return
    }
    navigate('/login')
  }, [token])

  // useEffect(() => {
  //   if (token === null) navigate('/login')
  // }, [token])

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
