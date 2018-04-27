import Vue from "vue";
import Router from "vue-router";

import HelloWorld from "@/components/HelloWorld";
import treeTable from "@/views/treeTable/treeTable";
import canban from "@/views/canban/canban";
import direc from "@/views/directiveTest/directiveTest";

// tagInput
import tagInput from "@/views/tagInput/tagInput.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld,
      redirect: "directive"
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
      name: "tagInput",
      path: "/tagInput",
      component: tagInput
    }
    // drag and drop
  ]
});
