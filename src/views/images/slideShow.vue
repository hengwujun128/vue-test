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
      <a class="prev" @click="plusSlides(-1)">&#10094;</a>
      <a class="next" @click="plusSlides(1)">&#10095;</a>
    </div>
    <br>

    <!-- The dots/circles -->
    <div style="text-align:center">
      <span class="dot" @click="currentSlide(1)"></span>
      <span class="dot" @click="currentSlide(2)"></span>
      <span class="dot" @click="currentSlide(3)"></span>
    </div>

  </div>
</template>
<script>
export default {
  data () {
    return {
      slideIndex: 1
    }
  },
  methods: {
    plusSlides (n) {
      this.showSlides(this.slideIndex += n);
    },
    currentSlide (n) {
      this.showSlides(this.slideIndex = n);
    },
    showSlides (n) {
      var i;
      var slides = document.getElementsByClassName("mySlide");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) { this.slideIndex = 1 }
      if (n < 1) { this.slideIndex = slides.length }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      // debugger
      slides[this.slideIndex - 1]['style'].display = "block";
      dots[this.slideIndex - 1].className += " active";
    },
    // Automatic SlideShow
    automaticShow () {
      // debugger
      var i;
      // get all mySlides and then set those display with none;
      var slides = document.getElementsByClassName("mySlide");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      // add index when every call
      this.slideIndex++;
      // 
      if (this.slideIndex > slides.length) { this.slideIndex = 1 }
      slides[this.slideIndex - 1].style.display = "block";
      // use setTimeout and resursive to replace setInterval
      setTimeout(this.automaticShow, 2000); // Change image every 2 seconds
    }
  },
  mounted () {
    this.showSlides(this.slideIndex);
    // this.automaticShow();

  }
}
</script>
<style lang="scss" scoped>
.slideShow-container {
  height: 100%;
  .content {
    max-width: 1000px;
    position: relative;
    margin: auto;
    .mySlide {
      display: none;
      /* Caption text */
      .text {
        color: #f2f2f2;
        font-size: 15px;
        padding: 8px 12px;
        position: absolute;
        bottom: 8px;
        width: 100%;
        text-align: center;
      }
      /* Number text (1/3 etc) */
      .numbertext {
        color: #f2f2f2;
        font-size: 12px;
        padding: 8px 12px;
        position: absolute;
        top: 0;
      }
    }
    .prev,
    .next {
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: auto;
      //
      margin-top: -22px;
      padding: 16px;

      color: white;
      font-weight: bold;
      font-size: 18px;
      transition: 0.6 ease;
      border-radius: 0 3px 0 3px;
    }
    /* Position the "next button" to the right */
    .next {
      right: 0;
      border-radius: 3px 0 0 3px;
    }
    /* On hover, add a black background color with a little bit see-through */
    .prev:hover,
    .next:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }

    /* Fading animation */
    .fade {
      -webkit-animation-name: fade;
      -webkit-animation-duration: 1.5s;
      animation-name: fade;
      animation-duration: 1.5s;
    }
    @-webkit-keyframes fade {
      from {
        opacity: 0.4;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes fade {
      from {
        opacity: 0.4;
      }
      to {
        opacity: 1;
      }
    }
  }
  /* The dots/bullets/indicators */
  .dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }
  .active,
  .dot:hover {
    background-color: #717171;
  }
}
</style>
