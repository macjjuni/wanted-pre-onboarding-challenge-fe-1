import { useFormik } from 'formik'
import * as yup from 'yup'
import { TextField, Button } from '@mui/material'
import { createTodo, type CRUDTodoProp } from '../../api/todo'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const validSchema = yup.object({
  title: yup.string().required('제목을 입력해주세요.'),
  content: yup.string().required('내용을 입력해주세요.'),
})

const WriteFormLayout = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Write = () => {
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
      const res = await createTodo(todo)
      // Todo 저장 로직 추가해야함
      console.log(res)
      navigate('/')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <WriteFormLayout onSubmit={formik.handleSubmit}>
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
        sx={{ height: '70px' }}
      />
      <TextField
        label="내용"
        multiline
        rows={19}
        value={formik.values.content}
        name="content"
        onChange={formik.handleChange}
        error={formik.touched.content && Boolean(formik.errors.content)}
        helperText={formik.touched.content && formik.errors.content}
        fullWidth
        sx={{ marginBottom: '1rem' }}
      />
      <Button variant="contained" color="secondary" type="submit">
        작성하기
      </Button>
    </WriteFormLayout>
  )
}
export default Write
