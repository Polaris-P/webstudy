import Vue from 'vue'
import App from './App.vue'
import Vant from "vant"
import 'vant/lib/index.css'
Vue.config.productionTip = false
Vue.use(Vant);
new Vue({
  render: h => h(App),
}).$mount('#app')
// 方式1: 全局 - 自动按需引入vant组件
// (1): 下载 babel-plugin-import
// (2): babel.config.js - 添加官网说的配置 (一定要重启服务器)
// (3): main.js 按需引入某个组件, Vue.use全局注册 - 某个.vue文件中直接使用vant组件
import { Button } from 'vant';
Vue.use(Button) // Button组件全局注册, 真正注册的组件名VanButton