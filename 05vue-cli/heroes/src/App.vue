<template>
  <div id="app">
    <!-- 3.使用头部组件 -->
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <!-- 使用侧边栏组件 -->
        <app-aside></app-aside>
        <!-- 使用列表组件 -->
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue' //1.引入头部组件
import Aside from './Aside.vue' //引入侧边栏组件
import List from './List.vue' //引入列表组件

export default {
  name: 'app',
  components: {
    'app-header': Header, //2.注册头部组件
    'app-aside': Aside, //注册侧边栏组件
    'app-list': List //注册列表组件
  }
}
</script>

<style>
</style>
