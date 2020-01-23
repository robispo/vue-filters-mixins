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
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'Hello there!!!',
      filterText: '',
      fruits: ['Hola', 'Soy', 'Goku', 'Gohan']
    };
  },
  filters: {
    toUpperCase(v) {
      return v.toUpperCase();
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(f => f.toLowerCase().match(this.filterText.toLowerCase()));
    }
  }
};
</script>

<style></style>
