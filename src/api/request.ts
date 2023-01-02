import axios from 'axios'
import { toast } from 'react-toastify'
const apiUrl = process.env.REACT_APP_API

const Axios = axios.create({
  baseURL: apiUrl,
  timeout: 180000,
})

Axios.interceptors.request.use(
  (config) => {
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
    console.log(res)
    return res
  },
  (error) => {
    console.error(error)
    toast(error.response.data.details)
    return Promise.reject(error)
  }
)
export default Axios
