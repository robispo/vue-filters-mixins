import Vue from 'vue';
import App from './App.vue';

Vue.filter('toLowerCase', function(v) {
  return v.toLowerCase();
});

Vue.mixin({
  created() {
    console.log('Global-mixin!');
    
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});
