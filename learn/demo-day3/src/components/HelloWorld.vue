<template>
  <div id="app">
    <div class="container">
      <!-- 顶部边框 -->
      <div class="form-group">
        <div class="input-group">
          <h4>品牌管理</h4>
        </div>
      </div>
    </div>
    <!-- 数据表格 -->
    <table class="table table-bordered table-hover mt-2">
      <thead>
        <tr>
          <th>编号</th>
          <th>资产名称</th>
          <th>价格</th>
          <th>创建时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="obj in list" :key="obj.id">
          <td>{{obj.id}}</td>
          <td>{{obj.name}}</td>
          <!-- 如果价格超过一百，就有red这个类 -->
         
          <td :class="{red: obj.price>100}">{{obj.price}}</td>
          <td>{{obj.time}}</td>
          <td><a href="#" @click="delFn(obj.id)">删除</a></td>
        </tr>
      </tbody>
      <!-- <tfoot>
        <tr>
          <td colspan="5" style="text-align:center">暂无数据</td>
        </tr>
      </tfoot> -->
    </table>
    <!-- 资产添加 -->
    <form class="from-inline">
      <div class="form-inline">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="资产名称" v-model="name">
        </div>
      </div>
      &nbsp;&nbsp;&nbsp;
      <div class="from-group">
        <div class="input-group">
           <input type="text" class="form-control" placeholder="价格" v-model.number="price">
        </div>
      </div>
      &nbsp;&nbsp;&nbsp;
      <!-- 阻止表单提交刷新页面 -->

      <button class="btn btn-primary" @click.prevent="addFu">添加资产</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name:"",//名称
      price:0,
      list:[
        {id:100,name:"外套",price:199,time:new Date('2010-08-12')},
        {id:100,name:"裤子",price:110,time:new Date('2013-03-12')},
        {id:100,name:"鞋",price:200,time:new Date('2014-06-22')},
        {id:100,name:"头发",price:35,time:new Date('2015-08-01')},
      ]
    }
  },
  methods: {
    addFu(){
      
      if (this.name.trim().length === 0){
        alert("不能为空")
        return
      }
      if(this.price === 0){
        alert("不能白给")
        return
      }
      this.list.push(
        {
          id:this.list[this.list.length-1].id+1,
          name:this.name,
          price:this.price,
          time:new Date()
        }
      )
    },
    delFn(id){
      let index = this.list.findIndex(obj => obj.id === id)
      this.list.splice(index,1)
    }
  }
}
</script>

<style>
.red{
  color:red;
}
</style>
