<template>
  <div>
    <ul>
      <li v-for="(val,index) in arr" :key="index">
        {{val}}
      </li>
      
    </ul>
    <button @click="revBtn">反转数组</button>
    <button @click="sliceBtn">截取前三个</button>
    <button @click="updateBtn">更新第一个元素</button>
    <button @click="pushBtn">push</button>
    <button @click="popBtn">pop</button>
    <button @click="shiftBtn">shift</button>
    <button @click="sortBtn">sort</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arr:[5,3,9,2,1]
    }
  },
  methods: {
    revBtn(){
      this.arr.reverse()
    },
    sliceBtn(){
      let newArr = this.arr.slice(0,3)
      this.arr=newArr
    },
    updateBtn(){
      this.$set(this.arr,0,1000)
    },
    pushBtn(){
      this.arr.push(10)
    },
    popBtn(){
      this.arr.pop()
    },
    shiftBtn(){
      this.arr.shift()
    },
    sortBtn(){
      this.arr.sort()
    }
  }
}
</script>

<style>

</style>