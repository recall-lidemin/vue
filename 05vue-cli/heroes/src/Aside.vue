<template>
  <!-- 侧边栏组件 -->
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <!-- tag属性可以改变router-link默认生成得标签,默认生成a标签 tag="li" -->
      <router-link tag="li" :to="item.path" v-for="item in list" :key="item.path">
        <a href="#">{{ item.title }}</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { title: '英雄列表', path: '/heroes' },
        { title: '武器列表', path: '/weapon' },
        { title: '装备列表', path: '/equipment' }
      ]
    }
  },
  created() {},
  methods: {}
}
</script>

<style lang="less" scoped>
.router-link-active {
  background-color: #208592 !important;

  a {
    color: #fff !important;
  }
}
</style>