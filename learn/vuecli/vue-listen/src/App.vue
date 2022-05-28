<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Diff />
    <Style />
    <Class />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Diff from './components/Diff.vue'
import Style from './components/Style.vue'
import Class from './components/Class.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Diff,
    Style,
    Class,
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
