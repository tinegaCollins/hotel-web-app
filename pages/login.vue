<template>
    <main>
        <navBar/>
        <div class="login-wrapper">
            <p ref="res" class="alert">{{messageResponse}}</p>
            <img src="~/assets/icons/undraw_breakfast_psiw.svg" alt="">
        <h1>log in</h1>
        <div class="form">
            <p>{{ userResponse}}</p>
            <p>{{ wrongPassword }}</p>
            <input type="text" placeholder="phone number" v-model="phone" @mouseout="checkPhone">
            <input type="password" name="" id="" placeholder="password" v-model="password" @keyup="checkPassword">
            <div class="keep-logged">
                <label for="checkbox"> keep me logged in</label>
                <input type="checkbox" id="checkbox" v-model="ifKeepLogged">
            </div>
            <button :disabled="ifCorrectData" @click="login">login</button>
            <div class="other">
                <a href="#">forgot your password</a>
                 <nuxt-link to="/signup">sign up</nuxt-link>
            </div>
        </div>
        </div>
    </main>
</template>


<script setup lang="ts">
import icon from '../assets/icons/undraw_breakfast_psiw.svg';
useHead({
  title: 'log in',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  link: [
    { rel: 'icon', href: icon}
  ]
})
    const phone = ref<string>();
    const userResponse = ref<string>();
    const messageResponse = ref<string>();
    const res = ref();
    const checkPhone = async ()=>{
        const phoneToSend = {
            phone : phone.value
        }
        const response = await fetch('https://hotelini.herokuapp.com/check-number', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(phoneToSend)
        })
        const data = await response.json();
        if(data != true){
            res.value.classList.add('drop');
            messageResponse.value = "invalid phone number";
            setTimeout(() => {
                messageResponse.value = null;
                res.value.classList.remove('drop')
            }, 700);
        }
        else {
            userResponse.value = null;
        }
    }
    const password = ref<string>();
    const ifCorrectData = ref<boolean>(true);
    const checkPassword = ()=>{
        wrongPassword.value = null;
        if(password.value != "" || userResponse == null){
            ifCorrectData.value = false
        }
    }
    const wrongPassword = ref<string>();
    const userID = ref<string>();
    const ifKeepLogged = ref<boolean>();
    const login = async ()=> {
        const dataToSend = {
            phone : phone.value,
            password: password.value
        }
        const response = await fetch('https://hotelini.herokuapp.com/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataToSend)
        })

        const data = await response.json();
        if(data === false){
            res.value.classList.add('drop');
            messageResponse.value = "wrong password";
            setTimeout(() => {
                messageResponse.value = null;
                res.value.classList.remove('drop')
            }, 1500);
        }else {
            //redirect to other page
            res.value.classList.add('drop');
            messageResponse.value = "log in succesfull";
            setTimeout(() => {
                messageResponse.value = null;
                res.value.classList.remove('drop')
            }, 1500);
            userID.value = data._id
            if (ifKeepLogged.value == true){
                localStorage.setItem('userID', userID.value)
            }else {
                sessionStorage.setItem('userID', userID.value)
            }
            //back to page it was beforee
            const route = useRouter();
            route.push('/');
        }
    }
</script>


<style>

.login-wrapper, .signup-wrapper {
    font-family: var(--title-font);
    text-align: center;
    display: grid;
    place-items: center;
}
.login-wrapper  > img, .signup-wrapper > img {
    height: 60px;
    width: 60px;
    margin-top: 10px;
}
.form {
    margin-top: 20px;
    display: grid;
    place-items: center;
    row-gap: 30px;
    width: 100%;
}
.form input {
    height: 44px;
    width: 80%;
    outline: none;
    border: none;
    border: 1px solid var(--main-orange);
    border-radius: 33px;
    padding: 0 10px;
    color: black;
    font-size: 1rem;
}
@media screen and (min-width: 600px) {
    .form {
        width: 40%;
    }
    .login-wrapper, .signup-wrapper {
        display: grid;
        place-items: center;
    }
}
.form input:focus{
    border: 1px solid var(--carolina-blue);
}
.form button {
    outline: none;
    border: none;
    background-color: var(--main-orange);
    border-radius: 30px;
    padding: 13px 25px;
    font-size: 1.2rem;
}
.form .other {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}
.form .other a{
    color: black;
}
.keep-logged {
    display: flex;
    width: 100%;
    height: 30px;
    position: relative;
    bottom: 15px;
}
.keep-logged label {
    width: 100%;
}
.keep-logged input {
    height: 20px;
}
.login-wrapper button {
    position: relative;
    bottom: 20px;
}
</style>