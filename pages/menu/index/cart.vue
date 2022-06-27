<template>
    <div class="cart">
        <h2>
            cart
            <img src="../../../assets/icons/cart-svgrepo-com.svg" alt="" srcset="">
        </h2>
        <div class="single-item">
            <img src="../../../assets/temp/Mandazis.jpg" alt="" srcset="">
            <div class="details">
                <h4>KSH 40</h4>
                <p>mandazis</p>
            </div>
            <div class="indicators">
                <div class="delete">
                    <img src="../../../assets/icons/trash-can-svgrepo-com.svg" alt="" srcset="">
                </div>
                <div class="quantity">
                    <p class="add">+</p>
                    <h5>1</h5>
                    <p class="minus">-</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.cart {
    font-family: var(--title-font);
    padding: 10px;
}
.cart h2{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    margin-bottom: 10px;
}
.cart h2 img{
    height:40px;
}
.single-item {
    border: 1px solid #333;
    height: 250px;
    width: 100%;
    border-radius: 10px;
    display: flex;
    position: relative;
    padding: 7px;
}
.single-item img {
    height: 170px;
    width: 170px;
    object-fit: cover;
    border-radius: 5px;
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

</style>