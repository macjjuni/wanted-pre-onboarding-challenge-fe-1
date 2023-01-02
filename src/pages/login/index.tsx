import { useContext } from 'react'
import { AuthDispatch } from '../../App'
import { Button, TextField } from '@mui/material'
import { FormStyled } from '../../components/style'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useNavigate, Navigate } from 'react-router-dom'
import { loginUser, type CreateUserType } from '../../api/user'

// 회원가입 유효성 체크
const validationSchema = yup.object({
  email: yup.string().email('이메일 형식이 올바르지 않습니다.').required('이메일을 압력해주세요'),
  password: yup.string().min(8, '최소 8자리 이상 비밀번호를 입력하세요.').required('비밀번호를 입력해주세요.'),
})

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useContext(AuthDispatch)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      submit(values)
    },
  })

  // 로그인
  const submit = async (params: CreateUserType) => {
    try {
      const { token } = await loginUser(params)
      // 로컬스토리지에 토큰 저장 및 전역상태로 설정
      localStorage.setItem('token', token)
      if (dispatch !== null) dispatch.setToken(token)
    } catch (e) {
      console.error(e)
    }
  }

  // 로그인 상태일 경우 홈으로 이동
  if (dispatch !== null && dispatch.token !== '') return <Navigate to="/" />

  return (
    <>
      <FormStyled onSubmit={formik.handleSubmit} className="form-wrap">
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
      </FormStyled>
    </>
  )
}
export default Login
