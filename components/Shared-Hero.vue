<template>
  <div
    class="relative m-2 flex flex-col-reverse px-4 py-6 mx-auto lg:block lg:flex-col lg:py-28 xl:py-32 md:px-8 sm:max-w-xl md:max-w-full"
  >
    <div
      class="z-0 flex justify-center h-full overflow-hidden lg:pt-24 lg:pb-11 lg:pr-3 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-2 lg:items-center"
      data-aos="fade-left"
    >
      <img
        src="https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        class="object-cover object-right w-full lg:w-auto rounded-3xl"
        height="400px"
        alt=""
      />
    </div>
    <div
      class="relative flex justify-end max-w-xl mx-auto xl:pr-5 lg:max-w-screen-xl"
      data-aos="fade-right"
    >
      <div class="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
        <div class="max-w-xl mb-6">
          <div class="flex justify-start items-start mx-auto flex-col gap-y-7 max-w-xl">
            <h1 class="flex justify-start items-start flex-col">
              <span class="md:text-5xl text-2xl text-slate-700 font-extrabold"
                >We've been serving
              </span>
              <span class="md:text-5xl text-2xl text-slate-700 font-extrabold py-1">
                for
                <span
                  class="bg-indigo-600 italic text-white py-1 md:text-5xl text-2xl mt-2"
                  >over 5 years.</span
                ></span
              >
            </h1>

            <p class="text-lg font-serif text-gray-500">
              The company itself is a very successful company. The most dignified by right
              are wronged by flattery, but pain, hatred results in pleasure.
            </p>
            <p class="text-lg font-serif text-gray-500 pt-2">
              The company itself is a very successful company. The most dignified by right
              are wronged by flattery, but pain, hatred results in pleasure.
            </p>

            <div class="rounded-md shadow">
              <button
                class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-700 px-4 py-1 text-lg font-bold text-white hover:bg-indigo-700 md:py-2 md:px-10 md:text-lg"
              >
                <Icon name="ic:baseline-local-offer" class="h-6 w-6" />
                <span> latest offer</span>
              </button>
            </div>
          </div>
        </div>
      </div>
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
