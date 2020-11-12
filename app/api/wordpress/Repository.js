import MenusRepository from '~/app/api/wordpress/MenusRepository'
import PagesRepository from '~/app/api/wordpress/PagesRepository'
import PostsRepository from '~/app/api/wordpress/PostsRepository'

export const repository = ($axios) => ({
    menus: MenusRepository($axios),
    pages: PagesRepository($axios),
    posts: PostsRepository($axios),
})
