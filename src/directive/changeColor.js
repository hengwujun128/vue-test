const defaultColor = "#86bbff";
export const changeColor = {
  // 只会调用一次
  bind(el, binding, vNode, oldVnode) {
    // initialization
    const color = binding.expression || defaultColor;
    if (el) {
      el.style.background = color;
    }
  },
  // 已经绑定的元素插入到父节点时候调用，一般 只能执行一次（如果已绑定元素来回插入到父节点可以调用多次），如果binging.value改变，就不起效果
  inserted(el, binding, vNode, oldVnode) {
    // if (binding.value) {
    //   el.style.background = binding.value;
    // }
  },
  // 包含指令的组件的 VNode 更新后调用
  update(el, binding, vNode, oldVnode) {
    if (binding.value) {
      el.style.background = binding.value;
    }
  },
  componentUpdated() {},
  unbind() {}
};
