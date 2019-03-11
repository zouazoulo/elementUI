import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/select'


import App from '../App'

const selectT = r => require.ensure([], () => r(require('../components/select1.vue')), 'selectT');


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children:[
        {
          path: '',
          redirect:'/select1',
        },
        {
          path: '/select1',
          component: selectT,
        }
      ]
    }
  ]
})
