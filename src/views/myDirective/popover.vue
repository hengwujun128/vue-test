<template>
  <div>
    <h2>hello,popover</h2>
    <div>
      <!-- elementUI 中的tooltip,popover 都是通过组件的方式来实现 -->
      <!-- 这里都得通过指令和组件的方式实现 -->
      <tooltip></tooltip>

      <!-- 指令 -->
      <button v-popover.bottom="{name:'foo'}">Toggle popover</button>
      <!-- tooltip 只能通过指令来实现 -->
      <!-- <button v-popover:tooltip="'this is a string value'">tooltip test</button> -->
      <!-- 要展示的内容 -->
      <!-- pointer 三角号 -->
      <popover name="foo" :pointer="true" @show="showHandler">
        <div style="heiht:100px;border:1px solid #ddd;">zzzzzasdfasdfsfa</div>
      </popover>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    showHandler (e) {
      // alert(12);
    }
  },
  created () {}
}
</script>
<style lang="scss" scoped>
// div[data-popover="foo"] {
//   background: #444;
//   color: #f9f9f9;

//   font-size: 12px;
//   line-height: 1.5;
//   margin: 5px;
// }
</style>
