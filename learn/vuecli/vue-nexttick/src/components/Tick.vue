<template>
  <div>
      <!-- //搜索框 -->
      <input type="text" ref="myInp" placeholder="请输入" v-if="isShow">
      <button v-else @click="btn">开始搜索</button>
  </div>
</template>

<script>
export default {
    data () {
        return {
            isShow:false,
        }
    },
    methods: {
        async btn(){
            this.isShow = true;
            // this.$refs.myInp.focus()
            // 原因: data变化更新DOM是异步的
            // 输入框还没有挂载到真实DOM上
            // 解决:
            // this.$nextTick(() => {
            //     this.$refs.myInp.focus()
            // })
            // 扩展: await取代回调函数
            // $nextTick()原地返回Promise对象
            await this.$nextTick()
            this.$refs.myInp.focus();
        }
    }
}
</script>

<style>

</style>