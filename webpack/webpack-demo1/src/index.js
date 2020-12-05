import $ from 'jquery'

import './css/index.css'

import './css/index.less'

import './css/index.scss'


// 导入单文件组件
// import App from './components/App.vue'

$(function(){
    $('li:odd').css('background-color', 'orange');
    $('li:even').css('background-color', 'lightblue');
})

// js高级语法
class Person {
    static info = 'info'
}

console.log(Person.info);

// ---------------------------
// vue 基本使用

// 导入 Vue 构造函数
import Vue from 'vue'
// 导入 App 根组件
import App from './components/App.vue'

const vm = new Vue({
    // 指定 vm 实例要控制的页面区域
    el: '#app',
    // 通过 render 函数，把指定的组件渲染到 el 区域中
    render: h => h(App)
})
