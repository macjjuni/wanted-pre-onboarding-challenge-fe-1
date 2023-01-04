import { useState, useEffect, SetStateAction } from 'react'
import { getTodos, type TodosProp, type TodoProp } from '../../api/todo'
import { useNavigate, Link } from 'react-router-dom'
import { AxiosResponse } from 'axios'

const Home = () => {
  const [list, setList] = useState<TodosProp[]>()
  const navigate = useNavigate()
  // Todo List 가져오기
  const handleTodos = async () => {
    try {
      const res: AxiosResponse<TodosProp> = await getTodos()
      console.log(res.data)

      setList(res.data)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    handleTodos()
  }, [])

  return (
    <div>
      <ul>
        {list && list.map((todo) => <li key={todo.id}>{todo.title}</li>)}
        <li></li>
      </ul>
    </div>
  )
}
export default Home
