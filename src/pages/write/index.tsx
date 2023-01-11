import Login from '../login'
import useAuth from '../../hook/useAuth'
import { useNavigate } from 'react-router-dom'
import { todoValidSchema } from '../../utils/validation'
import { useFormik } from 'formik'
import { TextField, Button } from '@mui/material'
import { createTodo } from '../../api/todo'
import { type CRUDTodoProp } from '../../api/type'
import { FormStyled } from '../../style'

const Write = () => {
  const { token } = useAuth()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
    },
    validationSchema: todoValidSchema,
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
  // 로그아웃 상태면 로그인 컴포넌트 렌더링
  if (token === null) return <Login />

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
