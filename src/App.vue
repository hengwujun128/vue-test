<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <notifications group="foo" />
  </div>
  
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
  // height: calc(100% - 60px);
  height: 100%;
}
</style>
