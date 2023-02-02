export type TodoTypes = {
  title: string
  content: string
  id: string
  createdAt: string
  updatedAt: string
}

export interface ITodos {
  data: TodoTypes[]
}
export interface ITodo {
  data: TodoTypes
}

export interface ICRUDTodo {
  title: string
  content: string
}
