import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import TransactionHistory from '../components/Transaction/TransactionList.vue'
import Reports from "../components/Transaction/Reports.vue"
import Dashboard from "../components/Transaction/Dashboard.vue"
import Catagories from "../components/Transaction/Catagories.vue"
import CCiForm from "../components/FormCci.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
    
  },
  {
    path: '/formcci',
    name: 'CCi Form',
    component: CCiForm
    
  },
  {
    path: '/tranasaction-history',
    name: 'TransactionHistory',
    component: TransactionHistory
  },
  {
    path:'/reports',
    name:"Reports",
    component:Reports
  },

 {
  path:'/catagories',
  name:"Catagories",
  component:Catagories
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
