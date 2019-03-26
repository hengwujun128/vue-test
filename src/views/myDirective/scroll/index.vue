<template>
  <div class="scrollTo-container" id="scrollTo-container">
    <h2>Adds a directive that listens for click events and scrolls to elements</h2>
    <ul class="button">
      <!-- 第一种方式滚动,requestAnimationFrame -->
      <li>
        <el-button :class="{active:active===1}" v-scroll-to="options1">scrollTo1</el-button>
      </li>
      <li>
        <el-button :class="{active:active===2}" v-scroll-to="options2">scrollTo2</el-button>
      </li>
      <li>
        <el-button
          :class="{active:active===3}"
          v-scroll-to="options3"
          @click="clickHandler(3)"
        >scrollTo3</el-button>
      </li>
    </ul>

    <section id="content">
      <p id="target1">hello,this is target1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <!-- biaototableHead -->
      <p>hello1</p>
      <p>hello1</p>
      <!-- tableBody -->
      <p>hello1</p>
      <p>hello1</p>

      <p>hello1</p>
      <p>hello1</p>

      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>
        hellhello1shushuxing
        wei mdigui2weieiymeiyit2shuju tianjia le
        deb
        vel biaoz2
      </p>
      <!-- <p>hello1</p> -->
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>
        hello1
        deb
      </p>
      <p>hello1</p>
      <p>hello1</p>

      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>

      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>

      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p id="target2">hello,this is target2</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <!-- <p class="target2">hello1</p> -->
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p id="target3">hello,this is target3</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
      <p>hello1</p>
    </section>
  </div>
</template>


<script>
export default {
  data() {
    let me=this;
    return {
      active: 1,
      options1: {
        el: "#target1",
        // container: '#content',
        container: "body",
        duration: 1000,
        easing: "linear",
        offset: -10, //The offset that should be applied when scrolling. This option accepts a callback function since v2.8.0,
        cancelable: true,
        onStart: function(element) {
          // scrolling started
          // alert('start')
        },
        onDone: function(element) {
          // scrolling is done
          // alert('done')
        },
        onCancel: function() {
          // scrolling has been interrupted
        },
        x: false,
        y: true
      },
      options2: {
        el: "#target2",
        // container: '#content',
        container: "body",
        duration: 1000,
        easing: "linear",
        offset: -10, //The offset that should be applied when scrolling. This option accepts a callback function since v2.8.0,
        cancelable: true,
        onStart: function(element) {
          // scrolling started
          // alert('start')
        },
        onDone: function(element) {
          // scrolling is done
          // alert('done')
        },
        onCancel: function() {
          // scrolling has been interrupted
        },
        x: false,
        y: true
      },
      options3: {
        el: "#target3",
        // container: '#content',
        container: "body",
        duration: 1000,
        easing: "linear",
        offset: 0, //The offset that should be applied when scrolling. This option accepts a callback function since v2.8.0,
        cancelable: true,
        onStart: function(element) {
          // scrolling started
          // alert('start')
        },
        onDone: function(element) {
          // scrolling is done
          // alert('done')
          // me.$nextTick(function () {
          //   me.active = 3
          // })
        },
        onCancel: function() {
          // scrolling has been interrupted
        },
        x: false,
        y: true
      }
    };
  },
  mounted() {
    let target1=this.cumulativeOffset(document.querySelector("#target1"));
    let target2=this.cumulativeOffset(document.querySelector("#target2"));
    let target3=this.cumulativeOffset(document.querySelector("#target3"));

    let targetObj1=getComputedStyle(document.querySelector("#target1"));
    let targetObj2=getComputedStyle(document.querySelector("#target2"));
    let targetObj3=getComputedStyle(document.querySelector("#target3"));
    console.log(targetObj1.height,targetObj2.height,targetObj3.height);
    var last_known_scroll_position=0;
    var ticking=false;
    var me=this;
    function doSomething(scroll_pos) {
      // do something with the scroll position
      // console.log('定时获取位置' + scroll_pos)
      // 10 代表偏移量,滚动指令滚动到目标位置时候-10，此时要加上
      if(scroll_pos+10<target2.top) {
        me.active=1;
      } else if(scroll_pos+10<target3.top) {
        me.active=2;
      } else if(target3.top<=scroll_pos+10) {
        // debugger
        me.active=3;
      }
    }
    // throttle

    function scrollThrottle(callback,delay) {
      let isScroll
      return function(e) {
        if(!isScroll) {
          isScroll=true
          setTimeout(() => {
            callback()
            isScroll=false
          },delay)
        }
      }
    }

    // scroll 应该用函数节流;resize 应该用 debounce
    let scrllHandler=scrollThrottle(function() {
      last_known_scroll_position=document.documentElement.scrollTop;
      console.log('500毫秒获取位置:'+last_known_scroll_position)
      doSomething(last_known_scroll_position);
    },500)

    window.addEventListener("scroll",function(e) {
      // 1.在事件处理程序中要实时获取滚动位置
      // last_known_scroll_position=document.documentElement.scrollTop;
      // console.log('事件处理实时获取位置:'+last_known_scroll_position)
      // 2.在事件处理程序中，通过变量控制添加window.requestAnimationFrame;
      // if(!ticking) {
      // window.requestAnimationFrame(function() {
      //   console.log('每一帧获取位置:'+last_known_scroll_position)
      //   doSomething(last_known_scroll_position);
      //   ticking=false;
      // });
      // }
      // 函数节流还是很明显的
      scrllHandler(e)

    });
  },
  methods: {
    cumulativeOffset(element) {
      let top=0;
      let left=0;

      do {
        top+=element.offsetTop||0;
        left+=element.offsetLeft||0;
        // 如果有祖先定位元素，就循环累加

        element=element.offsetParent;
      } while(element);

      return {
        top: top,
        left: left
      };
    },
    clickHandler(n) {
      // this.active = n
    }
  }
};
</script>
<style lang="scss" scoped>
.scrollTo-container {
  #content {
    // height: 800px;
    padding: 10px;
    // overflow: auto;
    p {
      height: 50px;
      background: #dddddd;
      line-height: 50px;
      // padding: 10px;
      box-sizing: border-box;
    }
    #target1 {
      background: greenyellow;
      color: #fff;
    }
    .target2 {
      background: green;
      color: #fff;
    }
  }
  ul.button {
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 1;
    list-style: none;
    margin: 0px;
    padding: 10px;
    width: 20%;
    height: 100vh;
    background: #eeeeee;
    li {
      display: block;
      margin: 10px 0px;
      .el-button--small {
        width: 100%;
      }
    }
  }
  .active {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
  }
}
</style>
