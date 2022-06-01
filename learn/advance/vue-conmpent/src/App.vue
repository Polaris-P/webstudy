<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h-button>default</h-button>
    
    <h-button type ="danger">Danger</h-button>
    <h-button type="primary" size ="large">Primary</h-button>
    <editor v-model="content"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HButton from './components/Button/index.vue'
import Editor from './components/Editor/index.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    HButton,
    Editor
  },
  data () {
    return {
      content: 'Hello World'
    }
  }
 
}
</script>

<style scoped lang="less">


</style>
