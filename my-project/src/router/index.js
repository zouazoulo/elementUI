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
const navMenu = r => require.ensure([], () => r(require('../page/navigation/navmenu.vue')), 'navMenu');
const tabs = r => require.ensure([], () => r(require('../page/navigation/tabs.vue')), 'tabs');
const breadcrumb = r => require.ensure([], () => r(require('../page/navigation/breadcrumb.vue')), 'breadcrumb');
const dropdown = r => require.ensure([], () => r(require('../page/navigation/dropdown.vue')), 'dropdown');
const steps = r => require.ensure([], () => r(require('../page/navigation/steps.vue')), 'steps');
const dialogQ = r => require.ensure([], () => r(require('../page/others/dialog.vue')), 'dialogQ');
const tooltip = r => require.ensure([], () => r(require('../page/others/tooltip.vue')), 'tooltip');
const popover = r => require.ensure([], () => r(require('../page/others/popover.vue')), 'popover');
const carousel = r => require.ensure([], () => r(require('../page/others/carousel.vue')), 'carousel');
const collapse = r => require.ensure([], () => r(require('../page/others/collapse.vue')), 'collapse');
const timeline = r => require.ensure([], () => r(require('../page/others/timeline.vue')), 'timeline');



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
        {
          path:'/navMenu',
          component: navMenu,
        },
        {
          path:'/tabs',
          component: tabs,
        },
        {
          path:'/breadcrumb',
          component: breadcrumb,
        },
        {
          path:'/dropdown',
          component: dropdown,
        },
        {
          path:'/steps',
          component: steps,
        },
        {
          path:'/dialog',
          component: dialogQ,
        },
        {
          path:'/tooltip',
          component: tooltip,
        },
        {
          path:'/popover',
          component: popover,
        },
        {
          path:'/carousel',
          component: carousel,
        },
        {
          path:'/collapse',
          component: collapse,
        },
        {
          path:'/timeline',
          component: timeline,
        },
      ]
    }
  ]
})
