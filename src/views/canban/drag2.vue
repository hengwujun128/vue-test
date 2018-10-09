<template>
  <div class="drag-container">
    <div class="group1">
      <!-- <draggable element="el-collapse" :list="list" :component-data="getComponentData()">
        <el-collapse-item v-for="e in list" :title="e.title" :name="e.name" :key="e.name">
          <div>{{e.description}}</div>
        </el-collapse-item>
      </draggable> -->
      <draggable :list="group1Data" :options="{group:{name:'test',put:false,pull:'clone'}}" style="height:100%;" @start="drag=true" @end="drag=false">
        <div v-for="(element, index) in group1Data" :key="index" class="item-wrapper">
          <!-- <div class="drag-item">{{element.value}}</div> -->
          <div class="drag-item">{{element.value}}</div>
        </div>
      </draggable>
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
        <draggable :list="inputData" :options="{group:{name:'test',put:['test']}}" style="height:100%;" @start="drag=true" @end="drag=false">
          <div v-for="(element, index) in inputData" :key="index" class="item-wrapper">
            <div class="drag-item">{{element.value}}</div>
          </div>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable,
  },
  computed: {
    dragOptions () {
      return {
        animation: 150,
        group: "test",
        disabled: !this.editable, // disable the sortable if set true
        ghostClass: "ghost",
        draggable: ".draggable", // Specifies which items inside the element should be draggable
        chosenClass: "sortable-chosen", // Class name for the chosen item(when mouseDown)
        ghostClass: "sortable-ghost", // Class name for the drop placeholder
        handle: ".my-handle" //
      };
    }
  },
  data () {
    return {
      group1Data: [
        { key: 'key33', value: 'value33' },
        { key: 'key43', value: 'value43' }
      ],
      inputData: [
        { key: 'key13', value: 'value13' },
        { key: 'key23', value: 'value23' },
      ],
      activeNames: 'first',
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
            { key: 'key4', value: 'value4' },
          ]
        },
        {          title: 'second group', name: 'second', description: 'hello second', children: [
            { key: 'key12', value: 'value12' },
            { key: 'key22', value: 'value22' },
            { key: 'key32', value: 'value32' },
            { key: 'key42', value: 'value42' },
          ]        },
        {          title: 'third group', name: 'third', description: 'hello third', children: [
            { key: 'key13', value: 'value13' },
            { key: 'key23', value: 'value23' },
            { key: 'key33', value: 'value33' },
            { key: 'key43', value: 'value43' },
          ]        },

      ]
    }
  },
  methods: {
    cloneHandler (original) {
      // alert('clone')
    },
    handleChange () {
      console.log('changed');
    },
    inputChanged (value) {
      this.activeNames = value;
    },
    // This props is used to pass additional information to child component declared by element props.
    getComponentData () {
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
}
</script>
<style lang="scss">
.el-collapse-item__arrow {
  float: left;
  margin-left: 10px;
}
.drag-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background: #dddddd;
  .group1,
  .group2,
  .group3 {
    width: 30%;
    height: 100%;
    padding: 10px;
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
</style>
