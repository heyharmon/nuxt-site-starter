import { WordpressPost } from '~/app/models/Post'

const baseURL = 'http://nuxt.heyharmon.com/wp-json/wp/v2/'

export default ($axios) => ({

    index() {
        return $axios.$get(baseURL + 'posts' + '?_embed')
        .then(posts => {
            return posts.map(post => {
              return WordpressPost(post)
            })
        })
        .catch(error => {
            console.log(error)
        })
    },

    show(slug) {
        return $axios.$get(baseURL + 'posts' + '?_embed' + '&slug=' + slug)
        .then(posts => {
            return WordpressPost(posts[0])
        })
        .catch(error => {
            console.log(error)
        })
    }

})
