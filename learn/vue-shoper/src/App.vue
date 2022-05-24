<template>
  <div>
    <MyHeader title="购物车案例"/>
    <MyGoods v-for="obj in list" :key="obj.id" :gObj="obj"/>
    <MyFooter @changeAll="allFn" :arr="list"/>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue"
import MyGoods from './components/MyGoods.vue'
import MyFooter from './components/MyFooter.vue'
export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    MyHeader,
    // eslint-disable-next-line vue/no-unused-components
    MyGoods,
    MyFooter
  },
  created () {
    this.$axios({
      url:"/api/cart"
    }).then(res => {
      console.log(res);
      this.list =res.data.list;
    })
  },
  methods: {
    allFn(bool){
      this.list.forEach(obj => obj.goos_stare =bool)
    }
  }
}
</script>

<style scoped>
  .main{
    padding-top: 45px;
    padding-bottom: 50px;
  }
</style>