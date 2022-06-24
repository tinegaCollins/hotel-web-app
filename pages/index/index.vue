<template>
   <div class="home-wrapper">
        <nav-bar />
        <main class="all-wrapper">
          <div class="left">
            <img src="../../assets/icons/photo2.png" alt="random photo" srcset="">
            <h2>Cooked for kenyans</h2>
          </div>
          <div class="mains">
            <landing-page />
            <specials-today/>
          </div>
          <div class="right">
            <img src="../../assets/icons/photo1.png" alt="random photo " srcset="">
            <h2> by kenyans</h2>
          </div>
        </main>

   </div>
</template>

<script setup>

import '../../assets/global.css'

useHead({
  title: 'hotel web app',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  link: [
    { rel: 'icon', href: '../assets/icons/undraw_breakfast_psiw.svg' }
  ]
})

</script>

<style>
.all-wrapper {
  display: grid;
  grid-template-columns: auto auto auto;
  place-items: center;
  position: relative;
}
.left {
  position: sticky;
}
.right{
  position: sticky;
}
.left img, .right img {
  height: calc(100vh-80px);
  width: 240px;
  object-fit: cover;
  display: none;
  position: relative;
  z-index: -1;
}
.left::before, .right::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 240px;
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
  width: 240px;
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

@media screen and (min-width: 1024px) {
  .left img, .right img {
    display: block;
  }
  .left h2 {
    display: block;
  }
  .right h2 {
    display: block;
  }
}
</style>