<template>
  <div class="project-select" :class="{'disabled':disabled,'border-blue':isshow}" @click.stop>
    <!-- 模拟select -->
    <div class="content" @click="pop">
      <!-- 用一个变量valueShow控制value显示 -->
      <div
        class="content-value"
        v-if="valueShow"
        :class="{'disabledcolor':disabled}"
        :title="valueShow"
      >
        {{ valueShow
        }}
      </div>
      <!-- 用一个变量valueShow控制placeholder的显示 -->
      <div
        class="content-placeholder"
        v-if="!valueShow"
        :class="{'disabledcolor':disabled}"
      >{{placeholder}}</div>
      <!-- border 样式，下拉显示和 这个图标显示用同一个变量 -->
      <i class="icon" :class="[isshow ?'el-icon-arrow-up':'el-icon-arrow-down']"></i>
    </div>

    <el-collapse-transition>
      <div class="pop" v-if="isshow">
        <div class="triangle"></div>
        <div class="error" v-if="!options.length">
          <span>暂无数据</span>
        </div>
        <div class="projectlist-warp" v-if="options.length">
          <div class="select">
            <div class="projectlist">
              <el-checkbox
                :indeterminate="isIndeterminate"
                v-model="checkAll"
                @change="handleCheckAllChange"
              >全选</el-checkbox>
            </div>
            <el-checkbox-group v-model="checkedArray" @change="handleCheckedItemsChange">
              <div class="projectlist" v-for="item in options" :key="item.id">
                <el-checkbox :label="item.id" :key="item.id">{{item.name}}</el-checkbox>
              </div>
            </el-checkbox-group>
          </div>
          <div class="project-submit">
            <el-button class="btn-ok" @click.stop="save">
              <span>确定</span>
            </el-button>
            <el-button @click.stop="cancel">
              <span>取消</span>
            </el-button>
          </div>
        </div>
      </div>
    </el-collapse-transition>
  </div>
</template>
<script>
// import bus from '@/components/x_subassembly/bus.js'
export default {
  name: 'selectMore',
  props: {
    options: {
      type: Array,
      default: function() {
        return []
      }
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    initData: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      isshow: false, // 用一个变量控制 input border样式,和下拉内容;border 样式改变，下拉内容显示
      value: [], //修改的地方,单选可能变成全选
      checkAll: false,
      valueShow: '',
      flag: true,
      checkedArray: this.initData,
      message: '没有相关数据',
      isIndeterminate: false
    }
  },
  mounted() {
    this.init()
    // bus.$on('restSelectMore', result => {
    //   setTimeout(() => {
    //     this.checkedArray = result
    //     this.init()
    //   }, 0)
    // })
  },
  methods: {
    init() {
      if (
        this.options.length &&
        this.options.length == this.checkedArray.length
      ) {
        this.checkAll = true
        this.valueShow = '全部'
        return
      }
      let result = []
      this.options.forEach(item => {
        if (item.bol) {
          this.checkedArray.push(item.id)
        }
      })
      let checkedCount = this.checkedArray.length
      //console.log(this.options)
      this.checkAll =
        checkedCount === this.options.length && this.options.length > 0
      if (this.checkAll) {
        this.valueShow = '全部'
      }
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.options.length
      this.options.forEach(item => {
        if (this.checkedArray.includes(item.id)) {
          result.push(item.name)
        }
      })
      this.valueShow = result.join(',')
    },
    //显示和隐藏搜索框
    pop() {
      this.isshow = !this.isshow
      if (this.isshow) {
        window.addEventListener('click', this.colse)
        /*window.addEventListener('click', function(e){
          })*/
      }
    },
    colse() {
      this.isshow = false
      this.checkedArray = this.value
      this.handleCheckedItemsChange(this.checkedArray)
      window.removeEventListener('click', this.colse)
    },
    handleCheckAllChange(val) {
      if (val) {
        let result = []
        this.options.forEach(item => {
          result.push(item.id)
        })
        this.checkedArray = result
      } else {
        this.checkedArray = []
      }
      this.isIndeterminate = false
    },
    handleCheckedItemsChange(value) {
      // this.$emit('getChild', this.getChild)
      // console.log(value);
      let checkedCount = value.length
      this.checkAll =
        checkedCount === this.options.length && this.options.length > 0
      if (this.checkAll) {
        this.valueShow = '全部'
      }
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.options.length
    },
    save() {
      var resultData = []
      this.valueShow = ''
      this.value = []
      if (this.checkAll) {
        this.valueShow = '全部'
        let all = []
        this.options.forEach(item => {
          all.push(item.id)
        })
        this.value = all
        resultData = Object.assign([], this.options)
      } else {
        let result = []
        this.options.forEach(item => {
          if (this.checkedArray.includes(item.id)) {
            result.push(item.name)
            resultData.push(item)
          }
        })
        this.value = this.checkedArray
        this.valueShow = result.join(',')
      }
      this.$emit('changeSelect', resultData)
      this.isshow = false
    },
    cancel() {
      this.colse()
    },
    checkedArrayChange(initSelectedItems) {
      let result = []
      this.value.length = 0
      this.checkedArray.length = 0
      this.valueShow = ''
      for (let i = 0; i < initSelectedItems.length; i++) {
        this.checkedArray.push(initSelectedItems[i].id)
        result.push(initSelectedItems[i].name)
      }
      this.valueShow = result.join(',')
    }
  },
  watch: {
    options() {
      //console.log(this.options);
    }
    // isshow(val) {
    //   // 失焦保存
    //   if (!val) {
    //     this.save()
    //   }
    // }
  }
}
</script>
<style lang="scss" scoped>
.project-select {
  width: 300px;
  height: 28px;
  line-height: 28px;
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 2px 10px;
  background-color: #fff;
  cursor: pointer;
  vertical-align: middle;
  .content {
    height: 22px;
    line-height: 22px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .content-value {
      width: calc(100% - 28px);
      display: inline-block;
      font-size: 12px;
      color: #606266;
      padding-left: 6px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .content-placeholder {
      width: calc(100% - 28px);
      display: inline-block;
      font-size: 12px;
      color: #c0c4cc;
      padding-left: 6px;
      overflow: hidden;
      white-space: nowrap;
    }
    .icon {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.5);
      line-height: 25px;
      width: 28px;
      padding-right: 8px;
      text-align: right;
    }
  }
}

.pop {
  position: absolute;
  top: 32px;
  left: 0;
  background-color: #fff;
  min-width: 100%;
  z-index: 999;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 6px 0;
  .triangle {
    position: absolute;
    width: 8px;
    height: 8px;
    border-left: 1px solid #e4e7ed;
    border-top: 1px solid #e4e7ed;
    transform: rotate(45deg);
    top: -5px;
    left: 32px;
    z-index: 9999;
    background: #fff;
    overflow: hidden;
    .error {
      line-height: 50px;
      text-align: center;
    }
  }
  .projectlist-warp {
    /* width: 100%; */

    /* overflow-x: hidden */
    .select {
      max-height: 400px;
      overflow-y: scroll;
      .projectlist {
        padding: 4px 0px 4px 14px;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.6);
        white-space: nowrap;
        // height: 30px;
        .el-checkbox {
          display: block;
          width: 100%;
        }
        &:hover {
          background-color: #f5f7fa;
        }
      }
    }
  }

  .projectlist-warp::-webkit-scrollbar {
    width: 4px;
  }
}

.search {
  margin: 5px 5px;
  height: 30px;
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.search-icon {
  font-size: 14px;
  font-weight: 700;
  width: 24px;
  text-align: center;
  color: #9a9a9a;
}

.search-input {
  outline: none;
  color: #000;
  width: 80%;
  user-select: none;
}

.search-input::-webkit-input-placeholder {
  color: #9a9a9a;
  font-size: 10px;
}

.error span {
  font-size: 12px;
}

.project-submit {
  text-align: center;
}

.project-submit .el-button {
  padding: 4px 12px;
}

.project-submit .btn-ok {
  background: #409eff;
  border: 1px solid #409eff;
}

.project-submit .btn-ok span {
  color: #ffffff;
}

.disabled {
  background-color: #f5f7fa;
  cursor: not-allowed;
  border: 1px solid #e4e7ed !important;
}

.border-blue {
  border: 1px solid #409eff !important;
}

.disabledcolor {
  color: rgba(0, 0, 0, 0.35);
}

.col {
  color: #c0c4cc;
}
</style>