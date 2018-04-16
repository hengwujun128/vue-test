<template>
    <div class="canban-container">
        <div class="drag-group">
            <div class="group1">
                <div class="group-header">
                 <h2>planning</h2> 
                  </div>
                <draggable v-model="list1" :options="dragOptions" @start="drag=true" @end="drag=false" :move="checkMove"  :component-data="getComponentData()">
                <!-- <transition-group> -->
                    <div v-for="element in list1" :key="element.title" class="drag-item">
                      
                        <div class="first">
                          <span class="title">
                            <span style="color:red;">{{element.name}}</span>{{element.description}}</span>
                          <span class="avator">
                            <!-- <img src="../../assets/logo.png"/> -->
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
                <draggable v-model="list2" :options="dragOptions" @start="drag=true" @end="drag=false">
                <!-- <transition-group> -->
                    <div v-for="element in list2" :key="element.title" class="drag-item">
                     <div class="first">
                          <span class="title">
                            <span style="color:red;">{{element.name}}</span>{{element.description}}</span>
                          <span class="avator">
                            <!-- <img src="../../assets/logo.png"/> -->
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
                 <h2>completed</h2>
                </div>
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
      editable: true,
      isDragging: false,
      delayedDragging: false,
      list1: [
        {
          name: "apple1",
          title: "apple1",
          description: "this is apple1 description"
        },
        {
          name: "banana1",
          title: "banana1",
          description: "this is banana1 description"
        },
        {
          name: "pinapple1",
          title: "pinapple1",
          description: "this is pinapple1 description"
        },
        {
          name: "odd1",
          title: "odd1",
          description: "this is odd1 description"
        },
        {
          name: "pair1",
          title: "pair1",
          description: "this is pair1 description"
        }
      ],
      list2: [
        {
          name: "apple2",
          title: "apple2",
          description: "this is apple2 description"
        },
        {
          name: "banana2",
          title: "banana2",
          description: "this is banana2 description"
        },
        {
          name: "pinapple2",
          title: "pinapple2",
          description: "this is pinapple2 description"
        },
        {
          name: "grape2",
          title: "grape2",
          description: "this is grape2 description"
        },
        {
          name: "strawberry2",
          title: "strawberry2",
          description: "this is strawberry2 description"
        }
      ],
      list3: [
        {
          name: "apple3",
          title: "apple3",
          description: "this is apple description"
        },
        {
          name: "banana3",
          title: "banana3",
          description: "this is banana description"
        },
        {
          name: "pinapple3",
          title: "pinapple3",
          description: "this is pinapple description"
        },
        {
          name: "grape3",
          title: "grape3",
          description: "this is grape description"
        },
        {
          name: "strawberry3",
          title: "strawberry3",
          description: "this is strawberry description"
        }
      ],
      options1: {
        group: "group1",
        pull: true,
        draggable: ".drag-item"
      },
      options2: {
        group: "group2",
        put: ["group1", "group3"]
      }
    };
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: !this.editable,
        ghostClass: "ghost"
      };
    }
  },
  watch: {
    isDragging(newValue) {
      if (newValue) {
        this.delayedDragging = true;
        return;
      }
      this.$nextTick(() => {
        this.delayedDragging = false;
      });
    }
  },
  methods: {
    handleChange() {
      console.log("changed");
      alert("changed");
    },
    inputChanged(value) {
      this.activeNames = value;
    },
    handleClick() {
      alert("click");
    },

    //This props is used to pass additional information to child component declared by element props
    /** 
    props: props to be passed to the child component
    on:   events to be subscribe in the child component
    */

    getComponentData() {
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
    addItem() {
      alert(123);
    },
    // evt object has same property as Sortable onMove event, and 3 additional properties:
    //evt.relatedContext,evt.draggedContext
    checkMove({ relatedContext, draggedContext }) {
      //
      //  return (evt.draggedContext.element.name!=='apple');
      // alert(draggedContext.element.name);
      return true;
    }
  }
};
</script>

<style lang="scss">
.canban-container {
  position: relative;
  height: 100%;
  // height: calc(100% - 200px);
  box-sizing: border-box;
  padding: 20px 10px;
  .drag-group {
    display: flex;
    height: 100%;
    // align-items: center;
    .group1,
    .group2,
    .group3 {
      flex: 1;
      margin-right: 20px;
      background-color: #eeeeee;
      border-radius: 4px;
      overflow: auto;
      .drag-item {
        margin: 10px 10px;
        padding: 10px;
        border-left: 4px solid orange;
        border-radius: 4px;
        background: #ffffff;
        cursor: pointer;
        font-size: 14px;
        min-height: 40px;
        line-height: 1.2;
        text-align: left;
        .first {
          display: flex;
          align-items: center;
          .title {
            flex: 1;
            font-size: 16px;
            font-weight: 700;
          }
          .avator {
            display: inline-block;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: #dddddd;
            // 和左边文字垂直对其
            // vertical-align: middle;
            img {
              max-width: 80%;
              border-radius: 50%;
            }
          }
        }
        .second {
          padding: 6px 0px;
          line-height: 2;
          display: flex;
          // justify-content: center;
          text-align: center;
          // align-items: center;
          span {
            display: inline-block;
            padding: 0px 10px;
            border-radius: 4px;
            // flex: 1;
          }
          span:nth-child(1) {
            background: #e1e1e1;
            margin-right: 10px;
          }
          span:nth-child(2) {
            background: #3da8f5;
            color: #ffffff;
          }
        }
        .third {
          padding: 6px 0px;
          line-height: 2;
          display: flex;
          text-align: center;
          // align-items: center;
          span {
            display: inline-block;
            padding: 0px 10px;
            border-radius: 4px;
            color: #b0b0b0;
            // flex: 1;
            i {
              background: #3da8f5;
              display: inline-block;
              width: 10px;
              height: 10px;
              border-radius: 50%;
              margin-right: 6px;
            }
          }
        }
      }
      .group-header {
        margin: 10px;
      }
    }
  }
}
</style>

