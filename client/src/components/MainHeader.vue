<template>
  <div class="header">
    <div class="header-content">
      <router-link to="/">
        <div class="header-content-logo"></div>
      </router-link>
      <div class="header-content-info"></div>
      <div class="header-content-account">
        <div class="header-content-account-cart">
          <div class="header-content-account-cart-logo">
            <span class="material-symbols-outlined"></span>
            <span class="material-symbols-outlined">shopping_cart_checkout</span>
          </div>
          <div class="header-content-account-cart-info">
            <p>0 в корзине</p>

          </div>
        </div>


        <router-link to="/a"
        v-if="!GET_LOGGED_ACCOUNT">
          <div class="header-content-account-log-in">
            <p>Log in</p>
          </div>
          </router-link>
        <div v-if="GET_LOGGED_ACCOUNT">
          <span style="font-size: 2.9rem" class="material-symbols-outlined">person</span>
        </div>



      </div>
    </div>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {mapGetters} from "vuex";

export default {
  name: "MainHeader",
  data(){
    return{

    }

  },
  computed:{







    ...mapGetters(['GET_LOGGED_ACCOUNT'])
  }

}









</script>
<style scoped>
*{
  margin: 0 0 0 0;
}
  .header{
    padding:1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10vh;
  }
  .header-content{
    width: 90vw;
    height: 15vh;
    display: flex;
  }
  .header-content-logo{
    height: 100%;
    width: 25vw;
    background-color: #747bff;

  }
  .header-content-info{
    height: 100%;
    width: 25vw;
  }
  .header-content-account{
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 25vw;
    gap: 1vw;
  }










  .header-content-account-log-in{
    width: 9vw;
    height: 5vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    cursor: pointer;
  }
  .header-content-account-cart{
    height: 100%;
    width: 10vw;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.1vw;
  }
  .header-content-account-cart-logo{
    background-color: orange;
    width: 3rem;
    height: 3rem;
    border-radius: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  }

</style>