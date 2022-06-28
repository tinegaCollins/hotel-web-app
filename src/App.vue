<script setup lang="ts">
import navBar from './components/nav-bar.vue'
import landingPageVue from './components/landing-page.vue';
import SpecialsToday from './components/specials-today.vue';
import otherMeals from './components/other-meals.vue';

</script>

<template>
    <div class="home-wrapper">
        <navBar/>
        <main class="all-wrapper">
          <div class="left">
            <img src="./assets/icons/photo2.png" alt="random photo" srcset="">
            <h2>Cooked for kenyans</h2>
          </div>
          <div class="mains">
            <landingPageVue />
            <SpecialsToday/>
            <otherMeals/>
          </div>
          <div class="right">
            <img src="./assets/icons/photo1.png" alt="random photo " srcset="">
            <h2> by kenyans</h2>
          </div>
        </main>
    </div>
</template>

<style>
.all-wrapper {
  display: grid;
  grid-template-columns: auto auto auto;
  position: relative;
}
.left, .right {
  position: sticky;
  display: none;
}
.left img, .right img {
  display: none;
  position: relative;
  z-index: -1;
}
.left::before, .right::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 1;
}
.left::before{
  background-color: rgba(0,0,0,0.7);
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  z-index: 1;

}
.left h2 {
  display: none;
  position: absolute;
  font-family: var(--title-font);
  font-size: 2.5rem;
  color: var(--main-orange);
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 100%;
}
.right h2 {
  display: none;
  position: absolute;
  font-family: var(--title-font);
  font-size: 2.5rem;
  color: #333;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 100%;
}
.mains {
    display: flex;
    flex-direction: column;
    align-items: center;
}
@media screen and (min-width: 1024px) {
    .left , .right {
        display: block;
        z-index: -1;
        position: sticky;
        top: 0;
        height: calc(100vh - 80px);
    }
    .left {
        grid-column-start: 1;
    }
    .left img, .right img {
        height: calc(100vh - 80px);
        display: block;
        width: 250px;
        object-fit: cover;
    }
    .left h2 {
        display: block;
    }
    .right h2 {
        display: block;
    }
}
</style>
