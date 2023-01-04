import { useLayoutEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { getTodoById } from '../../api/todo'
import { Button } from '@mui/material'
import EventNoteIcon from '@mui/icons-material/EventNote'
import styled from 'styled-components'
import { type TodoProp, type TodoType } from '../../api/todo'

const TodoTitle = styled.h1`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  font-size: 30px;
  font-weight: bold;
  & > svg {
    margin-right: 15px;
  }
`
const TodoContent = styled.div`
  height: 100%;
  margin: 20px 0;
  word-break: break-all;
  overflow-y: auto;
`

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`

const Detail = () => {
  const { id } = useParams()
  const [todo, setTodo] = useState<TodoType>()
  const [isEdit, SetIsEdit] = useState<boolean>(false)

  useLayoutEffect(() => {
    handleTodo()
  }, [])

  if (id === undefined) return <Navigate to="/error" />

  const handleTodo = async () => {
    try {
      const res: TodoProp = await getTodoById(id)
      setTodo(res.data)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <TodoTitle>
        <EventNoteIcon />
        {todo?.title}
      </TodoTitle>
      <TodoContent>{todo?.content}</TodoContent>
      <ButtonWrap>
        <Button variant="contained" color="primary" type="button" fullWidth>
          수정
        </Button>
        <Button variant="contained" color="error" type="button" fullWidth>
          삭제
        </Button>
      </ButtonWrap>
    </>
  )
}

export default Detail
