//
import directive from "@/views/myDirective/index.vue"
import scroll from "@/views/myDirective/scroll/index.vue"
import navigator from "@/views/myDirective/navigation/index.vue"
const directiveRouter = [{
  path: '/myDirective',
  name: 'myDirective',
  component: directive,
  redirect: '/myDirective/scroll',
  children: [{
    path: '/myDirective/scroll',
    name: 'scroll',
    component: scroll
  }, {
    path: 'navigator',
    name: 'navigator',
    component: navigator
  }]
}]
export default directiveRouter
