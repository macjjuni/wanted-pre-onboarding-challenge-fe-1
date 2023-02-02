export const Token = {
  getToken: () => {
    return localStorage.getItem('token')
  },
  setToken: (tokenVal: string) => {
    localStorage.setItem('token', tokenVal)
  },
  removeToken: () => {
    localStorage.removeItem('token')
  },
}
