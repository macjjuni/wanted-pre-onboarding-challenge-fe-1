import { AxiosResponse } from 'axios'
import Axios from './request'

export type TodoType = {
  title: string
  content: string
  id: string
  createdAt: string
  updatedAt: string
}

export interface TodosProp {
  data: Array<TodoType>
}
export interface TodoProp {
  data: TodoType
}

// Todo List 조회
export const getTodoList = (): Promise<TodosProp> => {
  const url = '/todos'
  return Axios.get(url)
}

// Todo 조회
export const getTodoById = (id: string): Promise<TodoProp> => {
  const url = '/todos/' + encodeURI(id)
  return Axios.get(url)
}

export interface CRUDTodoProp {
  title: string
  content: string
}

// Todo 생성
export const createTodo = (todo: CRUDTodoProp): Promise<AxiosResponse<TodoType>> => {
  const url = '/todos'
  return Axios.post(url, todo)
}

// Todo 수정
export const updateTodo = (id: string, todo: CRUDTodoProp): Promise<AxiosResponse<TodoType>> => {
  const url = '/todos/' + encodeURI(id)
  return Axios.put(url, todo)
}

// Todo 삭제
export const deleteTodo = (id: string): Promise<AxiosResponse<TodoType>> => {
  const url = '/todos/' + encodeURI(id)
  return Axios.delete(url)
}
