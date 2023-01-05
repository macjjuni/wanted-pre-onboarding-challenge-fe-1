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

export interface CRUDTodoProp {
  title: string
  content: string
}
