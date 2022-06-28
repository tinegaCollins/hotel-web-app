<template>
    <main>
    <nav-bar/>
    <div class="top-cart-bar">
        <h2>
            cart 
            (<strong>{{ NumberOfItemsInCart }}</strong>)
        </h2>
        <p>checkout KSH {{totalToPay}}</p>
    </div>
    <div class="cart">
        <div class="single-item">
            <img src="../../../assets/temp/Mandazis.jpg" alt="" srcset="">
            <div class="details">
                <h4>KSH 40</h4>
                <p>mandazis</p>
            </div>
            <div class="indicators">
                <div class="delete">
                    <img src="../../../assets/icons/trash-can-svgrepo-com.svg" alt="" srcset="">
                    <p>remove</p>
                </div>
                <div class="quantity">
                    <p class="add">+</p>
                    <h5>1</h5>
                    <p class="minus">-</p>
                </div>
            </div>
        </div>
        <div class="single-item">
            <img src="../../../assets/temp/chicken.jpeg" alt="" srcset="">
            <div class="details">
                <h4> KSH {{ foodItem.price}}</h4>
                <p>{{ foodItem.name}}</p>
            </div>
            <div class="indicators">
                <div class="delete">
                    <img src="../../../assets/icons/trash-can-svgrepo-com.svg" alt="" srcset="">
                    <p>remove</p>
                </div>
                <div class="quantity">
                    <p class="add">+</p>
                    <h5>1</h5>
                    <p class="minus">-</p>
                </div>
            </div>
        </div>
    </div>
    </main>
</template>



<script setup lang="ts">
const foodItem = ref({
    name: "fried chicken",
    price: 700,
})
const NumberOfItemsInCart = ref<number>(4);
const totalToPay = ref<number>(77);

</script>





<style>
.top-cart-bar {
    font-family: var(--title-font);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:  0 15px;
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
    flex-direction: column;
    row-gap: 20px;
}
.single-item {
    border: 1px solid #333;
    height: 250px;
    width: 100%;
    border-radius: 10px;
    display: flex;
    position: relative;
    padding: 10px;
}
.single-item .details {
    width: 100%;
}
.single-item > img {
    height: 160px;
    width: 160px;
    object-fit: cover;
    border-radius: 5px;
}
.single-item .details h4 {
    font-size: 1.5rem;
    position: absolute;
    right: 20px;
    top: 10px;
}
.single-item .details p {
    margin: 30px 10px;
    font-size: 1.3rem;
    color: var(--main-orange);
    font-weight: 1000;
}

.indicators {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 5px 20px;
}
.indicators img {
    height: 30px;
    width: 30px;
}
.quantity {
    display: flex;
    column-gap: 5px;
    font-size: 2rem;
    align-items: center;
    height: min-content;
}
.quantity p {
    padding: 0 11px;
    height: 60%;
}
.add {
    background-color: var(--carolina-blue);
}
.minus {
    background-color: var(--raisin-blue);
    color: #fff;
}
.delete {
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>