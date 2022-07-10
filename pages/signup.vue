<template>
    <main>
        <navBar/>
        <div class="signup-wrapper">
            <p ref="res" class="alert">{{messageResponse}}</p>
            <img src="~/assets/icons/undraw_breakfast_psiw.svg" alt="">
        <h1>Sign Up</h1>
        <div class="form">
            <input type="text" placeholder="phone number" v-model="phone" @focusout="checkPhone">
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
import icon from '~/assets/icons/undraw_breakfast_psiw.svg';
useHead({
  title: 'sign up',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'sign up page' }
  ],
  link: [
    { rel: 'icon', href: icon }
  ]
})


const phone = ref<string>();
const password = ref<string | number>();
const passwordRepeat = ref<string>();
const messageResponse = ref<string>();
const isButtonActive = ref<boolean>(true);
const res = ref();
const checkPhone = ()=>{
    if(phone.value.length < 10){
        res.value.classList.add('drop');
        messageResponse.value = "enter a valid phone number";
        setTimeout(() => {
            messageResponse.value = null;
            res.value.classList.remove('drop')
        }, 2000);
    }
    else {
        const checkIfNumberUsed = async ()=>{
            const phoneToSend = {
                phone: phone.value
            }
            const response = await fetch('https://hotelini.herokuapp.com/check-number',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(phoneToSend)
            })
            const data = await response.json();
            if(data == true){
                res.value.classList.add('drop');
                messageResponse.value = "phone number in use";
                setTimeout(() => {
                    messageResponse.value = null;
                    res.value.classList.remove('drop')
                }, 2000);
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
const checkTwoPasswords = ()=>{
    if(password.value != passwordRepeat.value){
        res.value.classList.add('drop');
        messageResponse.value = "passwords do not match";
        setTimeout(() => {
            messageResponse.value = null;
            res.value.classList.remove('drop')
        }, 700);
    }else {
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
const signUp = async ()=>{
    const response = await fetch('https://hotelini.herokuapp.com/create-account', {
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
        const userID = data._id;
        res.value.classList.add('drop');
        messageResponse.value = "sucessfully sign up"; 
        sessionStorage.setItem("userID", userID)
        console.log(sessionStorage.getItem('userID'));
        setTimeout(() => {
            const route = useRouter();
            route.push('/');
        }, 1500);
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
.alert{
    transform: translateY(-100px);
    background-color: var(--orange-web);
    width: max-content;
    position: absolute;
    top: 0;
    border-radius: 10px;
    padding: 4px 7px;
    transition: all 100ms cubic-bezier(0.19, 1, 0.22, 1);
}
.drop {
    transform: translateY(100px);
    border-radius: 10px;
}
</style>