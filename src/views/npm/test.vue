<template>
  <div class="npm-container">
    <h2>hello this is zzq-component test</h2>
    <ZButton>this is my button</ZButton>
    <ZBanner>This is a banner!</ZBanner>
  </div>
</template>

<script>
import Components from "zzq-component";
export default {
  name: "test",
  components: {
    ...Components
  },
  data: () => {
    return {};
  }
};
</script>
<style lang="scss" scoped>
</style>