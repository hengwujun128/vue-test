<template>
  <div class="wrapper">
    <h2>hello,ZZQ</h2>
    <img src="./images/1.png" class="circleImage" id="circle1">
    <img src="./images/2.png" class="circleImage" id="circle2">
    <img src="./images/3.png" class="circleImage" id="circle3">
    <img src="./images/4.png" class="circleImage" id="circle4">
    <img src="./images/5.png" class="circleImage" id="circle5">
    <img src="./images/6.png" class="circleImage" id="circle6">
    <img src="./images/7.png" class="circleImage" id="circle7">
    <img src="./images/8.png" class="circleImage" id="circle8">
    <img src="./images/9.png" class="circleImage" id="circle9">
    <canvas id="myCanvas" width="1000" height="360">

    </canvas>
  </div>
</template>
<script>
require("./utils.js");
// require("./circle.js");
import Circle from "./circle.js";

export default {
  data() {
    return {
      circles: []
    };
  },
  methods: {},
  mounted() {
    let targets = [
      { x: 125, y: 90, url: "" },
      { x: 375, y: 90, url: "" },
      { x: 625, y: 90, url: "" },
      { x: 875, y: 90, url: "" },
      { x: 100, y: 270, url: "" },
      { x: 300, y: 270, url: "" },
      { x: 500, y: 270, url: "" },
      { x: 700, y: 270, url: "" },
      { x: 900, y: 270, url: "" }
    ];
    let circles = [];
    let animationId1 = "";
    let animationId2 = "";

    let myCanvas = document.getElementById("myCanvas"),
      context = myCanvas.getContext("2d"),
      mouse = utils.captureMouse(myCanvas),
      // circle = new circle(60, "#ff0000", circleImage),
      easing = 0.05;

    for (var circle, i = 1; i <= 9; i++) {
      let circleImage = document.getElementById("circle" + i);

      circle = new Circle({ radius: 60, color: "#dddddd" });
      circle.id = "circle" + i;
      circle.backImg = circleImage;
      // circle.x = Math.random() * myCanvas.width;
      // circle.y = Math.random() * myCanvas.height;
      circle.x = myCanvas.width / 2;
      circle.y = myCanvas.height / 2;
      // every circle speed is reandom
      circle.vx = Math.random() * 2 - 1;
      circle.vy = Math.random() * 2 - 1;

      circles.push(circle);
    }
    // add an event listener to a draw object on canvas
    myCanvas.addEventListener("mousemove", function() {
      circles.map(circle => {
        if (utils.containsPoint(circle.getBounds(), mouse.x, mouse.y)) {
          circle.lineWidth = 5;
          this.scaleX = 2;
          this.scaleY = 2;
        } else {
          circle.lineWidth = 1;
          this.scaleX = 1;
          this.scaleY = 1;
          // circle.scale(1, 1);
        }
      });
    });

    function onMouseenter(e) {
      // first, remove animation
      cancelRequestAnimationFrame(animationId1);

      // targets.forEach((item, key) => {
      //   //get boundary
      //   if (
      //     item.x - 60 < mouse.x < item.x + 60 ||
      //     item.y - 60 < mouse.y < item.y + 60
      //   ) {
      //     circles[key].lineWidth = 5;
      //     debugger;
      //   }
      // });
      drawFrame2();
    }
    myCanvas.addEventListener("mouseenter", onMouseenter, false);
    myCanvas.addEventListener("mouseout", function(e) {
      window.cancelRequestAnimationFrame(animationId2);
      drawFrame1();
    });
    function drawFrame1() {
      animationId1 = window.requestAnimationFrame(drawFrame1, myCanvas);
      context.clearRect(0, 0, myCanvas.width, myCanvas.height);

      var left = 0,
        right = myCanvas.width,
        top = 0,
        bottom = myCanvas.height;
      for (let circle of circles) {
        circle.x += circle.vx;
        circle.y += circle.vy;

        if (
          circle.x + 60 > myCanvas.width ||
          circle.x - 60 < 0 ||
          circle.y + 60 > myCanvas.height ||
          circle.y - 60 < 0
        ) {
          circle.vx *= -1;
          circle.vy *= -1;
        }
        circle.draw(context);
      }
    }
    function drawFrame2() {
      animationId2 = window.requestAnimationFrame(drawFrame2, myCanvas);
      context.clearRect(0, 0, myCanvas.width, myCanvas.height);

      //
      let left = 0,
        right = myCanvas.width,
        top = 0,
        bottom = myCanvas.height;

      for (let key of targets.keys()) {
        // console.log(targets[key]["x"]);
        let targetX = targets[key]["x"];
        let targetY = targets[key]["y"];

        let vx = (targetX - circles[key]["x"]) * easing;
        let vy = (targetY - circles[key]["y"]) * easing;

        let circle = circles[key];
        circle.x += vx;
        circle.y += vy;
        circle.draw(context);
      }
    }
    drawFrame1();
  }
};
</script>
<style lang="scss" scoped>
// @import url("./style.css");
@import "./style.css";
#myCanvas {
  background: url("./images/background.png");
  border: 5px solid red;
}
.circleImage {
  display: none;
}
</style>
