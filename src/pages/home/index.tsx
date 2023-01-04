import { useState, useEffect } from 'react'
import { getTodoList, type TodosProp, type TodoType } from '../../api/todo'
import { Link } from 'react-router-dom'
import { ListWrap, ListItem } from '../../components/style'

const Home = () => {
  const [list, setList] = useState<TodoType[]>()
  // Todo List 가져오기
  const getTodos = async () => {
    try {
      const res: TodosProp = await getTodoList()
      console.log(res.data)

      setList(res.data)
    } catch (e) {
      console.error(e)
    }
  }
  const dateFormatter = (date: string) => {
    return date.substr(0, 10)
  }

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <>
      <ListWrap>
        {list &&
          list.map((todo) => (
            <ListItem key={todo.id}>
              <Link to={`/todo/${todo.id}`}>
                <span className="todo-title">{todo.title}</span>
                <span className="todo-date">{dateFormatter(todo.createdAt)}</span>
              </Link>
            </ListItem>
          ))}
      </ListWrap>
    </>
  )
}
export default Home
