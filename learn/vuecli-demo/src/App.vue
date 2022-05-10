<template>
  <div id="app">
    
    <TestVue msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import TestVue from "./components/TestVue.vue"

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line no-undef
    TestVue,
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
