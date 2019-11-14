<template>
  <div>
    <h2>hello,this is resize directive</h2>
    <div class="resizable throttle" id="resizable">
      asdfasdf
    </div>
  </div>
</template>

<script>
import resize from 'vue-resize-directive'
// import $ from "jquery";
// import jquery_ui from "jquery-ui/ui/widgets/resizable.js";
export default {
  directives: {
    resize
  },
  data () {
    return {
      observer: null,
      firedNum: 0,
      recordOldValue: { // 记录下旧的宽高数据，避免重复触发回调函数
        width: '0',
        height: '0'
      }
    }
  },
  mounted () {
    let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
    let element = document.querySelector('.resizable')
    this.observer = new MutationObserver((mutationList) => {
      // for(let mutation of mutationList) {
      //   console.log(mutation)
      // }
      let width = getComputedStyle(element).getPropertyValue('width')
      let height = getComputedStyle(element).getPropertyValue('height')

      if (width === this.recordOldValue.width && height === this.recordOldValue.height) return
      this.recordOldValue = {
        width,
        height
      }
      console.log(this.recordOldValue)
      this.firedNum += 1
    })
    this.observer.observe(element, {
      attributes: true,
      attributeFilter: ['style'],
      attributeOldValue: true
    })
  },
  beforeDestroyed () {
    if (this.observer) {
      this.observer.disconnect()
      this.observer.takeRecords()
      this.observer = null
    }
  },

  methods: {
    onResize (v) {
      // debugger
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  font-size: x-large;
}
.resizable.throttle {
  background: blue;
}
.resizable.debounce {
  background: yellow;
}
.resizable.keep-alive {
  background: grey;
}
.resizable.standard {
  background: green;
}

.resizable {
  overflow: hidden;
  background: green;
  height: 200px;
  width: 200px;
  vertical-align: middle;
  display: table-cell;
  resize: both; /*用户可以调节元素的宽度和高度*/
}
</style>
