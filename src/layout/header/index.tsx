import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Typography, IconButton } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create'
import { HeaderStyled } from '../../style'
import LogoutIcon from '@mui/icons-material/Logout'
import HomeIcon from '@mui/icons-material/Home'
import { pageList } from '../../router'
import { toast } from 'react-toastify'
import { Token } from '../../utils/token'

const Header = () => {
  const [title, setTitle] = useState<string>('')
  const { pathname } = useLocation()
  const navigate = useNavigate()

  // 로그아웃
  const handleLogout = () => {
    Token.removeToken()
    toast('성공적으로 로그아웃 했습니다.')
    navigate('/login')
  }

  // 페이지 타이틀 초기화
  useEffect(() => {
    const route = pageList[0]
    setTitle(route ? route.title : 'Not Found - 404')
  }, [pathname])

  return (
    <HeaderStyled>
      <Typography variant="h4" sx={{ fontSize: '28px' }}>
        {title}
      </Typography>
      <div>
        <IconButton
          onClick={() => {
            navigate('/write')
          }}
        >
          <CreateIcon />
        </IconButton>
        <IconButton onClick={handleLogout}>
          <LogoutIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            navigate('/')
          }}
        >
          <HomeIcon />
        </IconButton>
      </div>
    </HeaderStyled>
  )
}
export default Header
