<template>
  <main-header class="main-header"></main-header>
  <sticky-header class="sticky-header"></sticky-header>

  <div class="a">
    <slider class="slide"></slider>
    <div class="product-cards" >
      <product-card v-for="product in products" v-bind:key="product.title"
      :title="product.title" :price="product.price" :img="product.img"></product-card>
    </div>

  </div>
</template>
<script lang="ts">
import MainHeader from "./components/MainHeader.vue";
import StickyHeader from "./components/StickyHeader.vue";
import Slider from "./components/slider.vue";
import ProductCard from "./components/ProductCard.vue";
import {IProduct} from "../../interfaces/IProcuts";


export default {
  name:'',
  components: {ProductCard, Slider, StickyHeader, MainHeader},
  data() {
    return {
      products:[] as IProduct[],
    }
  },
  mounted() {
    const getProducts = async ()=>{
      let res:any = await fetch('http://localhost:3000/api/products',{
        method:'GET'
      })
       res = await res.json()




      this.products = res
      console.log(res)






    }
    getProducts()
  }
}
</script>




































<style scoped>
.a{
  width: 100vw;
  height: 870vh;
  display: flex;
  flex-direction: column;

}

.main-header{
  width: 100vw;
}
.sticky-header{
  position: relative;
  width: 100vw;
}
.slide{
  margin-top: 15vh;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.product-cards{
  margin-top: 30vh;
  width: 110vw;
  height: 30vh;
  display: flex;
  flex-wrap: wrap;

}
</style>

