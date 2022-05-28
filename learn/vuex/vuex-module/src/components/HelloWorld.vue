<template>
  <div>
    <div>用户token：{{$store.state.user.token}}</div>
    <div>网站名称：{{$store.state.setting.name}}</div>
    <button @click="updateToken">update-token</button>
  </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
export default {
  computed: {
    ...mapGetters(['token','setting'])
  },
  methods: {
    ...mapMutations(['updateToken'])
  }
}
</script>

<style>

</style>