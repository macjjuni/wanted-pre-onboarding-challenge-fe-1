import { useEffect } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { TextField, Button } from '@mui/material'
import { createTodo, type CRUDTodoProp } from '../../api/todo'
import { useContext } from 'react'
import { AuthDispatch } from '../../App'
import { toast } from 'react-toastify'
import { FormStyled } from '../../components/style'

const validSchema = yup.object({
  title: yup.string().required('제목을 입력해주세요.'),
  content: yup.string().required('내용을 입력해주세요.'),
})

const Write = () => {
  const dispatch = useContext(AuthDispatch)
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
    },
    validationSchema: validSchema,
    onSubmit: (values) => {
      writeTodo(values)
    },
  })

  const writeTodo = async (todo: CRUDTodoProp) => {
    try {
      await createTodo(todo)
      navigate('/')
    } catch (e) {
      console.error(e)
    }
  }

  // 로그아웃 상태일 경우 로그인 페이지로이동
  // useEffect(() => {
  //   console.log(dispatch?.token)

  //   if (dispatch !== null && dispatch.token === null) {
  //     toast('로그인이 필요합니다.')
  //     navigate('/login', { replace: true })
  //   }
  // }, [])

  return (
    <FormStyled onSubmit={formik.handleSubmit}>
      <TextField
        label="제목"
        variant="outlined"
        value={formik.values.title}
        name="title"
        onChange={formik.handleChange}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
        size="small"
        fullWidth
        sx={{ height: '50px' }}
      />
      <TextField
        label="내용"
        multiline
        rows={18}
        value={formik.values.content}
        name="content"
        onChange={formik.handleChange}
        error={formik.touched.content && Boolean(formik.errors.content)}
        helperText={formik.touched.content && formik.errors.content}
        fullWidth
        sx={{ height: '100%' }}
      />
      <Button variant="contained" color="secondary" type="submit">
        작성하기
      </Button>
    </FormStyled>
  )
}
export default Write
