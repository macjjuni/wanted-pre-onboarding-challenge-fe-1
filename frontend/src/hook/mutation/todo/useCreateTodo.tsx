import { useMutation, useQueryClient } from 'react-query'
import { createTodo } from '../../../api/todo'
import { router } from '../../..'
import { toast } from 'react-toastify'

import { type ICRUDTodo } from '../../../api/todo.type'

const useCreateTodo = () => {
  // const query = useQueryClient()
  return useMutation((todo: ICRUDTodo) => createTodo(todo), {
    onSuccess: (data) => {
      toast('작성을 완료했습니다.')
      router.navigate(`/todo/${data.data.id}`)
      // query.invalidateQueries(['getTodoList'])
    },
  })
}

export default useCreateTodo
