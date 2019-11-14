import line from '@/views/canvas/line.vue'
import canvas from '@/views/canvas/index1.vue'
const Canvas = [
  {
    name: 'canvas',
    path: '/canvas',
    redirect: '/canvas/line',
    component: canvas,
    children: [
      {
        name: 'line',
        path: 'line',
        component: line
      }
    ]
  }
]

export default Canvas
