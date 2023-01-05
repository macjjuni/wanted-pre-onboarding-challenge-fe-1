import { Dispatch, SetStateAction, createContext } from 'react'

export type AuthProp = string | null
export interface AuthContextProp {
  token: AuthProp
  setToken: Dispatch<SetStateAction<AuthProp>>
}
export const AuthContext = createContext<AuthContextProp>({} as AuthContextProp)
