<template>
  <!-- Search component card with name of type, press Ctrl + F -->

  <div class="h-auto px-3">
    <!-- end nav -->
    <div class="flex justify-evenly items-center mx-auto md:flex-row flex-col gap-y-2">
      <h1 class="flex justify-start items-start flex-col">
        <span
          class="md:text-5xl text-4xl text-slate-700 font-extrabold flex justify-center items-center md:flex-row flex-col"
          ><span class="md:text-5xl text-4xl px-1">Checkout our</span>
          <span class="bg-indigo-600 italic text-white py-1 md:text-5xl text-4xl mt-2">
            Menu.</span
          >
        </span>
      </h1>
      <div class="flex justify-center items-center flex-row bg-indigo-100 text-slate-800 py-2 px-3">
        <button
          class="bg-transparent px-4 py-2 rounded hover:bg-indigo-700 hover:text-white"
        >
          Starter
        </button>
        <button
          class="bg-transparent px-4 py-2 rounded hover:bg-indigo-700 hover:text-white"
        >
          Main
        </button>
        <button
          class="bg-transparent px-4 py-2 rounded hover:bg-indigo-700 hover:text-white"
        >
          Soup
        </button>
        <button
          class="bg-transparent px-4 py-2 rounded hover:bg-indigo-700 hover:text-white"
        >
          Dessert
        </button>
      </div>
    </div>
    <div
      class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-x-1 md:max-w-7xl max-w-full mx-5 md:mx-auto mt-10 gap-y-1"
    >
      <div class="" v-for="course in fetchedData" :key="course">
        <div class="">
          <div class="max-w-xs bg-white">
            <a href="#">
              <img class="object-cover" src="../assets/images/hamburger2.jpg" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5
                  class="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 text-white"
                >
                  {{ course.course }}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 ">
                {{ course.description }}
              </p>
              <span class="flex justify-evenly items-center flex-row px-2 py-2">
                <p class="font-normal text-gray-700 ">
                  {{ course.price }}
                </p>
                <strong>{{ course.ratings }}</strong>
              </span>
              <a
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 cursor-pointer"
              >
                buy now
                <svg
                  class="ml-2 -mr-1 w-4 h-4 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const fetchedData = ref([
      {
        course: "Fried Chicken",
        description: "boiled",
        price: "Ksh 500",
        ratings: "4.5",
      },
      {
        course: "Fried Chicken",
        description: "boiled",
        price: "Ksh 500",
        ratings: "4.5",
      },
      {
        course: "Fried Chicken",
        description: "boiled",
        price: "Ksh 500",
        ratings: "4.5",
      },
      {
        course: "Fried Chicken",
        description: "boiled",
        price: "Ksh 500",
        ratings: "4.5",
      },
      {
        course: "Fried Chicken",
        description: "boiled",
        price: "Ksh 500",
        ratings: "4.5",
      },
      {
        course: "Fried Chicken",
        description: "boiled",
        price: "Ksh 500",
        ratings: "4.5",
      },
    ]);
    const getId = computed(() => {
      fetchedData.value.filter((useriD) => console.log(useriD.id));
    });

    return { fetchedData, getId };
  },
};
</script>
