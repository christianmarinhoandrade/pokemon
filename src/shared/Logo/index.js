import React from 'react'
import { Image } from 'antd'

import pokemon from '~/assets/img/pokemon.png'

function Logo(props) {
    const { width, height, preview = false } = props

    return (
        <Image
            src={pokemon}
            width={width}
            height={height}
            preview={preview}
            alt="Pokémon"
        />
    )
}

export default Logo
