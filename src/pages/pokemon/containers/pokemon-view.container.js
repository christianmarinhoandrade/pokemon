import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import PokemonFormComponent from '../components/pokemon-form.component'

import service from '../pokemon.services'
import action from '../store/pokemon.actions'

function PokemonViewContainer() {
    const { setPokemon } = action
    const params = useParams()
    const { name } = params
    const [img, setImg] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        const getData = async () => {
            const response = await service.get(name)
            const { data } = response

            setImg(data.sprites.front_default)

            dispatch(setPokemon(data))
        }
        getData()
    }, [name])
    return <PokemonFormComponent name={name} img={img} />
}

export default PokemonViewContainer
