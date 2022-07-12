<template>
    <div class="specials-wrapper">
        <h2> specials today</h2>
        <div class="specials-cards">
            <div class="single-card" v-for="item in data" :key="item._id">
                <img :src="item.image" alt="food" srcset="">
                <div class="details">
                    <h3>{{ item.name}}</h3>
                    <p>By Chef Ali</p>
                    <p> {{item.price}} ksh + delivery fee</p>
                </div>
                <div class="add-to-cart" @click="addToCart(item._id)"><p>add to cart</p></div>
            </div>
        </div>
        <div class="skeleton" v-if="dataFetched">
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
import { useCartStore } from "~~/stores/useCart";
import { useLoginStore } from "~~/stores/useLoginStore";
const logins = useLoginStore();
const main = useCartStore();
const data = ref();
let userID:string;
const dataFetched = ref<boolean>(true);
onMounted(async ()=>{
   try{
     const resonse = await fetch('https://hotelini.herokuapp.com/specials',{
        method: 'GET'
    })
    data.value =await resonse.json()
    if(data.value){
        dataFetched.value = false
    }
   }
   catch {
    console.log("couldnt get the data");
   }
   userID = logins.getID;
   stateChange()
})
const stateChange = ()=>{
    main.$subscribe( async (mutation,state)=>{
         const dataToSend = {
            id: userID,
            newCart: main.cart
         }
         const response = await fetch(`https://hotelini.herokuapp.com/update-cart`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataToSend)
         })
         const ress = await response.json();
    })
}
const addToCart = (id:string) => {
    main.addtoCart(id);
}
</script>

<style>
.specials-wrapper {
    margin-top: 30px;
    font-family: var(--title-font);
    padding: 20px 20px;
}
.specials-wrapper h2{
    position: relative;
}
.specials-wrapper h2::before{
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 10%;
    height: 3px;
    background-color: var(--main-orange);
    transform: translateY(-1px);
}
.specials-cards{
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
}
.single-card {
    display: flex;
    column-gap: 20px;
    flex-wrap: nowrap;
    border-radius: 5px;
    padding: 8px;
    position: relative;
    width: 100%;
    border: 1px solid var(--side-orange);
    transition: border 200ms cubic-bezier(0.23, 1, 0.320, 1);
}
.single-card .add-to-cart {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: .7rem;
    padding: 7px;
    border: 1px solid var(--side-orange);
    transition: all 300ms ease-out;
}
.single-card .add-to-cart:hover {
    background-color: var(--side-orange);
    color: #fff;
    cursor: pointer;
}
.single-card img {
    height: 120px;
    width: 120px;
    object-fit: cover;
}
.single-card .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 5px;
}
.skeleton .single-card{
    height: 90px;
    padding: 0;
    border: none;
    margin: 10px 0;
}
.skeleton .single-card .mover{
    height: 100%;
    width: 100%;
    background-color: rgba(254, 153, 0, .2);
    animation: loader 1200ms infinite backwards;
    animation-delay: 100ms;
}
.skeleton .single-card .second{
    animation-delay: 200ms;
}
.skeleton .single-card .third {
    animation-delay: 300ms;
}
.skeleton .single-card .fourth{
    animation-delay: 400ms;
}
.skeleton .single-card .fifth{
    animation-delay: 450ms;
}
.skeleton .single-card .six{
    animation-delay: 500ms;
}
@keyframes loader {
    from{
        width: 0%;
    }
    to{
        width: 100%;
    }
}
@media screen and (min-width: 768px) {
    .specials-cards{
        display: grid;
        grid-template-columns: auto auto;
        padding: 20px;
    }
    .single-card {
        border: 1px solid transparent;
    }
    .single-card:hover{
        border: 1px solid var(--side-orange);
    }
    .skeleton{
        display: grid;
        grid-template-columns: auto auto;
        padding: 20px;
    }
}
</style>