<template>
  <popover
    name="tooltip"
    :pointer="pointer"
    :width="width"
    :event="event"
    @show="value = $event.value"
  >{{value}}</popover>
</template>
<script>
// tooltip 也是使用popover 组件来实现
export default {
  name: "Tooltip",
  props: {
    event: {
      type: String,
      default: "hover"
    },
    pointer: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 160
    }
  },
  data() {
    return {
      value: ""
    };
  }
};
</script>
