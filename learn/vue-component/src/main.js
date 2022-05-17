import Vue from 'vue'
import App from './App.vue'
import Pannel from './components/Pannel.vue'


Vue.config.productionTip = false
// 全局注册
Vue.component("PannelG",Pannel)


new Vue({
  render: h => h(App),
}).$mount('#app')
