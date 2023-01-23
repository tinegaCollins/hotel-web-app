<template>
  <div
    class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-x-2 md:max-w-7xl max-w-full mx-5 md:mx-auto mt-10 gap-y-2"
    data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500"
  >
    <div class="" v-for="dish in fetchedData" :key="dish">
      <div class="">
        <div class="max-w-xs bg-white">
          <a href="#">
            <div class="card bg-base-100 shadow-xl image-full rounded-none">
              <figure>
                <img src="../assets/images/hamburger2.jpg" alt="Shoes" class="" />
              </figure>
              <div class="card-body">
                <p class="text-transparent hover:text-white">{{ dish.description }}</p>
                <div class="card-actions justify-end">
                  <button
                    class="px-6 py-2 cursor-text text-gray-900 bg-white rounded-2xl flex justify-start items-center mx-auto flex-row"
                  >
                    <Icon name="uil:star" class="h-5 w-5 pb-1" /><span>{{
                      dish.ratings
                    }}</span>
                  </button>
                </div>
              </div>
            </div>
          </a>
          <div class="p-5">
            <a href="#">
              <h5
                class="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 text-white"
              >
                {{ dish.dish }}
              </h5>
            </a>

            <span class="flex justify-evenly items-center flex-row px-2 py-2">
              <p class="font-normal text-gray-700">
                {{ dish.price }}
              </p>
            </span>
            <a
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 cursor-pointer"
            >
              <Icon name="uil:shopping-cart-alt" class="h-6 w-7" />
              <span> Add to cart</span>
              <svg
                class="ml-2 -mr-1 w-4 h-4"
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
  props: ["fetchedData"],
};
</script>

<style></style>
