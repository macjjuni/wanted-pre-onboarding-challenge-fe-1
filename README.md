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

## 프리온보딩 챌린지 정보 및 요구사항

<br>

- [사정과제 및 안내](https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api#login)


<br>


## 🌲 프로젝트 구조

```
<b>wanted-pre-onboarding-challenge-fe-1
├─ .env
├─ package-lock.json
├─ package.json
├─ public
├─ src
│  ├─ api          (🌏) => API 함 모음
│  ├─ component    (🧩) => 컴포넌트 모음
│  ├─ hook         (🕹️) => 커스텀 훅 모음
│  │  ├─ mutation  (📫) useMutation 훅
│  │  └─ query     (🕸️) useQuery 훅
│  │
│  ├─ index.tsx    (🏃‍♂️) => 엔트리 포인트
│  ├─ layout       (🪟) => 레이아웃 모음
│  │  ├─ header
│  │  ├─ main
│  │  └─ index.tsx  () 전체 레이아웃
│  │
│  ├─ pages        (📚) => 페이지 모음
│  │  ├─ detail    (📄) Todo 상세페이지
│  │  ├─ error     (📄) 404/Error 페이지
│  │  ├─ home      (📄) Todo 목록 페이지
│  │  ├─ join      (📄) 회원가입 페이지
│  │  ├─ login     (📄) 로그인 페이지
│  │  └─ write     (📄) 글작성 페이지
│  │
│  ├─ router       (🚦) => 라우팅 관련 모음
│  ├─ style.tsx    (🕺) => 공통 스타일 코드
│  └─ utils        (🛠️) => 공통 함수 모음
│
├─ tsconfig.json
└─ yarn.lock

```

<br>

## 기능구현 소개

- [x] 회원가입/로그인 기능(유효성 검사 O)
- [x] Todo 등록/수정/삭제
- [x] Todo 상세조회
- [x] 리액트 쿼리를 사용한 Todo 데이터 캐싱

<br>

## 기술 스택

- [x] React(CRA, SPA), React-Router v6
- [x] TypeScript
- [x] Axios, React-Query
- [x] MUI, Styled-Components
- [x] formik, yup

<br>

## 리팩토링 결과

### React-Query & 관심사 분리를 적용하기 이전 Login 컴포넌트

```
// Login.tsx
...
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

  // ************ 로그인 API 호출 및 처리 로직 ************
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
  ...
```

<br>

Login 컴포넌트는 사용자 정보 유효성 검사 등 여러 로직과 API 호출, 이후 처리 로직도 포함되어 있는 도메인과 의존성이 높은 컴포넌트다. 

이 경우 추후 예상치 못한 변경에 유연하게 대처하기 어려우므로 React-Query를 사용한 관심사 분리를 통해 나중에 생길 변경사항에 유연하게 대처할 수 있다.

<br>

### React-Query 적용 후 Login 컴포넌트와 분리된 useLogin


```
// useLogin.tsx
...
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

```
// Login.tsx
...
const Login = () => {

  const navigate = useNavigate()
  const { mutate: loginMutate } = useLogin() // <- useLogin hook
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

<br>

Login 컴포넌트와 useLogin hook으로 분리된 상태이다. API호출 및 이후 처리 로직을 useLogin hook이 담당하면 Login 컴포넌트는 의존성이 낮은 상태에서 UI 구현에만 집중할 수 있다. 또한 쉽게 React-Query의 캐싱 전략을 가져갈 수 있는 이점도 있다.

<br>


## 패키지 설치 명령어

```
// 1. 백엔드 패키지 설치
> cd backend && yarn
//   또는
> cd backend && npm i

// 2. 프론트엔드 패키지 설치
> cd frontend && yarn
//   또는
> cd frontend && npm i
```
## 개발서버 실행 명령어

```
// 1. 백엔드 패키지 설치
> cd backend && yarn start
//   또는
> cd backend && npm run start

// 2. 프론트엔드 패키지 설치
> cd frontend && yarn start
//   또는
> cd frontend && npm run start
```
## 빌드 명령어

```
> yarn build
//  or
> npm run build
```
