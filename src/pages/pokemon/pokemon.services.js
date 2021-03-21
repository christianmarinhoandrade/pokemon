import api from '~/services/api'

const services = {
    get(name) {
        return api.get(`/pokemon/${name}`)
    },
}

export default services
