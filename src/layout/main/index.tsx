import { Outlet } from 'react-router-dom'
import { MainStyled } from '../../components/style'

const Main = () => {
  return (
    <MainStyled>
      <Outlet />
    </MainStyled>
  )
}
export default Main
