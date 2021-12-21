import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
    colors: {
        mainbg: '#1b1523',
        maintext: '#fff',
        hover: '#c23866',
    },
    fonts: {
        main: "'Raleway', sans- serif;"
    },
    weights: {
        thin: 100,
        lighter: 200,
        light: 300,
        regular: 400,
        medium: 500,
        sbold: 600,
        bold: 700,
        xbold: 800,
    }
}

const Theme = ({children}) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme