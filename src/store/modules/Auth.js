import api from '../../api/imgur'
import qs from 'qs'

const state = {
    token: null,
}

const getters = {
    isLoggedIn: function(state) {
       return !!state.token
    }
};

const actions = {
   
    login: function(){
        api.login()
    },
    finilazeLogin({ commit }, hash){
       const query = qs.parse(hash.replace('#',""));
        commit('setToken', query.access_token);
    },
    logout: ({ commit }) => {
        commit('setToken', null) // to call mutation use 'commit'
    }
}

const mutations = {
    setToken: (state, token) =>{
        state.token = token;
    }
};


export default { state, getters, actions, mutations }