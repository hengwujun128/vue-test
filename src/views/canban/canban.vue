<template>
  <div class="canban-container">
    <div class="drag-group">
      <div class="group1">
        <div class="group-header">
          <h2>planning</h2>
        </div>
        <draggable v-model="list1" :options="dragOptions" @start="isDragging=true" @end="isDragging=false" :move="checkMove" :component-data="getComponentData()" @change="group1Change" class="item-container">
          <!-- <transition-group> -->
          <div v-for="element in list1" :key="element.title" class="drag-item" :class="[element.draggable?'draggable':'no-draggable']">

            <div class="first">
              <span class="title">
                <span style="color:red;">{{element.name}}</span>{{element.description}}</span>
              <span class="avator">
                <img src="../../assets/header_user.png"/>
                          </span>
            </div>
            <div class="second">
              <span>6月30日截止</span>
              <span>每月重复</span>
            </div>
            <div class="third">
              <span><i></i>自动部署</span>
              <span><i></i>技能提升</span>
            </div>
          </div>
          <!-- </transition-group> -->
          <el-button slot="footer" @click="addItem" type="primary">添加任务</el-button>
        </draggable>
      </div>

      <div class="group2">
        <div class="group-header">
          <h2>working on</h2>
        </div>
        <draggable v-model="list2" :options="dragOptions" @start="drag=true" @end="drag=false" class="item-container">
          <!-- <transition-group> -->
          <div v-for="element in list2" :key="element.title" class="drag-item" :class="[element.draggable?'draggable':'no-draggable']">
            <div class="first">
              <span class="title">
                <span style="color:red;">{{element.name}}</span>{{element.description}}</span>
              <span class="avator">
                <img src="../../assets/header_user.png"/>
                          </span>
            </div>
            <div class="second">
              <span>6月30日截止</span>
              <span>每月重复</span>
            </div>
            <div class="third">
              <span><i></i>自动部署</span>
              <span><i></i>技能提升</span>
            </div>
          </div>
          <!-- </transition-group> -->
        </draggable>
      </div>
      <div class="group3">
        <div class="group-header">
          <h2>complete</h2>
        </div>
        <draggable v-model="list3" :options="dragOptions" @start="drag=true" @end="drag=false" class="item-container">
          <!-- <transition-group> -->
          <div v-for="element in list3" :key="element.title" class="drag-item" :class="[element.draggable?'draggable':'no-draggable']">
            <div class="first">
              <span class="title">
                <span style="color:red;">{{element.name}}</span>{{element.description}}</span>
              <span class="avator">
                <img src="../../assets/header_user.png"/>
                          </span>
            </div>
            <div class="second">
              <span>6月30日截止</span>
              <span>每月重复</span>
            </div>
            <div class="third">
              <span><i></i>自动部署</span>
              <span><i></i>技能提升</span>
            </div>
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
  data: function () {
    return {
      editable: true,
      isDragging: false,
      delayedDragging: false,
      list1: [
        {
          name: "apple1",
          title: "apple1",
          draggable: true,
          description: "this is apple1 description"
        },
        {
          name: "banana1",
          title: "banana1",
          draggable: true,
          description: "this is banana1 description"
        },
        {
          name: "pinapple1",
          draggable: true,
          title: "pinapple1",
          description: "this is pinapple1 description"
        },
        {
          draggable: true,
          name: "odd1",
          title: "odd1",
          description: "this is odd1 description"
        },
        {
          draggable: true,
          name: "pair1",
          title: "pair1",
          description: "this is pair1 description"
        }
      ],
      list2: [
        {
          draggable: true,
          name: "apple2",
          title: "apple2",
          description: "this is apple2 description"
        },
        {
          draggable: true,
          name: "banana2",
          title: "banana2",
          description: "this is banana2 description"
        },
        {
          draggable: true,
          name: "pinapple2",
          title: "pinapple2",
          description: "this is pinapple2 description"
        },
        {
          draggable: true,
          name: "grape2",
          title: "grape2",
          description: "this is grape2 description"
        },
        {
          draggable: true,
          name: "strawberry2",
          title: "strawberry2",
          description: "this is strawberry2 description"
        }
      ],
      list3: [],
      count: 0
    };
  },
  computed: {
    dragOptions () {
      return {
        animation: 0,
        group: "description",
        disabled: !this.editable, // disable the sortable if set true
        ghostClass: "ghost",
        draggable: ".draggable", // Specifies which items inside the element should be draggable
        chosenClass: "sortable-chosen", // Class name for the chosen item
        ghostClass: "sortable-ghost" // Class name for the drop placeholder
        // handle: ".my-handle" //
      };
    }
  },
  watch: {
    isDragging (newValue) {
      if (newValue) {
        this.delayedDragging = true;
        return;
      }
      //
      this.$nextTick(() => {
        this.delayedDragging = false;
      });
    }
  },
  methods: {
    handleChange () {
      console.log("changed");
      // alert("changed");
    },
    inputChanged (value) {
      this.activeNames = value;
    },
    // add event handler to  child
    handleClick () {
      // alert("click");
    },

    //This props is used to pass additional information to child component declared by element props
    /** 
    props: props to be passed to the child component
    on:   events to be subscribe in the child component
    */

    getComponentData () {
      return {
        on: {
          change: this.handleChange,
          input: this.inputChanged,
          click: this.handleClick
        },
        props: {
          value: this.activeNames
        }
      };
    },
    addItem () {
      // let index = this.count++;
      // let item = {
      //   draggable: true,
      //   name: "新增item" + index,
      //   title: "新增item" + index,
      //   description: "hello,这是新增的item" + index
      // };
      // this.list1.push(item);
    },
    // evt object has same property as Sortable onMove event, and 3 additional properties:
    //evt.relatedContext,evt.draggedContext
    checkMove ({ relatedContext, draggedContext }) {
      //
      //  return (evt.draggedContext.element.name!=='apple');
      // alert(draggedContext.element.description);
      return true;
    },
    // can watch any changes for an group
    group1Change ({ added, removed, moved }) {
      // console.log(added.element.name);
      // console.log(removed.element.name);
      // console.log(moved.element.name);
    }
  }
};
</script>

<style lang="scss">
@import "./canban.scss";
</style>

