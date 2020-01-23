<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{ text | toUpperCase | toLowerCase }}</p>
        <hr />
        <input v-model="filterText" placeholder="Filter" />
        <ul>
          <li v-for="f in filteredFruits">{{ f }}</li>
        </ul>
      </div>
    </div>
    <hr />
    <app-list></app-list>
  </div>
</template>

<script>
import List from './List.vue';
import { fruitMixin } from './fruitMixin.js';

export default {
  components: {
    appList: List
  },
  data() {
    return {
      text: 'Hello there!!!'
    };
  },
  filters: {
    toUpperCase(v) {
      return v.toUpperCase();
    }
  },
  mixins: [fruitMixin],
  created() {
    console.log(2);
  }
};
</script>

<style></style>
