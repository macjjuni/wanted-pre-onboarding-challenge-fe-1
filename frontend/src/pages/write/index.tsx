import { useFormik } from 'formik'
import { todoValidSchema } from '../../utils/validation'
import { TextField, Button } from '@mui/material'
import { FormStyled } from '../../style'

import useCreateTodo from '../../hook/mutation/todo/useCreateTodo'

const Write = () => {
  const { mutate } = useCreateTodo()

  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
    },
    validationSchema: todoValidSchema,
    onSubmit: (values) => {
      mutate(values)
    },
  })

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
