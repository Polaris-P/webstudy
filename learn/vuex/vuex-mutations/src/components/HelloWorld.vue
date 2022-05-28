<template>
  <div>
    <!-- <button @click="addCount">+1</button> -->
    <button @click="addCount(10)">+1</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  methods: {
    // addCount(){
    //   this.$store.commit('addCount',10)
    // }
    ...mapMutations(['addCount'])
  }
}
</script>

<style>

</style>