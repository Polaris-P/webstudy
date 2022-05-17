<template>
  <div>
    <p>获取所有图书信息</p>

    <button @click="getAllFn">点击-查看控制台</button>
    <p>查询某本书的信息</p>
    <input type="text" placeholder="请输入书名" v-model="bName">
    <button @click="findFn">查询</button>
    <p>新增图书信息</p>
    <div>
      <input type="text" placeholder="书名" v-model="bookObj.bookname">
    </div>
    <div>
      <input type="text" placeholder="作者" v-model="bookObj.author">
    </div>
    <div>
      <input type="text" placeholder="出版社" v-model="bookObj.punlisher">
    </div>
    <button @click="seedFn">发布</button>
  </div>
</template>

<script>
import axios from "axios";
// 所有请求的url前置可以去掉, 请求时, axios会自动拼接baseURL的地址在前面
axios.defaults.baseURL = "http://123.57.109.30:3006"
export default {
  data () {
    return {
      bName: "",
      bookObj:{
        bookname:"",
        author:"",
        punlisher:""
      }
    }
  },
  methods: {
    
    getAllFn(){
      axios({
       url: "/api/getbooks",
       method: "GET", // 默认就是GET方式请求, 可以省略不写  
      }).then((res) =>{
        console.log(res)
      })
    },
    findFn(){
      axios({
        url: "http://123.57.109.30:3006/api/getbooks",
        method: "GET",
        params: { // 都会axios最终拼接到url?后面
            bookname: this.bName
        }
      }).then(res =>{
        console.log(res)
      })
    },
    seedFn(){
      axios({
        url: "http://123.57.109.30:3006/api/addbook",
           method: "POST",
           data: {
               appkey: "7250d3eb-18e1-41bc-8bb2-11483665535a",
               ...this.bookObj
            // 等同于下面
            // bookname: this.bookObj.bookname,
            // author: this.bookObj.author,
            // publisher: this.bookObj.publisher
           }
      })
    }
  },

}
</script>

<style>

</style>