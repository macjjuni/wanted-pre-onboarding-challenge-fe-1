import { useMutation } from 'react-query'
import { loginUser } from '../../../api/auth'
import { type IUserInfo } from '../../../api/auth.type'
import { router } from '../../..'

const useLogin = () => {
  return useMutation((userInfo: IUserInfo) => loginUser(userInfo), {
    onSuccess: (data) => {
      localStorage.setItem('token', data.token)
      router.navigate('/')
    },
  })
}
export default useLogin
