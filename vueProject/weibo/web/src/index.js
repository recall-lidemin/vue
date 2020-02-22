import $ from 'jquery'
import './css/base.css'
import './css/index.less'



$(function () {
    $('li:odd').css('backgroundColor', 'red')
    $('li:even').css('backgroundColor', 'skyblue')
})

class Person {
    static info = 'aaa'
}
console.log(Person.info);

// ---------------------
// 导入Vue
import Vue from 'vue'
// 导入Vue单文件
import App from './components/App.vue'

const vm = new Vue({
    el: '#app',
    // 使用render函数渲染组件
    render: h => h(App)
})