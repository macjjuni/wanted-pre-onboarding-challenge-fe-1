import Axios from './request'

// const headers = { 'Content-Type': 'application/json' }

export interface CreateUserType {
  email: string
  password: string
}
interface CreateUserResType {
  message: string
  token: string
}

export type CUResType = Promise<CreateUserResType>

// 회원가입 API
export const createUser = (params: CreateUserType): CUResType => {
  const url = '/users/create'
  return Axios.post(url, params)
}

// 로그인 API
export const loginUser = (params: CreateUserType): CUResType => {
  const url = '/users/login'
  return Axios.post(url, params)
}
