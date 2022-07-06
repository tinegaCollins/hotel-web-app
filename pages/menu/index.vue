<template>
    <div class="everything">
        <nav-bar/>
        <img @click="toggleMenu" src="../../assets/icons/arrow-down-svgrepo-com.svg" alt="" srcset="">
        <p></p>
        <div class="navigations" ref="nav">
          <NuxtLink to="/menu/main-meal"  @click="toggleMenu">Main Meals</NuxtLink>
          <NuxtLink to="/menu/beverage"  @click="toggleMenu">Bevarages</NuxtLink>
          <NuxtLink to="/menu/snack"  @click="toggleMenu">snacks</NuxtLink>
          <NuxtLink to="/menu/salad"  @click="toggleMenu">Salads</NuxtLink>
        </div>
        <NuxtPage></NuxtPage>
    </div>
</template>

<script setup lang="ts">

useHead({
  title: 'hotel menu',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  link: [
    { rel: 'icon', href: '../assets/icons/undraw_breakfast_psiw.svg' }
  ]
})
const nav = ref(null);
function toggleMenu(){
  nav.value.classList.toggle("showMenu");
}
</script>

<style>
.everything {
  position: relative;
}
.everything > img {
  height: 30px;
}
.navigations {
  flex-direction: column;
  background-color: var(--main-orange);
  padding: 20px 10px;
  row-gap: 35px;
  display: none;
  height: 0%;
  transition: all 300ms ease-in-out;
}
.showMenu{
  display: flex;
  height: 100%;
}
.navigations a {
  color: #333;
  text-decoration: none;
  font-size: 1.2rem;
  font-family: var(--title-font);
}
.navigations a:active {
  color: var(--carolina-blue);
}
</style>