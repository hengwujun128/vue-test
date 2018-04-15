import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import treeTable from '@/views/treeTable/treeTable'
import canban from '@/views/canban/canban'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/treeTable',
      name:'treeTable',
      component:treeTable
    },
    {
      path:'/canban',
      name:'canban',
      component:canban
    }
    // drag and drop
  ]
})
