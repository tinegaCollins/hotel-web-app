<template>
    <div class="other-meals" v-if="items">
        <h2>chef specials</h2>
        <main>
            <div class="chefs-special" v-for="item in items" :key="item._id">
                <h3>chef Lorem's {{ item.name }}</h3>
                <img :src="item.image" alt="" srcset="">
                <ul>
                    <h3>ingredients</h3>
                    <li>chicken</li>
                    <li>tomatoes</li>
                    <li>briani</li>
                </ul>
                <div class="add-to-cart" @click="addToCart(item._id)"><p>add to cart</p></div>
            </div>
        </main>
    </div>
</template>


<script setup lang="ts">
import { useCartStore } from '~~/stores/useCart';
import { useLoginStore } from "~~/stores/useLoginStore";
const logins = useLoginStore();
const cart = useCartStore()

let userID:string;
const items = ref();
onMounted( async ()=>{
    userID = logins.getID;
    const response = await fetch('http://localhost:8000/get-three-random');
    const data = await response.json();
    items.value = data;
})


const stateChange = ()=>{
    cart.$subscribe( async (mutation,state)=>{
         const dataToSend = {
            id: logins.getID,
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

const addToCart = async (id:string)=>{
    cart.addtoCart(id);
    stateChange()
}
</script>


<style scoped>
.other-meals {
    width: 95vw;
    position: absolute;
    left: 0;
    height: 100vh;
    font-family: var(--title-font);
    padding: 20px;
}
.other-meals main{
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    row-gap: 20px;
} 
.chefs-special {
    border: 1px solid #333;
    padding: 6px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    width: 100%;
    position: relative;
}
.chefs-special .add-to-cart {
    font-size: .7rem;
    padding: 10px;
    border: 1px solid var(--side-orange);
    transition: all 300ms ease-out;
}
.chefs-special .add-to-cart:hover {
    background-color: var(--side-orange);
    color: #fff;
    cursor: pointer;
}
@media screen and  (min-width: 520px){
    .other-meals main{
        width: 100%;
        justify-content: space-around;
    }
    .chefs-special {
        width: 300px;
    }
}
.chefs-special img{
    height: 200px;
    width: 200px;
    border-radius: 10%;
    object-fit: cover;
}
ul {
    align-self: flex-start;
    margin-left: 10px;
    position: relative;
    width: 100%;
}
#chefs-pic {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    object-fit: cover;
    position: absolute;
    top: 20%;
    right: 10%;
}
</style>