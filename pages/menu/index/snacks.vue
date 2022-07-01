<template>
    <div class="all-meals">
        <p>snacks</p>
        <div class="content-wrapper" v-for="item in data" :key="item._id">
            <img :src="item.tempImage" alt="" srcset="">
            <div class="content">
                <p>{{ item.name }}</p>
                <p>ksh {{item.price}}</p>
                <NuxtLink to="/" >go to page</NuxtLink>
            </div>
            <button>cart</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import '../../../assets/styles/meals.css'
const data = ref();
onMounted( async ()=>{
    const response = await fetch('http://localhost:8000/filter/snack')
    data.value =await response.json();
})
</script>