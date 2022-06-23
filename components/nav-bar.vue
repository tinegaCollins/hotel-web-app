<template>
    <nav>
        <svg @click="slideShow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path :d="path" /></svg>
        <h3>
            hotel app
            <img src="../assets/icons/undraw_breakfast_psiw.svg" alt="icon" srcset="">
        </h3>
        <div class="links" ref="links">
            <a href="/menu">menu</a>
            <a href="/menu">gallery</a>
            <a href="/menu">contact us</a>
            <a href="/menu">Sign up/log in</a>
        </div>
    </nav>
</template>

<script setup>
const barsPath = "M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM64 256C64 238.3 78.33 224 96 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H96C78.33 288 64 273.7 64 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z";
const xPath =  "M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z";
const path = ref(barsPath);
const sideMenu = ref(false);
const links = ref(null);
function slideShow() {
    links.value.classList.toggle('show');
    path.value = path.value === barsPath ? xPath : barsPath;
}
</script>
<style scoped>
    nav svg {
        height: 20px;
    }
    nav {
        display: flex;
        align-items: center;
        position: relative;
        background-color: #ffff;
        height: 60px;
        padding: 0 20px;
        column-gap: 20px;
        font-family: var(--title-font);
    }
    nav:before{
        content: '';
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, .3);
        z-index: -1;
        transform: translateY(1%);
        filter: blur(7px) brightness(1.5);
    }
    nav h3 {
        display: flex;
        align-items: center;
        column-gap: 7px;
    }
    /* change this to import icon directly */
    nav h3 img {
        width: 50px;
        height: 50px;
    }
    nav .links {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 30vh;
        width: 100%;
        background-color: var(--main-orange);
        position: absolute;
        top: 60px;
        left: -100%;
        padding-left: 40px;
        transition: left .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .show {
        left: 0 !important;
    }
    nav .links a {
        color: #333;
        text-decoration: none;
        font-size: 1.2rem;
        font-family: var(--title-font);
        font-weight: bold;
    }
    @media screen and (min-width: 768px) {
        nav {
            height: 80px;
        }
        nav svg {
            display: none;
        }
        nav h3{
            column-gap: 20px;
        }
        nav h3 img {
            width: 70px;
            height: 70px;
        }
        nav .links {
            left: 70%;
            top: 0;
            width: max-content;
            height: 100%;
            padding-left: 0;
            flex-direction: row;
            background-color: red;
            align-items: center;
        }
    }
        
</style>