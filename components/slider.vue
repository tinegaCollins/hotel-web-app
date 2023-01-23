<template>
  <Swiper
    :modules="[SwiperAutoplay, SwiperEffectCreative]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
  >
    <SwiperSlide
      v-for="service in Services"
      :key="service"
      class="max-w-3xl bg-slate-100 rounded"
    >
      <div
        class="max-w-xs flex bg-transparent justify-center mx-auto items-center flex-col transition-all duration-500 transform hover:scale-105"
      >
        <a href="#">
          <img class="object-cover" :src="service.src" alt="" />
        </a>
        <div class="p-1 flex justify-center items-center mx-auto flex-col">
          <a href="#">
            <h5 class="text-lg md:text-xl font-bold tracking-tight text-gray-700">
              {{ service.serve }}
            </h5>
          </a>
          <p class="font-normal text-gray-700 font-serif text-center">
            {{ service.description }}
          </p>
          <span class="flex justify-center mx-auto items-center flex-row px-2 py-1">
            <a
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-blue-800 focus:ring-4 focus:outline-none"
            >
              Learn more
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
          </span>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const Services = ref([
      {
        serve: "230+ Locations",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
        price: "Ksh 500",
        ratings: "4.5",
        src:
          "https://treact.owaiskhan.me/static/media/shop-icon.048628c95dd89e631ac8c652d04238fb.svg",
      },
      {
        serve: "Professional Chefs",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
        price: "Ksh 500",
        ratings: "4.5",
        src:
          "https://treact.owaiskhan.me/static/media/chef-icon.866e076bd2347712ef1d5cb77189d5fb.svg",
      },
      {
        serve: "Birthday Catering",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
        price: "Ksh 500",
        ratings: "4.5",
        src:
          "https://treact.owaiskhan.me/static/media/celebration-icon.0d9bb9633fcda75b7632a11eaf12bbac.svg",
      },
    ]);
    const getId = computed(() => {
      Services.value.filter((serviceiD) => console.log(serviceiD.id));
    });

    return { Services, getId };
  },
};
</script>
