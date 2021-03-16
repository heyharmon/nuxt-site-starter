const baseURL = 'https://my-json-server.typicode.com/heyharmon/json-api/menu'

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
