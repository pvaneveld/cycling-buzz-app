import Vue from 'vue'
import App from './App.vue'
import { createProvider } from './vue-apollo'
import './assets/tailwind.css'

Vue.config.productionTip = false

Vue.filter('dateFormat', function (date) {
  return new Date(date).toLocaleDateString();
})

Vue.filter('cyclistName', function ({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
})

new Vue({
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
