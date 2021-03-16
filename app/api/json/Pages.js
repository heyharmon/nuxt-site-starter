const baseURL = 'https://my-json-server.typicode.com/heyharmon/json-api/pages'

export default ($axios) => ({

    show(slug) {
        if (slug === undefined) { slug = 'homepage' }

        return $axios.$get(baseURL + '?slug=' + slug)
        .then(pages => {
            return pages[0]
        })
        .catch(error => {
            console.log(error)
        })
    }

})
