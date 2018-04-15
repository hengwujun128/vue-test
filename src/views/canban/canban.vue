<template>
    <div class="canban-container">
        <h2>this is canban</h2>
        <!-- group1 -->
        <!-- <draggable element="el-collapse" :list="list1" :component-data="getComponentData()">
            <el-collapse-item v-for="e in list1" :title="e.title" :name="e.name" :key="e.name">
                <div>{{e.description}}</div>
            </el-collapse-item>
        </draggable> -->
        <div class="drag-group">
            <div class="group1">
                <draggable v-model="list1" :options="{group:'group1',draggable:'.drag-item'}" @start="drag=true" @end="drag=false">
                <!-- <transition-group> -->
                    <div v-for="element in list1" :key="element.title" class="drag-item">
                        {{element.name}}
                    </div>
                <!-- </transition-group> -->
            </draggable>
            </div>
            
            <div class="group2">
                <draggable v-model="list2" :options="{group:'group2',put:'group1',draggable:'.drag-item'}" @start="drag=true" @end="drag=false">
                <!-- <transition-group> -->
                    <div v-for="element in list2" :key="element.title" class="drag-item">
                        {{element.name}}
                    </div>
                <!-- </transition-group> -->
            </draggable>
            </div>
            <div class="group3">
                 <draggable v-model="list3" :options="{group:'group3',draggable:'.drag-item'}" @start="drag=true" @end="drag=false">
                <!-- <transition-group> -->
                    <div v-for="element in list3" :key="element.title" class="drag-item">
                        {{element.name}}
                    </div>
                <!-- </transition-group> -->
            </draggable>
            </div>
        </div>
    </div>
    
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "canban",
  components: {
    draggable
  },
  data: function() {
    return {
      list1: [
        {
          name: "apple1",
          title: "apple",
          description: "this is apple description"
        },
        {
          name: "banana1",
          title: "banana",
          description: "this is banana description"
        },
        {
          name: "pinapple1",
          title: "pinapple",
          description: "this is pinapple description"
        },
        {
          name: "grape1",
          title: "grape",
          description: "this is grape description"
        },
        {
          name: "strawberry1",
          title: "strawberry",
          description: "this is strawberry description"
        },
        { name: "odd1", title: "odd1", description: "this is odd description" },
        {
          name: "pair1",
          title: "pair1",
          description: "this is pair description"
        }
      ],
      list2: [
        {
          name: "apple",
          title: "apple",
          description: "this is apple description"
        },
        {
          name: "banana",
          title: "banana",
          description: "this is banana description"
        },
        {
          name: "pinapple",
          title: "pinapple",
          description: "this is pinapple description"
        },
        {
          name: "grape",
          title: "grape",
          description: "this is grape description"
        },
        {
          name: "strawberry",
          title: "strawberry",
          description: "this is strawberry description"
        },
        { name: "odd", title: "odd", description: "this is odd description" },
        { name: "pair", title: "pair", description: "this is pair description" }
      ],
      list3: [
        {
          name: "apple",
          title: "apple",
          description: "this is apple description"
        },
        {
          name: "banana",
          title: "banana",
          description: "this is banana description"
        },
        {
          name: "pinapple",
          title: "pinapple",
          description: "this is pinapple description"
        },
        {
          name: "grape",
          title: "grape",
          description: "this is grape description"
        },
        {
          name: "strawberry",
          title: "strawberry",
          description: "this is strawberry description"
        },
        { name: "odd", title: "odd", description: "this is odd description" },
        { name: "pair", title: "pair", description: "this is pair description" }
      ],
      options1: {}
    };
  },
  computed: {},
  methods: {
    handleChange() {
      console.log("changed");
    },
    inputChanged(value) {
      this.activeNames = value;
    },
    getComponentData() {
      return {
        on: {
          change: this.handleChange,
          input: this.inputChanged
        },
        props: {
          value: this.activeNames
        }
      };
    }
  }
};
</script>

<style lang="scss">
.canban-container {
  .drag-group {
    display: flex;
    align-items: center;
    .group1,
    .group2,
    .group3 {
      flex: 1;
      margin-right: 20px;
      .drag-item {
        margin-top: 8px;
        background: #ddd;
        cursor: pointer;
        font-size: 24px;
        height: 40px;
        line-height: 40px;
      }
    }
  }
}
</style>

