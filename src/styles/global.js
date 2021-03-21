import { createGlobalStyle, css } from 'styled-components'
import './font-face.css'

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    text-decoration: none;
    box-sizing: border-box;
  }
  
  body {
    background-color: #fff
  }

  html {
    font-family: 'Montserrat'
  }
`

export default GlobalStyle
