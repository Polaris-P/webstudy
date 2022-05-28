<template>
  <div>
    <div>{{filterList}}</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters(['filterList'])
  }
}
</script>

<style>

</style>