<template>
    <div class="jing-container">
        <h2>hello,人手井</h2>
        <el-button type="primary" @click="toggle">切换</el-button>
        <div class="container">
            <template v-for="item in total">
                <div :key="item">
                    <!-- {{item}} -->
                    <!-- pipe -->
                    <div class="pipe-container" v-if="[2,4,6,8].includes(item)">
                        <!-- {{item}} -->
                        <template v-if="pipeTotal===4">
                          <div v-for="value in pipeTotal" :key="value" style="width:50%;height:50%;box-sizing:border-box;position:relative;float:left;">
                            <span style="display:inline-block;box-sizing: border-box;height:50%;width:50%;background-color:#fff;border-radius:50%;position:absolute;transform:translate(-50%,0%);top:0%;left:50% ">{{value}}</span>
                            <span style="display:block;height:40%;width:100%;line-height:1;font-size:14px;position:absolute;bottom:0;text-align:center;">100</span>
                          </div>
                        </template>
                        <template v-else-if="pipeTotal===6">
                              <div v-for="value in pipeTotal" :key="value" style="width:33.3%;height:50%;box-sizing:border-box;position:relative;float:left;">
                                <span style="display:inline-block;box-sizing: border-box;height:32px;width:32px;background-color:#fff;border-radius:50%;position:absolute;transform:translate(-50%,0%);top:0%;left:50% ">{{value}}</span>
                                <span style="display:block;height:40%;width:100%;line-height:1;font-size:14px;position:absolute;bottom:0px;">100</span>
                            </div>
                        </template>
                        <!-- 9 -->
                          <template v-else>
                              <div v-for="value in pipeTotal" :key="value" style="width:33.3%;height:33.3%;box-sizing:border-box;position:relative;float:left;">
                                <span style="display:inline-block;box-sizing: border-box;height:50%;width:50%;background-color:#fff;border-radius:50%;position:absolute;transform:translate(-50%,0%);top:0%;left:50% ">{{value}}</span>
                                <span style="display:block;height:40%;width:100%;line-height:1;font-size:14px;position:absolute;bottom:0;text-align:center;">100</span>
                            </div>
                        </template>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>


<script>
/**改动大小尺寸:
 * 1.grid-template-rows and grid-template-columns (180,1.6),
 * 2.当每面有6个孔的时候(180,宽高42)，其宽高要按照9孔的标准计算,不能是百分比
 * 3.
 *
 *
 */

export default {
  data() {
    return {
      total: 9,
      pipeTotal: 4 // 4|6|9
    };
  },
  methods: {
    toggle() {
      if (this.pipeTotal === 4) {
        this.pipeTotal = 6;
      } else if (this.pipeTotal === 6) {
        this.pipeTotal = 9;
      } else if (this.pipeTotal === 9) {
        this.pipeTotal = 4;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.jing-container {
  margin: 0 auto;
  width: 50%;
  height: 50%;
  .container {
    display: grid;
    // you need to modify width and height;
    // 150 | 180
    grid-template-rows: repeat(3, 150px);
    grid-template-columns: repeat(3, 150px);
    grid-auto-rows: 100px;

    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.6em;
      color: #ffeead;
      .pipe-container {
        flex: 1;
        height: 100%;
        box-sizing: border-box;
        padding: 10px;
        position: relative;
      }
    }
    // background
    & > div:nth-child(2),
    & > div:nth-child(4),
    & > div:nth-child(5),
    & > div:nth-child(6),
    & > div:nth-child(8) {
      background: #dddddd;
      // border: 5px solid red;
    }

    // border
    & > div:nth-child(2) {
      border-bottom: none;
    }
    & > div:nth-child(4) {
      border-right: none;
    }
    & > div:nth-child(6) {
      border-left: none;
    }
    & > div:nth-child(8) {
      border-top: none;
    }
    // 特殊处理
    & > div:nth-child(5) {
      border: none;
    }
  }
}
</style>
