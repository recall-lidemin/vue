/**
 * 集中在main.js中导入外部资源
 * 减少了页面请求次数
 * 
 *  */

//  ES6导入模块的方式：import *** from ***
// 存在浏览器兼容问题，浏览器不支持
import $ from 'jquery'
import './css/index.css'
// import './css/index.less'

$(function () {
    $('li:odd').css('backgroundColor', 'green')
    $('li:even').css('backgroundColor', () => {
        return '#' + 'A99634'
    })
})