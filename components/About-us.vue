<template>
  <div
    class="relative flex flex-col px-4 py-6 mx-auto lg:block lg:flex-row lg:py-28 xl:py-32 md:px-8 sm:max-w-xl md:max-w-full"
  >
    <div
      class="relative flex justify-start max-w-xl mx-auto xl:pr-5 lg:max-w-screen-xl"
      data-aos="fade-right"
    >
      <div class="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
        <div class="max-w-xl mb-6">
          <div class="flex justify-start items-start mx-auto flex-col max-w-xl">
            <h1 class="flex justify-center items-center flex-row mx-auto my-1">
              <span
                class="md:text-5xl text-3xl text-slate-700 font-extrabold flex justify-center items-center"
                ><span class="md:text-5xl text-3xl px-1 font-extrabold">Why </span>
                <span
                  class="bg-indigo-600 italic text-white py-1 md:text-5xl text-3xl mt-2 font-extrabold"
                >
                  Choose Us?.</span
                >
              </span>
            </h1>
            <p class="text-xl font-sans text-gray-500 py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>

            <div class="my-2">
              <div class="grid grid-cols-3 gap-x-20 mx-auto justify-around">
                <div class="flex justify-center items-center mx-auto flex-col gap-y-1">
                  <strong class="text-2xl font-extrabold">94000+</strong>
                  <span class="text-indigo-700 font-sans text-lg">Orders</span>
                </div>
                <div class="flex justify-center items-center mx-auto flex-col gap-y-1">
                  <strong class="text-2xl font-extrabold">94000+</strong>
                  <span class="text-indigo-700 font-sans text-lg">Orders</span>
                </div>
                <div class="flex justify-center items-center mx-auto flex-col gap-y-1">
                  <strong class="text-2xl font-extrabold">94000+</strong>
                  <span class="text-indigo-700 font-sans text-lg">Orders</span>
                </div>
              </div>
            </div>
            <div class="rounded-md shadow">
              <button
                class="flex w-full items-center justify-center border border-transparent bg-indigo-700 px-2 py-1 text-lg font-bold text-white hover:bg-indigo-700 md:py-2 md:px-5 rounded md:text-lg"
              >
                Order now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="z-0 flex justify-center h-full overflow-hidden lg:pt-24 lg:pb-11 lg:pr-3 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-center lg:bottom-0 lg:right-0 lg:items-center"
      data-aos="fade-left"
    >
      <img
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80"
        class="object-cover object-right w-full lg:w-auto rounded-3xl"
        height="400px"
        alt=""
      />
    </div>
  </div>
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  beforeMount() {
    created: {
      AOS.init();
    }
  },
};
</script>
