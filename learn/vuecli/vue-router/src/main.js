import Vue from 'vue'
import App from './App.vue'


import Find from '@/views/Find'
import My from '@/views/My'
import Part from '@/views/Part'
import NotFound from '@/views/NotFound'
import Recommend from '@/views/Second/Recommend'
import Ranking from '@/views/Second/Ranking'
import SongList from '@/views/Second/SongList'

import VueRouter from 'vue-router'

// Vue.config.productionTip = false

Vue.use(VueRouter)
const routes = [
  // 重定向
  {
    path: '/',//默认hash路径
    redirect: "/find"//重定向到find
  },
  {
    path: "/find",
    name: 'Find',
    component: Find,
    children:[
      {
        path: 'recommend',
        component:Recommend,
      },
      {
        path: 'ranking',
        component:Ranking,
      },
      {
        path: 'songlist',
        component:SongList,
      }
    ]
  },
  {
    path: "/my",
    name: 'My',
    component: My
  },
  {
    path: "/part",
    name: 'Part',
    component: Part
  },
  {
    path: "/part/:username",
    component: Part
  },
  {
    path: "*",
    component:NotFound
  }
]

const router = new VueRouter({
  routes,
})


// 目标: 路由守卫
// 场景: 当你要对路由权限判断时
// 语法: router.beforeEach((to, from, next)=>{//路由跳转"之前"先执行这里, 决定是否跳转})
// 参数1: 要跳转到的路由 (路由对象信息)    目标
// 参数2: 从哪里跳转的路由 (路由对象信息)  来源
// 参数3: 函数体 - next()才会让路由正常的跳转切换, next(false)在原地停留, next("强制修改到另一个路由路径上")
// 注意: 如果不调用next, 页面留在原地

// 例子: 判断用户是否登录, 是否决定去"我的音乐"/my
const isLogin = true;
router.beforeEach((to,from,next) => {
  if(to.path === '/my' && isLogin === false){
    alert('Please login')
    next(false);// 阻止路由跳转
  }else{
    next()// 正常放行
  }
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
