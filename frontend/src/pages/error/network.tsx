import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'

import { CenterStyled } from './style'

const NetworkError = () => {
  const navigate = useNavigate()

  return (
    <CenterStyled>
      <Button
        variant="outlined"
        onClick={() => {
          window.location.href = '/'
        }}
      >
        새로고침
      </Button>
    </CenterStyled>
  )
}
export default NetworkError
