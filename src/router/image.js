import images from "@/views/images/index.vue"
import slideShow from "@/views/images/slideShow.vue"
const imageRouter = [{
  path: '/images',
  name: 'images',
  component: images,
  redirect: 'slideShow',
  children: [{
    path: 'slideShow',
    name: 'slideShow',
    component: slideShow
  }]
}]
export default imageRouter
