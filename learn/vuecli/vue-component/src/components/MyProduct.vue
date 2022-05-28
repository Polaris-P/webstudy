<template>
  <div class="my-product">
    <h3>标题: {{ title }}</h3>
    <p>价格: {{ price }}元</p>
    <p>{{ intro }}</p>
    <button @click="subFn">砍一刀</button>
  </div>
</template>

<script>
import eventBus from '../EventBus'
export default {
  props: ['index','title', 'price', 'intro'],
    methods: {
    subFn(){
      this.$emit('subprice', this.index,1)//子向父传值
      eventBus.$emit("send",this.index,1)
    }
  },
}
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>