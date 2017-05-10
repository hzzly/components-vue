import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Star from '@/pages/Star'
import DatePicker from '@/pages/DatePicker'
import AnimationMenu from '@/pages/AnimationMenu'
import TouchLeft from '@/pages/TouchLeft'
import PullRefresh from '@/pages/PullRefresh'
import CountDown from '@/pages/CountDown'

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
    },
    {
      path: '/animationmenu',
      name: AnimationMenu,
      component: AnimationMenu
    },
    {
      path: '/touchleft',
      name: 'TouchLeft',
      component: TouchLeft
    },
    {
      path: '/pullrefresh',
      name: 'PullRefresh',
      component: PullRefresh
    },
    {
      path: '/countdown',
      name: 'CountDown',
      component: CountDown
    }
  ]
})
