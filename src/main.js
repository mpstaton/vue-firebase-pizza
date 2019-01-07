import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
import App from './App.vue';
import { isAbsolute } from 'path';

Vue.use(VueRouter)

//history is a feature of Vue that manages urls

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }

  }
})

router.beforeEach((to, from, next) => {
  alert('navigation triggered')
  next()
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
