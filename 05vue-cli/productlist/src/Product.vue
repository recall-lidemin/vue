<template>
  <div class="item">
    <product-item v-for="item in 5" :key="item"></product-item>
  </div>
</template>

<script>
import Production from './Production.vue'
export default {
  components: {
    'product-item': Production
  }
}
</script>

<style lang="less">
.item {
  display: flex;
}
</style>