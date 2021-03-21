const reducersContext = require.context('../pages', true, /.reducer./)
const reducers = {}

reducersContext.keys().forEach((reducer) => {
    reducers[reducersContext(reducer).default.name] = reducersContext(
        reducer,
    ).default
})

export default reducers
