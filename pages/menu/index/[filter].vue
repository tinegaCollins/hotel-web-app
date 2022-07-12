<template>
    <div class="all-meals">
        <div class="content-wrapper" v-for="item in data" :key="item._id">
            <img :src="item.image" alt="" srcset="">
            <div class="content">
                <p>{{ item.name }}</p>
                <p>ksh {{item.price}}</p>
            </div>
            <div class="add-to-cart" @click="addToCart(item._id)"><p>add to cart</p></div>
        </div>
        <div class="skeleton" v-if="ifDataFetched">
                <div class="single-card">
                    <div class="mover"></div>
                </div>
                <div class="single-card">
                    <div class="mover second"></div>
                </div>
                <div class="single-card">
                    <div class="mover third"></div>
                </div>
                <div class="single-card">
                    <div class="mover fourth"></div>
                </div>
                <div class="single-card">
                    <div class="mover fifth"></div>
                </div>
                <div class="single-card">
                    <div class="mover six"></div>
                </div>
                
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
const ifDataFetched = ref<boolean>(true);
onMounted( async ()=>{
    userID = logins.getID
    const response = await fetch(`https://hotelini.herokuapp.com/filter/${route.params.filter}`)
    data.value =await response.json();
    if(data.value){
        ifDataFetched.value = false
    }
    stateChange()
})

const stateChange = ()=> {
        cart.$subscribe( async (mutation,state)=>{
         const dataToSend = {
            id: userID,
            newCart: cart.cart
         }
         const response = await fetch(`https://hotelini.herokuapp.com/update-cart`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataToSend)
         })
         const ress = await response.json();
    })
}
const addToCart =async (id:string) => {
    cart.addtoCart(id);
    stateChange()
}
</script>

<style scoped>
.skeleton{
    width: 90vw;
}
</style>