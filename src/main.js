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
