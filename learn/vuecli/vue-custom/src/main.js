import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 全局指令，所有地方都可以用
// Vue.directive("gfocus",{
//   inserted(el){
//     el.focus//触发标签的方法事件
//   }
// })
// 目标: 自定义指令传值
Vue.directive("color",{
  inserted(el,binding){
    el.style.color=binding.value//触发标签的方法事件
  },
  update(el,binding){
    el.style.color=binding.value
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
