<template>
  <div>
    <h2>hello,this is dialog test</h2>
    <modal name="hello" :draggable=draggable :reset=reset :transition="transition">
        <!-- <div class="window-header">DRAG ME HERE</div> -->
          <h2>xxxx</h2>
    </modal>
    <el-button @click="show">click</el-button>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      name: "hello",
      draggable: true,
      reset: true,
      transition: "all"
    };
  },
  methods: {
    show() {
      this.$modal.show("hello", {}, {});
    },
    hide() {
      this.$modal.hide("hello");
    }
  },
  created() {
    // this.show();
  }
};
</script>
<style lang="scss" scoped>
.v--modal-overlay {
  // background: red;
}
</style>
