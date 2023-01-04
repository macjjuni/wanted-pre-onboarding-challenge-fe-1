import axios from 'axios'
import { toast } from 'react-toastify'
import { router } from '..'
const apiUrl = process.env.REACT_APP_API

const Axios = axios.create({
  baseURL: apiUrl,
  timeout: 180000,
})

Axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
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
  (error) => {
    console.error(error)
    toast(error.response.data.details)
    if (error.response.status === 400) router.navigate('/login', { replace: true })
    return Promise.reject(error)
  }
)
export default Axios
