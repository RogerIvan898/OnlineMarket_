<template>
  <div class="header" >
    <transition name="v-transition-animate">
    <div class="sticky-header" key="componentKey" :style="currentStyle">
      <div class="sticky-header-search">
        <div @click="setSearchBox" class="sticky-header-search-container">
          <span class="material-symbols-outlined">search</span>
        </div>
      </div>
      <transition name="search-box-animation">
        <input v-if="isSearchBoxVisable" class="search-box">
      </transition>
      <div class="sticky-header-items" v-bind:style="itemsStyle">
        <div class="sticky-header-item" v-for="item in items"><p>{{item.title}}</p>
      </div>
      </div>
    </div>
    </transition>

  </div>


</template>

<script lang="ts">

import {StyleValue} from "vue";


export default {
  name: "StickyHeader",
  data(){
    return{
      componentKey:0,
      items: [{title:'Пиццы'},{title:'Комбо'},{title:'Закуски'},{title:'Коктейли'},
        {title:'Другие товары'}, {title:'Акции'}],
      currentY:0,
      headerHeight: document.getElementsByClassName('main-header')[0].clientHeight + 10,
      isHeaderHidden: true,
      currentStyle: {position: 'relative'} as StyleValue,
      itemsStyle: {},
      isSearchBoxVisable: false
    }
  },

  methods:{
    handleScroll(){
      this.currentY = window.scrollY
      if(this.currentY > this.headerHeight && this.isHeaderHidden){
        this.isHeaderHidden = false
        if(this.isSearchBoxVisable){
          this.setStickyStyleWithSearchBar()
        }
        else {
          this.setStickyStyleWithoutSearchBar()
        }
      }
      if(this.currentY < this.headerHeight && !this.isHeaderHidden) {
        this.isHeaderHidden = true
        if (this.isSearchBoxVisable) {
          this.setDefaultStyleWithSearchBar()
        } else {
          this.setDefaultStyle()
        }
      }
    },
    setStickyStyleWithoutSearchBar(){
      this.currentStyle = {position: 'fixed',top:'0',left:'0',width:'100vw',justifyContent:'center',gap:'3vw',
      marginLeft:'0',animation:'anim 3s'} as StyleValue
      console.log('setStickyStyleWithoutSearchBar')
    },
    setStickyStyleWithSearchBar(){
      this.currentStyle = {position:'fixed',top:'0',left:'0',width:'100vw',justifyContent: 'center',gap:'1vw',
      marginLeft:'0'} as StyleValue
      this.itemsStyle = {gap:'6vw',justifyContent:'center'}
      console.log('setSticky',this.currentStyle)
    },

    setDefaultStyle(){
      this.currentStyle = {position:'relative'}
      this.itemsStyle = {justifyContent: 'space-between'}
      console.log('setDefaultStyle',this.currentStyle)
    },
    setDefaultStyleWithSearchBar(){
      this.currentStyle = {position:'relative',justifyContent:'space-between'} as StyleValue
      console.log('setDefaultStyleWithSearchBar',this.currentStyle)
    },

    setSearchBox(){
      this.isSearchBoxVisable = !this.isSearchBoxVisable

      if(!this.isSearchBoxVisable){
        this.itemsStyle = {justifyContent: 'space-between'}
      }
    }
  },
  mounted() {
    window.addEventListener('scroll',this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll',this.handleScroll)
  },
  watch:{

  }

}
</script>





<style scoped lang="scss">

.header{
  z-index: 6;
  background-color: white;
  display: flex;
  height: 10vh;
  justify-content: center;
  align-items: center;
  width: 100vw;
  user-select: none;

}
.sticky-header{

  transition: all 0.1s;
  height: 7vh;
  border: lightgray 1px solid;
  border-left:none;
  border-right: none;
  width: 75vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  z-index: 1;
}
.sticky-header:first-child{
  margin-left: 10vw;
}
.sticky-header-item{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.search-box{
  transition: all 1s;
  width: 34vw;
  height: 6vh;
  border-radius: 3rem;
  font-size: 1.1rem;

}
.sticky-header-item p{
  transition: all 0.7s;
  font-size: 1.11rem;
  font-family: 'Arimo',sans-serif;
  font-weight: 500 ;
  color: black;

}
.sticky-header-item p:hover{
  color: orange;
}
.sticky-header-search-container{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;

}



.v-transition-animate-enter{
  transition: translate 1s;
  transform: translateY(100px);
}
.search-box-animation-enter-active,
.search-box-animation-leave-active {
  transform: translateX(1vw);
  transition: all 1s ease;
}
.search-box-animation-enter-from,
.search-box-animation-leave-to {
  opacity: 0;
  transform: translateX(-30vw);
}

.sticky-header-items{
  width: 80vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 1vw;
}




</style>