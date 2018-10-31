
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
          <span class="title">输入(拖动参数到分组)</span>
          <span class="add-group">
            <el-button plain size="mini" class="el-icon-circle-plus" @click="addGroup">新增分组</el-button>
          </span>
        </div>
        <div class="input-body">

          <draggable v-model="list2" :options="inputOptions" style="height:100%;" @start="myStart" @end="inputEnd" @update="myUpdate" @add="inputAdd">
            <div v-for="(element, index) in list2" :key="index" class="target-item draggable">
              <!-- <div class="drag-item">{{element.parameterName}}<i class="el-icon-close close" @click="remove(index,1)"></i></div> -->
              <div class="group-panel" style="background:#fff">
                <div class="group-header my-handle">
                  <span>{{element.groupName}}</span>
                  <span class="group-operation"><i class="el-icon-edit-outline" @click="editGroup(index)"></i></span>
                  <span class="group-operation"><i class="el-icon-delete" @click="deleteGroup(index)"></i></span>
                </div>
                <div class="group-body">
                  <!-- 注意:options中的group 为左侧的groups中的公用test; 为 -->
                  <draggable :list="list2[index].parameterList" :options="groupOptions" style="height:100%;" class="each-group">
                    <div v-for="(item2, index2) in list2[index].parameterList" :key="item2.parameterId" :class="{draggable2:true, 'drag-button':true}">
                      <div>
                        {{item2.parameterName}}
                        <i class="el-icon-close close" @click="remove(index,index2,1)"></i>
                      </div>
                    </div>
                  </draggable>
                </div>
              </div>
            </div>
          </draggable>

        </div>

      </div>

      <div class="output">
        <div class="output-header">
          <span>输出</span>
        </div>
        <div class="output-body">
          <!-- <draggable v-model="outputData" :options="{group:{name:'test2',put:['test']},draggable: '.draggable'}" style="height:100%;" @start="drag=true" @end="drag=false" @update="myUpdate" @add="outputAdd">
            <div v-for="(element, index) in outputData" :key="index" class="target-item draggable">
              <div class="drag-item">{{element.parameterName}} <i class="el-icon-close close" @click="remove(index,2)"></i></div>
            </div>
          </draggable> -->
        </div>
      </div>
    </div>
    <el-dialog title="新增分组" :visible.sync="dialogVisible" width="30%" :before-close="handleClose" :center="false">
      <el-form ref="addGroupForm" :model="groupForm" label-width="80px" size="mini">
        <el-form-item label="分组名称">
          <el-input v-model="groupForm.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveGroup">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
import indexMixin from "./index.js"
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
  mixins: [indexMixin],
  computed: {
    inputOptions () {
      return {
        handle: '.my-handle',
        animation: 0,
        group: {
          name: 'input',
          // put: ['test']
          put: false
        },
        dragable: '.draggable',
        // disabled: true,
        ghostClass: "ghost"
      }
    },
    groupOptions () {
      return {
        draggable: '.draggable2',
        ghostClass: 'groupItem-ghost',
        group: {
          name: 'groupItem',
          put: ['test']
        }
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
      // if (!this.$parent.customizedInputGroup.includes(this.inputData[obj.newIndex].groupId)) {
      //   this.inputData[obj.newIndex].groupId = -1
      // }
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
    remove: function (index, index2, tag) {
      if (tag == 1) {
        this.list2[index].parameterList.splice(index2, 1);
      } else {
        this.outputData.splice(index, 1);
      }

    },
  }
}
</script>
<style lang="scss">
.el-dialog__header {
  text-align: left;
}
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
      // background: #eee;
      box-sizing: border-box;
      padding: 10px;
      position: relative;
    }
    .input {
      // margin-bottom: 40px;
      .input-header {
        height: 40px;
        line-height: 40px;
        width: 100%;
        text-align: left;
        color: #606266;
        font-size: 18px;
        span {
          text-align: left;
          height: 40px;
          font-size: 16px;
          // font-weight: 600;
          // line-height: 40px;
        }
        .add-group {
          float: right;
        }
      }
      .input-body {
        height: calc(100% - 40px);
        // padding: 20px;
        box-sizing: border-box;
        // border: 2px dashed #e66c3cab;
        border: 1px dashed #66b1ff;
        overflow: auto;
      }
    }
    .output {
      .output-header {
        height: 40px;
        width: 100%;
        text-align: left;
        color: #606266;
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
        border: 1px dashed #66b1ff;
        overflow: auto;
      }
    }
    // 目标元素
    .target-item {
      // background-color: rgba(64, 158, 255, 0.1);
      // display: inline-block;
      // padding: 0 10px;
      margin: 10px;
      height: 32px;
      line-height: 30px;
      font-size: 12px;
      color: #409eff;
      border-radius: 4px;
      box-sizing: border-box;
      cursor: pointer;
      // cursor: move;
      // border: 1px solid rgba(64, 158, 255, 0.2);
      border: 2px solid #eeeeee;
      white-space: nowrap;
      height: 150px;

      .close {
        margin-left: 6px;
        font-size: 16px;
      }
      .group-panel {
        height: 100%;
        .group-header {
          // position: relative;
          background: #f5f5f5;
          color: #606266;
          font-size: 18px;
          line-height: 30px;
          text-align: left;
          height: 30px;
          padding: 0 10px;
          .group-operation {
            // display: inline-block;
            box-sizing: border-box;
            margin: 0px 10px;
            // padding: 4px;
            font-size: 14px;
            cursor: pointer;
            line-height: 30px;
            float: right;
          }
        }
        .group-body {
          height: calc(100% - 30px);
        }
      }
    }

    .each-group {
      text-align: left;
      height: 100%;
      white-space: normal;
      overflow: auto;
    }
    // button
    .drag-button {
      display: inline-block;
      // background-color: rgba(64, 158, 255, 0.1);
      background-color: #f2f2f2;
      padding: 0 10px;
      margin: 5px;
      font-size: 12px;

      color: #606266;
      border-radius: 4px;
      box-sizing: border-box;
      cursor: pointer;
      // cursor: move;
      border: 1px solid rgba(64, 158, 255, 0.2);
      white-space: nowrap;
    }

    // handle
    .my-handle {
      cursor: move;
      cursor: -webkit-grabbing;
    }

    // Class name for the drop placeholder (default sortable-ghost).
    .ghost {
      opacity: 0.5;
      background: #c8ebfb;
    }
    //
    .groupItem-ghost {
      opacity: 0.8;
      // color: #409eff;
      background: #c8ebfb;
    }
  }
}
</style>
