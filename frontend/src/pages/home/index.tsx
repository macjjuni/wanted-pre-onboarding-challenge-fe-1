import { useState, useEffect } from 'react'
import { dateFormatter } from '../../utils/formatter'
import { type TodoTypes } from '../../api/todo.type'
import { Link } from 'react-router-dom'
import { ListWrap, ListItem } from '../../style'

import useGetTodos from '../../hook/query/useGetTodos'

const Home = () => {
  const [list, setList] = useState<TodoTypes[]>()
  const { data, isLoading } = useGetTodos()

  useEffect(() => {
    if (data) setList(data.data)
  }, [data])

  if (isLoading) return <>로딩중 ...</>

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
