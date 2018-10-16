<template>
  <div class="container">
    <div class="left">
      <section>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item v-for="(item, index) in list" :key="index" :name="index">
            <template slot="title">
              <span class="title">{{item.groupName}}</span>
            </template>
            <draggable :list="list[index].parameterList" :options="{group:{name:'test',pull:'clone',put:false}, draggable: '.draggable'}" :class="{'dragable-container':true,isCollapse:item['isCollapse']}">
              <div v-for="item2 in list[index].parameterList" class="item-wrapper draggable" :key="`dropitem-${item2.parameterId}`">
                <div class="drag-item">{{item2.parameterName}}</div>
              </div>
            </draggable>
          </el-collapse-item>
        </el-collapse>
      </section>
    </div>

    <div class="right">
      <div class="input">
        <div class="input-header">
          <span>输入</span>
        </div>
        <div class="input-body">
          <draggable v-model="inputData" :options="inputOptions" style="height:100%;" @start="myStart" @end="inputEnd" @update="myUpdate" @add="inputAdd">
            <div v-for="(element, index) in inputData" :key="index" class="target-item draggable">
              <div class="drag-item">{{element.parameterName}}<i class="el-icon-close close" @click="remove(index,1)"></i></div>
            </div>
          </draggable>
        </div>

      </div>

      <div class="output">
        <div class="output-header">
          <span>输出</span>
        </div>
        <div class="output-body">
          <draggable v-model="outputData" :options="{group:{name:'test2',put:['test']},draggable: '.draggable'}" style="height:100%;" @start="drag=true" @end="drag=false" @update="myUpdate" @add="outputAdd">
            <div v-for="(element, index) in outputData" :key="index" class="target-item draggable">
              <div class="drag-item">{{element.parameterName}} <i class="el-icon-close close" @click="remove(index,2)"></i></div>
            </div>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from 'vuedraggable'

export default {
  components: {
    draggable
  },
  watch: {
    isDragging (newValue) {
      if (newValue) {
        this.delayedDragging = true;
        return;
      }
      this.$nextTick(() => {
        this.delayedDragging = false;
      });
    }
  },
  computed: {
    inputOptions () {
      return {
        animation: 0,
        group: {
          name: 'input',
          put: ['test']
        },
        dragable: '.draggable',
        // disabled: !this.editable,
        ghostClass: "ghost"
      }
    },
    // 对输入和输出组的数据进行过滤(注意：默认组)
    inputFilter () {
      let data = []
      this.inputData.map(item => {
        data.push(item.parameterId)
      })
      return data;
    },
    outputFilter () {
      let data = []
      this.outputData.map(item => {
        data.push(item.parameterId)
      })
      return data
    }
  },
  data () {
    return {
      isDragging: false,


      activeNames: 1,
      list: [
        {
          groupId: '1',
          groupName: 'first group',
          title: 'first group',
          isCollapse: true,
          description: 'hello first',
          parameterList: [
            { parameterId: 'parameterId1', parameterName: 'parameterName1' },
            { parameterId: 'parameterId2', parameterName: 'parameterName2' },
            { parameterId: 'parameterId3', parameterName: 'parameterName3' },
            { parameterId: 'parameterId4', parameterName: 'parameterName4' }
          ]
        },
        {
          groupId: '2',
          groupName: 'second group',
          title: 'second group',
          isCollapse: false,
          description: 'hello second',
          parameterList: [
            { parameterId: 'parameterId12', parameterName: 'parameterName12' },
            { parameterId: 'parameterId22', parameterName: 'parameterName22' },
            { parameterId: 'parameterId32', parameterName: 'parameterName32' },
            { parameterId: 'parameterId42', parameterName: 'parameterName42' }
          ]
        },
        {
          groupId: '3',
          groupName: 'third group',
          title: 'third group',
          isCollapse: false,
          description: 'hello third',
          parameterList: [
            { parameterId: 'parameterId13', parameterName: 'parameterName13' },
            { parameterId: 'parameterId23', parameterName: 'parameterName23' },
            { parameterId: 'parameterId33', parameterName: 'parameterName33' },
            { parameterId: 'parameterId43', parameterName: 'parameterName43' }
          ]
        },
        {
          groupId: '4',
          groupName: 'fourth group',
          title: 'fourth group',
          name: 'fourth',
          description: 'hello fourth',
          parameterList: [
            { parameterId: 'parameterId14', parameterName: 'parameterName14' },
            { parameterId: 'parameterId24', parameterName: 'parameterName24' },
            { parameterId: 'parameterId34', parameterName: 'parameterName34' },
            { parameterId: 'parameterId44', parameterName: 'parameterName44' },
            { parameterId: 'parameterId54', parameterName: 'parameterName54' }

          ]
        }
      ],
      inputData: [],
      outputData: [],
      isCollapse: 1
    }
  },
  methods: {
    handleChange () {

    },
    toogle (index) {
      // this.isCollapse = index
      this.list[index]['isCollapse'] = !this.list[index]['isCollapse']
      // this.isCollapse = (this.isCollapse === index ? null : index)
    },
    inputAdd (obj) {
      debugger
      if(!this.$parent.customizedInputGroup.includes(this.inputData[obj.newIndex].groupId)){
        this.inputData[obj.newIndex].groupId=-1
      }
      this.duplicatedTips(obj, this.inputData)
    },
    outputAdd (obj) {
      this.duplicatedTips(obj, this.outputData)
    },
    duplicatedTips (obj, list) {
      let pushedIndex = obj.newIndex;  // element's new index within new parent
      let pushedItem = list[pushedIndex]
      // debugger
      if (list.length > 1) {
        // debugger
        // let originData = this.inputData.splice(pushedIndex,1)
        list.map((item, index) => {
          if ((index !== pushedIndex) && (item.parameterId === pushedItem['parameterId'])) {
            this.$confirm('已经存在该字段, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
            }).catch(() => {
              list.splice(pushedIndex, 1)
            });
          }
        })
      }
    },
    isExistInGroups () {

    },
    myStart () {
      this.isDragging = true
    },
    inputEnd (obj) {
      console.log(this.inputData)
      this.isDragging = false
    },
    myUpdate () {
      console.log(this.inputData)
      // debugger
    },
    remove: function (index, tag) {
      if (tag == 1) {
        this.inputData.splice(index, 1);
      } else {
        this.outputData.splice(index, 1);
      }

    },
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  .left {
    width: 300px;
    height: 100%;
    // background: #ddd;
    section {
      height: 100%;
      box-sizing: border-box;
      overflow-x: hidden;
      overflow-y: auto;
      .title {
        font-size: 14px;
        // font-weight: 600;
        color: #09afff;
        float: left;
        margin-left: 10px;
      }
      .item-wrapper {
        background: #dddddd;
        position: relative;
        margin: 10px 10px;
        padding: 10px;

        border-radius: 4px;
        -webkit-transition: 0.3s all;
        transition: 0.3s all;
        cursor: pointer;
        font-size: 12px;
        line-height: 1.2;
        text-align: left;

        // 分裂显示
        // display: inline-block;
        // width: 30%;
      }
    }
  }
  .right {
    flex: 1;
    height: 100%;
    padding: 0px 10px;
    box-sizing: border-box;
    overflow: hidden;
    .input,
    .output {
      height: 50%;
      width: 100%;
      background: #eee;
      box-sizing: border-box;
      padding: 10px;
    }
    .input {
      // margin-bottom: 40px;
      .input-header {
        height: 40px;
        width: 100%;
        text-align: left;
        // color: #909399;
        span {
          text-align: left;
          height: 40px;
          width: 100%;
          font-size: 16px;
          font-weight: 600;
          line-height: 40px;
        }
      }
      .input-body {
        height: calc(100% - 40px);
        // padding: 20px;
        box-sizing: border-box;
        // border: 2px dashed #e66c3cab;
        border: 2px dashed #66b1ff;
        overflow: auto;
      }
    }
    .output {
      .output-header {
        height: 40px;
        width: 100%;
        text-align: left;
        span {
          text-align: left;
          height: 40px;
          width: 100%;
          font-size: 16px;
          font-weight: 600;
          line-height: 40px;
        }
      }
      .output-body {
        height: calc(100% - 40px);
        // padding: 20px;
        box-sizing: border-box;
        border: 2px dashed #66b1ff;
        overflow: auto;
      }
    }
    // 目标元素
    .target-item {
      background-color: rgba(64, 158, 255, 0.1);
      display: inline-block;
      padding: 0 10px;
      margin: 10px;
      height: 32px;
      line-height: 30px;
      font-size: 12px;
      color: #409eff;
      border-radius: 4px;
      box-sizing: border-box;
      cursor: pointer;
      // cursor: move;
      border: 1px solid rgba(64, 158, 255, 0.2);
      white-space: nowrap;
      .close {
        margin-left: 6px;
        font-size: 16px;
      }
    }
    // Class name for the drop placeholder (default sortable-ghost).
    .ghost {
      opacity: 0.5;
      background: #c8ebfb;
    }
  }
}
</style>
