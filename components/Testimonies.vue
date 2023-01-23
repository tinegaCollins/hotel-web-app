<template>
  <main class="md:mb-6">
    <h1 class="flex justify-center items-center flex-row mx-auto my-10">
      <span
        class="md:text-5xl text-3xl text-slate-700 font-extrabold flex justify-center items-center"
        ><span class="md:text-5xl text-3xl px-1">Customers </span>
        <span class="bg-indigo-600 italic text-white py-1 md:text-5xl text-3xl mt-2">
          Loves Us.</span
        >
      </span>
    </h1>
    <div
      class="flex justify-center md:flex-row flex-col items-center gap-x-16 md:max-w-7xl max-w-full mx-5 md:mx-32 mt-10 gap-y-1"
    >
      <div class="" v-for="testimony in Testimonies" :key="testimony">
        <div class="">
          <div
            class="max-w-xs flex bg-transparent justify-center mx-auto items-center flex-col transition-all duration-500 transform hover:scale-105"
          >
            <a href="#">
              <img class="object-cover h-20 rounded-full" :src="testimony.src" alt="" />
            </a>
            <div class="p-1 flex justify-center items-center mx-auto flex-col gap-y-2">
              <p class="font-normal text-gray-600 font-serif text-center tracking-wide">
                " {{ testimony.description }}"
              </p>
              <a href="#">
                <h5 class="text-md md:text-lg font-bold tracking-tight text-gray-700">
                  {{ testimony.name }}
                </h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const Testimonies = ref([
      {
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
        name: "- CHARLOTTE HALE",
        price: "Ksh 500",
        ratings: "4.5",
        src:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      },
      {
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
        name: "- ADAM CUPPY",
        price: "Ksh 500",
        ratings: "4.5",
        src:
          "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
      },
      {
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
        name: "- STEVEN MARCETTI",
        price: "Ksh 500",
        ratings: "4.5",
        src:
          "https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4.25&w=512&h=512&q=80",
      },
    ]);
    const getId = computed(() => {
      Testimonies.value.filter((serviceiD) => console.log(serviceiD.id));
    });

    return { Testimonies, getId };
  },
};
</script>

<style></style>
