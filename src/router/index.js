import Vue from "vue";
import Router from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; // progress bar style

import HelloWorld from "@/components/HelloWorld";
import treeTable from "@/views/treeTable/treeTable";
import canban from "@/views/canban/canban";
import direc from "@/views/directiveTest/directiveTest";

// tagInput
import tagInput from "@/views/tagInput/tagInput.vue";

// dialog
import dialog from "@/views/dialog/dialog"

Vue.use(Router);

let app_router = new Router({
  routes: [{
      path: "/",
      name: "HelloWorld",
      component: HelloWorld,
      redirect: "dialog"
    },
    {
      path: "/treeTable",
      name: "treeTable",
      component: treeTable
    },
    {
      path: "/canban",
      name: "canban",
      component: canban
    },
    {
      path: "/directive",
      name: "directive",
      component: direc
    },
    {
      name: "dialog",
      path: "/dialog",
      component: dialog
    },
    {
      name: "tagInput",
      path: "/tagInput",
      component: tagInput
    }
    // drag and drop
  ]
});
NProgress.configure({
  showSpinner: false,
  easing: "ease",
  speed: 500,
  trickle: false,
  trickleSpeed: 200
}); // NProgress Configuration

app_router.beforeEach((to, from, next) => {
  NProgress.start();

  // setTimeout(() => {
  next();
  NProgress.done();
  // }, 2000);
});
app_router.afterEach(() => {
  NProgress.remove();
});
export default app_router;
