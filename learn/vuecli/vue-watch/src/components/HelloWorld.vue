<template>
  <div>
    <!-- //侦听器可以侦听data、compute属性值改变 -->
    <!-- 语法：
    watch: {
    "被侦听的属性名" (newVal, oldVal){
        
    }
} -->
  <!-- 深度侦听 -->
  <!-- 语法： -->
  <!-- watch: {
    "要侦听的属性名": {
        immediate: true, // 立即执行
        deep: true, // 深度侦听复杂类型内变化
        handler (newVal, oldVal) {
            
        }
    }
} -->
    <div>
      <!-- <input type="text" v-model="name"> -->
      <input type="text" v-model="user.name">
      <br>
      <input type="text" v-model="user.age">
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      // name:"",
      user:{
        name:"",
        age:0
      }
    }
  },
  watch: {
    // name(newVal,oldVal){
    //   console.log(newVal,oldVal)
    // }
    user:{
      handler(newVal,oldVal){
        console.log(newVal,oldVal);
      },
      deep:true,
      immediate:true
    }
  }
}
</script>

<style>

</style>