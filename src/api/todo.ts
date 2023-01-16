import { AxiosResponse } from 'axios'
import Axios from '../utils/axios'
import { type ITodos, type ITodo, type TodoTypes, type ICRUDTodo } from './todo.type'

// Todo List 조회
export const getTodoList = (): Promise<ITodos> => {
  const url = '/todos'
  return Axios.get(url)
}

// Todo 조회
export const getTodoById = (id: string): Promise<ITodo> => {
  const url = '/todos/' + encodeURI(id)
  return Axios.get(url)
}

// Todo 생성
export const createTodo = (todo: ICRUDTodo): Promise<AxiosResponse<TodoTypes>> => {
  const url = '/todos'
  return Axios.post(url, todo)
}

// Todo 수정
export const updateTodo = (id: string, todo: ICRUDTodo): Promise<AxiosResponse<TodoTypes>> => {
  const url = '/todos/' + encodeURI(id)
  return Axios.put(url, todo)
}

// Todo 삭제
export const deleteTodo = (id: string): Promise<AxiosResponse<TodoTypes>> => {
  const url = '/todos/' + encodeURI(id)
  return Axios.delete(url)
}
