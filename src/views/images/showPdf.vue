<template>
  <div class="pdf">
    <h2>hello,how to make vue to show pdf</h2>
    <div class="pdf-container">
      {{currentPage}} / {{pageCount}}
      <!-- <pdf src="../../static/ES6.pdf" :rotate="0" @num-pages="pageCount = $event" @page-loaded="currentPage = $event"></pdf> -->

      <!-- <pdf v-for="i in numPages" :key="i" :src="src" :page="i" @num-pages="pageCount = $event" @page-loaded="currentPage = $event"></pdf> -->
    </div>
  </div>
</template>
<script>
import pdf from 'vue-pdf'
let loadingTask = pdf.createLoadingTask('../../static/ES6.pdf');

export default {
  data () {
    return {
      title: 'hello,this is title',
      currentPage: 0,
      pageCount: 0,
      src: loadingTask,
      numPages: undefined,
    }
  },
  components: {
    pdf
  },
  mounted () {

    this.src.then(pdf => {

      this.numPages = pdf.numPages;
    });
  },
  methods: {
    // num_pages (a) {
    //   // debugger
    // }
  }
}
</script>
<style lang="scss" scoped>
.pdf-container {
  width: 100%;
  height: 500px;
}
</style>
