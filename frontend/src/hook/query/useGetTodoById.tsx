import { useQuery } from 'react-query'
import { getTodoById } from '../../api/todo'

const useGetTodoById = (id: string) => {
  return useQuery(['getTodoById', id], () => getTodoById(id), {
    onSuccess: (data) => {
      return data
    },
  })
}

export default useGetTodoById
