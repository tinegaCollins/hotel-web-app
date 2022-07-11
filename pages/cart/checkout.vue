<template>
<div class="checkout-wrapper">
    <nav-bar/>
    <div class="checkout-content">
      <h3>checkout</h3>
      <p>KSH{{totalToPay}}</p>
     <div class="inut">
      <label for="phone">enter your mpesa number</label>
      <p>do not enter the pin on your phone</p>
      <p>this is a test project</p>
       <input type="text" name="" id="phone" v-model="phone">
     </div>
      <button @click="pay">pay with mpesa</button>
    </div>
</div>
</template>

<script setup lang="ts">
import { useCartStore } from '~~/stores/useCart';
import { useLoginStore } from '~~/stores/useLoginStore';
const cart = useCartStore();
const logins = useLoginStore();
useHead({
  title: 'check out',
  link: [
    { rel: 'icon', href: '../assets/icons/undraw_breakfast_psiw.svg' }
  ]
})

const phone = ref<string |number>();
onMounted( async()=>{
  const res = await fetch(`https://hotelini.herokuapp.com/get-phone/${logins.getID}`);
  const data = await res.json();
  phone.value = data.phone;
})
const totalToPay = ref<number>();
totalToPay.value = cart.totalToPay;
const router = useRouter();
const pay = async ()=>{
    if(phone == undefined){
        router.push('/login');
    }else{
        const response = await fetch('https://tinypesa.com/api/v1/express/initialize',{
            method: 'POST',
            headers: {
                Apikey: "Me3s8tLM8vW",
                "Content-Type": "application/x-www-form-urlencoded",   
            },
            body: `amount=${totalToPay.value}&msisdn=${phone.value}&account_no=200`,
    });
    const data = await response.json();
    if(data.success){
      alert('request sent to mpesa'); 
    }
    }
}
</script>

<style>
.checkout-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    font-family: var(--title-font);
}
.checkout-content .inut {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    font-family: var(--title-font);
}
.checkout-content input {
    width: 300px;
    height: 40px;
    border: 1px solid var(--main-orange);
    border-radius: 5px;
    padding: 0 10px;
    font-size: var(--font-size);
    font-family: var(--title-font);
    color: var(--text-color);
}
.checkout-content button {
    width: 300px;
    height: 40px;
    border: 1px solid var(--main-orange);
    border-radius: 5px;
    padding: 0 10px;
    font-size: var(--font-size);
    font-family: var(--title-font);
    color: var(--text-color);
    background-color: var(--main-orange);
    transition: background-color .2s ease-in-out;
}
.checkout-content button:hover {
  cursor: pointer;
  background-color: var(--main-orange-dark);
}
</style>