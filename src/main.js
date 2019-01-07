import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueSocketio from 'vue-socket.io';
Vue.use(new VueSocketio({
	debug: true,
	connection: 'http://127.0.0.1:3001'
}));
Vue.use(Element)
Vue.config.productionTip = false

new Vue({
	router,
    render: h => h(App)
}).$mount('#app')
