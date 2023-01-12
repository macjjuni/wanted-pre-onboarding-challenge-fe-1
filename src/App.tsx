import Layout from './layout'
import Header from './layout/header'
import Main from './layout/main'

import { GlobalStyle } from './style'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <>
      <>
        <Layout>
          <Header />
          <Main />
        </Layout>
      </>
      <>
        {/* Assets */}
        <GlobalStyle />
        <ToastContainer />
      </>
    </>
  )
}

export default App
