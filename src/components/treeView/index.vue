<template>
  <div>
    <h2>hello this is TreeView</h2>
    <div class="treeWrapper">
      <!-- tree1 -->

      <Tree
        :value="treeData"
        class="treeItem">
        <!-- defalut slot -->
        <div slot-scope="{ node, index, path, tree }">
          <input
            :checked="node.$checked"
            type="checkbox"
            @change="tree.toggleCheck(node, path)"
          >
          <span>{{ index }}</span>
          <span>title:{{ node.text }}</span>
          <span>path:{{ path.join(',') }}</span>
        </div>
      </Tree>
      <!-- tree2 -->
      <Tree
        :value="treeData2"
        class="treeItem">
        <!-- defalut slot -->
        <div slot-scope="{ node, index, path, tree }">
          <b>{{ index }}</b>
          <span>title:{{ node.title }}</span>
          <span>path:{{ path.join(',') }}</span>
        </div>
      </Tree>
    </div>
  </div>
</template>

<script>
import {
  Tree, // 基础树
  Fold, //  插件: 折叠
  Check, // 插件:勾选框
  Draggable, // 插件:拖拽
  cloneTreeData,
  walkTreeData,
  getPureTreeData // 方法
} from 'he-tree-vue'
import 'he-tree-vue/dist/he-tree-vue.css' // 基础样式
export default {
  components: { Tree: Tree.mixPlugins([Fold, Check, Draggable]) },
  data () {
    return {
      treeData: [
        { text: 'node 1' },
        { text: 'node 2', children: [{ text: 'node 2-1' }] }
      ],
      treeData2: [
        { title: 'node one' },
        { title: 'node two', children: [{ title: 'node two-one' }] }
      ]
    }
  },
  methods: {
    name () {}
  }
}
</script>

<style lang="scss" scoped>
.treeWrapper {
  margin: 0 auto;
  // width: 100vw;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .treeItem {
    flex: 1;
  }
}
</style>
