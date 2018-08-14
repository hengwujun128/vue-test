<template>
  <div class="version-container">
    <h2>hello this is vueVersion</h2>
    <vue-version></vue-version>
<h2>hello,this is current version {{version}} from vue-test</h2>
  </div>
</template>

<script>
import VueVersion from "get-vue-version";
import Vue from "vue";

export default {
  components: {
    VueVersion
  },
  computed: {
    version() {
      return Vue.version;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
