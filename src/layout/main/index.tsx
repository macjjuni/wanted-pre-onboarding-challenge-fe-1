import { MainStyled } from '../../components/style'
import { Routes, Route } from 'react-router-dom'
import { routes } from '../../routes'

const Main = () => {
  return (
    <MainStyled>
      <Routes>
        {routes.map((r) => (
          <Route key={r.id} path={r.path} element={<r.element />} />
        ))}
      </Routes>
    </MainStyled>
  )
}
export default Main
