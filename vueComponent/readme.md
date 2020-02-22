## 组件化和模块化区别
 - 组件化是基于UI界面划分的,方便UI组件的复用
 - 模块化是基于代码逻辑划分的,方便代码分层开发,保证每个功能模块职能单一

## 组件的三种创建方法
 - 1.`const conf = Vue.extend({ template:'' }) //创建组件模板对象`
   `Vue.component('组件名称',conf)`
 - 2.`Vue.component('组件名称',Vue.extend({ template:'' }))` 
 - 3.`Vue.component('组件名称',{ template:'' })`