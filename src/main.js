import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import About from './components/About.vue'
import Admin from './components/Admin.vue'
import Contact from './components/Contact.vue'
import Delivery from './components/Delivery.vue'
import History from './components/History.vue'
import OrderingGuide from './components/OrderingGuide.vue'
import App from './App.vue';
import { isAbsolute } from 'path';

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'homeLink', component: Home },
  { path: '/menu/', name: 'menuLink', component: Menu },
  { path: '/admin', name: 'adminLink', component: Admin },
  { path: '/about', name: 'aboutLink', component: About, children: [
    { path: 'contact', name: 'contactLink', component: Contact },
    { path: 'history', name: 'historyLink', component: History },
    { path: 'delivery', name: 'deliveryLink', component: Delivery },
    { path: 'ordering-guide', name: 'orderingGuideLink', component: OrderingGuide }
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
