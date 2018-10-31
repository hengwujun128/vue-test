import css3 from "@/views/css3/index.vue"
import scroll from "@/views/css3/scroll/index.vue"
import navigator from "@/views/css3/navigator/index.vue"

import polygon from "@/views/css3/polygon/index.vue"

const cssRouter = [{
  path: '/css3',
  name: 'css3',
  component: css3,
  redirect: 'scroll',
  children: [{
      path: 'scroll',
      name: 'scroll1',
      component: scroll
    }, {
      path: 'navigator',
      name: 'navigator1',
      component: navigator
    },
    {
      path: 'polygon',
      name: 'polygon',
      component: polygon
    }
  ]
}]
export default cssRouter
