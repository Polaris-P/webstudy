<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ obj.name }}</h2>
    <h3>{{ obj.age > 18 ? '成年' : '未成年' }}</h3>
    <a v-bind:href="url">点击</a>
    <p>数字{{count}}</p>
    <button v-on:click="count=count+1">加一</button>
    <a @click="one(10,$event)" href="http://www.baidu.com">baidu </a>
    <div @click="fatherFu">
      <button @click.stop="btn">stop</button>

      <a href="http://www.baidu.com" @click.prevent="btn">baidu</a>
      <button @click.once="btn">.once程序运行期间, 只触发一次事件处理函数</button>

    </div>
    <div>
      <input type="text" @keydown.enter="enterFu">
      <hr>
      <input type="text" @keydown.esc="escFu">
    </div>
    <hr>
    <div>
      <span>username:</span>
      <input type="text" v-model="username">
    </div>
    <div>
      <span>password:</span>
      <input type="password" v-model="pass">
    </div>
    <div>
      <span>from:</span>
      <select v-model="from">
        <option value="beijing">beijing</option>
        <option value="nanjing">nanjing</option>
        <option value="tianjin">tianjin</option>

      </select>

    </div>
    <div>
      <span>hobby</span>
      <input type="checkbox" v-model="hobby" value="smoke">smoke
      <input type="checkbox" v-model="hobby" value="wine">wine
      <input type="checkbox" v-model="hobby" value="code">code

    </div>
    <div>
      <span>sex:</span>
      <input type="radio" name="sex" value="male" v-model="gender">male
      <input type="radio" name="sex" value="female" v-model="gender">female

    </div>
    <span>introduce myself:</span>
    <textarea v-model="intro"></textarea>
    <hr>
    <div>
      <span>age</span>
      <input type="text" v-model.number="age">
    </div>
    <div>
      <span>格言</span>
      <input type="text" v-model.trim="motto">
    </div>
    <span>自我介绍</span>
    <textarea v-model.lazy="intro1"></textarea>
  </div>
</template>

<script>
export default {
  methods: {
    addFu(){
      this.count++
    },
    addCountFu(num){
      
      this.count+=num
    },
    subFu(){
      this.count--
    },
    one(num,e){
      e.preventDefault()
    },
    fatherFu(){
      console.log("father")

    },
    btn(){
      console.log(111)
    },
    enterFu(){
      alert("enter触发")
    },
    escFu(){
      alert("esc触发")
    }
  },
  data() { // 格式固定, 定义vue数据之处
    return {  // key相当于变量名
      count:1,
      msg: "hello, vue",
      username:"",
      pass:"",
      from:"",
      hobby:[],
      sex:"",
      intro:"",
      age:"",
      motto:"",
      intro1:"",
      obj: {
        name: "小vue",
        age: 5,
        url:"http://www.baidu.com"
      }
    }
  }
}
</script>

<style>
</style>