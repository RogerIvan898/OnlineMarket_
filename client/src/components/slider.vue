<template>
 <div class="slider">
  <div class="slider-content">
    <div class="slider-content-slides">

      <div class="slider-content-slides-slide">
        <span @click="previousImg" class="material-symbols-outlined">arrow_back</span>
      </div>
      <div class="slider-content-slides-empty" v-bind:style="{background: images[currentImgNumber]}"></div>
      <div class="slider-content-slides-slide">
        <span @click="changeImg" class="material-symbols-outlined">arrow_forward</span>
      </div>
    </div>
    <div class="slider-content-img"></div>
  </div>

   <div class="slider-sliders">
    <div v-for="image in buttonsUnderScroll" :key="buttonsUnderScroll.indexOf(image)" v-bind:style="{background:image}" class="slider-current-slide"></div>
   </div>
 </div>
</template>
























































<script lang="ts">
export default {
  name: "slider",
  data(){


    return{
      buttonsUnderScroll:['black','gray','gray'],
      images:['gray','blue','red'],
      currentImgNumber: 0,

    }
  },
  methods:{
    changeImg(){
      this.buttonsUnderScroll[this.currentImgNumber] = 'gray'
      this.currentImgNumber < this.images.length-1 ? this.currentImgNumber++ : this.currentImgNumber = 0
      this.buttonsUnderScroll[this.currentImgNumber] = 'black'

    },
    previousImg(){

      this.buttonsUnderScroll[this.currentImgNumber] = 'gray'
      this.currentImgNumber>0 ? this.currentImgNumber-- : this.currentImgNumber = this.images.length-1
      this.buttonsUnderScroll[this.currentImgNumber] = 'black'
    }
  },

}
</script>





























<style scoped>
.slider{
  z-index: 0;
  width: 100vw;
  height: 49vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
}
.slider-content{
  width: 85vw;
  height: 45vh;

}
.slider-sliders{
  display: flex;
  width: 10vh;
  height: 10vw;
  gap: 1rem;
}
.slider-current-slide{
  width: 10px;
  height: 10px;
  border-radius: 1rem;
  background: gray;
  cursor: pointer;
  transition: all 0.35s;
}
.slider-content-slides{
  display: flex;
  align-items: center;
}
.slider-content-slides-slide{
  width: 10%;
  height: 45vh;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
}
.slider-content-slides-slide span{
  font-size: 3.9rem;
  cursor: pointer;
}

.slider-content-slides-slide span:hover{
  font-size: 4rem;
}
.slider-content-slides-empty{
  height: 45vh;
  width: 85%;
  background: #888888;
  transition: all 1.1s;
}

.test{
  background-color: #747bff;
  width: 100%;
  height: 100%;
}

</style>