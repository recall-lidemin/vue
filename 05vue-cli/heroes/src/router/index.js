// 如果 router是一个文件夹，
// 那么 vue 会自动去找router文件夹下面得index文件
// 引入直接 import router from './router'
// 上面等价于 import router from './router/index'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Heroes from '../views/heroes/Heroes.vue' //引入列表组件
import Weapon from '../views/weapons/Weapon.vue'
import Equipment from '../views/equipment/Equipment.vue'
import Add from '../views/heroes/Add.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/heroes' },
        { path: '/heroes', component: Heroes },
        { path: '/weapon', component: Weapon },
        { path: '/equipment', component: Equipment },
        { path: '/add-edit/:id?', component: Add } //动态传参，加 ？可传可不传
    ]
})

export default router
