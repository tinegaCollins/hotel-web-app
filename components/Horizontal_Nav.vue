<template>
  <main class="flex bg-transparent justify-center items-center rounded-3xl">
    <div class="btm-nav bg-transparent rounded-3xl">
      <Nuxt-Link to="/" class="text-slate-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <span class="btm-nav-label">Home</span>
      </Nuxt-Link>
      <NuxtLink to="/Login" class="text-slate-800">
        <Icon name="ic:round-login" class="h-6 w-6" />
        <span class="btm-nav-label">Login</span>
      </NuxtLink>
      <Nuxt-Link to="/cart" class="text-slate-800">
        <Icon name="ic:sharp-shopping-basket" class="h-6 w-6" />
        <span class="btm-nav-label">Cart</span>
      </Nuxt-Link>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style></style>
