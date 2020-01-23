<template>
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Filters & Mixins</h1>
      <input v-model="filterText" placeholder="Filter" />
      <ul>
        <li v-for="f in filteredFruits">{{ f }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { fruitMixin } from './fruitMixin.js';

export default {
  mixins: [fruitMixin],
  created() {
    console.log(3);
  }
};
</script>

<style></style>
