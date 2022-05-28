<template>
  <div>
      <p :class="{red_str:bool}">动态class</p>
  </div>
</template>

<script>
export default {
    data () {
        return {
            bool:true
        }
    }
}
</script>

<style>
    .red_str{
        color: red;
    }
</style>