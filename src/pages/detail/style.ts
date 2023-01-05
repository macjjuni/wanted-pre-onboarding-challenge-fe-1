import styled from 'styled-components'

export const TodoTitle = styled.h1`
  position: relative;
  display: block;
  margin: 0;
  padding: 5px 0;
  font-size: 30px;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  & > svg {
    margin-right: 15px;
  }
`
export const TodoContent = styled.div`
  position: relative;
  height: 100%;
  padding: 30px 0;
  font-size: 18px;
  word-break: break-all;
  overflow-y: auto;
`

export const DateStyled = styled.p`
  position: absolute;
  top: 6px;
  right: 0;
  margin: 0;
  padding: 0;
  font-size: 14px;
`

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`
