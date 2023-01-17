import useLogin from '../../hook/mutation/auth/useLogin'

import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { userValidSchema } from '../../utils/validation'

import { Button, TextField } from '@mui/material'
import { LoginJoinForm } from '../../style'

const Login = () => {
  const { mutate: loginMutate } = useLogin()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: userValidSchema,
    onSubmit: (values) => {
      loginMutate(values)
    },
  })

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
              navigate('/auth/join')
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
