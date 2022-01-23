import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import socket from './plugins/socket'

Vue.prototype.$socket = socket

Vue.config.productionTip = false

new Vue({
  
  vuetify,
  router,
  store,
  



  render: h => h(App)
}).$mount('#app')
