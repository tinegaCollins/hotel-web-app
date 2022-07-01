<template>
    <div class="specials-wrapper">
        <h2> specials today</h2>
        <div class="specials-cards">
            <div class="single-card" v-for="item in data" :key="item._id">
                <img :src="item.tempImage" alt="food" srcset="">
                <div class="details">
                    <h3>{{ item.name}}</h3>
                    <p>By Chef Ali</p>
                    <p> {{item.price}} ksh + delivery fee</p>
                </div>
                <div class="add-to-cart"><p>add to cart</p></div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
const data = ref();
onMounted(async ()=>{
   try{
     const resonse = await fetch('http://localhost:8000/specials',{
        method: 'GET'
    })
    data.value =await resonse.json()
   }
   catch {
    console.log("couldnt get the dat");
    
   }
})
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
    background-color: var(--alice-blue);
    padding: 7px;
    border-radius: 10px;
    transition: background-color 100ms ease-out;
}
.single-card .add-to-cart:hover {
    background-color: var(--carolina-blue);
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
@media screen and (min-width: 768px) {
    .specials-cards{
        display: grid;
        grid-template-columns: auto auto;
        padding: 20px;
    }
    .single-card {
        /* width: 95%; */
        border: 1px solid transparent;
    }
    .single-card:hover{
        border: 1px solid var(--side-orange);
    }
}
</style>