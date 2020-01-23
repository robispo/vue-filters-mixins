import Vue from 'vue';
import App from './App.vue';

Vue.filter('to-lowercase', function(v) {
  return v.toLowerCase();
});

new Vue({
  el: '#app',
  render: h => h(App)
});
