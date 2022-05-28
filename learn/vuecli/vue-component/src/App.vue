<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <Pannel msg="Welcome to Your Vue.js App"/> -->
    <pannelG/>
    <pannel-g/>
    <pannel-g></pannel-g>
    <pannel-l/>
    <!-- <Product title="好吃的口水鸡" price="50" intro="开业大酬宾，全场八折"></Product>
    <Product title="好可爱的可爱多" price="20" intro="老板不在家，全场一折"></Product>
    <Product title="好贵的北京烤鸭" price="290" intro="str"></Product> -->
    
   <Product v-for="(obj, ind) in list" :key="obj.id"
    :title="obj.proname"
    :price="obj.proprice"
    :intro="obj.info"
    :index="ind"
    @subprice="fn"
    ></Product>
    
  </div>
</template>

<script>
import Pannel from './components/Pannel.vue'
import Product from './components/MyProduct'

export default {
  
  data () {
    return {
      list: [
        {
          id: 1,
          proname: "超级好吃的棒棒糖",
          proprice: 18.8,
          info: "开业大酬宾, 全场8折",
        },
        {
          id: 2,
          proname: "超级好吃的大鸡腿",
          proprice: 34.2,
          info: "好吃不腻, 快来买啊",
        },
        {
          id: 3,
          proname: "超级无敌的冰激凌",
          proprice: 14.2,
          info: "炎热的夏天, 来个冰激凌了",
        },
      ],
      str:"好贵啊！！！！"
    }
  },
  methods: {
    fn(inde, price){
      // 逻辑代码
      this.list[inde].proprice > 1 && (this.list[inde].proprice = (this.list[inde].proprice - price).toFixed(2))
    }
  },
  name: 'App',
  components: {
    // 局部注册
    PannelL:Pannel,
    Product
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
