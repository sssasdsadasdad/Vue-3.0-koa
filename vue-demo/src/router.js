import vue from 'vue';
import router from 'vue-router';
import login from './login/index.vue';
import register from './login/register.vue';
vue.use(router);
export default new router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
  ]
})
