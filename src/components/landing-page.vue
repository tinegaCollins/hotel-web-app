<template>
    <main class="main-wrapper">
        <h1>
            You want food, we deliver it to your doorstep
        </h1>
        <locationVue/>
    </main>
</template>

<script lang="ts" setup>
import locationVue from './location.vue';
</script>

<style scoped>
.main-wrapper {
    font-family: var(--title-font);
    padding: 50px 20px 0 20px;
    display: grid;
    place-items: center;
    margin-top: 20px;
}
.main-wrapper h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #333;
    text-align: center;
}

</style>