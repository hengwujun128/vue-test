<template>
  <div class="tree-menu">
    <div :style="indent" @click="toogleChildren">{{label}}</div>
    <!--If `nodes` is undefined this will not render-->
    <tree-menu v-if="showChildren" v-for="node in nodes" :key="node.label" :label="node.label" :nodes="node.nodes" :depth="depth+1"></tree-menu>
  </div>
</template>
<script>
/**
 *
 * If you’re using a component recursively you must either register it globally with Vue.component,
 * or, give it a name property. Otherwise, any children of the component will not be able to resolve further invocations
 *  and you'll get an undefined component error.
 *
 */
export default {
  name: 'tree-menu',
  // recursive component
  props: ['label', 'nodes', 'depth'],
  data () {
    return {
      showChildren: false
    }
  },
  computed: {
    // style can be use computed property return an object
    indent () {
      return { transform: `translate(${this.depth * 20}px)` }
    }
  },
  methods: {
    toogleChildren () {
      this.showChildren = !this.showChildren
    }
  }
}
</script>
<style lang="scss" scoped>
.tree-menu {
  width: 100%;
  box-sizing: border-box;
}
</style>
