<template>
  <main>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="relative overflow-hidden m-2 bg-white">
      <div class="mx-auto max-w-7xl">
        <div
          class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32"
        >
          <svg
            class="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div>
            <div class="relative px-4 pt-6 sm:px-6 lg:px-8">
              <nav
                class="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div class="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                  <div class="flex w-full items-center justify-between md:w-auto">
                    <a href="#">
                      <!-- https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600 -->
                    </a>
                    <div class="-mr-2 flex items-center md:hidden">
                      <button
                        type="button"
                        class="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        aria-expanded="false"
                      >
                        <span class="sr-only">Open main menu</span>
                        <!-- Heroicon name: outline/bars-3 -->
                        <svg
                          class="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="hidden md:ml-10 md:block bg-white md:space-x-8 md:pr-4">
                  <a
                    href="#"
                    class="font-medium text-gray-500 dark:hover:to-gray-200 hover:text-indigo-700 hover:border-b-2 "
                    ><span
                      ><font-awesome-icon icon="fa-solid fa-house" class="h-5 w-5"
                    /></span>
                    About</a
                  >

                  <nuxt-link
                    to="#"
                    class="font-medium text-gray-500 dark:hover:to-gray-200 hover:text-indigo-700 hover:border-b-2 "
                    ><span
                      ><font-awesome-icon :icon="['fas', 'headphones']" class="h-5 w-5"
                    /></span>
                    Blog</nuxt-link
                  >
                  <nuxt-link
                    to="#"
                    class="font-medium text-gray-500 dark:hover:to-gray-200 hover:text-indigo-700 hover:border-b-2 "
                    ><span
                      ><font-awesome-icon :icon="['fas', 'lock']" class="h-5 w-5"
                    /></span>
                    Admin</nuxt-link
                  >

                  <nuxt-link
                    to="#"
                    class="font-medium text-gray-500 dark:hover:to-gray-200 hover:text-indigo-700 hover:border-b-2 "
                    ><span
                      ><font-awesome-icon :icon="['fas', 'tv']" class="h-5 w-5"
                    /></span>
                    Pricing</nuxt-link
                  >

                  <nuxt-link
                    to="#"
                    class="font-medium text-indigo-600 hover:text-indigo-700 hover:border-b-2 "
                  >
                    <span
                      ><font-awesome-icon
                        :icon="['fas', 'right-to-bracket']"
                        class="h-5 w-5"
                    /></span>
                    Log in
                  </nuxt-link>
                </div>
              </nav>
            </div>

            <!--
              Mobile menu, show/hide based on menu open state.
    
              Entering: "duration-150 ease-out"
                From: "opacity-0 scale-95"
                To: "opacity-100 scale-100"
              Leaving: "duration-100 ease-in"
                From: "opacity-100 scale-100"
                To: "opacity-0 scale-95"
            -->
            <div
              class="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden bg-white"
            >
              <div
                class="overflow-hidden rounded-lg  bg-white shadow-md ring-1 ring-black ring-opacity-5"
              >
                <div class="flex items-center justify-between px-5 pt-4 pb-2">
                  <div>
                    <img
                      class="h-8 w-auto rounded-full"
                      src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
                      alt=""
                    />
                  </div>
                  <div class="-mr-2">
                    <!--  //TODO -->
                    <button
                      type="button"
                      class="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      @click="toggleMode"
                    >
                      <span class="sr-only">Close main menu</span>
                      <!-- Menu icon -->
                      <svg
                        v-if="!mode"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 fill-black"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <!-- Heroicon name: outline/x-mark -->
                      <!-- //todo close -->
                      <svg
                        v-else
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div v-show="mode" class="space-y-1 px-2 pt-2 pb-3">
                  <a
                    href="#"
                    class="block rounded-md px-3 py-2 text-base font-medium  text-gray-800 "
                    ><span
                      ><font-awesome-icon
                        :icon="['fas', 'house']"
                        class="h-5 w-5 dark:text-gray-300"
                    /></span>
                    About</a
                  >

                  <nuxt-link
                    to="#"
                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-800 "
                    ><span
                      ><font-awesome-icon
                        :icon="['fas', 'headphones']"
                        class="h-5 w-5 dark:text-gray-300"
                    /></span>
                    Blog</nuxt-link
                  >

                  <nuxt-link
                    to="#"
                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-800  "
                  >
                    <span
                      ><font-awesome-icon
                        :icon="['fas', 'tv']"
                        class="h-5 w-5 text-gray-800"
                    /></span>
                    Pricing</nuxt-link
                  >
                  <nuxt-link
                    to="#"
                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-800  "
                  >
                    <span
                      ><font-awesome-icon
                        :icon="['fas', 'lock']"
                        class="h-5 w-5 dark:text-gray-800"
                    /></span>
                    Contact Us</nuxt-link
                  >
                </div>
                <a
                  v-show="mode"
                  href="/login"
                  class="block w-full  bg-indigo-700 px-5 py-3 text-center font-medium text-indigo-100    "
                  ><span
                    ><font-awesome-icon
                      :icon="['fas', 'right-to-bracket']"
                      class="h-5 w-5"
                  /></span>
                  Log in</a
                >
              </div>
            </div>
          </div>

          <main
            class="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
          >
            <div class="sm:text-center lg:text-left">
              <div
                class="flex justify-center items-center mx-auto flex-col gap-y-7 max-w-xl"
              >
                <h1 class="flex justify-start items-start flex-col">
                  <span class="md:text-5xl text-2xl text-slate-700 font-extrabold"
                    >Delicious & Affordable
                  </span>
                  <span
                    class="bg-indigo-600 italic text-white mt-2 py-1 md:text-5xl text-2xl"
                    >Meals Near You.</span
                  >
                </h1>

                <p class="text-lg font-serif text-gray-500">
                  The company itself is a very successful company. The most dignified by
                  right are wronged by flattery, but pain, hatred results in pleasure.
                </p>
              </div>

              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div class="rounded-md shadow">
                  <button
                    class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                  >
                    Order Now
                  </button>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <button
                    class="flex w-full items-center justify-center rounded-md border border-transparent bg-transparent px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                  >
                    Meet the Chefs
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 rounded-xl">
        <img
          class="h-56 w-full object-cover sm:h-72 md:h-96 rounded-xl lg:h-full lg:w-full"
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
          alt=""
        />
      </div>
    </div>

    <!--     <Dropdown1 /> -->
  </main>
</template>

<script>
/* import Dropdown1 from "./Dropdown.vue"; */

export default {
  components: {},
  mounted() {
    this.donate = true;
  },
  data() {
    return {
      mode: false,
    };
  },
  methods: {
    toggleMode() {
      this.mode = !this.mode;
    },
  },
};
</script>

<style></style>
