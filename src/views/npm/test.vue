<template>
  <div class="npm-container">
    <div class="title">hello this is zzq-component test</div>
    <div class="banner">
      <ZBanner>This is a banner!</ZBanner>
    </div>
    <div class="button">
      <ZButton>this is my button</ZButton>
    </div>
  </div>
</template>

<script>
// import Components from "zzq-component";
export default {
  name: "test",
  // components: {
  //   ...Components
  // },
  data: () => {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
}
.button {
  margin-top: 50px;
}
</style>