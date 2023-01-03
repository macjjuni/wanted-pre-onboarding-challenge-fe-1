import { AxiosResponse } from 'axios'
import Axios from './request'

interface TodoProp {
  title: string
  content: string
  id: string
  createAt: string
  updatedAt: string
}

interface TodosProp {
  data: TodoProp[]
}

// Todo List 조회
export const getTodos = (): Promise<AxiosResponse<TodosProp>> => {
  const url = '/todos'
  return Axios.get(url)
}

// Todo 조회
export const getTodo = (id: string): Promise<AxiosResponse<TodoProp>> => {
  const url = '/todos/' + encodeURI(id)
  return Axios.get(url)
}

interface CRUDTodoProp {
  title: string
  content: string
}

// Todo 생성
export const createTodo = (todo: CRUDTodoProp): Promise<AxiosResponse<TodoProp>> => {
  const url = '/todos'
  return Axios.post(url, todo)
}

// Todo 수정
export const updateTodo = (id: string, todo: CRUDTodoProp): Promise<AxiosResponse<TodoProp>> => {
  const url = '/todos/' + encodeURI(id)
  return Axios.put(url, todo)
}

// Todo 삭제
export const deleteTodo = (id: string): Promise<AxiosResponse<TodoProp>> => {
  const url = '/todos/' + encodeURI(id)
  return Axios.delete(url)
}
