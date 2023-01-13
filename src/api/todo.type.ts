export type TodoTypes = {
  title: string
  content: string
  id: string
  createdAt: string
  updatedAt: string
}

export interface TodosTypes {
  data: TodoTypes[]
}
export interface TodoProp {
  data: TodoTypes
}

export interface CRUDTodoProp {
  title: string
  content: string
}

export interface IAxiosErr {
  details: string
}
