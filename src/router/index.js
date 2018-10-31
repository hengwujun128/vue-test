/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; // progress bar style

import HelloWorld from "@/components/HelloWorld";
import treeTable from "@/views/treeTable/treeTable";
import canban from "@/views/canban/canban";
import canban1 from "@/views/canban/test";
import canban2 from "@/views/canban/drag-el-collapse";
import canban3 from "@/views/canban/dragGroup";

import direc from "@/views/directiveTest/directiveTest";

// tagInput
import tagInput from "@/views/tagInput/tagInput.vue";

// dialog
import dialog from "@/views/dialog/dialog.vue";
// jing
import jing from "@/views/jing/index.vue";
Vue.use(Router);
// iframe
import iframe from "@/views/iframe";
// vue-version
import vueVersion from "@/views/testVueVersion/index.vue";

import myCanvas from "@/views/canvas/index.vue"

import mock from "@/views/mock";

import directive from "./directive"
import css3Router from './css.js'
import imageRouter from './image.js'
import form from "./form.js"


let app_router = new Router({
  routes: [{
      path: "/",
      name: "HelloWorld",
      component: HelloWorld,
      redirect: "version"
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
      path: "/canban1",
      name: "canban1",
      component: canban1
    },
    {
      path: "/canban2",
      name: "canban2",
      component: canban2
    },
    {
      path: "/canban3",
      name: "canban3",
      component: canban3
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
    },
    {
      name: 'jing',
      path: "/jing",
      component: jing
    },
    {
      name: 'iframe',
      path: '/iframe',
      component: iframe
    },
    {
      name: 'vueVersion',
      path: '/version',
      component: vueVersion
    },
    {
      name: 'myCanvas',
      path: '/myCanvas',
      component: myCanvas
    },
    {
      name: 'mock',
      path: '/mock',
      component: mock
    },
    ...directive,
    ...css3Router,
    ...imageRouter,
    ...form
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
