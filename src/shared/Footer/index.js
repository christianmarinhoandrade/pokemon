import React from 'react'
import { StyledFooter, StyledText } from './styles'

function SharedFooter(props) {
    const { color } = props

    return (
        <StyledFooter>
            <StyledText color={color}>© </StyledText>
            <StyledText strong color={color}>
                Pokémon
            </StyledText>
            <StyledText color={color}> | {new Date().getFullYear()}</StyledText>
        </StyledFooter>
    )
}

export default SharedFooter
