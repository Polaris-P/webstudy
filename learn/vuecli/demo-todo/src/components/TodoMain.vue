/* eslint-disable vue/no-unused-vars */
<template>
  <div>
      <ul class="todo-list">
          
          <li :class="{completed: obj.isDone}" v-for="(obj, index) in arr" :key='obj.id'>
              <div class="view">
                  <input type="checkbox" class="toggle" v-model="obj.isDone">
                  <label for="">{{obj.name}}</label>
                  <button class="destroy" @click="delFn(index)"></button>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props: ["list"],
    methods: {
        delFn(id){
            this.$emit('del',id)
        }
    }
};
</script>

<style>

</style>