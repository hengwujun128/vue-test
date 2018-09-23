<template>
  <div class="wrapper">
    hello ,iframe
    <el-row>
      <el-col :sm=2>
        <el-button type="primary" @click="addSrc">一键规划</el-button>
      </el-col>
    </el-row>
    <div class="iframe-container">
      <iframe ref="iframe" @load="loaded"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      src: ""
    };
  },

  methods: {
    loaded () {
      // const vm = this.$refs.iframe.contentWindow.vm;
      // console.log(vm);
      //vm.func1()
    },
    /**
     * 1.要以当前用户登录sita环境，选中项目之后，才能进入
     * 2.ifram 进入之后就可以使用
     *
     */
    addSrc () {
      // this.$refs.iframe.src = "http://sd-smartodn-dev.huawei.com/#/planning/planningMain/";
      this.$refs.iframe.src = "http://localhost.huawei.com:9090/#/HBB/networkPlanning?cur_project_id=2325412908626000010"
    }
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: 100%;

  .iframe-container {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    height: 80%;
    transform: translate(-50%, -50%);
    overflow: auto;
    iframe {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

