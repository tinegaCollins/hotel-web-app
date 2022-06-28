<template>
    <div class="specials-wrapper">
        <h2> specials today</h2>
        <div class="specials-cards">
            <div class="single-card">
                <img src="../assets/temp/food1.png" alt="food" srcset="">
                <div class="details">
                    <h3>chicken pilau</h3>
                    <p>By Chef Ali</p>
                    <p> 800 ksh + delivery fee</p>
                </div>
                <img class="plus-sign" src="../assets/icons/plus-svgrepo-com.svg" alt="" srcset="">
            </div>
            <div class="single-card">
                <img src="../assets/temp/food1.png" alt="food" srcset="">
                <div class="details">
                    <h3>chicken pilau</h3>
                    <p>By Chef Ali</p>
                    <p> 800 ksh + delivery fee</p>
                </div>
                <img class="plus-sign" src="../assets/icons/plus-svgrepo-com.svg" alt="" srcset="">
            </div>
            <div class="single-card">
                <img src="../assets/temp/food1.png" alt="food" srcset="">
                <div class="details">
                    <h3>chicken pilau</h3>
                    <p>By Chef Ali</p>
                    <p> 800 ksh + delivery fee</p>
                </div>
                <img class="plus-sign" src="../assets/icons/plus-svgrepo-com.svg" alt="" srcset="">
            </div>
        </div>
    </div>
</template>

<style>
.specials-wrapper {
    margin-top: 30px;
    font-family: var(--title-font);
    padding: 20px 10px;
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
    row-gap: 20px;
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
.single-card .plus-sign {
    height: 25px;
    width: 25px;
    position: absolute;
    right: 10px;
    top: 10px;
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
    align-items: center;
    row-gap: 5px;
}
@media screen and (min-width: 768px) {
    .specials-cards{
        flex-direction: row;
        justify-content: space-around;
        padding: 20px;
    }
    .single-card {
        width: 40%;
    }
    .single-card {
        border: 1px solid transparent;
    }
    .single-card:hover{
        border: 1px solid var(--side-orange);
    }
}
</style>