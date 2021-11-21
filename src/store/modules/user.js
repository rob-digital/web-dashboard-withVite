export default {

    state: () => ({
        name: 'Tester'
    }),

    mutations: {
        SET_NAME(state, payload) {
            state.name = payload
        }
    },

    actions: {
        saveName( { commit }, data) {
            commit('SET_NAME', data)
        }
    },

    getters: {}, 
}