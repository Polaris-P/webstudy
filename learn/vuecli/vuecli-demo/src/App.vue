<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ReverseWorld />
    <VueModel />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ReverseWorld from './components/ReverseWorld.vue'
import VueModel from './components/VueModel.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    // eslint-disable-next-line vue/no-unused-components
    ReverseWorld,
    // eslint-disable-next-line vue/no-unused-components
    VueModel
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
