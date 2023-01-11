import Header from './layout/header'
import Main from './layout/main'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <>
      <div className="App">
        <Header />
        <Main />
      </div>
      <ToastContainer />
    </>
  )
}

export default App
