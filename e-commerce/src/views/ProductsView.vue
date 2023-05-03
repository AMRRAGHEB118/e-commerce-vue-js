<template>
  <div class="products">
    <ProductsList :id="get_category_id" />
  </div>
</template>
  
<script>
import ProductsList from '../components/ProductsList.vue';
export default {
  components: {
    ProductsList,
  },
  computed: {
    get_category_id() {
      return this.$route.params.id
    }
  },
}
</script>

<style scoped>
.products {
  min-height: 70vh;
}
</style>