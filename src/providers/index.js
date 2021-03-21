import React from 'react'
import ThemeProvider from './theme'

function Providers(props) {
    const { children } = props

    return <ThemeProvider>{children}</ThemeProvider>
}

export default Providers
