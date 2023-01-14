import Button from '@mui/material/Button'
import { CenterStyled } from './style'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate()
  return (
    <CenterStyled>
      <Button
        variant="outlined"
        onClick={() => {
          navigate('/')
        }}
      >
        Home
      </Button>
    </CenterStyled>
  )
}

export default Error
