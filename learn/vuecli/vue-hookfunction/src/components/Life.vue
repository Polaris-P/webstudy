<template>
  <div>
      <p>查看控制台打印</p>
      <p id="myP">{{msg}}</p>
      <ul id="myUL">
          <li v-for="(val,index) in arr" :key="index">
              {{val}}
          </li>
      </ul>
      <button @click="arr.push(100)">update测试</button>
  </div>
</template>

<script>
export default {
    data () {
        return {
            msg: "hello vue",
            arr: [5,8,2,1]
        }
    },
    //创建阶段
    beforeCreate () {
        console.log("beforeCreate--执行")
        console.log(this.msg)//输出：undefine
    },
    created () {
        console.log("created--执行")
        console.log(this.msg)//输出：hello vue
        this.timer=setInterval(() => {
            console.log("created--结束")
        }, 1000);
    },
    //挂载阶段
    beforeMount () {
        console.log("beforeMount--执行")
        console.log(document.getElementById("myP"))//输出：null
    },
    mounted () {
        console.log("mounted--执行")
        console.log(document.getElementById("myP"))//输出：p标签
    },
    //更新阶段
    beforeUpdate () {
        console.log("beforeUpdate--执行")
        console.log(document.querySelectorAll("#myUL>li")[4])//输出：undefine
    },
    updated () {
        console.log("updated--执行")
        console.log(document.querySelectorAll("#myUL>li")[4])//输出：li标签
    },
    //销毁阶段
    beforeDestroy () {
        console.log("beforeDestroy--执行")
        clearInterval(this.timer)
    },
    destroyed () {
        console.log("destroyed--执行")
    }
}
</script>

<style>

</style>