import Vue from 'vue'
import Router from 'vue-router'

import Register from '../pages/Register'
import Dept from '../pages/Dept'
import Doctor from '../pages/Doctor'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/register',
      component: Register
    },
    {
        path:'/dept',
        component: Dept
    },
    {
        path:'/doctor',
        component: Doctor
    }
  ]
})