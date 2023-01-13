import Header from './header'
import Main from './main'

import { GlobalStyle } from '../style'
import { ToastContainer } from 'react-toastify'

import { LayoutStyled } from '../style'

import 'react-toastify/dist/ReactToastify.css'

const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <LayoutStyled>
        <Header />
        <Main />
      </LayoutStyled>
    </>
  )
}

export default Layout
