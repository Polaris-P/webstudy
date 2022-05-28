<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
   
   <section class="todoapp">
      <TodoHeader @create="createFn" :arr="list"/>
      <TodoMain :arr="showArr" @del="deleteFn"/>
      <TodoFooter 
      :farr="showArr" 
      @changeType="typeFn"
      @clear="clearFn"/>
   </section>
  </div>
</template>

<script>
import "./styles/base.css"
import "./styles/index.css"

import TodoHeader from './components/TodoHeader.vue';
import TodoMain from './components/TodoMain.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  // name: 'App',
  components: {
    
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  data () {
    return {
      list:JSON.parse(localStorage.getItem('todoList')) || [],
      getSel:"all"
    }
  },
  methods: {
    createFn(taskName){
      let id = this.list.length == 0 ? 100 : this.list[this.list.length - 1].id +1
      this.list.push({
        id: id,
        name: taskName,
        isDone: false
      })
    },
    deleteFn(theId){
      let index = this.list.findIndex(obj => obj.id == theId)
      this.list.splice(index,1)
    },
    typeFn(str){
    this.getSel = str;
    },
    clearFn(){
      // eslint-disable-next-line no-undef
      this,list= this.list.filters(obj => obj.isDone == false)
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    showArr(){
      if (this.getSel === 'yes'){
        return this.list.filters(obj => obj.isDone === true)
      } else if (this.getSel === 'no'){
        // eslint-disable-next-line no-undef
        return this,list.filters(obj => obj.isDone === false)
      } else {
        return this.list
      }
    },
    watch: {
      list: {
        deep:true,
        handler(){
          localStorage.setItem('todoList',JSON.stringify(this.list))
        }
      }
    }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
