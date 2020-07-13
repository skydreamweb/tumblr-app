import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router'
import store from './store/index'
import AuthHandler from './components/AuthHandler'
import Galleries from './components/Galleries'
import Upload from './components/Upload'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/oauth2/callback',
      component: AuthHandler
    },
    {
      path: '/galleries',
      component: Galleries
    },
    {
      path: '/upload',
      component: Upload
    },
  ]
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');