import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import { toast } from 'react-toastify'
import { router } from '..'
import { Token } from './token'

const baseURL = process.env.REACT_APP_API

const Axios = axios.create({
  baseURL: baseURL,
  timeout: 180000,
})

Axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
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
  (response: AxiosResponse) => {
    const res = response.data
    toast(res.message)
    return res
  },
  (error: AxiosError<{ details: string }>) => {
    console.error(error)
    const { response } = error

    if (response) {
      if (response.data.details === 'Token is missing') {
        toast('로그인 정보가 유효하지 않습니다.')
        router.navigate('/auth/login', { replace: true })
      } else if (response.data.details === 'todo를 찾는 도중 문제가 생겼습니다') {
        toast('todo를 찾는 도중 문제가 생겼습니다')
        router.navigate('/', { replace: true })
      } else {
        toast(response.data.details)
      }
    } else {
      toast('네트워크 연결 상태를 확인하세요.')
      router.navigate('/error')
    }
    return Promise.reject(error)
  }
)
export default Axios
