export const state = () => ({
    menu: []
})

export const mutations = {
    SET_MENU(state, menu) {
        state.menu = menu
    }
}

export const actions = {
    nuxtServerInit(context) {
        return this.$repository.menus.show()
        .then((menu) => {
            context.commit('SET_MENU', menu);
        })
    }
}
