import component from '@/views/npm/index.vue'
import test from '@/views/npm/test.vue'
import jsMenu from '../views/components/jdMenu'
import TreeView from '../components/treeView/index.vue'

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
      },
      {
        path: '/component/treeView',
        name: 'treeView',
        component: TreeView
      }
    ]
  }
]
export default componentRouter
