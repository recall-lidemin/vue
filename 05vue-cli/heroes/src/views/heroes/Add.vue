<template>
  <div>
    <h2 class="sub-header">{{ btnText }}英雄</h2>
    <form :model="formData">
      <div class="form-group">
        <label for="exampleInputEmail1">姓名</label>
        <input type="text" class="form-control" v-model.trim="formData.name" placeholder="请输入您的姓名" />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">性别</label>
        <input
          type="text"
          class="form-control"
          v-model.trim="formData.gender"
          placeholder="请输入您的性别"
        />
      </div>
      <button type="button" class="btn btn-success" @click="saveHeroes">{{ btnText }}英雄</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        gender: ''
      }
    }
  },
  created() {
    this.getHero()
  },
  methods: {
    async saveHeroes() {
      if (this.formData.name === '' || this.formData.name === '') {
        return alert('不能为空')
      }
      const id = this.$route.params.id
      if (id) {
        await this.$axios.put(`/heroes/${id}`, this.formData)
        return this.$router.push('/heroes')
      }
      await this.$axios.post('/heroes', this.formData)
      this.$router.push('/heroes')
    },
    // 加载对应英雄
    async getHero() {
      if (this.$route.params.id) {
        const { data: res } = await this.$axios.get(
          `/heroes/${this.$route.params.id}`
        )
        console.log(res)

        this.formData = res
      }
    }
  },
  computed: {
    btnText() {
      return this.$route.params.id ? '编辑' : '添加'
    }
  }
}
</script>

<style>
</style>