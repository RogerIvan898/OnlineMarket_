<template>
  <div class="cart">
    <p>Cart</p>
    <div class="cart-product">
      <img class="cart-product-img">
      <div class="cart-product-title"><p>{{ title }}</p></div>
      <div class="cart-product-quantity"> {{quantity}}
        <div class="cart-product-quantity-add">
          <span class="cart-product-quantity-add-img material-symbols-outlined">add</span>
        </div>
        <div class="cart-product-quantity-text">0</div>
        <div class="cart-product-quantity-remove">
          <div class="cart-product-quantity-remove-img material-symbols-outlined">remove</div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "cart",
  props:['img','price','title','quantity'],
  products:[],
  mounted(){
   const getCartProducts = async()=>{
     console.log(98)
      const res = await fetch('/cart?=30',{method:'GET'})

      const result = await res.text()
     console.log(result)
    }
    getCartProducts()
  }
}
</script>

<style scoped lang="scss">

@mixin quantity-button{
  width: 4rem;
  height: 4rem;
  border-radius: 4rem;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  transition: all 1s;
}
.cart{
  display: flex;
  flex-direction: column;
  padding: 3vw;

  &-product{
    display: flex;
    width: 94vw;
















    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
       height: 25vh;



    &-img{
      width: 10rem;
      height: 10rem;
    }

    &-title{
      margin-left: 15vw;
      display: flex;
      align-items: center;
      justify-content: center;
      p{
        font-size: 3rem;
      }
    }

    &-quantity{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30vw;
      margin-left: 34vw;
      gap: 1rem;















      &-text{
        font-size: 2.5rem;
      }
      &-add{
        @include quantity-button;

        &:hover{
          border-color: green;
        }
        &:hover &-img{
          color: green;
        }
      }
      &-remove{
        @include quantity-button;

        &:hover{
          border-color: red;

        }
        &:hover &-img{
          color: red;
        }
      }
    }

  }

}

.material-symbols-outlined{
  font-size: 3rem;
  transition: all 1.1s;
}

</style>