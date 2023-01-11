import { useEffect, useRef } from 'react'
import useAuth from '../../hook/useAuth'
import { Button, TextField } from '@mui/material'
import { LoginJoinForm } from '../../style'
import { useFormik } from 'formik'
import { userValidSchema } from '../../utils/validation'
import { useNavigate } from 'react-router-dom'
import { Token } from '../../utils/token'
import { loginUser, type CreateUserType } from '../../api/user'

const Login = () => {
  const navigate = useNavigate()
  const { token } = useAuth()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: userValidSchema,
    onSubmit: (values) => {
      submit(values)
    },
  })

  // 로그인
  const submit = async (params: CreateUserType) => {
    try {
      const { token: getToken } = await loginUser(params)
      // 로컬스토리지에 토큰 저장 및 전역상태로 설정
      Token.setToken(getToken)
      navigate('/')
    } catch (e) {
      console.error(e)
    }
  }
  useEffect(() => {
    if (token !== null) navigate('/')
  }, [token])

  // 로그인 상태일 경우 홈으로 이동

  return (
    <>
      <LoginJoinForm onSubmit={formik.handleSubmit}>
        <TextField
          name="email"
          label="이메일"
          size="small"
          fullWidth
          color="secondary"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          name="password"
          label="비밀번호"
          type="password"
          size="small"
          fullWidth
          color="secondary"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <div>
          <Button variant="contained" color="secondary" type="submit">
            로그인
          </Button>
          <Button
            variant="outlined"
            type="button"
            onClick={() => {
              navigate('/join')
            }}
          >
            회원가입
          </Button>
        </div>
      </LoginJoinForm>
    </>
  )
}
export default Login
