import styled, { css } from 'styled-components'

const Main = styled.div`
    ${({ theme, isLuke }) => css`
        display: flex;
        justify-content: center;
    `}
`

export { Main }
