import Axios from '../utils/axios'
import { type CreateUserTypes, type IAuthResTypes } from './auth.type'

// 회원가입 API
export const createUser = (params: CreateUserTypes): Promise<IAuthResTypes> => {
  return Axios.post('/users/create', params)
}

// 로그인 API
export const loginUser = (params: CreateUserTypes): Promise<IAuthResTypes> => {
  return Axios.post('/users/login', params)
}
