// src/main.js（推荐版：从 node_modules 引入 font-awesome）
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/reset.css'

// 从 node_modules 引入 font-awesome
import 'font-awesome/css/font-awesome.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 如果你暂时不使用 ElementPlus 图标，下面的 import 注释掉是 OK 的
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from 'element-plus/dist/locale/zh-cn'

createApp(App)
    .use(router)
    .use(ElementPlus, { locale: zhCn })
    .mount('#app')
