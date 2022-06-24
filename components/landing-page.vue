<template>
    <main class="main-wrapper">
        <h1>
            You want food, we deliver it to your doorstep
        </h1>
        <div class="location">
                <img src="../assets/icons/location-svgrepo-com.svg" alt="location" srcset="">
                <p @click="toggleSearch"> 
                    add a location
                    <img ref="arrow" src="../assets/icons/arrow-down-svgrepo-com.svg" alt="" srcset="">
                </p>
                <p v-if="locationSelected" >elivering to kenya</p>
        </div>
        <input :class="classSelected" type="text" placeholder="search location">
    </main>
</template>

<script setup>
const locationSelected = ref(false);
const arrow = ref(null);
const classSelected = ref('hide');
function toggleSearch(){
    //toggle between show and hide
    classSelected.value = classSelected.value === 'show' ? 'hide' : 'show';
    arrow.value.animate([
        {transform: 'rotate(0deg)'},
        {transform: 'rotate(270deg)'}
    ], {
        duration: 300,
        fill: 'both'
    });
}


</script>

<style scoped>
.main-wrapper {
    font-family: var(--title-font);
    padding: 50px 20px 0 20px;
    display: grid;
    place-items: center;
}
.main-wrapper h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #333;
}
.main-wrapper .location {
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
}
main > input {
    margin-top: 20px;
    width: 80%;
    border: 1px solid var(--main-orange);
    border-radius: 5px;
    padding: 7px;
    font-size: 1.2rem;
    font-family: var(--title-font);
    font-weight: bold;
}
.show {
    visibility: visible;
}

.hide{
    visibility: hidden;
}
</style>