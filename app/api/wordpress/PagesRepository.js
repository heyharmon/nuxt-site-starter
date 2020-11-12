import { WordpressPage } from '~/app/models/Page'

const baseURL = 'http://nuxt.heyharmon.com/wp-json/wp/v2/'

export default ($axios) => ({

    show(slug) {
        if (slug === undefined) { slug = 'homepage' }

        return $axios.$get(baseURL + 'pages' + '?slug=' + slug)
        .then(pages => {
            return WordpressPage(pages[0])
        })
        .catch(error => {
            console.log(error)
        })
    }

})
