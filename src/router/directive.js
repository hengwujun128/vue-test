//
import directive from '@/views/myDirective/index.vue'
import scroll from '@/views/myDirective/scroll/index.vue'
import navigator from '@/views/myDirective/navigation/index.vue'
import popover from '@/views/myDirective/popover.vue'
import resize from '@/views/myDirective/resize'

// const tooltip = import(/* webpackChunkName: "tooltip" */ '@/views/myDirective/tooltip')
import tooltip from '@/views/myDirective/tooltip'
const directiveRouter = [
  {
    path: '/myDirective',
    name: 'myDirective',
    component: directive,
    redirect: '/myDirective/scroll',
    children: [
      {
        path: '/myDirective/scroll',
        name: 'scroll',
        component: scroll
      },
      {
        path: '/myDirective/navigator',
        name: 'navigator',
        component: navigator
      },
      {
        path: '/myDirective/popover',
        name: 'popover',
        component: popover
      },
      {
        path: '/myDirective/tooltip',
        name: 'tooltip',
        component: tooltip
      },
      {
        path: '/myDirective/resize',
        name: 'resize',
        component: resize
      }
    ]
  }
]
export default directiveRouter
