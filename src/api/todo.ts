import { AxiosResponse } from 'axios'
import Axios from './request'
import { type TodosProp, type TodoProp, type TodoType, type CRUDTodoProp } from './type'

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
