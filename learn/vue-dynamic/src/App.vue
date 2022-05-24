<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <UseDynamic />
    <UserSlot />
    <UseTable/>
  </div>
</template>

<script>
import UseDynamic from './view/UseDynamic.vue'
import UserSlot from './view/UserSlot.vue'
import UseTable from './view/UseTable.vue'
export default {
  name: 'App',
  components: {
    UseDynamic,
    UserSlot,
    UseTable
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
