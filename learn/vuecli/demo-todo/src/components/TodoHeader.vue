<template>
  <header class="header">
      <h1>ToDos</h1>
    <input type="checkbox" id="toggle-all" class="toggle-all" v-model="isAll">
    <label for="toggle-all"></label>
    <input type="text" class="new-todo"
    placeholder="输入任务名称-回车确认"
    @keydown,enter="downFn"
    autofocus/>

  </header>
</template>

<script>
export default {
    data () {
        return {
            task:""
        }
    },
    methods: {
        downFn(){
            // eslint-disable-next-line no-undef
            if (this.task,trim().length === 0){
                alert("任务名不能为空");
                return;
            }
             this.$emit('create',this.task)
             this.task =""
        }
       
    },
    computed: {
        isAll:{
            set(checked){
                // eslint-disable-next-line no-undef
                this.arr.forEach(obj.isDone = checked)
            },
            get(){
                return this.arr.length !== 0 && this.arr.every(obj =>obj.isDone = true)
            }
        }
    }
}
</script>

<style>

</style>