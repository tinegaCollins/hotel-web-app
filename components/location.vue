<template>
    <div class="location">
        <img src="../assets/icons/location-svgrepo-com.svg" alt="location" srcset="">
        <div class="toggle" @click="toggleSearch"> 
            <h5>{{ locationSelected }}</h5>
            <img ref="arrow" src="../assets/icons/arrow-down-svgrepo-com.svg" alt="" srcset="">
        </div>
    </div>
    <input :class="classSelected" type="text" placeholder="delivering to ...">

</template>


<script setup lang="ts">
import { json } from 'stream/consumers';

const locationSelected = ref<string>();
const ifLocationAvailable = ref<boolean>();
const arrow = ref(null);
const classSelected = ref('hide');
function toggleSearch(){
    //toggle between show and hide
    classSelected.value = classSelected.value === 'show' ? 'hide' : 'show';
    arrow.value.classList.toggle('up');
}
const getLocation = async (id:string)=>{
    const response = await fetch(`http://localhost:8000/get-location/${id}`)
    const locationData = await response.json();
    locationSelected.value = locationData.location
}
let userID:string;
onMounted(()=>{
    if(localStorage.getItem("userID") === null){
        if(sessionStorage.getItem("userID") === null){
            locationSelected.value = "add a location"
        }
        else {
            userID = sessionStorage.getItem("userID")
            getLocation(userID);
        }
    }else{
        userID = localStorage.getItem("userID");
        getLocation(userID);
    }
})
</script>

<style scoped>

.location {
    margin-top: 30px;
    display: flex;
    column-gap: 20px;
    align-items: center;
}
.location .toggle {
    display: flex;
    align-items: center;
    column-gap: 10px;
}
.location:hover{
    cursor: pointer;
}
.location img {
    height: 25px;
    width: 25px;
    transition: transform 150ms cubic-bezier(0.39, 0.575, 0.565, 1);
}
.up {
    transform: rotate(180deg);
}
 input {
    margin-top: 20px;
    width: 70%;
    border: 1px solid var(--main-orange);
    border-radius: 5px;
    padding: 7px;
    font-size: 1.2rem;
    font-family: var(--title-font);
    font-weight: bold;
}
@media screen and (max-width: 768px) {
     input {
        width: 90%;
    }
}
.show {
    visibility: visible;
}

.hide{
    visibility: hidden;
}
</style>