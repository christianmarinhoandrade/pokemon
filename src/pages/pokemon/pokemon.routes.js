import PokemonList from './containers/pokemon-list.container'
import PokemonView from './containers/pokemon-view.container'

const routes = [
    {
        path: '/',
        component: PokemonList,
        breadcrumb: [
            {
                breadcrumbName: 'Pokemon',
            },
        ],
    },
    {
        path: '/pokemon/view/:name',
        component: PokemonView,
        breadcrumb: [
            {
                path: '/',
                breadcrumbName: 'Pokemon',
            },
            {
                breadcrumbName: 'Visualização',
            },
        ],
    },
]

export default routes
