import * as yup from 'yup'

// 회원가입 유효성 체크
export const userValidSchema = yup.object({
  email: yup.string().email('이메일 형식이 올바르지 않습니다.').required('이메일을 압력해주세요'),
  password: yup.string().min(8, '최소 8자리 이상 비밀번호를 입력하세요.').required('비밀번호를 입력해주세요.'),
})

// Todo 작성 시 유효성 체크
export const todoValidSchema = yup.object({
  title: yup.string().required('제목을 입력해주세요.'),
  content: yup.string().required('내용을 입력해주세요.'),
})
