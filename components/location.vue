<template>
    <div class="location">
        <img src="../assets/icons/location-svgrepo-com.svg" alt="location" srcset="">
        <p @click="toggleSearch"> 
            add a location
            <img ref="arrow" src="../assets/icons/arrow-down-svgrepo-com.svg" alt="" srcset="">
        </p>
        <p v-if="locationSelected" >elivering to kenya</p>
    </div>
    <input :class="classSelected" type="text" placeholder="search location">

</template>


<script setup>
const locationSelected = ref(false);
const arrow = ref(null);
const classSelected = ref('hide');
function toggleSearch(){
    //toggle between show and hide
    classSelected.value = classSelected.value === 'show' ? 'hide' : 'show';
    arrow.value.classList.toggle('up');
}


</script>

<style scoped>

.location {
    margin-top: 30px;
    display: flex;
    column-gap: 20px;
    align-items: center;
}
.location p {
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