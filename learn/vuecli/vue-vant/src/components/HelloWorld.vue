<template>
  <div>
    <van-button type="primary" @click="btn">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-button type="default">默认按钮</van-button>
  </div>
</template>

<script>
// 弹窗
import {Dialog} from 'vant'
export default {
  methods: {
    btn(){
      Dialog({message: "提示",showCancelButton: true})
    }
  }
}
</script>

<style>

</style>