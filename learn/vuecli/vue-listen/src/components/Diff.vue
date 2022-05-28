<template>
  <div>
      <ul id="myUL">
          <li v-for="str in arr">
              <!-- {{str}} -->
              {{str.name}}
              <input type="text">
          </li>
      </ul>
      <button @click="addFu">下标为1的位置新增一个</button>
  </div>
</template>

<script>
export default {
    data () {
        return {
            // arr:["first","new","second","third"]
            arr:[
                {
                    name:'first',
                    id:50
                },
                {
                    name:'second',
                    id:31
                },
                {
                    name:'third',
                    id:10
                }
            ]
        }
    },
    methods: {
        addFu(){
            this.arr.splice(1,0,{
                name:'new',
                id:19
            })
        }
    }
}
</script>

<style>

</style>