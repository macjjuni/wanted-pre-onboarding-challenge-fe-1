import { useEffect, useState, useContext } from 'react'
import { AuthDispatch } from '../../App'
import { useNavigate, useLocation } from 'react-router-dom'
import { Typography, IconButton, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { HeaderStyled } from '../../components/style'
import LogoutIcon from '@mui/icons-material/Logout'
import { pageInfo } from '../../routes'

const Header = () => {
  const [title, setTitle] = useState<string>('')
  const { pathname } = useLocation()

  const dispatch = useContext(AuthDispatch)
  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handlePage = (path: string) => {
    handleClose()
    navigate(path)
  }

  // 로그아웃
  const handleLogout = () => {
    if (dispatch !== null) {
      dispatch.setToken('')
      localStorage.removeItem('token')
    }
  }

  // 페이지 타이틀 초기화
  useEffect(() => {
    const idx = pageInfo.findIndex((r, idx) => {
      if (pathname === '/') return true // root 경로일 경우
      if (idx !== 0 && pathname.includes(r.path)) return true
      return false
    })
    setTitle(pageInfo[idx]?.title ? pageInfo[idx].title : 'Not Found - 404')
  }, [pathname])

  return (
    <HeaderStyled>
      <Typography variant="h4" sx={{ fontSize: '28px' }}>
        {title}
      </Typography>
      <div>
        <IconButton onClick={handleLogout}>
          <LogoutIcon />
        </IconButton>
        <IconButton id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
          <MenuIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {pageInfo.map((r) => {
            if (dispatch?.token !== '' && r.auth === true) {
              return (
                <MenuItem
                  key={r.id}
                  onClick={() => {
                    handlePage(r.path)
                  }}
                >
                  {r.title}
                </MenuItem>
              )
            } else if (dispatch?.token === '') {
              return (
                <MenuItem
                  key={r.id}
                  onClick={() => {
                    handlePage(r.path)
                  }}
                >
                  {r.title}
                </MenuItem>
              )
            }
          })}
        </Menu>
      </div>
    </HeaderStyled>
  )
}
export default Header
