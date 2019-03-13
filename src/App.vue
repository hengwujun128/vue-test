<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <notifications group="foo"/>
  </div>
</template>

<script>
export default {
  name: 'App'
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

#nprogress .bar {
  height: 4px;
  background: #27c4f5
    linear-gradient(to right, #27c4f5, #a307ba, #fd8d32, #70c050, #27c4f5);
  background-size: 500%;
  animation: 2s linear infinite barprogress, 0.3s fadein;
  width: 100%;
}
// vw
img {
  content: normal !important;
}
</style>
