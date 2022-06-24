<template>
    <div class="everything">
        <nav-bar/>
        <div class="navigations">
            <NuxtLink to="/menu/bevarages">bevarages</NuxtLink>
        </div>
        <NuxtPage>
            <h5>fyythg</h5>
        </NuxtPage>
    </div>
</template>

<script setup>

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

</script>