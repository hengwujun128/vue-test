<template>
  <div class="navigator-container">
    <h2>hello,this is navigator</h2>
    <section class="toolbar">
      <a href="javascript:;" class="common weixin">
        <!-- 用于承载 -->
        <span class="toolbar-layer"></span>
      </a>
      <a href="javascript:;" class="common feedback">
        <span class="toolbar-layer"></span>
      </a>
      <a href="javascript:;" class="common app">
        <span class="toolbar-layer"></span>
      </a>
      <a href="javascript:;" class="common code">
        <span class="toolbar-layer"></span>
      </a>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  created () {
    // alert('hello')
  }
}
</script>

<style lang="scss" scoped>
//
$toolbar-size: 52px;

@mixin toolbar-item($pos, $hovpos) {
}
.navigator-container {
  position: relative;
  // 容器
  .toolbar {
    background: #dddddd;
    position: fixed;
    left: 50%;
    bottom: 50px;
    margin-left: -$toolbar-size / 2;
    // 每个item公共样式
    .common {
      display: block;
      width: $toolbar-size;
      height: $toolbar-size;
      background-image: url("../../../assets/img/toolbar.png");
      background-repeat: no-repeat;
      margin-top: 1px;
      // 因为二维码要相对于父元素进行绝对定位
      position: relative;
      // 每个项目进行过度
      transition: background-position 1s;
      // 二维码公共样式
      .toolbar-layer {
        position: absolute;
        // 偏离父元素的宽度,在父元素的左侧
        right: $toolbar-size;
        bottom: -10px;
        width: 172px;
        background-image: url("../../../assets/img/toolbar.png");
        background-repeat: no-repeat;
        // 正常情况下是透明的
        opacity: 0;
        // 兼容IE
        filter: alpha(opacity=0);
        // 变换到最小
        transform: scale(0.01);
        // 变换原点（相对于元素本身）
        transform-origin: 95% 95%;
        // 二维码进行过度
        transition: all 1s;
      }
      // 鼠标移入时候二维码的状态 ：透明度，大小
      &:hover {
        .toolbar-layer {
          opacity: 1;
          filter: alpha(opacity=100);
          transform: scale(1);
        }
      }
    }
    .weixin {
      // image height 52px
      background-position: 0 -798px;
      &:hover {
        background-position: 0 -860px;
      }
      // 微信二维码
      .toolbar-layer {
        height: 212px;
        background-position: 0 0;
      }
    }
    .feedback {
      // image height 52px
      background-position: 0 -426px;
      &:hover {
        background-position: 0 -480px;
      }
    }
    .app {
      // image height 52px
      background-position: 0 -550px;
      &:hover {
        background-position: 0 -612px;
      }
      // app 下的二维码
      .toolbar-layer {
        height: 194px;
        background-position: 0 -222px;
      }
    }
    .code {
      // image height 52px
      background-position: 0 -674px;
      &:hover {
        background-position: 0 -736px;
      }
      // code 下的二维码
    }
  }
}
</style>
