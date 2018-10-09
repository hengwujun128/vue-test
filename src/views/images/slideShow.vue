<template>
  <div class="slideShow-container">
    <div class="content">
      <!-- Full-width images with number and caption text -->
      <div class="mySlide fade">
        <div class="numbertext">1 / 3</div>
        <!-- <img src="../../assets/img/slideImage1.jpg" style="width:100%"> -->
        <div class="text">Caption Text1</div>
      </div>
      <div class="mySlide fade">
        <div class="numbertext">2 / 3</div>
        <!-- <img src="../../assets/img/slideImage2.jpg" style="width:100%"> -->
        <div class="text">Caption Text2</div>
      </div>
      <div class="mySlide fade">
        <div class="numbertext">3 / 3</div>
        <!-- <img src="../../assets/img/slideImage3.jpg" style="width:100%"> -->
        <div class="text">Caption Text3</div>
      </div>
      <!-- Next and previous buttons -->
      <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
      <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </div>
    <br>

    <!-- The dots/circles -->
    <div style="text-align:center">
      <span class="dot" onclick="currentSlide(1)"></span>
      <span class="dot" onclick="currentSlide(2)"></span>
      <span class="dot" onclick="currentSlide(3)"></span>
    </div>

  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.slideShow-container {
  height: 100%;
}
</style>
