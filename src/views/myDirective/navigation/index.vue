<template>
  <div class="navigation-container">
    <tree-menu :label="treeData.label" :nodes="treeData.nodes" :depth="0"></tree-menu>
    <!--  -->
    <div></div>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>

  </div>
</template>
<script>
/**
 *
 * 1.If you’re using a component recursively you must either register it globally with Vue.component,
 * or, give it a name property. Otherwise, any children of the component will not be able to resolve further invocations
 *  and you'll get an undefined component error.
 *
 */
// 2.Remember that our data structure has a single root node. To begin the recursion we invoke the TreeMenu component in our main template, using the root nodesproperties for the props:

import TreeMenu from './tree-menu.vue'
export default {
  components: { TreeMenu },
  data () {
    return {
      // it must have a single root node but can be infinitely deep.
      treeData: {
        label: 'root',
        nodes: [
          {
            label: 'item1',
            nodes: [
              {
                label: 'item1.1'
              },
              {
                label: 'item1.2',
                nodes: [
                  {
                    label: 'item1.2.1'
                  }
                ]
              }
            ]
          },
          {
            label: 'item2'
          }
        ]
      },
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
    }
  }
}
</script>
<style lang="scss" scoped>
.navigation-container {
  width: 100%;
  height: 100vh;
  padding: 10px;
  text-align: left;
  box-sizing: border-box;
}
</style>
