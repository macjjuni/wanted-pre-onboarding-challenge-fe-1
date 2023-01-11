import Button from '@mui/material/Button'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const CenterStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

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
