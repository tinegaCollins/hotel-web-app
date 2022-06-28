<template>
    <main class="signup-wrapper">
        <navBar/>
        <img src="../assets/icons/undraw_breakfast_psiw.svg" alt="">
        <h1>log in</h1>
        <p class="checkPasswordResponse">{{checkPasswordsResponse}}</p>
        <div class="form">
            <input type="text" placeholder="phone number" v-model="phone">
            <input type="password" name=""  placeholder="password" v-model="password">
            <input type="password" name=""  placeholder="repeat password" v-model="passwordRepeat" @mouseleave="checkTwoPasswords" ref="input" >
            <button>Sign up</button>
            <div class="other">
                 <nuxt-link to="/login">log in</nuxt-link>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">

const phone = ref<string>();
const password = ref<string>();
const passwordRepeat = ref<string>();
const checkPasswordsResponse = ref<string>();
const checkTwoPasswords = ()=>{
    if(password.value != passwordRepeat.value){
        checkPasswordsResponse.value = "passwords do not match";
    }else {
        checkPasswordsResponse.value = "";
    }
}

const login = async ()=>{
    fetch('',)
}
</script>


<style>
.checkPasswordResponse {
    color: red;
}
</style>