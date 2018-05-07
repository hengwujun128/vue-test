// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

import "normalize.css/normalize.css";

// third party lib
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// third party component
import Notifications from "vue-notification";

// customed plugins
// import VModal from "./components/modal/index";
import VModal from "smart-modal";
Vue.use(VModal);

Vue.use(ElementUI, { size: "small" });
Vue.config.productionTip = false;

Vue.use(Notifications);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
