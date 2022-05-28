<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div>
      <!-- 组件中可以使用  this.$store 获取到vuex中的store对象实例，
      可通过state属性属性获取count， 如下 -->
      <div>state的数据：{{$store.state.count}}</div>
       <div> state的数据：{{ count }}</div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  computed: {
    // count(){
    //   return this.$store.state.count
    // }
    //上面代码的最终得到的是 **类似**
    ...mapState(['count'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
