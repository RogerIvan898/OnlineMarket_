<template>
 <div class="product-card">
   <img class="product-card-img" :src="img" alt="">
   <div class="product-card-content">
     <p class="product-card-content-title">{{title}}</p>
     <p class="product-card-content-price">{{ price }}</p>
     <button @click="addInCart()" class="product-card-content-button"></button>
   </div>



 </div>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {mapGetters,mapActions} from "vuex"

export default {
  name: "ProductCard",
  data(){
    return{

      products:[],
      currentImg:'../assets/img.png'
    }
  },
  props:['title','price','img'],
  computed:{
    ...mapGetters(['GET_LOGGED_ACCOUNT'])
  },
  methods:{
    setImg(){

      return require(`../assets/${this.img}`)
    },
    async addInCart(){
      let loggedAccount:number = <number>this.GET_LOGGED_ACCOUNT
      const title = this.$props.title

      if(loggedAccount) {
       const response = await fetch(`/api/cart/10}`,{
          method:'PUT',
          headers:{
            'Content-Type': 'application/json;charset=utf-8'
          },
          body:JSON.stringify({content:title}),
        })
        const result = await response.json()
        console.log(result)
      }
    }

  },
}
</script>

<style scoped>
  .product-card{
    margin-left: 3rem;
    width: 21rem;
    height: 21rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border-radius: 3rem;
    flex-direction: column;
  }
  .product-card-img{
    width: 15rem;
    height: 15rem;
    background: orange;
    border-radius: 3rem;
    cursor: pointer;
  }
  .product-card-img:hover{

  }
  .product-card-content{
    margin-top: -1rem;
    width: 21rem;
    height: 7rem;
    align-items: center;
    flex-direction: column;
  }
  .product-card-content-title{
    width: 100%;
  }
  .product-card-content-price{
    margin-top: -1rem;
    width: 100%;
  }








  .product-card-content-button{
    margin-top: -1rem;
    width: 70%;
    height: 3rem;
    background-color: orange;
  }
</style>