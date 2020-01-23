export const fruitMixin = {
  data() {
    return {
      filterText: '',
      fruits: ['Hola', 'Soy', 'Goku', 'Gohan']
    };
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(f =>
        f.toLowerCase().match(this.filterText.toLowerCase())
      );
    }
  },
  created() {
    console.log('1');
  }
};
