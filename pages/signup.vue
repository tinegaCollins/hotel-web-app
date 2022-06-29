<template>
    <main>
        <navBar/>
        <div class="signup-wrapper">
            <img src="../assets/icons/undraw_breakfast_psiw.svg" alt="">
        <h1>Sign Up</h1>
        <p class="checkPasswordResponse">{{checkPasswordsResponse}}</p>
        <p>{{checkPhoneResponse}}</p>
        <div class="form">
            <input type="text" placeholder="phone number" v-model="phone" @mouseout="checkPhone">
            <input type="password" name=""  placeholder="password" v-model="password">
            <input type="password" name=""  placeholder="repeat password" v-model="passwordRepeat" @keyup="checkTwoPasswords" ref="input" >
            <!-- disabled on check  -->
            <button :disabled="isButtonActive" @click.once="signUp">Sign up </button>
            <div class="other">
                 <nuxt-link to="/login">log in</nuxt-link>
            </div>
        </div>
        </div>
    </main>
</template>

<script setup lang="ts">


useHead({
  title: 'sign up',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  link: [
    { rel: 'icon', href: '../assets/icons/undraw_breakfast_psiw.svg' }
  ]
})


const phone = ref<string>();
const password = ref<string>();
const passwordRepeat = ref<string>();
const checkPhoneResponse = ref<string>();
const checkPhone = ()=>{
    if(phone.value.length < 10){
        checkPhoneResponse.value = "invalid phone number"
    }
    else {
        checkPasswordsResponse.value = null;
        const checkIfNumberUsed = async ()=>{
            const phoneToSend = {
                phone: phone.value
            }
            const response = await fetch('http://localhost:8000/check-number',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(phoneToSend)
            })
            const data = await response.json();
            if(data == true){
                checkPasswordsResponse.value = "This phone number is linked to an account"
            }
            else {
                dataToSend.phone = phone.value
                if(dataToSend.password != null){
                    isButtonActive.value = false;
                }
            }
        }
        checkIfNumberUsed()
    }
}
const checkPasswordsResponse = ref<string>();
const checkTwoPasswords = ()=>{
    if(password.value != passwordRepeat.value){
        checkPasswordsResponse.value = "passwords do not match";
    }else {
        checkPasswordsResponse.value = "";
        dataToSend.password = password.value;
         if(dataToSend.phone != null){
            isButtonActive.value = false;
            
        }
    }
}
const dataToSend = {
    phone: null,
    password: null
}
const userID = ref<string>();
const isButtonActive = ref<boolean>(true);
const signUp = async ()=>{
    const response = await fetch('http://localhost:8000/create-account', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
    })
    const data = await response.json();
    //verify phone number with twilio later


     if(data != false){
        isButtonActive.value = true;
        userID.value = data._id;
        //send to pinia for state management
        const route = useRouter();
        route.push('/');
    }
}
</script>


<style>
.checkPasswordResponse {
    color: red;
}
.signup-wrapper button:disabled, .login-wrapper button:disabled {
    background-color: hsl(0, 0%, 50%);
}
</style>