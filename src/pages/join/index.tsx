import { Token } from '../../utils/token'
import useAuth from '../../hook/useAuth'
import { useFormik } from 'formik'
import { Navigate, useNavigate } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import { LoginJoinForm } from '../../style'
import { joinValidSchema } from '../../utils/validation'
import { createUser } from '../../api/auth'
import { type CreateUserTypes, type IAuthResTypes } from '../../api/auth.type'
import { toast } from 'react-toastify'
import { AxiosResponse } from 'axios'

const Join = () => {
  const { token } = useAuth()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      password_chk: '',
    },
    validationSchema: joinValidSchema,
    onSubmit: (values) => {
      const params = {
        email: values.email,
        password: values.password,
      }
      submit(params)
    },
  })

  if (token !== null) return <Navigate to="/" replace />

  // 회원가입
  const submit = async (params: CreateUserTypes) => {
    try {
      const data = await createUser(params)
      // 로컬스토리지에 토큰 저장 및 전역상태로 설정
      Token.setToken(data.token)
      toast('성공적으로 로그인 했습니다.')
      navigate('/')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <LoginJoinForm onSubmit={formik.handleSubmit} className="form-wrap">
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
        <TextField
          name="password_chk"
          label="비밀번호 확인"
          type="password"
          size="small"
          fullWidth
          color="secondary"
          value={formik.values.password_chk}
          onChange={formik.handleChange}
          error={formik.touched.password_chk && Boolean(formik.errors.password_chk)}
          helperText={formik.touched.password_chk && formik.errors.password_chk}
        />
        <div>
          <Button variant="contained" color="secondary" type="submit">
            회원가입
          </Button>
          <Button
            variant="outlined"
            type="button"
            onClick={() => {
              navigate('/auth/login')
            }}
          >
            로그인
          </Button>
        </div>
      </LoginJoinForm>
    </>
  )
}
export default Join
