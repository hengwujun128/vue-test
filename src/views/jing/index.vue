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
                                <span style="display:inline-block;height:50%;width:50%;line-height:1.5;background-color:#fff;border-radius:50%;position:absolute;transform:translate(-50%,-50%);top:50%;left:50% ">{{value}}</span>
                                <!-- <span style="display:block;height:20px;line-height:20px;font-size:18px;">100</span> -->
                             </div>
                         </template>
                         <template v-else-if="pipeTotal===6">
                              <div v-for="value in pipeTotal" :key="value" style="width:33.3%;height:50%;box-sizing:border-box;position:relative;float:left;">
                                <span style="display:inline-block;height:42px;width:42px;line-height:1.5;background-color:#fff;border-radius:50%;position:absolute;transform:translate(-50%,-50%);top:50%;left:50% ">{{value}}</span>
                                <!-- <span style="display:block;height:20px;line-height:20px;font-size:18px;">100</span> -->
                             </div>
                         </template>
                         <!-- 9 -->
                          <template v-else>
                              <div v-for="value in pipeTotal" :key="value" style="width:33%;height:33%;box-sizing:border-box;position:relative;float:left;">
                                <span style="display:inline-block;height:80%;width:80%;line-height:1.5;background-color:#fff;border-radius:50%;position:absolute;transform:translate(-50%,-50%);top:50%;left:50% ">{{value}}</span>
                                <!-- <span style="display:block;height:20px;line-height:20px;font-size:18px;">100</span> -->
                             </div>
                         </template>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>


<script>
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
    grid-template-rows: repeat(3, 180px);
    grid-template-columns: repeat(3, 180px);
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
    div:nth-child(2),
    div:nth-child(4),
    div:nth-child(5),
    div:nth-child(6),
    div:nth-child(8) {
      background: #dddddd;
      //   border: 5px solid #ddd;
    }

    // border
    // div:nth-child(2) {
    //   border-bottom: none;
    // }
    // div:nth-child(4) {
    //   border-right: none;
    // }
    // div:nth-child(6) {
    //   border-left: none;
    // }
    // div:nth-child(8) {
    //   border-top: none;
    // }
  }
}
</style>
