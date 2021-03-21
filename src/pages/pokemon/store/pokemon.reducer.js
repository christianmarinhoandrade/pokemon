import * as types from './pokemon.actionsType'

import Immutable from 'seamless-immutable'

const INITIAL_STATE = Immutable({
    data: {},
})

function pokemonReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.SET_POKEMON:
            return state.merge({ data: action.data })
        default:
            return state
    }
}

export default pokemonReducer
