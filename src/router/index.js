import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '@/components/HomePage';
import ErrorPage from '@/components/ErrorPage';

Vue.use(VueRouter);

const routes = [
  {
    name: "home", path: "/home", component: HomePage
  },
  {
    name: "error", path: "*", component: ErrorPage
  },
  {
    path: '/', redirect: { name: 'home' }
  },
];

const router = new VueRouter({
  routes,
});

export default router;
