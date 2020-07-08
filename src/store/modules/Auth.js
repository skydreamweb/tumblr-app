const { default: store } = require("..");
const { NULL } = require("node-sass");
const state = {
    token: null,
}

const getters = {
    isLoggedIn: function(state) {
       return !!state.token
    }
};

const actions = {
    logout: function({ commit }){
        commit('setToken', null)
    }
}

const mutation = {
    setToken: function(state, payload){
        state.token = payload;
    }
};


export { state, getters, mutation, actions }