<template>
  <div>
    <!-- <button @click="addCount">+1</button> -->
    <!-- <button @click="addCount(10)">+1</button> -->
    <!-- <button @click="addAsyncCount">+异步执行</button> -->
    <button @click="getAsyncCount(111)">+异步执行</button>

  </div>
</template>

<script>
import {mapActions} from 'vuex'


export default {
  methods: {
    // addCount(){
    //   this.$store.commit('addCount',10)
    // }
    // ...mapMutations(['addCount']),
    // addAsyncCount(){
    //   this.$store.dispatch('getAsyncCount', 123)
    // }
    ...mapActions(['getAsyncCount']),
  }
}
</script>

<style>

</style>