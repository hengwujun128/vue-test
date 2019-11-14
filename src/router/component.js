import component from '@/views/npm/index.vue'
import test from '@/views/npm/test.vue'
const componentRouter = [{
  path: '/component',
  name: 'component',
  component: component,
  redirect: '/component/test',
  children: [{
    path: 'test',
    name: 'test',
    component: test
  }]
}]
export default componentRouter
