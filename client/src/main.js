import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store';

export const BASE_URL = process.env.NODE_ENV !== 'production' ? 'http://localhost:3004' : 'https://frogwares-node-server.herokuapp.com';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')




