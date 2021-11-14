import Vue from 'vue'
import App from './App.vue'
import { createProvider } from './vue-apollo'
import './assets/tailwind.css'

Vue.config.productionTip = false

Vue.filter('dateFormat', function (date) {
  const jsDate = new Date(date);

  return `${leadingZero(jsDate.getDate())}-${leadingZero(jsDate.getMonth() + 1)}-${jsDate.getFullYear()}`;
})

const leadingZero = (date) => {
  const dateAsString = date.toString();

  return dateAsString.length === 1 ? '0' + dateAsString : dateAsString;
}

Vue.filter('cyclistName', function ({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
})

new Vue({
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
