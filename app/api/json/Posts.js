const baseURL = 'https://my-json-server.typicode.com/heyharmon/json-api/posts'

export default ($axios) => ({

    index() {
        return $axios.$get(baseURL)
        .then(response => {
            return response
        })
        .catch(error => {
            console.log(error)
        })
    },

    show(slug) {
        return $axios.$get(baseURL + '?slug=' + slug)
        .then(response => {
            return response[0]
        })
        .catch(error => {
            console.log(error)
        })
    }

})
