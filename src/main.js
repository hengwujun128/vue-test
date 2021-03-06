// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */

import './publicPath'

import Vue from 'vue'
import App from './App'
import router from './router'

import 'normalize.css/normalize.css'
require('viewport-units-buggyfill').init()

// third party lib
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// third party component
import Notifications from 'vue-notification'
import axios from 'axios'

/* 
vue-sequential-entrance
 */
// import SequentialEntrance from 'vue-sequential-entrance'
// import 'vue-sequential-entrance/vue-sequential-entrance.css'
// Vue.use(SequentialEntrance)

// customed plugins
import SModal from './components/modal/index'
// SModal 在IE上报错 import SModal from "smart-modal";
Vue.use(SModal)
// Vue.use(axios);
Vue.prototype.axios = axios
import mock from './mock'
mock.start()
if (process.env.NODE_ENV === 'development') {
  // mock.start()
}
// var VueScrollTo = require('vue-scrollto');
// 第一种方式
import VueScrollTo from './src'
// 第二种方式
// import VueScrollTo from './views/myDirective/scroll/second/index.js'
// expandImg
import ShowBigImage from './views/myDirective/expandImg/index.js'
import Popover from './views/myDirective/popover/index.js'
// import Popover from 'vue-js-popover'

import zzq from 'zzq-component'
Vue.use(zzq)

Vue.use(VueScrollTo)
Vue.use(ShowBigImage)
Vue.use(Popover, {
  tooltip: true
})
Vue.use(ElementUI, {
  size: 'small'
})
Vue.config.productionTip = false

Vue.use(Notifications)

// import Components from "zzq-component"
import 'zzq-component'
// 注意,css 需要单独引用(之前没有引用,就是css 的问题)
import 'zzq-component/dist/zzq.css'
// // import "zzq-component"
// Object.keys(Components).forEach((name) => {
//   Vue.component(name, Components[name]);
// });
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
