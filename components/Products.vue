<template>
  <!-- Search component card with name of type, press Ctrl + F -->

  <div class="h-auto px-3">
    <!-- end nav -->
    <div
      class="flex justify-evenly items-center mx-auto md:flex-row flex-col gap-y-2"
      data-aos="zoom-in-up"
    >
      <h1 class="flex justify-start items-start flex-col">
        <span
          class="md:text-5xl text-4xl text-slate-700 font-extrabold flex justify-center items-center md:flex-row flex-col"
          ><span class="md:text-5xl text-4xl px-1">Checkout our</span>
          <span class="bg-indigo-600 italic text-white py-1 md:text-5xl text-4xl mt-2">
            Menu.</span
          >
        </span>
      </h1>
      <div
        class="flex justify-center items-center flex-row bg-indigo-100 text-slate-800 py-2 px-3"
      >
        <button
          @click="show_starter"
          class="bg-transparent px-4 py-2 rounded hover:bg-indigo-700 hover:text-white"
        >
          Starter
        </button>
        <button
          @click="show_main"
          class="bg-transparent px-4 py-2 rounded hover:bg-indigo-700 hover:text-white"
        >
          Main
        </button>
        <button
          @click="show_soup"
          class="bg-transparent px-4 py-2 rounded hover:bg-indigo-700 hover:text-white"
        >
          Soup
        </button>
        <button
          @click="show_dessert"
          class="bg-transparent px-4 py-2 rounded hover:bg-indigo-700 hover:text-white"
        >
          Dessert
        </button>
      </div>
    </div>
    <div data-aos="flip-left">
      <span v-show="openStarter"><CategoryStarterProducts :fetchedData="starter" /></span>
      <span v-show="OpenMain"><CategoryMainProducts :fetchedData="main" /></span>
      <span v-show="OpenDessert"><CategoryDessertProducts :fetchedData="dessert" /></span>
      <span v-show="OpenSoup"><CategorySoupProducts :fetchedData="soup" /></span>
    </div>
  </div>
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
export default {
  beforeMount() {
    created: {
      AOS.init();
    }
  },
  /* 
  1>Defining categories starter,main,soup and dessert 
   2>Assigning categories starter,main,soup and dessert  each products
   3>Functions toggling starter,main,soup and dessert based on the category selected
  */
  setup() {
    const route = useRoute();
    const OpenMain = ref(false);
    let openStarter = ref(true);
    const OpenSoup = ref(false);
    let OpenDessert = ref(false);
    const show_starter = () => {
      openStarter.value = true;
    };
    const show_main = () => {
      OpenMain.value = true;
      OpenDessert.value = false;
      OpenSoup.value = false;
      openStarter.value = false;
    };
    const show_soup = () => {
      OpenSoup.value = true;
      OpenMain.value = false;
      openStarter.value = false;
      OpenDessert.value = false;
    };
    const show_dessert = () => {
      OpenDessert.value = true;
      OpenMain.value = false;
      OpenSoup.value = false;
      openStarter.value = false;
    };
    const starter = ref([
      {
        dish: "Fried Chicken",
        description:
          "Crispy, golden-brown fried meat, savory and juicy with a satisfying crunch, perfect for a hearty meal.",
        price: "Ksh 500",
        ratings: "4.5",
      },
      {
        dish: "Fried Chicken",
        description:
          "Crispy, golden-brown fried meat, savory and juicy with a satisfying crunch, perfect for a hearty meal.",
        price: "Ksh 500",
        ratings: "4.5",
      },
      {
        dish: "Fried Chicken",
        description:
          "Crispy, golden-brown fried meat, savory and juicy with a satisfying crunch, perfect for a hearty meal.",
        price: "Ksh 500",
        ratings: "4.5",
      },
      {
        dish: "Fried Chicken",
        description:
          "Crispy, golden-brown fried meat, savory and juicy with a satisfying crunch, perfect for a hearty meal.",
        price: "Ksh 500",
        ratings: "4.5",
      },
      {
        dish: "Fried Chicken",
        description:
          "Crispy, golden-brown fried meat, savory and juicy with a satisfying crunch, perfect for a hearty meal.",
        price: "Ksh 500",
        ratings: "4.5",
      },
      {
        dish: "Fried Chicken",
        description:
          "Crispy, golden-brown fried meat, savory and juicy with a satisfying crunch, perfect for a hearty meal.",
        price: "Ksh 500",
        ratings: "4.5",
      },
    ]);
    const main = ref([
      {
        dish: "Main Chicken",
        description:
          "Crispy, golden-brown fried meat, savory and juicy with a satisfying crunch, perfect for a hearty meal.",
        price: "Ksh 500",
        ratings: "4.5",
      },
      {
        dish: "Main Chicken",
        description:
          "Crispy, golden-brown fried meat, savory and juicy with a satisfying crunch, perfect for a hearty meal.",
        price: "Ksh 500",
        ratings: "4.5",
      },
    ]);
    const soup = ref([
      {
        dish: "Soup Chicken",
        description:
          "Crispy, golden-brown fried meat, savory and juicy with a satisfying crunch, perfect for a hearty meal.",
        price: "Ksh 500",
        ratings: "4.5",
      },
      {
        dish: "Soup Chicken",
        description:
          "Crispy, golden-brown fried meat, savory and juicy with a satisfying crunch, perfect for a hearty meal.",
        price: "Ksh 500",
        ratings: "4.5",
      },
    ]);
    const dessert = ref([
      {
        dish: "Dessert Chicken",
        description:
          "Crispy, golden-brown fried meat, savory and juicy with a satisfying crunch, perfect for a hearty meal.",
        price: "Ksh 500",
        ratings: "4.5",
      },
      {
        dish: "Dessert Chicken",
        description:
          "Crispy, golden-brown fried meat, savory and juicy with a satisfying crunch, perfect for a hearty meal.",
        price: "Ksh 500",
        ratings: "4.5",
      },
    ]);
    const getId = computed(() => {
      fetchedData.value.filter((useriD) => console.log(useriD.id));
    });

    return {
      starter,
      getId,
      show_starter,
      openStarter,
      main,
      OpenMain,
      show_main,
      soup,
      show_soup,
      OpenSoup,
      dessert,
      OpenDessert,
      show_dessert,
    };
  },
};
</script>
