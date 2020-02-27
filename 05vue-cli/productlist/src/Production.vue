<template>
  <div class="product_list">
    <img
      src="https://img.alicdn.com/tps/i4/TB1vqAhueL2gK0jSZFmSuw7iXXa.jpg_490x490q100.jpg_.webp"
      alt
    />
    <span>￥358</span>
    <span>花花公子春季百搭牛仔夹克</span>
    <span>花花公子官方旗舰店</span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.product_list {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  margin: 0 20px;

  img {
    width: 200px;
  }
  .span {
    display: inline-block;
  }
  .span:nth-child(2) {
    color: red;
    font-size: 20px;
  }
}
</style>
