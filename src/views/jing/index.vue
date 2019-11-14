<template>
    <div class="jing-container">
        <h2>hello,人手井</h2>
        <el-button type="primary" @click="toggle">切换</el-button>
        <div class="container">
            <template v-for="item in total">
                <div :key="item">
                    <!-- {{item}} -->
                    <!-- 四个方向 -->
                    <div class="pipe-container" v-if="[2,4,6,8].indexOf(item)>-1">
                        <template v-if="pipeTotal===4">
                          <!-- result 代表每个面 -->

                        <four v-if="item===2" :result="dealData['position2']['groupDuct']" :direction='2'></four>
                        <four v-if="item===4" :result="dealData['position1']['groupDuct']" :direction='1'></four>
                        <four v-if="item===6" :result="dealData['position4']['groupDuct']" :direction='4'></four>
                        <four v-if="item===8" :result="dealData['position8']['groupDuct']" :direction='8'></four>

                        </template>
                        <!-- 6孔 做判断，第二条数据和第三条数据 3行两列布局 -->
                        <template v-else-if="pipeTotal===6">
                          <six v-if="item===4" :result="dealData['position1']['groupDuct']" :direction='1'></six>
                          <six v-if="item===6" :result="dealData['position4']['groupDuct']" :direction='4'></six>

                          <six v-if="item===2" :result="dealData['position2']['groupDuct']" :direction='2'></six>
                          <six v-if="item===8" :result="dealData['position8']['groupDuct']" :direction='8'></six>
                        </template>
                        <!-- 9孔 -->
                          <template v-else>
                              <!-- <div v-for="value in pipeTotal" :key="value" style="width:33.3%;height:33.3%;box-sizing:border-box;position:relative;float:left;">
                                <span style="display:inline-block;box-sizing: border-box;height:50%;width:50%;background-color:#fff;border-radius:50%;position:absolute;transform:translate(-50%,0%);top:0%;left:50% ">{{value}}</span>
                                <span style="display:block;height:40%;width:100%;line-height:1;font-size:14px;position:absolute;bottom:0;text-align:center;">100</span>
                            </div> -->

                        <nine v-if="item===4" :result="dealData['position1']['groupDuct']" :direction='1'></nine>
                        <nine v-if="item===6" :result="dealData['position4']['groupDuct']" :direction='4'></nine>

                        <nine v-if="item===2" :result="dealData['position2']['groupDuct']" :direction='2'></nine>
                        <nine v-if="item===8" :result="dealData['position8']['groupDuct']" :direction='8'></nine>
                        </template>
                    </div>
                    <div v-if="item===5">
                      <!-- 馈线 -->
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
/** 改动大小尺寸:
 * 1.grid-template-rows and grid-template-columns (180,1.6),
 * 2.当每面有6个孔的时候(180,宽高42)，其宽高要按照9孔的标准计算,不能是百分比
 * 3.
 *
 *
 */
import Data from './data.js'
import four from './four.vue'
import six from './six.vue'
import nine from './nine.vue'
export default {
  data () {
    return {
      result: Data.six,
      total: 9,
      pipeTotal: 6, // 4|6|9
      // 测试数据
      internalSurvey: {
        internalShape: 1, // 1-十字型; 2-T字型
        ductModel: 1, // 1-四孔; 2-六孔; 4-九孔
        manholeDuctSurvey: Data.manholeDuctSurvey
      }
    }
  },
  props: {
    // 管道数据[{xx},{xx}],当引入此组件的时候要传递的参数
    // pipes: {
    //   require: true,
    //   type: [object]
    // }
  },
  computed: {
    dealData () {
      let result = {}
      this.internalSurvey.manholeDuctSurvey.map(item => {
        let key = 'position' + item.position
        result[key] = item
      })
      return result
    }
  },
  components: {
    four,
    six,
    nine
  },
  methods: {
    toggle () {
      if (this.pipeTotal === 4) {
        this.pipeTotal = 6
      } else if (this.pipeTotal === 6) {
        this.pipeTotal = 9
      } else if (this.pipeTotal === 9) {
        this.pipeTotal = 4
      }
    }
  },
  jing (v) {
    return [2, 4, 6, 8].includes(v)
  }
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
      &:nth-child(5) {
        background: #dddddd;
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

.four-hole {
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
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    transform: translate(-50%, 0%);
    top: 0%;
    left: 50%;
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
