import { useQuery } from 'react-query'
import { getTodoList } from '../../api/todo'

const useGetTodos = () => {
  return useQuery(['getTodoList'], () => getTodoList(), {
    onSuccess: (data) => {
      // data.data.reverse()
      return data
    },
    staleTime: 30000,
    cacheTime: Infinity,
  })
}

export default useGetTodos
