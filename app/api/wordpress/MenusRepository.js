import { WordpressMenuItem } from '~/app/models/Menu'

const baseURL = 'http://nuxt.heyharmon.com/wp-json/menus/v1/menus/main-menu'
// const baseURL = 'http://nuxt.heyharmon.com/wp-json/menus/v2/'

export default ($axios) => ({

    show(slug) {
        return $axios.$get(baseURL)
        .then(menu => {
            return menu.items.map(item => {
              return WordpressMenuItem(item)
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

})
