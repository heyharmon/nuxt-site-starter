const baseURL = 'http://localhost:4000/posts'

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
