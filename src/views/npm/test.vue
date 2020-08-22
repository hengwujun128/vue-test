<template>
  <div class="npm-container">
    <div class="title">hello this is zzq-component test</div>
    <div class="banner">
      <ZBanner>This is a banner!</ZBanner>
    </div>
    <div class="button">
      <ZButton>this is my button</ZButton>
    </div>
    <h2 @click="trigger()">trigger</h2>
    <div class="wrapper">

      <ul :style="activeStyle()">
        <li :class="['item'+item,current===item?'active':'']" v-for="item in 5" :key="item">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
// import Components from "zzq-component";
export default {
  name: 'test',
  // components: {
  //   ...Components
  // },
  data: () => {
    return {
      current: 0
    }
  },
  methods: {
    trigger () {
      this.current++
      if (this.current >= 5) {
        this.current = 0
      }
    },
    activeStyle () {
      let style = {}
      let offsetY = -100 * this.current + 'px'
      style.transform = `translateY(${offsetY})`
      return style
    }
  }
}
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
.wrapper {
  width: 100%;
  height: 100px;
  background: #d3d3d3;
  position: relative;
  overflow: hidden;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    // height: 100px;
    // overflow: hidden;
    // position: absolute;
    // bottom: 0px;
    // left: 0px;
    // right: 0px;
    transition: all 0.5s linear;
    li {
      padding: 0 20px;
      height: 100px;
      text-align: center;
      line-height: 100px;
      font-weight: 700;
      font-size: 32px;

      &.item1 {
        background: red;
      }
      &.item2 {
        background: burlywood;
      }
      &.item3 {
        background: greenyellow;
      }
      &.item4 {
        background: yellow;
      }
    }
    .active {
    }
  }
}
</style>
