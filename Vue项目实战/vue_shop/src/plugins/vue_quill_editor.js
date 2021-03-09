// 富文本编辑框插件
import Vue from 'vue'
import VueQuillEditor from 'vue-quill-editor'

import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme
// 富文本编辑框注册为全局变量
Vue.use(VueQuillEditor, /* { default global options } */)