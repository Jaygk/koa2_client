import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = () => import('views/home/Home.vue')
const Add = () => import('views/add/Add.vue')
const Edit = () => import('views/edit/Edit.vue')

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/add',
      component: Add
    },
    {
      path: '/edit',
      component: Edit
    }
  ],
  mode: 'history'
});
