import axios, { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { router } from '..'
import { Token } from '../utils/token'
import { type IAxiosErr } from './todo.type'

const apiUrl = process.env.REACT_APP_API

const Axios = axios.create({
  baseURL: apiUrl,
  timeout: 180000,
})

Axios.interceptors.request.use(
  (config) => {
    const token = Token.getToken()

    if (token !== null) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      }
    }
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

Axios.interceptors.response.use(
  (response) => {
    const res = response.data
    toast(res.message)
    return res
  },
  (error: AxiosError<IAxiosErr>) => {
    console.error(error)
    const { response } = error

    if (response) {
      toast(response.data.details)
      if (response.status === 400) router.navigate('/login', { replace: true })
    } else {
      toast('네트워크 연결 상태를 확인하세요.')
      router.navigate('/error')
    }
    return Promise.reject(error)
  }
)
export default Axios
