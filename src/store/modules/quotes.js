import axios from 'axios'
export default {
    namespaced: true,
    state: {
        quotesList: {}
    },
    mutations: {
        SET_QUOTES_LIST( state, data){
            state.quotesList = data
        }
    },
    actions: {
        async GET_QUOTES_LIST({ commit, state }) {
            const data = await axios({
                method: 'get',
                url: `${import.meta.env.VITE_API_BASE_URL}quotes/random`,
                params:{
                    limit: 10
                },
                headers: {
                }

            })

             commit('SET_QUOTES_LIST', data.data)
        },
        
    },
    getters: {
     
    }

}