import Header from './layout/header'
import Main from './layout/main'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <>
      <div className="App">
        <Header />
        <Main>
          <Outlet />
        </Main>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
