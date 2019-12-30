import component from '@/views/npm/index.vue'
import test from '@/views/npm/test.vue'
import jsMenu from '../views/components/jdMenu'
const componentRouter = [
  {
    path: '/component',
    name: 'component',
    component: component,
    redirect: '/component/jdMenu',
    children: [
      {
        path: 'test',
        name: 'test',
        component: test
      },
      {
        path: '/component/jdMenu',
        name: 'jdMenu',
        component: jsMenu
      }
    ]
  }
]
export default componentRouter
