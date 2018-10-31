import vue from 'vue';
import router from 'vue-router';
import login from './login/index.vue';
import register from './login/register.vue';
import index from './index/index.vue';
import home from './index/home.vue';
import mine from './index/mine.vue';
import dialog from './chat/dialog.vue';
vue.use(router);
export default new router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/login/register',
      name: 'register',
      component: register
    },
     {
      path: '/chat/dialog',
      name: 'dialog',
      component: dialog
    },
     {
      path: '/index',
      
      component: index,
      children: [
      	 {
			      path: '/',
			      name: 'home',
			      component: home
			    },
			     {
			      path: '/mine',
			      name: 'mine',
			      component: mine
			    },
      ]
    },
   
  ]
})
