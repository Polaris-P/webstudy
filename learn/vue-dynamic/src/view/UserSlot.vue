<template>
  <div id="container">
      <div id="app">
          <h3>折叠面板</h3>
          <Pannel>
            <img src="../assets/logo.png" alt="">
            <span>我是内容</span>
          </Pannel>
          <Pannel>
            <p>寒雨连江夜入吴, </p>
            <p>平明送客楚山孤。</p>
            <p>洛阳亲友如相问，</p>
            <p>一片冰心在玉壶。</p>
        </Pannel>
        <Pannel></Pannel>
      </div>
      <div id="app">
          <Pannel>
              <template v-slot:title>
                  <h4>芙蓉楼送辛渐</h4>
              </template>
              <template v-slot:content>
                  <img src="../assets/logo.png" alt="">
                  <span>我是内容</span>
              </template>
          </Pannel>
          <Pannel>
              <template #title>
                  <span style="color:red">我是标题</span>
              </template>
              <template #content>
                <p>寒雨连江夜入吴, </p>
                <p>平明送客楚山孤。</p>
                <p>洛阳亲友如相问，</p>
                <p>一片冰心在玉壶。</p> 
              </template>
          </Pannel>
          <!-- 作用域插槽 -->
          <Pannel>
              <template v-slot="scope">
                  <span style="color:red">{{scope.row.defaultTwo}}</span>
              </template>
          </Pannel>
      </div>
  </div>
</template>

<script>
import Pannel from '../components/Pannel.vue'
export default {
    components: {
        Pannel
    }
}
</script>

<style>
#app {
    width: 400px;
    margin: 20px auto;
    background: #fff;
    border: 4px solid blueviolet;
    border-radius: 1rem;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    padding: 1em 2em 2em;
}
</style>