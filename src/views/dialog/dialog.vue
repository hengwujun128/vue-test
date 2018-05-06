<template>
  <div><h2>hello,this is dialog test</h2>
  <modal name="hello-world">
  hello, world!
</modal>
  <el-button type="info" @click="show">click</el-button>
  </div>
</template>
<script>
export default {
  data:function (param) {
    return {
      
    }
    },
    methods: {
  show () {
    this.$modal.show('hello-world');
  },
  hide () {
    this.$modal.hide('hello-world');
  }
}
};
</script>