<template>
    <div class="account-wrapper">
        <nav-bar/>
        <div class="account-details" v-if="userData">
            <h3>not much to show here</h3>
            <p>phone: {{userData.phone}}</p>
            <p>location: {{ userData.location}}</p>
            <button @click.once="logOut">log out</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useLoginStore } from '../stores/useLoginStore';
const logins = useLoginStore();


let userID:string;
let userData = ref();
onMounted( async ()=>{
    userID = logins.getID;
     try{
        console.log(userID);
        const dataToSend = {
            userID : userID
        }
        const response = await fetch('https://hotelini.herokuapp.com/get-user-data',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataToSend)
        });
            userData.value = await response.json();  
        }
    catch {
        console.log("catch")
    }
})
useHead({
  title: `account details`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  link: [
    { rel: 'icon', href: '../assets/icons/undraw_breakfast_psiw.svg' }
  ]
})

const logOut = ()=>{
    logins.$reset();
    localStorage.clear();
    sessionStorage.clear();
    const router = useRouter();
    const after = async () => {
        await router.push('/');
        await window.location.reload();
    }
    after();
}

</script>

<style>
.account-details {
    font-family: var(--title-font);
    text-align: center;
    padding-top: 40px;
}
.account-details > * {
    margin-top: 10px;
}
.account-details button {
    font-size: .9rem;
    padding: 9px;
    border: 1px solid var(--side-orange);
    transition: all 300ms ease-out;
    background-color: #fff;
}
.account-details button:hover {
    background-color: var(--side-orange);
    color: #fff;
    cursor: pointer;
}
</style>