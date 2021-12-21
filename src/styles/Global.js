import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    body {
    font-family: ${({theme}) => theme.fonts.main};
    margin: 0;
    font-size: 1.5em;
    text-align: center;
    background: ${({theme}) => theme.colors.mainbg};
    color: ${({theme}) => theme.colors.maintext};
}
`