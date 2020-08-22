import line from '@/views/canvas/line.vue'
import demo from '@/views/canvas/index.vue'
import canvas from '@/views/canvas/index1.vue'
const Canvas = [
  {
    name: 'canvas',
    path: '/canvas',
    redirect: '/canvas/demo',
    component: canvas,
    children: [
      {
        name: 'line',
        path: 'line',
        component: line
      },
      {
        name: 'demo',
        path: '/canvas/demo',
        component: demo
      }
    ]
  }
]

export default Canvas
