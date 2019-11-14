<template>
  <div class="container">
    <div class="left">
      <section>
        <ul>
          <li class="wrapper" v-for="(item, index) in list" :key="index">
            <div class="group-header" @click="toogle(index)">
              <span class="title">{{item.title}}</span>
            </div>
            <draggable :list="list[index].children" :options="{group:{name:'test',pull:'clone',put:false}, draggable: '.draggable'}" :class="{'dragable-container':true,isCollapse:item['isCollapse']}">
              <div v-for="item2 in list[index].children" class="item-wrapper draggable" :key="`dropitem-${item2.key}`">
                <div class="drag-item">{{item2.value}}</div>
              </div>
            </draggable>

          </li>
        </ul>
        <!-- <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item v-for="(item, index) in list" :key="index" :title="item.title" :name="index">
            <draggable :list="list[index].children" :options="{group:{name:'test',pull:'clone',put:false}, draggable: '.draggable'}" :class="{'dragable-container':true,isCollapse:item['isCollapse']}">
              <div v-for="item2 in list[index].children" class="item-wrapper draggable" :key="`dropitem-${item2.key}`">
                <div class="drag-item">{{item2.value}}</div>
              </div>
            </draggable>
          </el-collapse-item>
        </el-collapse> -->
      </section>
    </div>

    <div class="right">
      <div class="input">
        <div class="input-header"></div>
        <div class="input-body">
          <draggable v-model="inputData" :options="inputOptions" style="height:100%;" @start="drag=true" @end="drag=false" @update="myUpdate">
            <div v-for="(element, index) in inputData" :key="index" class="target-item draggable">
              <div class="drag-item">{{element.value}}<i class="el-icon-close close" @click="remove(index,1)"></i></div>
            </div>
          </draggable>
        </div>

      </div>

      <div class="output">
        <div class="output-header"></div>
        <div class="output-body">
          <draggable v-model="outputData" :options="{group:{name:'test2',put:['test']},draggable: '.draggable'}" style="height:100%;" @start="drag=true" @end="drag=false" @update="myUpdate">
            <div v-for="(element, index) in outputData" :key="index" class="target-item draggable">
              <div class="drag-item">{{element.value}} <i class="el-icon-close close" @click="remove(index,2)"></i></div>
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
        ghostClass: 'ghost'
      }
    }
  },
  data () {
    return {
      activeNames: 1,
      list: [
        {
          title: 'first group',
          isCollapse: true,
          description: 'hello first',
          children: [
            { key: 'key1', value: 'value1' },
            { key: 'key2', value: 'value2' },
            { key: 'key3', value: 'value3' },
            { key: 'key4', value: 'value4' }
          ]
        },
        {
          title: 'second group',
          isCollapse: false,
          description: 'hello second',
          children: [
            { key: 'key12', value: 'value12' },
            { key: 'key22', value: 'value22' },
            { key: 'key32', value: 'value32' },
            { key: 'key42', value: 'value42' }
          ]
        },
        {
          title: 'third group',
          isCollapse: false,
          description: 'hello third',
          children: [
            { key: 'key13', value: 'value13' },
            { key: 'key23', value: 'value23' },
            { key: 'key33', value: 'value33' },
            { key: 'key43', value: 'value43' }
          ]
        }
        // {
        //   title: 'fourth group',
        //   name: 'fourth',
        //   description: 'hello fourth',
        //   children: [
        //     { key: 'key14', value: 'value14' },
        //     { key: 'key24', value: 'value24' },
        //     { key: 'key34', value: 'value34' },
        //     { key: 'key44', value: 'value44' }
        //   ]
        // }
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

    myUpdate () {
      console.log(this.inputData)
      // debugger
    },
    remove: function (index, tag) {
      if (tag == 1) {
        this.inputData.splice(index, 1)
      } else {
        this.outputData.splice(index, 1)
      }
    }
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
      overflow-y: auto;
      ul {
        list-style: none;
        margin: 0px;
        padding: 0px;
        .wrapper {
          margin: 10px;
          background: #e66c3cab;
          border-radius: 6px;
          .group-header {
            padding-top: 10px;
            padding-left: 10px;
            text-align: left;
            background: #e6c33c9e;
            height: 30px;
            cursor: pointer;
            .title {
              font-size: 16px;
              font-weight: 600;
              line-height: 1.2;
              color: #fff;
            }
          }
          .dragable-container {
            box-sizing: border-box;
            overflow: hidden;
            // margin: 10px 0;
            padding: 10px;
            height: 0px;
            // transition: all 1s linear;
            // transition: visibility 0s linear 0.33s, opacity 0.33s linear;
            .item-wrapper {
              // background: #dddddd;
              background: #ffffff;
              position: relative;
              margin: 10px 10px;
              padding: 10px;
              border-radius: 4px;
              -webkit-transition: 0.3s all;
              transition: 0.3s all;
              cursor: pointer;
              font-size: 14px;
              line-height: 1.2;
              text-align: left;
            }
          }
          .isCollapse {
            height: 100%;
            // visibility: visible;
            // opacity: 1;
          }
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
      background: #eee;
      box-sizing: border-box;
      padding: 10px;
    }
    .input {
      // margin-bottom: 40px;
      .input-header {
        height: 40px;
        width: 100%;
      }
      .input-body {
        height: calc(100% - 40px);
        // padding: 20px;
        box-sizing: border-box;
        border: 2px dashed #e66c3cab;
        overflow: auto;
      }
    }
    .output {
      .output-header {
        height: 40px;
        width: 100%;
      }
      .output-body {
        height: calc(100% - 40px);
        // padding: 20px;
        box-sizing: border-box;
        border: 2px dashed #e66c3cab;
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
