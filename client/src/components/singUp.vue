<template>
  <div class="header">
    <main-header></main-header>
  </div>

  <div class="sing-up">
    <div class="sing-up-container">
      <div class="sing-up-container-title">
        <p>Sing up</p>
      </div>
      <form class="sing-up-container-forms" @submit.prevent="sumbitForm">

      <div class="sing-up-container-login">
        <label for="name-input">Name</label>
          <input type="text" id="name-input" v-model="name_" placeholder="Name"
          :class="{
            'sing-up-container-invalid':(v$.name_.$dirty && v$.name_.required),
            'sing-up-container-valid':!v$.name_.required.$invalid
          }">
        </div>
      <div class="sing-up-container-email">
        <label for="email-input">Email</label>
        <input type="text" id="email-input" v-model.trim="email" placeholder="Email"
               :class="{
          'sing-up-container-invalid': isInvalidEmail||v$.email.email.$invalid || (v$.email.$dirty && v$.email.required),
          'sing-up-container-valid': !v$.email.email.$invalid && (v$.email.$model && v$.email.required) && !isInvalidEmail}"
              >
        <i class="helper-text invalid"
           v-if="v$.email.email.$invalid"
        >{{v$.email.email.$message}}</i>
      </div>

      <div class="sing-up-container-password">
        <label for="password-input">Password</label>
        <input type="text" id="password-input" v-model="password" placeholder="Password"
                :class="{
             'sing-up-container-invalid': ((v$.password.required.$invalid && v$.password.$dirty) ||
             (v$.password.$dirty && v$.password.minLength.$invalid) || (v$.password.minLength.$invalid && v$.password.$model)),
             'sing-up-container-valid': !v$.password.minLength.$invalid && (v$.password.$model && v$.password.required)
               }">
        <i v-if="v$.password.minLength.$invalid">
          {{v$.password.minLength.$message}}
        </i>
      </div>

      <button type="submit" >Submit</button>
      </form>
      <p v-show="isInvalidEmail">Email is registered</p>
      <small><router-link to="/a">I already have an account</router-link></small>
    </div>



















  </div>
</template>
<script lang="ts">
import {useVuelidate} from '@vuelidate/core'
import {required,email,minLength} from '@vuelidate/validators'
import StickyHeader from "./StickyHeader.vue";
import MainHeader from "./MainHeader.vue";


export default {
  name: 'SingUp',
  components: {MainHeader, StickyHeader},
  setup() {
    return {
      v$: useVuelidate(),

    }
  },

  validations(){
    return{
      name_: {required},
      email: {required, email},
      password: {required,minLength:minLength(7)},
    }
  },
  data() {
    return {
      isInvalidEmail: false,
        name_: "",
        email: "",
        password: "",
    }
  },
  methods: {
    async sumbitForm() {
      if(this.v$.$invalid){
        this.v$.$touch()
        return
      }

      await fetch('http://localhost:3000/api/auth/register',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({email:this.email,password: this.password,login:this.name_})
      }).then((response) =>{
        if(response.status === 400) {
          this.isInvalidEmail = true
        }
      })
  }
  }
}
</script>

<style scoped lang="scss">
@mixin section{
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: column;

  p{
    margin-top: -0.4rem;
  }
  input{
    height: 2.2rem;
    width: 25rem;
  }
  input:focus{
    outline: none;
  }
}
.header{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
}
.sing-up{
  width: 100vw;
  height: 100vh;
  display: flex;
  margin-top: -32px;
  justify-content: center;
  align-items: center;
}
  .sing-up-container{
    button{
      margin-top: 30px;
      width: 100%;
    }
    padding: 2rem;
    width: 30rem;
    height: 30rem;
    border: 3px solid cornflowerblue;
    border-radius: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  }
  .sing-up-container-forms{
    width: 101%;
  }
  .sing-up-container-title p{
    font-size: 1.5rem;
  }
  .sing-up-container-login{
    @include section;
  }
  .sing-up-container-email{
    @include section;
  }
  .sing-up-container-password{
    @include section;
  }
  .sing-up-container-invalid{
    border: 1px solid red;
    @include section;
  }
  .sing-up-container-valid{
    border: 2px solid cornflowerblue;
    @include section;
  }


</style>