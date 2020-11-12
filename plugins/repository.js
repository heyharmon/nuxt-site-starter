import { repository } from '~/app/api/json/Repository.js'

export default (context, inject) => {
    inject('repository', repository(context.$axios))
}
