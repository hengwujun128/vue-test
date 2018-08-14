<template>
  <div class="color-container">
    <notifications position="top left"/>
    <h2>hello,this is directive  test</h2>
    <el-button type="info" @click="change">change</el-button>
    <div class="wrapper">
    <div v-change-color>1</div>
    <div v-change-color="customerColor">2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    <div>11</div>
    <div>12</div>
    </div>
  </div>
</template>


<script>
import { changeColor } from "@/directive/changeColor";

export default {
  data() {
    return {
      customerColor: "#000000"
    };
  },
  methods: {
    change() {
      // this.customerColor = Math.random();
      // alert(Math.floor(Math.random() * 100) + 1);
      let change = Math.floor(Math.random() * 100) + 1;
      this.customerColor = `#0000${change}`;
      console.log(this.customerColor);
      this.$notify({
        group: "foo",
        title: change,
        text: "Hello user! This is a notification!"
      });
    }
  },
  created() {},
  directives: {
    changeColor
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: repeat(2, 100px);
  grid-gap: 6px;
  grid-auto-rows: 100px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
  }
  div:nth-child(1n) {
    background-color: #96ceb4;
  }
  div:nth-child(2n) {
    background-color: #ff6f69;
  }
  div:nth-child(3n) {
    background-color: #ffcc5c;
  }
  div:nth-child(4n) {
    background-color: #dddddd;
  }
}
</style>
