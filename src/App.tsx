import AuthProvider from './component/AuthProvider'
import Header from './layout/header'
import Main from './layout/main'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <Main>
          <Outlet />
        </Main>
      </div>
      <ToastContainer />
    </AuthProvider>
  )
}

export default App
