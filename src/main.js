import Vue from 'vue';
import App from './App.vue';

Vue.filter('toLowerCase', function(v) {
  return v.toLowerCase();
});

new Vue({
  el: '#app',
  render: h => h(App)
});
