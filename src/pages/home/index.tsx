import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import { dateFormatter } from '../../utils/format'
import { type TodosTypes, type TodoTypes } from '../../api/type'
import { Link } from 'react-router-dom'
import { ListWrap, ListItem } from '../../style'

const Home = () => {
  const { data } = useLoaderData() as TodosTypes
  const [list, setList] = useState<TodoTypes[]>()

  useEffect(() => {
    setList(data)
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
