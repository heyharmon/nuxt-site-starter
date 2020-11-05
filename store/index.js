export const state = () => ({
    menu: []
})

export const mutations = {
    SET_MENU(state, menu) {
        state.menu = menu
    }
}

export const actions = {
    nuxtServerInit({ commit }) {
        return this.$axios.$get('http://localhost:4000/menu/')
        .then((response) => {
            commit('SET_MENU', response)
        })
    }
}
