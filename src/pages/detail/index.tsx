import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FormStyled } from '../../style'
import { todoValidSchema } from '../../utils/validation'
import { dateFormatter } from '../../utils/formatter'
import { useFormik } from 'formik'
import { TextField, Button } from '@mui/material'
import EventNoteIcon from '@mui/icons-material/EventNote'
import { TodoContent, TodoTitle, ButtonWrap, DateStyled } from './style'

import useGetTodoById from '../../hook/query/useGetTodoById'
import useUpdateTodo from '../../hook/mutation/todo/useUpdateTodo'
import useDeleteTodo from '../../hook/mutation/todo/useDeleteTodo'

import { type TodoTypes } from '../../api/todo.type'

const Detail = () => {
  const { id: yetId } = useParams()
  const id = yetId ? yetId : 'undefined'
  const { data, isLoading } = useGetTodoById(id)
  const { mutate: deleteMutate } = useDeleteTodo()
  const { mutate: updateMutate } = useUpdateTodo()

  const [isEditMode, setIsEditMode] = useState<boolean>(false)
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
      const todo = {
        title: values.title,
        content: values.content,
      }
      updateMutate({ id: values.id, todo })
    },
  })

  useEffect(() => {
    if (data) formik.setValues(data.data)
  }, [data])

  // 업데이트 모드로 변경
  const handleEditMode = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsEditMode(true)
  }

  // Todo 삭제
  const handleDelete = () => {
    deleteMutate(id)
  }

  if (isLoading) return <>로딩중 ...</>

  return (
    <>
      <FormStyled onSubmit={formik.handleSubmit}>
        {!isEditMode && (
          <>
            <TodoTitle>
              <EventNoteIcon />
              {formik.values.title}
            </TodoTitle>
            <TodoContent>
              <DateStyled>작성일 : {dateFormatter(formik.values.createdAt)}</DateStyled>
              {formik.values.content}
            </TodoContent>
          </>
        )}

        {isEditMode && (
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
          {!isEditMode ? (
            <Button variant="contained" color="primary" type="button" fullWidth onClick={handleEditMode}>
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
