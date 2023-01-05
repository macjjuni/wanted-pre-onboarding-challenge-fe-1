import { ReactNode } from 'react'
import { MainStyled } from '../../style'

const Main = ({ children }: { children: ReactNode }) => {
  return <MainStyled>{children}</MainStyled>
}
export default Main
