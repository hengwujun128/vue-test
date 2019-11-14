<template>
  <div class="fourth-container">
      <!-- {{direction}} -->
      <!-- 对 position等于1,4,8 做判断 -->
    <template v-if="direction==1">
      <div v-for="(value, key) in leftData" :key="key"  class="fourth-hole">
        <span class="first">
          <!-- <img src="../../assets/img/available.png"/> -->
          <img :src="value.src"/>
        </span>
        <span class="second">{{value.groupNum}}-{{value.indexNum}}</span>
      </div>
    </template>
    <template v-else-if="direction==4">
      <div v-for="(value, key) in rightData" :key="key"  class="fourth-hole">
        <span class="first"> <img :src="value.src"/></span>
        <span class="second">{{value.groupNum}}-{{value.indexNum}}</span>
      </div>
    </template>
    <template v-else-if="direction==8">
      <div v-for="(value, key) in bottomData" :key="key"  class="fourth-hole">
        <span class="first"> <img :src="value.src"/></span>
        <span class="second">{{value.groupNum}}-{{value.indexNum}}</span>
      </div>
    </template>

    <template v-else>
      <div v-for="(value, key) in topData" :key="key"  class="fourth-hole">
        <span class="first"><img :src="value.src"/></span>
        <span class="second">{{value.groupNum}}-{{value.indexNum}}</span>
      </div>
    </template>
  </div>
</template>

<script>
const MAP = {
  '1': 'available.png',
  '2': 'half.png',
  '4': 'unavailable.png'
}
export default {
  data () {
    return {
      path: '../../assets/img'
    }
  },
  props: ['result', 'direction'],
  computed: {
    leftData () {
      let response = {}
      if (this.direction === 1) {
        this.result.map(res => {
          res['src'] = require(`../../assets/img/${MAP[res.status]}`)
          if (res.groupNum == 1) {
            if (res.indexNum == 1) {
              response['3'] = res // 1-1
            } else {
              response['1'] = res // 1-2
            }
          } else if (res.groupNum == 2) {
            if (res.indexNum == 1) {
              response['4'] = res // 2-1
            } else {
              response['2'] = res // 2-2
            }
          }
        })
      }
      return response
    },
    rightData () {
      let response = {}
      if (this.direction === 4) {
        this.result.map(res => {
          res['src'] = require(`../../assets/img/${MAP[res.status]}`)
          if (res.groupNum == 1) {
            if (res.indexNum == 1) {
              response['2'] = res // 1-1
            } else {
              response['4'] = res // 1-2
            }
          } else if (res.groupNum == 2) {
            if (res.indexNum == 1) {
              response['1'] = res // 2-1
            } else {
              response['3'] = res // 2-2
            }
          }
        })
      }
      return response
    },
    bottomData () {
      let response = {}
      if (this.direction === 8) {
        this.result.map(res => {
          res['src'] = require(`../../assets/img/${MAP[res.status]}`)
          if (res.groupNum == 1) {
            if (res.indexNum == 1) {
              response['4'] = res // 1-1
            } else {
              response['3'] = res // 1-2
            }
          } else if (res.groupNum == 2) {
            if (res.indexNum == 1) {
              response['2'] = res // 2-1
            } else {
              response['1'] = res // 2-2
            }
          }
        })
      }
      return response
    },
    topData () {
      let response = {}
      // 不需要做判断
      this.result.map(res => {
        res['src'] = require(`../../assets/img/${MAP[res.status]}`)
        if (res.groupNum == 1) {
          if (res.indexNum == 1) {
            response['1'] = res // 1-1
          } else {
            response['2'] = res // 1-2
          }
        } else if (res.groupNum == 2) {
          if (res.indexNum == 1) {
            response['3'] = res // 2-1
          } else {
            response['4'] = res // 2-2
          }
        }
      })
      return response
    }
  },
  methods: {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
.jing-container {
  margin: 0 auto;
  width: 50%;
  height: 50%;
  .container {
    // if responsive,
    // width: 100%;
    // height: 100%;
    width: 500px;
    height: 500px;
    & > div {
      float: left;
      width: 33.3%;
      height: 33.3%;
      box-sizing: border-box;
      .pipe-container {
        width: 100%;
        height: 100%;
        background: #dddddd;
        // border: 2px solid red;
        font-size: 1.6em;
      }
    }
    // border
    // & > div:nth-child(2) {
    //   border: 2px solid red;
    //   border-bottom: none;
    // }
    // & > div:nth-child(4) {
    //   border: 2px solid red;
    //   border-right: none;
    // }
    // & > div:nth-child(6) {
    //   border: 2px solid red;
    //   border-left: none;
    // }
    // & > div:nth-child(8) {
    //   border: 2px solid red;
    //   border-top: none;
    // }
  }
}

.fourth-container {
  widows: 100%;
  height: 100%;
}
.fourth-hole {
  width: 50%;
  height: 50%;
  box-sizing: border-box;
  position: relative;
  float: left;
  .first {
    display: inline-block;
    box-sizing: border-box;
    height: 50%;
    width: 50%;
    // background-color: #fff;
    border-radius: 50%;
    position: absolute;
    transform: translate(-50%, 0%);
    top: 0%;
    left: 50%;
    img {
      max-width: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .second {
    display: block;
    height: 40%;
    width: 100%;
    line-height: 1;
    font-size: 14px;
    position: absolute;
    bottom: 0;
    text-align: center;
  }
}
</style>
