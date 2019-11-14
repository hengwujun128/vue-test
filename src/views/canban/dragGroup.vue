
<template>
  <div class="container dragGroup">
    <div class="left">
      <section>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item v-for="(item, index) in list" :key="index" :name="index">
            <template slot="title">
              <span class="title">{{item.groupName}}</span>
            </template>
            <!-- add dragable2 and drag-button to sort according to input and out each item -->
            <draggable :list="list[index].parameterList" :options="leftEachGroupOptions" :class="{'dragable-container':true}">
              <div v-for="item2 in list[index].parameterList" class="item-wrapper draggable2 drag-button" :key="item2.parameterId">
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
            <el-button type="primary" plain size="mini" class="el-icon-circle-plus" @click="addGroup(1)">新增分组</el-button>
          </span>
        </div>
        <div class="input-body">

          <draggable v-model="list2" :options="GroupOptions" style="over-flow:auto;height:96%" @start="myStart" @end="inputEnd" @update="myUpdate" @add="inputAdd">
            <div v-for="(element, index) in list2" :key="index" class="target-item draggable">
              <!-- <div class="drag-item">{{element.parameterName}}<i class="el-icon-close close" @click="remove(index,1)"></i></div> -->
              <div class="group-panel" style="background:#fff">
                <div class="group-header my-handle">
                  <span>{{element.groupName}}</span>
                  <span class="group-operation"><i class="el-icon-edit-outline" @click="editGroup(1,index)"></i></span>
                  <span class="group-operation"><i class="el-icon-delete" @click="deleteGroup(1,index)"></i></span>
                </div>
                <div class="group-body">
                  <!-- 注意:options中的group 为左侧的groups中的公用test; 为 -->
                  <draggable :list="list2[index].parameterList" :options="EachGroupOptions" style="height:100%;" class="each-group" @add="InputAddItem" :id="index">
                    <div v-for="(item2, index2) in list2[index].parameterList" :key="index2" :class="{draggable2:true, 'drag-button':true}">
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
          <span class="title">输出(拖动参数到分组)</span>
          <span class="add-group">
            <el-button type="primary" plain size="mini" class="el-icon-circle-plus" @click="addGroup(2)">新增分组</el-button>
          </span>
        </div>
        <div class="output-body">
          <draggable v-model="list3" :options="GroupOptions" style="over-flow:auto;height:96%" @start="myStart" @end="inputEnd" @update="myUpdate" @add="inputAdd">
            <div v-for="(element, index) in list3" :key="index" class="target-item draggable">
              <!-- <div class="drag-item">{{element.parameterName}}<i class="el-icon-close close" @click="remove(index,1)"></i></div> -->
              <div class="group-panel" style="background:#fff">
                <div class="group-header my-handle">
                  <span>{{element.groupName}}</span>
                  <span class="group-operation"><i class="el-icon-edit-outline" @click="editGroup(2,index)"></i></span>
                  <span class="group-operation"><i class="el-icon-delete" @click="deleteGroup(2,index)"></i></span>
                </div>
                <div class="group-body">
                  <!-- 注意:options中的group 为左侧的groups中的公用test; 为 -->
                  <draggable :list="list3[index].parameterList" :options="EachGroupOptions" style="height:100%;" class="each-group" @add="OutputAddItem" :id="index">
                    <div v-for="(item2, index2) in list3[index].parameterList" :key="index2" :class="{draggable2:true, 'drag-button':true}">
                      <div>
                        {{item2.parameterName}}
                        <i class="el-icon-close close" @click="remove(index,index2,2)"></i>
                      </div>
                    </div>
                  </draggable>
                </div>
              </div>
            </div>
          </draggable>
        </div>
      </div>
    </div>
    <el-dialog :title="groupForm.title" :visible.sync="dialogVisible" width="30%" :before-close="handleClose" :center="false">
      <el-form ref="addGroupForm" :model="groupForm" label-width="80px" size="mini">
        <el-form-item label="分组名称">
          <el-input v-model="groupForm.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
        <el-button size="mini" type="primary" @click="saveGroup" :disabled="!this.groupForm.name">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
import indexMixin from './index.js'
export default {
  components: {
    draggable
  },
  watch: {
    isDragging (newValue) {
      if (newValue) {
        this.delayedDragging = true
        return
      }
      this.$nextTick(() => {
        this.delayedDragging = false
      })
    }
  },
  mixins: [indexMixin],
  computed: {
    leftEachGroupOptions () {
      return {
        group: { name: 'test', pull: 'clone', put: false },
        draggable: '.draggable2',
        ghostClass: 'groupItem-ghost',
        chosenClass: 'item-chosen',
        sort: false
      }
    },
    GroupOptions () {
      return {
        handle: '.my-handle',
        animation: 0,
        group: {
          name: 'input',
          // put: false
          put: to => {
            // 如果后期优化，可以加上
            // if (to.el.children.length < 1) {
            //   this.$alert('请先建立参数组', '提示', {
            //     confirmButtonText: '确定',
            //     type: 'warning',
            //   });
            // }
            return false
          }
        },

        dragable: '.draggable',
        ghostClass: 'ghost'
      }
    },
    EachGroupOptions () {
      return {
        draggable: '.draggable2',
        ghostClass: 'groupItem-ghost',
        chosenClass: 'item-chosen',
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
      return data
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
    // 去重方案(如果后期优化，可以加上) every puesed item's index in new Group is always 0;
    InputAddItem (data) {
      // let index = data.target.id;
      // let pushedIndex = data.newIndex
      // debugger
      // let pushedObject = this.list2[index]['parameterList'][pushedIndex]
      // let groupList = this.list2[index]['parameterList']

      // if (groupList.length > 1) {
      //   // debugger
      //   // let originData = this.inputData.splice(pushedIndex,1)
      //   groupList.map((item, index) => {
      //     if ((index !== pushedIndex) && (item.parameterId === pushedObject['parameterId'])) {
      //       this.$confirm('已经存在该字段, 是否继续?', '提示', {
      //         confirmButtonText: '确定',
      //         cancelButtonText: '取消',
      //         type: 'warning'
      //       }).then(() => {
      //       }).catch(() => {
      //         groupList.splice(pushedIndex, 1)
      //       });
      //     }
      //   })
      // }
      this.duplicatedTips(data, this.list2)
    },
    OutputAddItem (data) {
      this.duplicatedTips(data, this.list3)
    },
    handleChange () {},
    toogle (index) {
      // this.isCollapse = index
      this.list[index]['isCollapse'] = !this.list[index]['isCollapse']
      // this.isCollapse = (this.isCollapse === index ? null : index)
    },
    inputAdd (obj) {
      // if (!this.$parent.customizedInputGroup.includes(this.inputData[obj.newIndex].groupId)) {
      //   this.inputData[obj.newIndex].groupId = -1
      // }
      // this.duplicatedTips(obj, this.list2)
    },
    outputAdd (obj) {
      // this.duplicatedTips(obj, this.list3)
    },
    duplicatedTips (data, list) {
      let index = data.target.id
      let pushedIndex = data.newIndex
      // debugger
      let pushedObject = list[index]['parameterList'][pushedIndex]
      let groupList = list[index]['parameterList']

      if (groupList.length > 1) {
        // debugger
        groupList.map((item, index) => {
          if (
            index !== pushedIndex &&
            item.parameterId === pushedObject['parameterId']
          ) {
            this.$confirm('已经存在该字段, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            })
              .then(() => {})
              .catch(() => {
                groupList.splice(pushedIndex, 1)
              })
          }
        })
      }
    },
    isExistInGroups () {},
    myStart () {
      this.isDragging = true
    },
    inputEnd (obj) {
      this.isDragging = false
    },
    myUpdate () {
      // debugger
    },
    // if tag equal to 1,input;
    remove: function (index, index2, tag) {
      if (tag === 1) {
        this.list2[index].parameterList.splice(index2, 1)
      } else {
        this.list3[index].parameterList.splice(index2, 1)
      }
    }
  }
}
</script>
<style lang="scss">
.el-dialog__header {
  text-align: left;
}

.dragGroup .el-collapse-item__header {
  background: #e9f6ff;
  height: 40px;
  line-height: 40px;
  margin-bottom: 10px;
}

.dragGroup.container {
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
        background: #f2f2f2;
        color: #606266;
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
        // 两列布局
        float: left;
        // display: inline-block;
        width: 35%;
        // width: 120px;
        box-sizing: border-box;

        // white-space: nowrap;
        // overflow: hidden;
        // text-overflow: ellipsis;
        .drag-item {
          text-overflow: ellipsis;
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
        }
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
        font-size: 16px;
        font-weight: 600;

        span {
          text-align: left;
          height: 40px;
          margin-left: 4px;
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
        line-height: 40px;
        width: 100%;
        text-align: left;
        color: #606266;
        font-size: 16px;
        font-weight: 600;

        span {
          text-align: left;
          height: 40px;
          margin-left: 4px;
          // font-size: 14px;
          // line-height: 40px;
        }

        .add-group {
          float: right;
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
      // cursor: pointer;
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
          font-size: 14px;
          font-weight: 600;
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

      .el-icon-close:hover {
        // border-radius: 50%;
        // transform: scale(1.2);
        // background-color: #f56c6c;
        // color: #fff;
      }
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
      color: #409eff;
      background: #c8ebfb;
      // width:100px;
    }

    // customieze group item
    .item-chosen {
      box-shadow: 6px 14px 42px 0 rgba(99, 117, 138, 0.23);
      transform: scale(1.2) rotate(3deg);
      transition: 0.5s all;
    }

    .sortable-fallback {
      background: #c8ebfb;
    }
  }
}
</style>
