import { useState, useEffect } from 'react'
import { dateFormatter } from '../../utils/formatter'
import { getTodoList } from '../../api/todo'
import { type TodoTypes } from '../../api/type'
import { Link } from 'react-router-dom'
import { ListWrap, ListItem } from '../../style'

const Home = () => {
  const [list, setList] = useState<TodoTypes[]>()

  const getTodos = async () => {
    const { data } = await getTodoList()
    setList(data)
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
