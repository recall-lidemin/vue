<template>
  <div id="app">
    <product-list></product-list>
  </div>
</template>

<script>
import Product from './Product.vue'
export default {
  name: 'app',
  components: {
    'product-list': Product
  }
}
</script>

<style>
</style>
