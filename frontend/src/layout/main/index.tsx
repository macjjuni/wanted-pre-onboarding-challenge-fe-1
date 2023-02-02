import { MainStyled } from '../../style'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <MainStyled>
      <Outlet />
    </MainStyled>
  )
}
export default Main
