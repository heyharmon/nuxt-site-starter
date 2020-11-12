const baseURL = 'http://localhost:4000/'

export default ($axios) => ({

    show(slug) {
        if (slug === undefined) { slug = 'homepage' }

        return $axios.$get(baseURL + 'pages?slug=' + slug)
        .then(pages => {
            return pages[0]
        })
        .catch(error => {
            console.log(error)
        })
    }

})
