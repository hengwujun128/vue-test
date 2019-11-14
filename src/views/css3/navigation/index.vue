<template>

  <section>
    <div class="left">
      <ul>
        <li @mouseenter="active(1)">hello1

        </li>
        <li @mouseenter="active(2)">hello2
          <div class="children">

          </div>
        </li>
        <li @mouseenter="active(3)">hello3
          <div class="children">

          </div>
        </li>
        <li @mouseenter="active(4)">hello4
          <div class="children">

          </div>
        </li>
        <li @mouseenter="active(5)">hello5
          <div class="children">

          </div>
        </li>
      </ul>
    </div>
    <div class="right">hello this is content
      <div class="content">
        <!-- <div v-for="(v) in 5" :key="v" :class="['list']" :style="activeStyle">hello children {{v}}</div> -->
        <div class="list" :style="activeStyle">1</div>
        <div class="list">2</div>
        <div class="list">3</div>
        <div class="list">4</div>
        <div class="list">5</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: 1,
      activeStyle: {}
    }
  },
  methods: {
    active (v) {
      this.activeIndex = v
      let base = 300
      let result = 300 * (v - 1)

      let style = {
        transform: `translateY(-${result}px)`
      }
      this.activeStyle = style
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  height: 100%;
  .left {
    float: left;
    position: relative;
    height: 100%;
    width: 200px;
    background: #dddddd;
    overflow: hidden;
    ul > li {
      list-style: none;
      display: block;
      padding: 10px;
      cursor: pointer;
      // position: relative;
      &:hover {
        background: yellowgreen;
      }
    }
  }
  .right {
    width: calc(100% - 200px);
    float: right;
    .content {
      background: burlywood;
      transition: all 0.5s;
      height: 300px;
      overflow: hidden;
      .list {
        height: 300px;
        color: #ffffff;
        font-size: 24px;
        line-height: 300px;
        // transform: translateY(100%);
      }
      .activeClass {
        transform: translateY(0);
      }
    }
  }
}
</style>