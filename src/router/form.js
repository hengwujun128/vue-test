import form from '@/views/form/index.vue'
import customizedForm from '@/views/form/customizedForm.vue'
const formRouter = [{
  path: '/form',
  name: 'form',
  component: form,
  redirect: '/form/customizedForm',
  children: [{

    path: 'customizedForm',
    name: 'makeForm',
    component: customizedForm
  }]
}]

export default formRouter
