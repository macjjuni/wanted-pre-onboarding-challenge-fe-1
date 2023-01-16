import { useQuery } from 'react-query'
import { getTodoList } from '../../api/todo'

const useGetTodos = () => {
  return useQuery(['getTodoList'], () => getTodoList(), {
    onSuccess: (data) => {
      return data
    },
    staleTime: 5000,
    cacheTime: Infinity,
  })
}

export default useGetTodos
