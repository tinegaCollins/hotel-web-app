<template>
    <main class="login-wrapper">
        <navBar/>
        <img src="../assets/icons/undraw_breakfast_psiw.svg" alt="">
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
    </main>
</template>


<script setup lang="ts">
    const phone = ref<string>();
    const userResponse = ref<string>();
    const checkPhone = async ()=>{
        const phoneToSend = {
            phone : phone.value
        }
        const response = await fetch('http://localhost:8000/check-number', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(phoneToSend)
        })
        const data = await response.json();
        if(data != true){
            userResponse.value = "invalid phone number"
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
        const response = await fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataToSend)
        })

        const data = await response.json();
        if(data === false){
            wrongPassword.value = "wrong password"
        }else {
            //redirect to other page
            wrongPassword.value = "log in sucessful"
            userID.value = data._id
            if (ifKeepLogged.value == true){
                localStorage.setItem('userID', userID.value)
            }else {
                sessionStorage.setItem('userID', userID.value)
            }
        }
    }
</script>


<style>

.login-wrapper, .signup-wrapper {
    font-family: var(--title-font);
    text-align: center;
}
.login-wrapper  > img, .signup-wrapper > img {
    height: 90px;
    width: 90px;
    margin-top: 10px;
}
.form {
    margin-top: 20px;
    display: grid;
    place-items: center;
    row-gap: 30px;
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