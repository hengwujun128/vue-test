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

    <!-- 第二种方法 -->
    <div class="toolbar2">
      <a href="javascript:;" class="toolbar2-item">
        <!-- 子元素图标和文字 -->
        <span class="toolbar2-btn">
          <i class="toolbar2-icon icon-wechat"></i>
          <span class="toolbar2-text">
            公众
            <br>账号
          </span>
        </span>
        <!-- 左侧子元素 -->
        <span class="toolbar2-layer toolbar2-layer-weixin">hello</span>
      </a>

      <a href="javascript:;" class="toolbar2-item">
        <!-- 子元素图标和文字 -->
        <span class="toolbar2-btn">
          <i class="toolbar2-icon icon-message"></i>
          <span class="toolbar2-text">
            意见
            <br>反馈
          </span>
        </span>
        <!--没有 左侧子元素 -->
      </a>
      <a href="javascript:;" class="toolbar2-item">
        <!-- 子元素图标和文字 -->
        <span class="toolbar2-btn">
          <i class="toolbar2-icon icon-mobile"></i>
          <span class="toolbar2-text">
            App
            <br>下载
          </span>
        </span>
        <!-- 左侧子元素 -->
        <span class="toolbar2-layer toolbar2-layer-app">world</span>
      </a>
      <a href="javascript:;" class="toolbar2-item">
        <!-- 子元素图标和文字 -->
        <span class="toolbar2-btn">
          <i class="toolbar2-icon icon-arrow-up2"></i>
          <span class="toolbar2-text">
            返回
            <br>顶部
          </span>
        </span>
        <!-- 没有左侧子元素 -->
      </a>
    </div>
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
@import "./backgroundMethod.scss";
@import "./iconFont.scss";
</style>
