<template>
    <div class="all-meals">
        <div class="content-wrapper" v-for="item in data" :key="item._id">
            <img :src="item.tempImage" alt="" srcset="">
            <div class="content">
                <p>{{ item.name }}</p>
                <p>ksh {{item.price}}</p>
            </div>
            <div class="add-to-cart" @click="addToCart(item._id)"><p>add to cart</p></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import '../../../assets/styles/meals.css'
import { useCartStore } from '~~/stores/useCart';
import { useLoginStore } from '~~/stores/useLoginStore';
const logins = useLoginStore();
const cart = useCartStore();
const route = useRoute();
useHead({
  title: `${route.params.filter}s`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  link: [
    { rel: 'icon', href: '../assets/icons/undraw_breakfast_psiw.svg' }
  ]
})
const data = ref();
let userID:string;
onMounted( async ()=>{
    userID = logins.getID
    const response = await fetch(`http://localhost:8000/filter/${route.params.filter}`)
    data.value =await response.json();
})

const stateChange = ()=> {
        cart.$subscribe( async (mutation,state)=>{
         const dataToSend = {
            id: userID,
            newCart: cart.cart
         }
         const response = await fetch(`http://localhost:8000/update-cart`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataToSend)
         })
         const ress = await response.json();
         console.log(ress);
    })
}
const addToCart =async (id:string) => {
    const itemToAdd = {
        itemID : id,
        quantity: 0
    }
    cart.addtoCart(itemToAdd);
    stateChange()
}
</script>