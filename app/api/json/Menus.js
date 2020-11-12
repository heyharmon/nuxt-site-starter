import { MenuItem } from '~/app/models/Menu'

const baseURL = 'http://localhost:4000/menu/'

export default ($axios) => ({

    show() {
        return $axios.$get(baseURL)
        .then(menu => {
            return menu
            // return menu.map(item => {
            //   return MenuItem(item)
            // })
        })
        .catch(error => {
            console.log(error)
        })
    }

})
