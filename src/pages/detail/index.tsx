import React, { useLayoutEffect, useState } from 'react'
import { useParams, Navigate, useNavigate, useLoaderData } from 'react-router-dom'
import { getTodoById, deleteTodo, updateTodo } from '../../api/todo'
import { todoValidSchema } from '../../utils/formik'
import { useFormik } from 'formik'
import { TextField, Button } from '@mui/material'
import { FormStyled } from '../../style'
import { type TodoProp, type TodoTypes, type CRUDTodoProp } from '../../api/type'
import EventNoteIcon from '@mui/icons-material/EventNote'
import { TodoContent, TodoTitle, ButtonWrap, DateStyled } from './style'
import { toast } from 'react-toastify'
import { dateFormatter } from '../../utils/format'

const Detail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [isEdit, SetIsEdit] = useState<boolean>(false)
  const formik = useFormik<TodoTypes>({
    initialValues: {
      id: '',
      title: '',
      content: '',
      createdAt: '',
      updatedAt: '',
    },
    validationSchema: todoValidSchema,
    onSubmit: (values) => {
      handleUpdate(values)
    },
  })

  useLayoutEffect(() => {
    handleTodo()
  }, [])

  if (id === undefined) return <Navigate to="/error" />

  // 업데이트 모드로 셋팅
  const handleEidt = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    SetIsEdit(true)
  }

  // Todo 조회
  const handleTodo = async () => {
    try {
      const res: TodoProp = await getTodoById(id)
      formik.setValues(res.data)
    } catch (e) {
      console.error(e)
    }
  }

  // Todo 삭제
  const handleDelete = async () => {
    try {
      await deleteTodo(id)
      toast('삭제를 완료했습니다.')
      navigate('/')
    } catch (e) {
      console.error(e)
    }
  }

  // Todo 업데이트
  const handleUpdate = async (todo: CRUDTodoProp) => {
    try {
      const res = await updateTodo(id, todo)
      toast('업데이트를 완료했습니다.')
      formik.setValues(res.data)
      SetIsEdit(false)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <FormStyled onSubmit={formik.handleSubmit}>
        {!isEdit && (
          <>
            <TodoTitle>
              <EventNoteIcon />
              {formik.values.title}
            </TodoTitle>
            <TodoContent>
              <DateStyled>{dateFormatter(formik.values.createdAt)}</DateStyled>
              {formik.values.content}
            </TodoContent>
          </>
        )}

        {isEdit && (
          <>
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
          </>
        )}

        <ButtonWrap>
          {!isEdit ? (
            <Button variant="contained" color="primary" type="button" fullWidth onClick={handleEidt}>
              수정
            </Button>
          ) : (
            <Button variant="contained" color="primary" type="submit" fullWidth>
              수정하기
            </Button>
          )}

          <Button variant="contained" color="error" type="button" fullWidth onClick={handleDelete}>
            삭제
          </Button>
        </ButtonWrap>
      </FormStyled>
    </>
  )
}

export default Detail
