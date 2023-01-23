<template>
  <div
    class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-x-2 md:max-w-7xl max-w-full mx-5 md:mx-auto mt-10 gap-y-2"
  >
    <div class="" v-for="dish in fetchedData" :key="dish">
      <div class="">
        <div class="max-w-xs bg-white">
          <img src="../assets/images/hamburger2.jpg" alt="Shoes" class="" />
          <!-- Start of dynamic card -->

          <input type="checkbox" id="my-modal" class="modal-toggle" />
          <div class="modal">
            <div class="modal-box relative bg-slate-50">
              <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2"
                >✕</label
              >
              <button
                class="px-6 py-2 cursor-text text-gray-50 bg-indigo-700 rounded-2xl flex justify-start items-center mx-auto flex-row"
              >
                <Icon name="uil:star" class="h-5 w-5 pb-1" /><span>{{
                  dish.ratings
                }}</span>
              </button>
              <p class="py-4 text-gray-800 font-serif">{{ dish.description }}</p>
            </div>
          </div>
          <!-- End of dynamic card -->

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
            <div class="flex justify-center items-center mx-auto gap-x-2">
              <a
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none bg-indigo-700 focus:ring-blue-800 cursor-pointer"
              >
                <Icon name="uil:shopping-cart-alt" class="h-6 w-7" />
                <span> Add</span>
              </a>
              <label
                for="my-modal"
                class="px-6 py-2 cursor-text text-gray-50 bg-indigo-700 rounded-lg cursor-pointer"
              >
                <Icon name="uil:eye" class="h-5 w-5 pb-1" /><span>View</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["fetchedData"],
};
</script>

<style></style>
