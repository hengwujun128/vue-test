import css3 from "@/views/css3/index.vue"
import scroll from "@/views/css3/scroll/index.vue"
import navigator from "@/views/css3/navigator/index.vue"
const cssRouter = [{
  path: '/css3',
  name: 'css3',
  component: css3,
  redirect: 'scroll',
  children: [{
    path: 'scroll',
    name: 'scroll',
    component: scroll
  }, {
    path: 'navigator',
    name: 'navigator',
    component: navigator
  }]
}]
export default cssRouter
