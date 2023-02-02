import { useMutation } from 'react-query'
import { type ICRUDTodo } from '../../../api/todo.type'
import { updateTodo } from '../../../api/todo'
import { router } from '../../..'
import { toast } from 'react-toastify'

const useUpdateTodo = () => {
  return useMutation((data: { id: string; todo: ICRUDTodo }) => updateTodo(data.id, data.todo), {
    onSuccess: (data) => {
      toast('업데이트를 완료했습니다.')
      router.navigate(data.data.id)
    },
  })
}

export default useUpdateTodo
