import { useContext } from 'react'
import { AuthDispatch } from '../../App'
import { Button, TextField } from '@mui/material'
import { FormStyled } from '../../components/style'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useNavigate, Navigate } from 'react-router-dom'
import { createUser, type CreateUserType } from '../../api/user'
import { toast } from 'react-toastify'

// 회원가입 유효성 체크
const validationSchema = yup.object({
  email: yup.string().email('이메일 형식이 올바르지 않습니다.').required('이메일을 압력해주세요'),
  password: yup.string().min(8, '최소 8자리 이상 비밀번호를 입력하세요.').required('비밀번호를 입력해주세요.'),
  password_chk: yup
    .string()
    .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
    .required('비밀번호를 입력해주세요.'),
})

const Join = () => {
  const navigate = useNavigate()
  const dispatch = useContext(AuthDispatch)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      password_chk: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const params = {
        email: values.email,
        password: values.password,
      }
      submit(params)
    },
  })

  // 회원가입
  const submit = async (params: CreateUserType) => {
    try {
      const { token } = await createUser(params)
      // 로컬스토리지에 토큰 저장 및 전역상태로 설정
      localStorage.setItem('token', token)
      if (dispatch !== null) {
        dispatch.setToken(token)
        toast('성공적으로 로그인 했습니다.')
      }
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

        <Button variant="contained" color="secondary" type="submit">
          회원가입
        </Button>
        <Button
          variant="outlined"
          type="button"
          onClick={() => {
            navigate('/login')
          }}
        >
          로그인
        </Button>
      </FormStyled>
    </>
  )
}
export default Join
