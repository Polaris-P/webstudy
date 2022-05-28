<template>
  <div>
      <p :style="{backgroundColor: colorStr}">动态style</p>
  </div>
</template>

<script>
export default {
    data () {
        return {
            colorStr:'red'
        }
    }
}
</script>

<style>

</style>