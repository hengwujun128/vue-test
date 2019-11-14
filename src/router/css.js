import css3 from '@/views/css3/index.vue'
import scroll from '@/views/css3/scroll/index.vue'
import navigator from '@/views/css3/navigator/index.vue'

import polygon from '@/views/css3/polygon/index.vue'

import slide from '@/views/css3/animation/slide.vue'
// headerNavigation
import HeaderNavigation from '@/views/css3/headerNavigation/headerNavigation'
import navigation from '@/views/css3/navigation'
const cssRouter = [
  {
    path: '/css',
    name: 'css3',
    component: css3,
    redirect: 'css/scroll',
    children: [
      {
        path: '/css/scroll',
        name: 'scroll',
        component: scroll
      },

      {
        path: '/css/navigation',
        name: 'navigation',
        component: navigation
      },
      {
        path: '/css/navigator',
        name: 'navigator1',
        component: navigator
      },
      {
        path: '/css/polygon',
        name: 'polygon',
        component: polygon
      },
      {
        path: '/css/animation',
        name: 'slide',
        component: slide
      }
    ]
  }
]
export default cssRouter
