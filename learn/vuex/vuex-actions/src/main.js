import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    // 方法里参数 第一个参数是当前store的state属性
    // payload 载荷 运输参数 调用mutaiions的时候 可以传递参数 传递载荷
    addCount(state,payload){
      state.count += payload
    }
  },
  actions: {
    getAsyncCount(context){
      setTimeout(function(){
        context.commit('addCount', 123)
      },1000)
    }
  }
})



Vue.config.productionTip = false

new Vue({
  el : '#app',
  store,
  render: h => h(App),
}).$mount('#app')
