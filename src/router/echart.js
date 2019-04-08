import echart from '@/views/echart/index.vue'
import base from '@/views/echart/base.vue'
const echartRouter = [
  {
    path: '/echart',
    name: 'echart',
    component: echart,
    redirect: 'echart/base',
    children: [
      {
        path: '/echart/base',
        name: 'base',
        component: base
      }
    ]
  }
]
export default echartRouter
