<template>
  <div class="drag-container">
   <div class="section1">
      <div class="group1">
      <draggable element="el-collapse" :list="list" :component-data="getComponentData()">
        <el-collapse-item v-for="e in list" :title="e.title" :name="e.name" :key="e.name">
          <div>
             <draggable v-model="e.children" :options="{group:{name:'test',pull:'clone',put:false}}" :clone="cloneHandler" style="height:100%;"  @start="drag=true" @end="drag=false">
            <transition-group>
              <div v-for="element in e.children" :key="element.key" class="item-wrapper">
                <!-- <div class="drag-item">{{element.value}}</div> -->
                {{element.value}}
              </div>
            </transition-group>
          </draggable>
          </div>

        </el-collapse-item>
      </draggable>
      <!-- <draggable :list="group1Data" :options="{group:{name:'test',put:false,pull:'clone'}}" style="height:100%;" @start="drag=true" @end="drag=false">
        <div v-for="(element, index) in group1Data" :key="index" class="item-wrapper">
          <div class="drag-item">{{element.value}}</div>
        </div>
      </draggable> -->
    </div>
    <div class="group2">
      <!-- <draggable element="el-collapse" :list="list" :component-data="getComponentData()">
        <el-collapse-item v-for="e in list" :title="e.title" :name="e.name" :key="e.name">
          <div>{{e.description}}</div>
        </el-collapse-item>
      </draggable> -->
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item v-for="item in list" :key="item.name" :title="item.title" :name="item.name">
          <draggable :list=item.children :options="{group:{name:'test',pull:'clone',put:false}}" :clone="cloneHandler" style="height:100%;">
            <transition-group>
              <div v-for="element in item.children" :key="element.key" class="item-wrapper">
                <!-- <div class="drag-item">{{element.value}}</div> -->
                {{element.value}}
              </div>
            </transition-group>
          </draggable>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="group3">
      <div class="input-container">
        <draggable :list="inputData" :options="{group:{name:'test1',put:['test']}}" style="height:100%;" @start="drag=true" @end="drag=false">
          <div v-for="(element, index) in inputData" :key="index" class="item-wrapper">
            <div class="drag-item">{{element.value}}</div>
          </div>
        </draggable>
      </div>
    </div>
    <div class="group4"></div>
   </div>
   <div class="section2">
     <div class="group1">
       <div class="output-container">
          <draggable v-for="(item, index) in list" :key="index" :options="{group:{name:'test',pull:'clone',put:false}, draggable: '.draggable'}" class="dragable-container">
            <div class="title">{{item.title}}</div>
          <div v-for="item2 in list[index].children" class="item-wrapper draggable" :key="`dropitem-${item2.key}`">
             <div class="drag-item">{{item2.value}}</div>
         </div>
        </draggable>
       </div>
       

       <!-- <div v-for="item in list" :key="item.name">
         <button class="accordion">{{item.title}}</button>
         <div>
            <draggable :list=item.children :options="{group:{name:'test',pull:'clone',put:false}}" :clone="cloneHandler" style="height:100%;">
            <transition-group>
              <div v-for="element in item.children" :key="element.key" class="item-wrapper">
                {{element.value}}
              </div>
            </transition-group>
          </draggable>
         </div>
       </div> -->
      <!-- <button class="accordion">Section 1</button>
      <div class="panel">
        <p>Lorem ipsum...</p>
      </div> -->

      <!-- <button class="accordion">Section 2</button>
      <div class="panel">
        <p>Lorem ipsum...</p>
      </div>
      <button class="accordion">Section 3</button>
      <div class="panel">
        <p>Lorem ipsum...</p>
      </div> -->


     </div>
     <div class="group2"></div>
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
    dragOptions() {
      return {
        animation: 150,
        group: 'test',
        disabled: !this.editable, // disable the sortable if set true
        ghostClass: 'ghost',
        draggable: '.draggable', // Specifies which items inside the element should be draggable
        chosenClass: 'sortable-chosen', // Class name for the chosen item(when mouseDown)
        ghostClass: 'sortable-ghost', // Class name for the drop placeholder
        handle: '.my-handle' //
      }
    }
  },
  data() {
    return {
      group1Data: [
        { key: 'key33', value: 'value33' },
        { key: 'key43', value: 'value43' }
      ],
      inputData: [
        { key: 'key13', value: 'value13' },
        { key: 'key23', value: 'value23' }
      ],
      // activeNames: 'first',
      editable: true,
      isDragging: false,
      delayedDragging: false,
      list: [
        {
          title: 'first group',
          name: 'first',
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
          name: 'second',
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
          name: 'third',
          description: 'hello third',
          children: [
            { key: 'key13', value: 'value13' },
            { key: 'key23', value: 'value23' },
            { key: 'key33', value: 'value33' },
            { key: 'key43', value: 'value43' }
          ]
        }
      ]
    }
  },
  methods: {
    cloneHandler(original) {
      // alert('clone')
    },
    handleChange() {
      console.log('changed')
    },
    inputChanged(value) {
      this.activeNames = value
    },
    // This props is used to pass additional information to child component declared by element props.
    getComponentData() {
      return {
        on: {
          change: this.handleChange,
          input: this.inputChanged
        },
        props: {
          value: this.activeNames
        }
      }
    }
  },
  mounted() {
    var acc = document.getElementsByClassName('accordion')
    var i

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle('active')

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling
        if (panel.style.display === 'block') {
          panel.style.display = 'none'
        } else {
          panel.style.display = 'block'
        }
      })
    }
  }
}
</script>
<style lang="scss">
.el-collapse-item__arrow {
  float: left;
  margin-left: 10px;
}
.drag-container {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  .section1 {
    width: 100%;
    height: 50%;
    display: flex;
    // align-items: center;
    align-items: flex-start;
    background: #dddddd;
    .group1,
    .group2,
    .group3 {
      flex: 1;
      // width: 30%;
      height: 100%;
      padding: 10px;
      box-sizing: border-box;
      overflow: scroll;
    }
    .group2 {
      .item-wrapper {
        background: #dddddd;
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
    .group3 {
      padding: 10px;
      box-sizing: border-box;
      background: #ffffff;
      .input-container {
        height: 100%;
        border: 2px dashed #dddddd;
        .item-wrapper {
          background: #dddddd;
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
    }
  }
  .section2 {
    width: 100%;
    height: 50%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .group1,
    .group2 {
      flex: 1;
      height: 100%;
      box-sizing: border-box;
      padding: 10px;
    }
    .group1 {
      box-sizing: border-box;
      overflow: scroll;
      .output-container {
        // height: 100%;
        border: 2px dashed #dddddd;
        .dragable-container {
          box-sizing: border-box;
          margin: 10px 0;
          padding: 10px;
          .item-wrapper {
            background: #dddddd;
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
      }
    }
  }
}
</style>
