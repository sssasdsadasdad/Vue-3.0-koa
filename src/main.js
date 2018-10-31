import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';
Vue.use(VueSocketio,socketio('http://127.0.0.1:3000'));//与服务端链接

Vue.use(Element)
Vue.config.productionTip = false

new Vue({
	router,
    render: h => h(App)
}).$mount('#app')
