import { useQueryClient, useMutation } from 'react-query'
import { deleteTodo } from '../../../api/todo'
import { router } from '../../..'
import { toast } from 'react-toastify'

const useDeleteTodo = () => {
  const queryClient = useQueryClient()
  return useMutation((id: string) => deleteTodo(id), {
    onSuccess: (data) => {
      toast('삭제를 완료했습니다.')
      queryClient.invalidateQueries(['getTodoList'])
      router.navigate('/')
    },
  })
}

export default useDeleteTodo
