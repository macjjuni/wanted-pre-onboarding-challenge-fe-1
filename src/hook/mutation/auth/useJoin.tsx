import { useMutation } from 'react-query'
import { createUser } from '../../../api/auth'
import { type IUserInfo } from '../../../api/auth.type'
import { router } from '../../..'

const useJoin = () => {
  return useMutation((userInfo: IUserInfo) => createUser(userInfo), {
    onSuccess: (data) => {
      localStorage.setItem('token', data.token)
      router.navigate('/')
    },
  })
}
export default useJoin
