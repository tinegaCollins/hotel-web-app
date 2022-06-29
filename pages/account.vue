<template>
    <h1>account</h1>
</template>

<script setup lang="ts">
let userID:string;
let userData:object;
onMounted( async ()=>{
    if(localStorage.getItem("userID") === null){
        userID = sessionStorage.getItem("userID")
    }else{
        userID = localStorage.getItem("userID")
    }
     try{
        const dataToSend = {
            userID : userID
        }
        const response = await fetch('http://localhost:8000/get-user-data',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataToSend)
        });
            userData = await response.json();
            console.log(userData);
            
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
</script>