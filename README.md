# 원티드 프리온보딩 챌린지 프론트엔드 사전과제 :: Todo

<br>

<div align="center">
	<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white" />
	<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white" />
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white" />
</div>

<div align="center">
  <img src="https://img.shields.io/badge/MUI-007FFF?style=flat&logo=MUI&logoColor=white" />
  <img src="https://img.shields.io/badge/Styled Components-DB7093?style=flat&logo=Styled-Components&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" />
</div>
<div align="center">
	<img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=ESLint&logoColor=white" />
	<img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=Prettier&logoColor=white" />
</div>

<br>

## 🌲 프로젝트 구조

```
wanted-pre-onboarding-challenge-fe-1
├─ .env
├─ package-lock.json
├─ package.json
├─ public
├─ src
│  ├─ App.tsx
│  ├─ api          (🌏) => API 함 모음
│  ├─ component    (🧩) => 컴포넌트 모음
│  ├─ hook         (🕹️) => 커스텀 훅 모음
│  │  ├─ mutation   :: useMutation 훅
│  │  └─ query      :: useQuery 훅
│  │
│  ├─ index.tsx    (🏃‍♂️) => 엔트리 포인트
│  ├─ layout       (🪟) => 레이아웃 모음
│  │  ├─ header
│  │  ├─ main
│  │  └─ index.tsx  :: 전체 레이아웃
│  │
│  ├─ pages        (📚) => 페이지 모음
│  │  ├─ detail     :: Todo 상세페이지
│  │  ├─ error      :: 404/Error 페이지
│  │  ├─ home       :: Todo 목록 페이지
│  │  ├─ join       :: 회원가입 페이지
│  │  ├─ login      :: 로그인 페이지
│  │  └─ write      :: 글작성 페이지
│  │
│  ├─ router    (🚦) => 라우팅 관련 모음
│  ├─ style.tsx (🕺) => 스타일 관련 코드
│  └─ utils
├─ tsconfig.json
└─ yarn.lock

```

<br>

## React-Query 적용 전/후

### React-Query 추가 전 Login 컴포넌트

```
import useAuth from '../../hook/useAuth'
import { Button, TextField } from '@mui/material'
import { LoginJoinForm } from '../../style'
import { useFormik } from 'formik'
import { userValidSchema } from '../../utils/validation'
import { useNavigate } from 'react-router-dom'
import { Token } from '../../utils/token'
import { loginUser } from '../../api/auth'
import { type IUserInfo } from '../../api/auth.type'

const Login = () => {
  const navigate = useNavigate()
  const { token } = useAuth()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: userValidSchema,
    onSubmit: (values) => {
      submit(values)
    },
  })

  // 로그인
  const submit = async (params: IUserInfo) => {
    try {
      const data = await loginUser(params)
      // 로컬스토리지에 토큰 저장 및 전역상태로 설정
      Token.setToken(data.token)
      navigate('/')
    } catch (e) {
      console.error(e)
    }
  }

  if (token !== null) return <Navigate to="/" replace />
  ... View Logic ...
```

### React-Query 추가 후 Login 컴포넌트와 useLogin Hook

```
// Login.tsx

import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { userValidSchema } from '../../utils/validation'
import useAuth from '../../hook/useAuth'

import { Button, TextField } from '@mui/material'
import { LoginJoinForm } from '../../style'

import useLogin from '../../hook/mutation/auth/useLogin'

const Login = () => {
  const navigate = useNavigate()
  const { mutate: loginMutate } = useLogin()
  const { token } = useAuth()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: userValidSchema,
    onSubmit: (values) => {
      loginMutate(values)
    },
  })

  if (token !== null) return <Navigate to="/" replace />
  ... View Logic ...
```

```
// useLogin.tsx

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
```

컴포넌트와 API 로직을 react-query 훅으로 분리함으로 써 코드 가독성 및 API 재사용성 증가

<br>

## - 패키지 설치 명령어

```
> yarn
> npm i
```

<br>

## - 빌드 명령어

```
> yarn build
> npm run build
```
