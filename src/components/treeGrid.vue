<template>
  <el-table
    :data="data"
    border
    style="width: 100%"
    :row-style="showTr">
    <!-- 对每列数据都要进行迭代,并为每一列添加template, 借鉴一下 -->
    <el-table-column v-for="(column, index) in columns" :key="column.dataIndex"
      :label="column.text">
      <!-- 每一列都有 template 的 slot 插槽-->
      <template slot-scope="scope">
        <!-- 每行的标注,根据 scope.row._level 添加层级,就是 span 元素 -->
        <span v-if="spaceIconShow(index)" v-for="(space, levelIndex) in scope.row._level" :key="levelIndex" class="ms-tree-space"></span>

        <button class="button is-outlined is-primary is-small" v-if="toggleIconShow(index,scope.row)" @click="toggle(scope.$index)">
          <i v-if="!scope.row._expanded" class="el-icon-caret-right" aria-hidden="true"></i>
          <i v-if="scope.row._expanded" class="el-icon-caret-bottom" aria-hidden="true"></i>
        </button>
        <!-- 如果没有子集就空格,确保和有子集的第一列保持一致, 和 spaceIconShow 互斥-->
        <span v-else-if="index===0" class="ms-tree-space"></span>

        <!-- 每一列具体数据 -->
        {{scope.row[column.dataIndex]}}
      </template>
    </el-table-column>

    <el-table-column label="操作" v-if="treeType === 'normal'" min-width="260">
      <template slot-scope="scope">
        <button type="button" class="el-button el-button--default el-button--small">
          <router-link
            :to="{ path: requestUrl + 'edit', query: {id: scope.row.Oid} }"
            tag="span">
            编辑
          </router-link>
        </button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete()">
          删除
        </el-button>
        <button type="button" class="el-button el-button--success el-button--small">
          <router-link :to="{ path: requestUrl, query: {parentId: scope.row.parentOId} }"
                       tag="span">
            添加下级树结构
          </router-link>
        </button>
      </template>
    </el-table-column>

  </el-table>
</template>
<script>
  import Utils from '../assets/js'
//  import Vue from 'vue'
  export default {
    name: 'tree-grid',
    // props: ['treeStructure','columns','dataSource','requestUrl','treeType','defaultExpandAll'],
    props: 
    
    {
// 该属性是确认父组件传过来的数据是否已经是树形结构了，如果是，则不需要进行树形格式化
      treeStructure: {
        type: Boolean,
        default: function () {
          return false
        }
      },
// 这是相应的字段展示
      columns: {
        type: Array,
        default: function () {
          return []
        }
      },
// 这是数据源
      dataSource: {
        type: Array,
        default: function () {
          return []
        }
      },
// 这个作用是根据自己需求来的，比如在操作中涉及相关按钮编辑，删除等，需要向服务端发送请求，则可以把url传过来
      requestUrl: {
        type: String,
        default: function () {
          return ''
        }
      },
// 这个是是否展示操作列
      treeType: {
        type: String,
        default: function () {
          return 'normal'
        }
      },
// 是否默认展开所有树
      defaultExpandAll: {
        type: Boolean,
        default: function () {
          return false
        }
      }
    },
    data () {
      return {}
    },
    computed: {
    // 格式化数据源
      data: function () {
        let me = this
        // 根据父组件传递的 property treeStructure ,类型为 true/false,进行数据转换
        if (me.treeStructure) {
          // 转换数据结构     data parent level expand
          let data = Utils.MSDataTransfer.treeToArray(me.dataSource, null, null, me.defaultExpandAll)
          console.log(data)
          return data
        }
        return me.dataSource
      }
    },
    methods: {
    // 显示行
      showTr: function ({row, index}) {
        let obj = {row, index}
        let show = (obj.row._parent ? (obj.row._parent._expanded && obj.row._parent._show) : true)
        obj.row._show = show
        return show ? '' : 'display:none;'
      },
    // 展开下级
      toggle: function (trIndex) {
        let me = this
        let record = me.data[trIndex]
        record._expanded = !record._expanded
      },
    // 显示层级关系的空格和图标
    //  index 表示第几列的索引
      spaceIconShow (index) {
        let me = this
        // 只有第一列才显示 span ,表示层级
        if (me.treeStructure && index === 0) {
          return true
        }
        return false
      },
    // 点击展开和关闭的时候，图标的切换
      toggleIconShow (index, record) {
        let me = this
        if (me.treeStructure && index === 0 && record.children && record.children.length > 0) {
          return true
        }
        return false
      },
      handleDelete () {
        this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    }
  }
</script>
<style>
  .ms-tree-space{position: relative;
    top: 1px;
    display: inline-block;
    font-family: 'Glyphicons Halflings';
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    width: 36px;
    height: 14px;
    background: red;
    }
  .ms-tree-space::before{content: ""}
  table td{
    line-height: 26px;
  }
</style>
