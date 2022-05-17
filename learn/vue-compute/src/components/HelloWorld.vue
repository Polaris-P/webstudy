<template>
  <div>
    <p>{{num}}</p>
    <!-- 计算：缓存 -->
    <div>
      <p>{{reverseMessage}}</p>
      <p>{{reverseMessage}}</p>
      <p>{{reverseMessage}}</p>
      <p>{{getMessage()}}</p>
      <p>{{getMessage()}}</p>
      <p>{{getMessage()}}</p>
    </div>
    <br>
    <div>
      <span>姓名：</span>
      <input type="text" v-model="full">
    </div>
    <div>
      <span>全选：</span>
      <input type="checkbox" v-model="isAll">
      <button @click="btn">反选</button>
      <ul>
        <li v-for="(obj,index) in arr" :key="index">
          <input type="checkbox" v-model="obj.c">
          <span>{{obj.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      a:20,
      b:10,
      msg:"hello vue",
      arr:[
        {
          name:"猪八戒",
          c:false,
        },
        {
          name:"孙悟空",
          c:false
        },
        {
          name:"唐僧",
          c:false
        }
      ]
    }
  },
  computed: {
    num(){
      return this.a+this.b
    },
    reverseMessage(){
      console.log("计算属性执行")
      return this.msg.split("").reverse().join("")
    },
    full:{
      set(val){
        console.log(val)
      },
      get(){
        return "无名氏"
      }
    },
    // isAll(){
    //   return this.arr.every(obj => obj.c ===true)
    // }
    isAll:{
      set(val){
        this.arr.forEach(obj => obj.c = val)
      },
      get(){
        return this.arr.every(obj => obj.c === true)
      }
    }
  },
  methods: {
    getMessage(){
      console.log("函数执行");
      return this.msg.split("").reverse().join("")
    },
    btn(){
      this.arr.forEach(obj => obj.c = !obj.c)
    }
  }
}
</script>

<style>

</style>