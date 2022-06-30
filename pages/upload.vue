<template>
<h3>upload page</h3>

<div v-for="image in images" :key="image._id">
<p>{{image.name}}</p>
<p>{{image.type}}</p>
<img :src="src"  alt="" srcset="">
</div>
</template>

<script setup lang="ts">
import axios from 'axios';
const images = ref();
const src = ref();
onMounted(()=>{
    let dataFromServer;
    axios.get('http://localhost:8000/get-meals')
    .then((res)=>{
        dataFromServer = res.data;
        images.value = dataFromServer;
    })
    .then(()=>{
        const returnedB64 = Buffer.from(dataFromServer[1].image.data).toString('base64');
        src.value = returnedB64;
        console.log(returnedB64)
    })
    .catch((err)=> console.log(err));
})

</script>