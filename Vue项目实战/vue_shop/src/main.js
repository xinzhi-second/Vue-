import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './plugins/vue_table_with_tree_grid.js'
import './plugins/vue_quill_editor.js'

// 导入字体图标
import './assets/fonts/iconfont.css'

// 导入全局样式表
import './assets/css/global.css'

// 请求
import axios from 'axios'
// 请求根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// axios 请求拦截
axios.interceptors.request.use(config => {
    const url = config.url;
    if(url !== 'login') {
        config.headers.Authorization = window.sessionStorage.getItem('token');
    }
    return config; 
})

Vue.prototype.$http = axios

Vue.config.productionTip = false

// 全局过滤器
Vue.filter('dataFormat', function(originVal) {
    const dt = new Date(originVal)
    const y = dt.getFullYear()
    const m = (dt.getMonth() + 1 + '').padStart(2, '0')
    const d = (dt.getDate() + '').padStart(2, '0')

    const hh = (dt.getHours() + '').padStart(2, '0')
    const mm = (dt.getMinutes() + '').padStart(2, '0')
    const ss = (dt.getSeconds() + '').padStart(2, '0')

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
