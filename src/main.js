import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Delivery from './components/Delivery.vue'
import History from './components/History.vue'
import OrderingGuide from './components/OrderingGuide.vue'
import App from './App.vue';
import { isAbsolute } from 'path';

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/menu/:items', component: Menu },
  { path: '/about', components: About, children: [
    { path: 'contact', components: Contact },
    { path: 'history', components: History },
    { path: 'contact', components: Contact },
    { path: 'ordering-guide', components: OrderingGuide }
  ]},
  { path: '*', redirect: '/'}
]

//history is a feature of Vue that manages urls

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
