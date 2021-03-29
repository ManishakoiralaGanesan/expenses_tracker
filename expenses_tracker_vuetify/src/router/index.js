import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TransactionHistory from '../components/TransactionHistory.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',

    component: Home
    
  },
  {
    path: '/tranasaction-history',
    name: 'TransactionHistory',
    component: TransactionHistory
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
