import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

// ---------------- Global Styles ----------------

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    position: relative;
    min-width: 100vw;
    min-height: 100vh;
    margin: 0;
    background: #7f7fd5; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  ul {
    list-style: none;
    padding-left: 0;
  }

  @media screen and (max-width: 768px) {
    .App {
      position: relative;
      top: auto;
      left: auto;
      transform: none;
      width: 100%;
      height: 100vh;
      padding: 15px;
    }
  }
`

// ---------------- Layout ----------------

export const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 570px;
  height: 700px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  padding: 0 25px 25px 25px;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
`

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`

export const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 590px;
  @media screen and (max-width: 768px) {
    & {
      height: calc(100vh - 110px);
    }
  }
`
export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 1rem;
`

// ---------------- page: Home ----------------
export const ListWrap = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
`
export const ListItem = styled.li`
  position: relative;
  width: 100%;
  border-radius: 3px;
  & > a {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 15px 15px 15px 30px;
    font-size: 17px;
    border-bottom: 1px solid #b6b6b6;
    transition: 0.3s ease;
    & > .todo-title {
      width: calc(100% - 85px);
      font-size: 18px;
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    & > .todo-date {
      width: 80px;
      font-size: 14px;
      text-align: center;
    }
  }
  & > a:hover {
    background: #f4f4f4;
  }
  & > a::after {
    content: '';
    position: absolute;
    top: 49%;
    left: 8px;
    transform: translate(0, -50%);
    width: 9px;
    height: 9px;
    background: #ff5959;
    border-radius: 50%;
  }
`
// ---------------- page: Login/Join ----------------

export const LoginJoinForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`
