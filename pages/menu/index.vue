<template>
    <div class="everything">
        <nav-bar/>
        <div class="arrow-down" @click="toggleMenu">
          <img src="~/assets/icons/arrow-down-svgrepo-com.svg" alt="" srcset="">
          <p>{{title}}s</p>
        </div>
        <div class="navigations" ref="nav" @click="watchTitle">
          <div class="inner-wrapper" ref="innerWrapper">
            <NuxtLink to="/menu/main-meal"  @click="toggleMenu">Main Meals</NuxtLink>
            <NuxtLink to="/menu/beverage"  @click="toggleMenu">Bevarages</NuxtLink>
            <NuxtLink to="/menu/snack"  @click="toggleMenu">snacks</NuxtLink>
            <NuxtLink to="/menu/salad"  @click="toggleMenu">Salads</NuxtLink>
          </div>
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
    { rel: 'icon', href: '../../assets/icons/undraw_breakfast_psiw.svg'}
  ]
})
const nav = ref(null);
const innerWrapper = ref(null);
function toggleMenu(){
  nav.value.classList.toggle("height");
  innerWrapper.value.classList.toggle("inner-wrapper-vis");
}
function watchTitle(){
  title.value  = route.params.filter;
}
const route = useRoute();

const title  = ref(route.params.filter);

</script>

<style>
.everything {
  position: relative;
}
.navigations {
  background-color: var(--main-orange);
  height: 0px;
  transition: all 500ms ease;
}
.height{
  height: 130px;
}
.inner-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  visibility: hidden;
  z-index: 1;
  padding: 10px 20px;
  transition: all 100ms ease;
}
.inner-wrapper-vis{
  visibility: visible;
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
.arrow-down {
  font-family: var(--title-font);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  margin-top: 20px;
}
.arrow-down img {
  height: 30px;
  margin-left: 10px;
}
</style>