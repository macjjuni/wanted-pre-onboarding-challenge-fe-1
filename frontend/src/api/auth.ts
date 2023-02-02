import Axios from '../utils/axios'
import { type IUserInfo, type IAuthResTypes } from './auth.type'

// 회원가입 API
export const createUser = (params: IUserInfo): Promise<IAuthResTypes> => {
  return Axios.post('/users/create', params)
}
// 로그인 API
export const loginUser = (params: IUserInfo): Promise<IAuthResTypes> => {
  return Axios.post('/users/login', params)
}
