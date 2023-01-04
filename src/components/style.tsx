import styled from 'styled-components'

// ---------------- Layout ----------------

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
      font-size: 18px;
      font-weight: 600;
    }
    & > .todo-date {
      font-size: 14px;
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
