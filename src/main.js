// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.

/* eslint-disable */
import Vue from "vue";
import App from "./App";
import router from "./router";

import "normalize.css/normalize.css";

// third party lib
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// third party component
import Notifications from "vue-notification";
import axios from "axios";
// customed plugins
import SModal from "./components/modal/index";
// SModal 在IE上报错 import SModal from "smart-modal";
Vue.use(SModal);
// Vue.use(axios);
Vue.prototype.axios = axios;
import mock from './mock'
mock.start()
if (process.env.NODE_ENV === 'development') {
  // mock.start()
}
// var VueScrollTo = require('vue-scrollto');
// 第一种方式
// import VueScrollTo from './src'
// 第二种方式
import VueScrollTo from './views/myDirective/scroll/second/index.js'


Vue.use(VueScrollTo)

Vue.use(ElementUI, {
  size: "small"
});
Vue.config.productionTip = false;

Vue.use(Notifications);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: {
    App
  },
  template: "<App/>"
});
