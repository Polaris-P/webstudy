<template>
  <div>
      <button @click="comName = 'UserName'">账号密码填写</button>
      <button @click="comName = 'UserInfo'">个人信息填写</button>

      <p>下面显示组件注册-动态组件切换：</p>
      <div style="border: 1px solid red">
          <component :is="comName"></component>
      </div>
      <hr>
      <div style="border: 1px solid red">
        <p>组件缓存：</p>
         <!-- 总结: keep-alive可以提高组件的性能, 
         内部包裹的标签不会被销毁和重新创建, 
         触发激活和非激活的生命周期方法 -->


        <!-- 补充生命周期:

        * activated - 激活
        * deactivated - 失去激活状态 -->
        <keep-alive>
          <component :is="comName"></component>
        </keep-alive>
      </div>
  </div>
</template>

<script>
import UserInfo from '../components/UserInfo.vue'
import UserName from '../components/UserName.vue'

export default {
  name: 'App',
  components: {
    UserInfo,
    UserName
  },
  data () {
    return {
      comName: 'UserName',
    }
  }
}
</script>
