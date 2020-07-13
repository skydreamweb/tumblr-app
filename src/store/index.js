import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/Auth'
import images from './modules/Images'



Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        images
    }
})