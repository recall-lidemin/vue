## 组件化和模块化区别
 - 组件化是基于UI界面划分的,方便UI组件的复用
 - 模块化是基于代码逻辑划分的,方便代码分层开发,保证每个功能模块职能单一

## 组件的三种创建方法
 - 1.`const conf = Vue.extend({ template:'' }) //创建组件模板对象`
   `Vue.component('组件名称',conf)`
 - 2.`Vue.component('组件名称',Vue.extend({ template:'' }))` 
 - 3.`Vue.component('组件名称',{ template:'' })`

## 组件
 - 一切重复的结构数据逻辑都可以封装成一个组件
 - 每一个组件实例都是独立的
 - 组件就是一个特殊的Vue实例
 - 组件中包含了：data(方法，返回一个对象)/methods/filters/directives/computed/components/生命周期函数