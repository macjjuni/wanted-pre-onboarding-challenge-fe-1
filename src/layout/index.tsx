import Header from './header'
import Main from './main'

import { QueryClient, QueryClientProvider } from 'react-query'
// QueryCache
import { ReactQueryDevtools } from 'react-query/devtools'

import { GlobalStyle } from '../style'
import { ToastContainer } from 'react-toastify'

import { LayoutStyled } from '../style'

import 'react-toastify/dist/ReactToastify.css'

const queryOptions = {
  // queryCache: new QueryCache({
  //   onError: (error) => {
  //     // console.error(error)
  //   },
  // }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
}

const client = new QueryClient(queryOptions)

const Layout = () => {
  return (
    <QueryClientProvider client={client}>
      <GlobalStyle />
      <ToastContainer />
      <ReactQueryDevtools />
      <LayoutStyled>
        <Header />
        <Main />
      </LayoutStyled>
    </QueryClientProvider>
  )
}

export default Layout
