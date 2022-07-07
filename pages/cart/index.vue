<template>
    <main>
    <nav-bar/>
    <div class="top-cart-bar">
        <h2>
            cart 
            (<strong>{{cartNumber}}</strong>)
        </h2>
        <p>sub total KSH {{checkout}}</p>
    </div>
    <div class="cart" v-if="cartItemsDisplay">
        <div class="items">
            <div class="single-item" v-for="item in cartItemsDisplay" :key="item._id">
                <img :src="item.image" alt="" srcset="">
                <div class="details">
                    <h4>KSH {{item.price}}</h4>
                    <p>{{item.name}}</p>
                    <div class="quantity">
                        <p class="add" @click="changeQuantity(item._id,true)">+</p>
                        <h5>{{item.quantity}}</h5>
                        <p class="minus" @click="changeQuantity(item._id,false)">-</p>
                    </div>
                </div>
                <div class="delete" @click="removeFromCart(item._id)">
                    <img src="../../../assets/icons/x-svgrepo-com.svg" alt="" srcset="">
                </div>
            </div>
        </div>
        <div class="checkout">
            <div class="sub">
                <p>sub total</p>
                <h4>Ksh {{checkout}}</h4>
            </div>
            <div class="delivery-fee">
                <p>delivery</p>
                <h4>KSH 300</h4>
            </div>
            <div class="total">
                <p>total</p>
                <h4>{{total}}</h4>
            </div>
            <button @click="pay">proceed to pay</button>
        </div>
    </div>

    </main>
</template>



<script setup lang="ts">
import { useCartStore } from '~~/stores/useCart';
import { useLoginStore } from '~~/stores/useLoginStore';
const logins = useLoginStore()
const cart = useCartStore();


const cartNumber = ref<number | string>();
cart.$subscribe ((state)=>{
    cartNumber.value = cart.cart.length
})
useHead({
  title: 'cart',
  link: [
    { rel: 'icon', href: '../assets/icons/undraw_breakfast_psiw.svg' }
  ]
})

const cartItemsDisplay = ref();
const emptyCart = ref<boolean>(false);
let phone:string;
onMounted( async ()=>{
    const messageToSend = {
        ids : cart.cart
    }
    const response = await fetch('http://localhost:8000/get-specific-ids',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(messageToSend)
    })
    const data = await response.json();
    if(data == []){
        emptyCart.value = true;
    }else {
        cartItemsDisplay.value = data;
        balanceToPay()
    }
    cartNumber.value = cart.cart.length

    const phoneResponse = await fetch(`http://localhost:8000/get-phone/${logins.getID}`)
    const phoneData = await phoneResponse.json()
    phone = phoneData.phone;
})
const changeQuantity = async (id:string,b:boolean)=>{
    let elementToChange = cartItemsDisplay.value.find((element)=>{
        return element._id === id
    })
    const response = await fetch(`http://localhost:8000/get-price/${id}`)
    const price = await response.json()
    if(b === true){
        elementToChange.quantity ++
        elementToChange.price = elementToChange.price + price.price
    }
    else if( b === false){
        if( elementToChange.quantity > 1){
            elementToChange.quantity -- 
            elementToChange.price = elementToChange.price - price.price
        }
    }
    balanceToPay()
}

const total = ref<number>();
const checkout = ref<string | number>();
const balanceToPay = ()=>{
    const totalPaid:number = cartItemsDisplay.value.reduce((accumulator:number,element)=>{
        let total = accumulator + element.price
        return total
    },0)
    checkout.value = totalPaid;
    total.value = totalPaid + 300;
}

const stateChange = ()=>{
    cart.$subscribe( async ()=>{
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
    })
}


const removeFromCart = (id:string)=>{
    const itemToRemove = cartItemsDisplay.value.find((element)=>{
        return element._id == id
    })
    let index = cartItemsDisplay.value.indexOf(itemToRemove);
    cartItemsDisplay.value.splice(index,1)
    cart.removeFromCart(id);
    balanceToPay()
}
const router = useRouter();
const pay = async ()=>{
    const order = cartItemsDisplay.value.map((element)=>{
        return {
            item: element._id,
            price: element.price,
            quantity: element.quantity
        }
    })
    cart.updateOrder(order);
    if(phone == undefined){
        router.push('/login');
    }else{
        const response = await fetch('https://tinypesa.com/api/v1/express/initialize',{
            method: 'POST',
            headers: {
                Apikey: "Me3s8tLM8vW",
                "Content-Type": "application/x-www-form-urlencoded",   
            },
            body: `amount=${total.value}&msisdn=${phone}&account_no=200`,
    });
    const data = await response.json();
    }
}
</script>

<style>
.top-cart-bar {
    font-family: var(--title-font);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:  0 15px;
    margin-top: 10px;
}
.top-cart-bar p {
    background-color: var(--carolina-blue);
    padding: 8px;
}
.top-cart-bar h2{
    padding: 0 10px;
    margin: 15px 0 10px 0;
}
.top-cart-bar h2 strong {
    color: var(--carolina-blue);
}
.cart {
    font-family: var(--title-font);
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    row-gap: 20px;
}
.cart .items {
    width: 100%;
}

.cart .single-item {
    border: 1px solid black;
    margin-top: 10px;
    padding: .5em;
    position: relative;
    display: flex;
}
.cart .single-item > img {
    height: 80px;
    width: 80px;
    object-fit: cover;
}
.cart .single-item .details {
    margin-left: 10px;
}
.cart .single-item .details .quantity {
    margin-top: 15px;
    display: flex;
    align-items: center;
    column-gap: 10px;
    width: max-content;
    font-size: 1.5rem;
}
.cart .single-item .delete {
    margin-left: auto;
}
.add:hover, .minus:hover , .delete:hover {
    cursor: pointer;
}
.checkout {
    border-top: 3px solid var(--main-orange);
    width: 100%;
    padding: 5px;
    display: grid;
}
.checkout > * {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}
.checkout button {
    background-color: var(--main-orange);
    color: #fff;
    border: none;
    padding: .7em;
    border-radius: 5px;
    margin-top: 10px;
    margin-left: auto;
}
@media screen and (min-width: 768px) {
    .cart{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .checkout {
        border-top: none;
    }
}
</style>