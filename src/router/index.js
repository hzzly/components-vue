import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Star from '@/pages/Star'
import DatePicker from '@/pages/DatePicker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/star',
      name: 'Star',
      component: Star
    },
    {
      path: '/datepicker',
      name: 'DatePicker',
      component: DatePicker
    }
  ]
})
