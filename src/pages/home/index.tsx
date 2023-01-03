import { useEffect } from 'react'
import { getTodos } from '../../api/todo'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  // Todo List 가져오기
  const handleTodos = async () => {
    try {
      const res = await getTodos()
      console.log(res)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    handleTodos()
  }, [])

  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}
export default Home
