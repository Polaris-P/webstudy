<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1>生命周期</h1>

    <Life v-if="show"/>
    <!-- //点击后Life组件失效 -->
    <button @click="show=false">销毁组件</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Life from './components/Life.vue'

export default {
  name: 'App',
  data () {
    return {
      show: true,
    }
  },
  components: {
    HelloWorld,
    // eslint-disable-next-line vue/no-unused-components
    Life
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
