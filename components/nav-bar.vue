<template>
    <nav>
        <svg @click="slideShow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path :d="path" /></svg>
        <h3>
            hotel app
            <a href="/"><img src="../assets/icons/undraw_breakfast_psiw.svg" alt="icon" srcset=""></a>
        </h3>
        <div class="links" ref="links">
            <a href="/menu/main-meal">menu</a>
            <a href="/menu">gallery</a>
            <a href="/menu">contact us</a>
            <a href="/login" v-if="ifNotLoggedIn">login</a>
            <a href="/signup" v-if="ifNotLoggedIn">Sign up</a>
            <a href="/account" v-else>Your Account</a>
        </div>
        <div ref="cartClass" class="cart" :data-count="cartNumber">
            <Nuxt-link  to="/cart"><img src="../assets/icons/cart-svgrepo-com.svg"></Nuxt-link>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { useCartStore } from '~~/stores/useCart';
import { useLoginStore } from '~~/stores/useLoginStore';
const main = useCartStore();
const logins = useLoginStore();

const barsPath = "M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM64 256C64 238.3 78.33 224 96 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H96C78.33 288 64 273.7 64 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z";
const xPath =  "M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z";
const path = ref<string>(barsPath);
const links = ref(null);
function slideShow() {
    links.value.classList.toggle('show');
    path.value = path.value === barsPath ? xPath : barsPath;
}
let userID:string;
const ifNotLoggedIn = ref<boolean>(false);
onMounted(()=>{
   userID = localStorage.getItem("userID");
   if(userID === null){
        userID = sessionStorage.getItem("userID")
   }
   if(userID === null){
        ifNotLoggedIn.value = true;   
   }else {
        logins.setId(userID)
        try {
            const getCart = async ()=>{
                const response = await fetch(`http://localhost:8000/get-cart/${userID}`)
                const data = await response.json();
                for (let i = 0; i < data.length; i++) {
                    main.addtoCart(data[i])
                }
            }
            getCart()
            .then(()=>{
                let cartLength = main.cart.length;
                if(cartLength > 0){
                    cartClass.value.classList.add("cart1");
                    cartNumber.value = cartLength;
                }
                else {
                    cartClass.value.classList.remove("cart1")
                }
            })
        }
        catch {
            console.log('couldnt get da data')
        }
        
   }
})
const cartNumber = ref<number>();
const cartClass = ref();
main.$subscribe ((state)=>{
    let cartLength:number = main.cart.length
    if(cartLength > 0){
        cartClass.value.classList.add("cart1");
        cartNumber.value = cartLength;
    }
    else {
        cartClass.value.classList.remove("cart1")
    }
})
</script>
<style scoped>
    nav svg {
        height: 20px;
    }
    nav {
        display: flex;
        align-items: center;
        position: sticky;
        z-index: 1;
        top: 0;
        background-color: #fff;
        height: 60px;
        padding: 0 20px;
        column-gap: 20px;
        font-family: var(--title-font);
        text-align: left;
        box-shadow:  5px 5px 5px 3px rgba(0, 0, 0, .2);
    }
    .cart {
        position: absolute;
        right: 5%;
    }
    .cart img{
        height: 30px;
        width: 30px;
        transform: rotateY(180deg);
    }
    .cart1::before {
        content: attr(data-count);
        position: absolute;
        left: 5px;
        top: 7px;
        height: 15px;
        color: #333;
        width: 15px;
        border-radius: 50%;
        background-color: var(--main-orange);
        z-index: 1;
        font-size: .7rem;
        display: grid;
        place-items: center;
    }

    nav h3 {
        display: flex;
        align-items: center;
        column-gap: 7px;
    }
    /* change this to import icon directly */
    nav h3 img {
        width: 50px;
        height: 50px;
    }
    nav .links {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 30vh;
        width: 100%;
        background-color: var(--main-orange);
        position: absolute;
        top: 60px;
        left: -100%;
        padding-left: 40px;
        transition: left .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        z-index: 1;
    }
    .show {
        left: 0 !important;
    }
    nav .links a {
        color: #333;
        text-decoration: none;
        font-size: 1.2rem;
        font-family: var(--title-font);
        font-weight: bold;
    }
    nav .links .sign-up {
        background-color: var(--side-orange);
        padding: 10px;
        border-radius: 5px;
        font-size: 1.2rem;
        font-family: var(--title-font);
        font-weight: bold;
        width: max-content;
    }
    @media screen and (min-width: 968px) {
        nav {
            height: 80px;
        }
        nav svg {
            display: none;
        }
        nav h3{
            column-gap: 20px;
            margin-left: 40px;
        }
        nav h3 img {
            width: 70px;
            height: 70px;
        }
        nav .links {
            left: 50%;
            top: 0;
            width: max-content;
            height: 100%;
            padding-left: 0;
            flex-direction: row;
            align-items: center;
            column-gap: 30px;
            background: transparent;
        }
        nav .links .sign-up  {
            background-color: var(--main-orange);
            transition: background-color .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        nav .links .sign-up:hover {
            background-color: var(--side-orange);
        }
        nav .links {
            left: 55%;
        }
    }  
</style>