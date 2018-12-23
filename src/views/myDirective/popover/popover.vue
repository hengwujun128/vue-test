<script>
// 没有 template 的 component
import { events } from "./bus";
const pointerSize = 6;
// 用数组表示方向,[0,0]中心
const directions = {
  left: [-1, 0],
  right: [1, 0],
  top: [0, 1],
  bottom: [0, -1]
};

export default {
  name: "Popover",
  // 在组件中使用render 函数,高阶函数,
  render: function(createElement) {
    if (!this.visible) {
      return;
    }
    //创建一个 div 元素,属性样式在第二个参数对象中
    return createElement(
      "div",
      {
        class: this.className,
        style: this.style,
        // 设置 attrs, 可以在父组件设置样式
        attrs: {
          "data-popover": this.name
        },
        on: {
          click(event) {
            event.stopPropagation();
          }
        },
        ref: "dropdown"
      },
      // 使用 this.$slots.default 获取和设置子元素
      this.$slots.default
    );
  },
  // 外部向组件传入的属性
  props: {
    // 使用popover 组件时候,每个 popover 组件都有个name, 和指令绑定
    name: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      default: 180
    },
    pointer: {
      type: Boolean,
      default: true
    },
    // 引入组件时候，会设置触发该组件的事件名称
    event: {
      type: String,
      default: "click"
    },
    anchor: {
      type: Number,
      default: 0.5,
      validator: v => v >= 0 && v <= 1
    }
  },
  data() {
    return {
      visible: false,
      positionClass: "",
      //
      position: {
        left: 0,
        top: 0
      }
    };
  },
  mounted() {
    // popover 组件主要是监听 v-popover 指令发射的事件

    // 在eventBus中监听发射的事件，事件名称是通过计算属性得来(因为是自定义事件，所以事件名称可以随便定义),默认是click事件
    events.$on(this.showEventName, this.showEventListener);
    events.$on(this.hideEventName, this.hideEventListener);
  },
  beforeDestroy() {
    events.$off(this.showEventName, this.showEventListener);
    events.$off(this.hideEventName, this.hideEventListener);
  },
  computed: {
    showEventName() {
      return `show:${this.event}`;
    },
    hideEventName() {
      return `hide:${this.event}`;
    },
    // 通过 prop 和data属性计算 className
    className() {
      return ["vue-popover", this.pointer && this.positionClass];
    },
    //style  也可以使用计算属性设置，返回一个对象
    style() {
      return {
        width: `${this.width}px`,
        ...this.position
      };
    }
  },
  methods: {
    // 用户点击触发显示事件之后，popover指令发射了事件， popover组件要做的事情
    showEventListener(event) {
      // 如果当前是显示,就发射一个关闭事件(toogle)
      if (this.visible) {
        events.$emit(this.hideEventName);
        return;
      }
      // 嵌套三层$nextTick() 为何?
      this.$nextTick(() => {
        // 1. 获取指令中传过来的dom,name,position数据
        let { target, name, position } = event;
        // name 为指令中的name,this.name 是属性prop传入的
        // 比较指令和组件的name 是否匹配
        if (name === this.name) {
          debugger;
          // set direction
          let direction = directions[position];
          // set positionClass
          this.positionClass = `dropdown-position-${position}`;
          // set visible state
          this.visible = true;
          //
          this.$nextTick(() => {
            debugger;
            // 提供给父组件的钩子,父组件可以监听show，做一些事情
            this.$emit("show", event);
            this.$nextTick(() => {
              debugger;
              //把指令所在元素,和popover元素,方位 传入一个一函数
              //用一个函数设置两个 dom 的位置,
              let position = this.getDropdownPosition(
                target,
                this.$refs.dropdown,
                direction
              );

              this.position = {
                left: `${position.left}px`,
                top: `${position.top}px`
              };
            });
          });
        }
      });
    },
    hideEventListener(event) {
      if (this.visible) {
        this.visible = false;
        this.$emit("hide", event);
      }
    },
    //target :指令所绑定的元素；dropdown:是dropdown组件的引用;direction:[]
    getDropdownPosition(target, dropdown, direction) {
      // 获取两个dom对象相对于浏览器视窗的位置(dom 对象在浏览器可视范围的距离，不包括ScrollOffset)
      let trRect = target.getBoundingClientRect();
      let ddRect = dropdown.getBoundingClientRect();

      // Scroll offset of the current document(滚动条滚动的offset)
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let scrollLeft =
        window.pageXOffset ||
        document.documentElement.scrollLeft ||
        document.body.scrollLeft;

      // Position within the parent()：获取元素相对于page的位置;这比使用 do{}while(){} ,offsetParent ,offsetLeft,offsetTop 简单很多
      // 指令元素的坐标
      let offsetLeft = trRect.left + scrollLeft;
      let offsetTop = trRect.top + scrollTop;

      // let shiftX = ddRect.width - trRect.width
      // 两个元素高度之和的二分之一
      let shiftY = 0.5 * (ddRect.height + trRect.height);

      // Center of the target element
      // 两个 dom 元素如果高宽相同的话, centerX 和centerY 就是 target 元素的坐标
      let centerX = offsetLeft - 0.5 * (ddRect.width - trRect.width);
      // let centerY = offsetTop + trRect.height - shiftY;
      let centerY = offsetTop + 0.5 * (trRect.height - ddRect.height);

      // let anchorX = direction[0] * this.anchor
      // let anchorY = direction[0] * this.anchor

      // Position of the dropdown relatively to target
      // 就是求两个 target 元素的二分之一(有正负之分)
      let x = direction[0] * 0.5 * (ddRect.width + trRect.width);
      let y = direction[1] * shiftY;
      // Pointer size correction
      if (this.pointer) {
        x += direction[0] * pointerSize;
        y += direction[1] * pointerSize;
      }
      return {
        left: centerX + x,
        top: centerY - y
      };
    }
  }
};
</script>

<style lang="scss">
$pointer-size: 6px;
.vue-popover {
  display: block;
  position: absolute;
  background: #fff;
  box-shadow: 0px 4px 20px 0px rgba(52, 73, 94, 0.2);
  padding: 5px;
  border-radius: 5px;
  z-index: 998;
  &:before {
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    content: "";
  }
  &.dropdown-position-bottom:before {
    border-left: $pointer-size solid transparent;
    border-right: $pointer-size solid transparent;
    border-bottom: $pointer-size solid #fff;
    top: -$pointer-size;
    left: calc(50% - #{$pointer-size});
    filter: drop-shadow(0px -2px 2px rgba(52, 73, 94, 0.1));
  }
  &.dropdown-position-top:before {
    border-left: $pointer-size solid transparent;
    border-right: $pointer-size solid transparent;
    border-top: $pointer-size solid #fff;
    bottom: -$pointer-size;
    left: calc(50% - #{$pointer-size});
    filter: drop-shadow(0px 2px 2px rgba(52, 73, 94, 0.1));
  }
  &.dropdown-position-left:before {
    border-top: $pointer-size solid transparent;
    border-bottom: $pointer-size solid transparent;
    border-left: $pointer-size solid #fff;
    right: -$pointer-size;
    top: calc(50% - #{$pointer-size});
    filter: drop-shadow(2px 0px 2px rgba(52, 73, 94, 0.1));
  }
  &.dropdown-position-right:before {
    border-top: $pointer-size solid transparent;
    border-bottom: $pointer-size solid transparent;
    border-right: $pointer-size solid #fff;
    left: -$pointer-size;
    top: calc(50% - #{$pointer-size});
    filter: drop-shadow(-2px 0px 2px rgba(52, 73, 94, 0.1));
  }
}
</style>