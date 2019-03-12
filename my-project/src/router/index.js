import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/select'


import App from '../App'

// const selectT = r => require.ensure([], () => r(require('../components/select1.vue')), 'selectT');
const home = r => require.ensure([], () => r(require('../page/home.vue')), 'home');
const layout = r => require.ensure([], () => r(require('../page/basic/layout.vue')), 'layout');
const container = r => require.ensure([], () => r(require('../page/basic/container.vue')), 'container');
const radio = r => require.ensure([], () => r(require('../page/form/radio.vue')), 'radio');
const checkout = r => require.ensure([], () => r(require('../page/form/checkout.vue')), 'checkout');
const selectQ = r => require.ensure([], () => r(require('../page/form/select.vue')), 'selectQ');
const inputQ = r => require.ensure([], () => r(require('../page/form/input.vue')), 'inputQ');
const inputNumber = r => require.ensure([], () => r(require('../page/form/inputNumber.vue')), 'inputNumber');
const rate = r => require.ensure([], () => r(require('../page/form/rate.vue')), 'rate');
const progressQ = r => require.ensure([], () => r(require('../page/data/progress.vue')), 'progressQ');
const badge = r => require.ensure([], () => r(require('../page/data/badge.vue')), 'badge');
const loading = r => require.ensure([], () => r(require('../page/notice/loading.vue')), 'loading');
const message = r => require.ensure([], () => r(require('../page/notice/message.vue')), 'message');
const messageBox = r => require.ensure([], () => r(require('../page/notice/messageBox.vue')), 'messageBox');





Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children:[
        {
          path: '',
          redirect:'/home',
        },
        {
          path: '/home',
          component: home,
        },
        {
          path:'/layout',
          component: layout,
        },
        {
          path:'/container',
          component: container,
        },
        {
          path:'/radio',
          component: radio,
        },
        {
          path:'/checkout',
          component: checkout,
        },
        {
          path:'/select',
          component: selectQ,
        },
        {
          path:'/input',
          component: inputQ,
        },
        {
          path:'/inputNumber',
          component: inputNumber,
        },
        {
          path:'/rate',
          component: rate,
        },
        {
          path:'/progress',
          component: progressQ,
        },
        {
          path:'/badge',
          component: badge,
        },
        {
          path:'/loading',
          component: loading,
        },
        {
          path:'/message',
          component: message,
        },
        {
          path:'/messageBox',
          component: messageBox,
        },
      ]
    }
  ]
})
