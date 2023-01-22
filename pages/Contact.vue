import Horizontal_Nav from '~~/components/Horizontal_Nav.vue';

<template>
  <main>
    <div
      class="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 text-gray-800"
    >
      <div class="flex flex-col justify-between">
        <div class="space-y-2">
          <h2 class="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
          <div class="">Vivamus in nisl metus? Phasellus.</div>
        </div>
        <img
          src="https://mambaui.com/assets/svg/doodle.svg"
          alt=""
          class="p-6 h-52 md:h-64"
        />
      </div>
      <form novalidate="" class="space-y-6 ng-untouched ng-pristine ng-valid">
        <div>
          <label for="name" class="text-sm">Full name</label>
          <input
            id="name"
            type="text"
            placeholder=""
            class="w-full p-3 rounded bg-gray-100 ring"
          />
        </div>
        <div>
          <label for="email" class="text-sm">Email</label>
          <input id="email" type="email" class="w-full p-3 rounded bg-gray-100 ring" />
        </div>
        <div>
          <label for="message" class="text-sm">Message</label>
          <textarea
            id="message"
            rows="3"
            class="w-full p-3 rounded dark:bg-gray-100 ring"
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-indigo-700 text-gray-100"
        >
          <span> Send Message</span>
          <Icon name="icon-park-outline:send" class="h-6 w-6" />
        </button>
      </form>
    </div>
    <Horizontal_Nav />
  </main>
</template>
<script>
import Horizontal_Nav from "~~/components/Horizontal_Nav.vue";

export default {
  components: {
    Horizontal_Nav,
  },
};
</script>
