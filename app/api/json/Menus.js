const baseURL = 'http://localhost:4000/menu/'

export default ($axios) => ({

    show() {
        return $axios.$get(baseURL)
        .then(menu => {
            return menu
        })
        .catch(error => {
            console.log(error)
        })
    }

})
