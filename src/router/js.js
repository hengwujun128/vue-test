import component from "@/views/js/index.vue"
import string from "@/views/js/string.vue"

const jsRouter = [{
  path: '/js',
  name: 'js',
  component: component,
  redirect: '/js/string',
  children: [{
    path: 'string',
    name: 'string',
    component: string
  }]
}]
export default jsRouter
