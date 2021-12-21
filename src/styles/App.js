import styled from 'styled-components';

export const Container = styled.div `
    max-width: 860px;
    margin: 40px auto;
    h1 {
      color: ${({ theme }) => theme.colors.maintext};
    }
`

export const Btn = styled.button `
  background: none;
  border: 2px solid ${({ theme }) => theme.colors.maintext};
  padding: 6px 12px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.maintext};
  font-weight: bold;
  cursor: pointer;
  font-size: 1em;
  :hover {
    background: ${({theme}) => theme.colors.hover};
    color: ${({ theme }) => theme.colors.maintext};
  }
`