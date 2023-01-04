import { useLayoutEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { getTodo } from '../../api/todo'

const Detail = () => {
  const { id } = useParams()

  useLayoutEffect(() => {
    handleTodo()
  }, [])

  if (id === undefined) return <Navigate to="/error" />

  const handleTodo = async () => {
    try {
      const res = await getTodo(id)
      console.log(res)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <h1>Detail</h1>
      <p>id : {id}</p>
    </>
  )
}

export default Detail
