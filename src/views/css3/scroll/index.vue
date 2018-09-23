<template>
  <div id="scroll-wrapper">
    <ul>
      <li><a href="#red">red</a></li>
      <li><a href="#green">green</a></li>
      <li><a href="#blue">blue</a></li>
      <li><a href="#yellow">yellow</a></li>
      <li><a href="#magenta">magenta</a></li>
    </ul>
    <div class="container">
      <div id="red"><h1>red</h1></div>
      <div id="green"><h1>green</h1></div>
      <div id="blue"><h1>blue</h1></div>
      <div id="yellow"><h1>yellow</h1></div>
      <div id="magenta"><h1>megenta</h1></div>
    </div>
  </div>
  
</template>
<script>
export default {
  data() {
    return {}
  },
  created() {
    // alert(12344)
  }
}
</script>
<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
}
#scroll-wrapper {
  ul {
    position: fixed;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    margin: 0;
    padding: 0;
    z-index: 1;

    li {
      list-style: none;
      a {
        display: block;
        text-decoration: none;
        height: 30px;
        line-height: 30px;
        font-size: 24px;
        background: #ffffff;
        width: 140px;
        color: #262626;
        margin: 4px 0;
        padding-left: 15px;
        text-transform: uppercase;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
        &:hover {
          background: #262626;
          color: #fff;
        }
      }
    }
  }

  .container {
    width: 100%;
    height: 100vh;
    // 父容器使用overflow:scroll;scroll-behavior:smooth
    overflow-y: scroll;
    scroll-behavior: smooth;
    div {
      width: 100%;
      height: 50%;
      position: relative;
      &#red {
        background: red;
      }
      &#green {
        background: green;
      }
      &#blue {
        background: blue;
      }
      &#yellow {
        background: yellow;
      }
      &#magenta {
        background: magenta;
      }
      h1 {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        text-align: center;
        margin: 0;
        padding: 0;
        font-size: 8em;
        color: #fff;
        text-transform: uppercase;
      }
    }
  }
}
</style>
 
