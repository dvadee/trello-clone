import Vue from 'vue';
import VueRouter from 'vue-router';
import DesksList from '../views/DesksList.vue';
import Desk from '../views/Desk.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'DesksList',
    component: DesksList
  },
  {
    path: '/d/:id',
    name: 'Desk',
    component: Desk,
    props: true
  }
];

const router = new VueRouter({
  routes
});

export default router;
