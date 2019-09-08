import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
   {
     path:"/index",
     meta: { requiresAuth: true },
     component:()=>import("@/views/Shouye/")
   },{
     path:"/denglu",
     component:()=>import("@/views/Denglu/")
   },{
     path:"/zhuce",
     component:()=>import("@/views/Zhuce/")
   },{
     path:"/",
     redirect:"/index"
   }
  ]
})
router.beforeEach((to,from,next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    let token = window.localStorage.token
    if(!token){
      next({
        path:"/denglu",
        query:{
          redirect:to.fullPath
        }
      })
    }else{
      next()
    }
  }else{
    next()
  }
})





export default router
