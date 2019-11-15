import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from 'views/home/Home.vue'
import Add from 'views/add/Add.vue'
import Edit from 'views/edit/Edit.vue'

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
