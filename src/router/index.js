import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index'


Vue.use(VueRouter)

const routes = [
  {
    path:'/index',
    component:Index
  },
  {
    path:'/',
    component:Index,
    redirect:'/index'
  }

]

const router = new VueRouter({
  routes
})

export default router
