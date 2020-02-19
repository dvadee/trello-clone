import Vue from 'vue'
import VueRouter from 'vue-router'
import Desks from '../views/Desks.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Desks',
    component: Desks
  }
]

const router = new VueRouter({
  routes
})

export default router
