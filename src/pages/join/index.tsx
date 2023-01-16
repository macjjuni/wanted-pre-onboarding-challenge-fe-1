import useAuth from '../../hook/useAuth'
import useJoin from '../../hook/mutation/auth/useJoin'

import { useFormik } from 'formik'
import { useNavigate, Navigate } from 'react-router-dom'

import { Button, TextField } from '@mui/material'
import { LoginJoinForm } from '../../style'
import { joinValidSchema } from '../../utils/validation'

const Join = () => {
  const { token } = useAuth()
  const { mutate: joinMutate } = useJoin()
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
      joinMutate(params)
    },
  })

  if (token !== null) return <Navigate to="/" replace />

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
