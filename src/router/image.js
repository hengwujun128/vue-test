import images from '@/views/images/index.vue'
import slideShow from '@/views/images/slideShow.vue'
import showPdf from '@/views/images/showPdf.vue'
import modalImage from '@/views/images/modalImage.vue'
const imageRouter = [
  {
    path: '/images',
    name: 'images',
    component: images,
    redirect: 'slideShow',
    children: [
      {
        path: 'slideShow',
        name: 'slideShow',
        component: slideShow
      }, {
        path: 'showPdf',
        name: 'showPdf',
        component: showPdf
      }, {
        path: 'modalImage',
        name: 'modalImage',
        component: modalImage
      }
    ]
  }
]
export default imageRouter
