<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div> state的数据：{{ $store.state.count }}</div>
    <div> state的数据：{{ count }}</div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>

  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  computed: {
    count(){
      return this.$store.state.count
    }
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
