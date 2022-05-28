/* eslint-disable vue/no-parsing-error */
<template>
  <div>
      <footer class="footer">
          <span class="todo-count">剩余<strong>{{count}}</strong></span>
          <ul class="filters">
              <li>
                  
                  <a href="javascript:;" :class="{selected: isSel === 'all'}" @click="isSel = 'all'"></a>全部</a>
              </li>
              <li>
                  <a href="Javascript:;" :class="{selected: isSel === 'no'}" @click="isSel='no'"></a>未完成</a>
              </li>
              <li>
                  
                   <a :class="{selected: isSel === 'yes'}" href="javascript:;" @click="isSel='yes'">已完成</a>
              </li>
          </ul>
          <button class="clear-computed" @click="clearFn">清除已完成</button>
      </footer>
  </div>
</template>

<script>
export default {
    props: ['farr'],
    data () {
        return {
            isSel: 'all',
        }
    },
    methods: {
        fn(){
            this.$emit('changeType', this.isSel)
        },
        clearFn(){
            this.$emit('clear')
        }
    },
    computed: {
        count(){
            return this.farr.length
        }
    }
}
</script>

<style>

</style>