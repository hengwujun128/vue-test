<template>
  <div class="tooltip-container">
    <div class="tooltip">
      HoverMe
      <span :class="pos">
        <slot></slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      default: 'left'
    },

  },
  computed: {
    pos () {
      return `position-${this.position}`
    }
  }
}
</script>

<style lang="scss" scoped>
.tooltip-container {
  .tooltip {
    position: relative;
    display: inline-block;
    cursor: pointer;
    /* left */
    .position-left {
      visibility: hidden;
      width: 120px;
      background-color: #555;
      color: #fff;
      text-align: center;
      padding: 5px 0;
      border-radius: 6px;

      /* Position the tooltip text */
      position: absolute;
      z-index: 1;
      /* Fade in tooltip */
      opacity: 0;
      transition: opacity 1s;

      right: 110%;
      top: 50%;
      transform: translateY(-50%);

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 100%;
        border-width: 5px;
        transform: translateY(-50%);
        border-style: solid;
        border-color: transparent transparent transparent #555;
      }
    }
    &:hover {
      .position-left {
        visibility: visible;
        opacity: 1;
      }
    }
  }
}
</style>