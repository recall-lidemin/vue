<template>
  <div>
    <h2 class="sub-header">英雄列表</h2>
    <router-link class="btn btn-success" to="/add-edit">添加英雄</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in list" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.gender }}</td>
            <td>
              <router-link :to="`/add-edit/${item.id}`">编辑</router-link>&nbsp;&nbsp;
              <a @click="del(item.id)" style="cursor: pointer">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'heroes',
  data() {
    return {
      list: []
    }
  },
  created() {
    this.loadList()
  },
  methods: {
    async loadList() {
      const { data: res } = await this.$axios.get('/heroes')
      this.list = res
    },
    async del(id) {
      if (window.confirm('确定删除吗?')) {
        await this.$axios.delete(`/heroes/${id}`)
        this.loadList()
      }
    }
  }
}
</script>

<style>
</style>
