import api from '../../api/imgur'
import qs from 'qs'
import { router } from '../../main'

const state = {
    token: window.localStorage.getItem('imgur_token'),
}

const getters = {
    isLoggedIn: state => !!state.token
};

const actions = {
   
    login: function(){
        api.login()
    },
    finilazeLogin({ commit }, hash) {
        const query = qs.parse(hash.replace('#', ''));
        commit('setToken', query.access_token);
        window.localStorage.setItem('imgur_token', query.access_token);
        router.push('/')
    },
    logout: ({ commit }) => {
        commit('setToken', null) // to call mutation use 'commit'
        window.localStorage.removeItem('imgur_token')
    }
}

const mutations = {
    setToken: (state, token) =>{
        state.token = token;
    }
};


export default {
    state,
    getters,
    actions,
    mutations
};