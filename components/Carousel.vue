<script setup>
import "vue3-carousel/dist/carousel.css";
import { ArrowNarrowRightIcon } from "@heroicons/vue/solid/index.js";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const props = defineProps({ cardSlider: Array });
const itemsToShow = ref(1);
const showNav = ref(false);

const carWidth = (windowWidth) => {
  if (windowWidth < 768) {
    itemsToShow.value = 1;
    showNav.value = false;
  } else if (windowWidth > 768 && windowWidth < 1280) {
    itemsToShow.value = 1.5;
    showNav.value = true;
  } else if (windowWidth > 1280 && windowWidth < 1600) {
    itemsToShow.value = 2;
    showNav.value = true;
  } else if (windowWidth > 1600) {
    itemsToShow.value = 2.5;
    showNav.value = true;
  }
};

onMounted(() => {
  const windowWidth = ref(window.innerWidth);
  carWidth(window.innerWidth);
  window.onresize = () => {
    windowWidth.value = window.innerWidth;
    carWidth(windowWidth.value);
  };
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle(
          "lg:[&[show=true]]:opacity-100",
          entry.isIntersecting
        );
        entry.target.classList.toggle(
          "lg:[&[show=true]]:translate-x-0",
          entry.isIntersecting
        );
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          return entry.target;
        }
      });
    },
    {
      threshold: 0.1,
    }
  );
  document.querySelectorAll(".carouseli").forEach((selection) => {
    observer.observe(selection);
  });
});
</script>

<template>
  <carousel
    :items-to-show="itemsToShow"
    :wrap-around="true"
    show="true"
    class="mx-5 carouseli lg:duration-700 lg:opacity-0 lg:translate-x-40"
  >
    <slide
      v-for="slide in props.cardSlider"
      :key="slide"
      class="w-full lg:mx-10 2xl:mx-16 py-5"
    >
      <NuxtLink
        :to="'/projects/' + slide.id"
        class="mx-2 w-full hover:scale-105 rounded-2xl bg-white dark:bg-HahuGray1 duration-500 lg:mx-10 2xl:mx-16 border-2 border-transparent hover:border-primary"
      >
        <div class="w-full">
          <img class="mb-7 w-full" :src="slide.thumbnail" />
          <div class="flex flex-col px-4 sm:px-12">
            <h1 class="self-start text-xl font-black leading-6 text-primary">
              {{ slide.title }}
            </h1>
            <p
              class="mt-5 text-left text-lg font-light leading-[30px] dark:text-HahuGray3"
            >
              {{ slide.text }}
            </p>

            <div class="mt-4 mb-9 flex">
              <div class="mr-4 flex flex-col">
                <h2
                  class="self-start text-xl font-black leading-[30px] dark:text-white"
                >
                  Client
                </h2>
                <img class="mt-10" src="/images/projectC1.png" />
              </div>
              <div class="mt-16 rounded-full border-2 border-HahuGray3" />
              <div class="ml-6 flex flex-col">
                <h2
                  class="self-start text-xl font-black leading-[30px] dark:text-white"
                >
                  Partners
                </h2>
                <div class="mt-10 grid grid-cols-2 gap-x-6 gap-y-5">
                  <img
                    v-for="img in slide.partner"
                    class="object-contain"
                    :src="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mr-12 mb-8 flex justify-end">
          <button
            class="group flex items-center text-lg font-semibold leading-7 text-primary"
          >
            Explore More
            <ArrowNarrowRightIcon
              class="ml-2 h-5 w-5 text-primary duration-300 group-hover:translate-x-2"
            />
            <!-- <div class="mr-[46px]"></div> -->
          </button>
        </div>
      </NuxtLink>
    </slide>
    <!-- <div> -->
    <template #addons="{ slideWidth }">
      <div class="mx-10 hidden lg:block">
        <navigation />
      </div>
      <!-- <navigation :class="{ 'w-10': !showNav }" /> -->
    </template>
    <!-- </div> -->
  </carousel>
</template>

<style>
:root {
  /* Color */
  --vc-clr-primary: #00dcac00;
  --vc-clr-secondary: #21ad2f;
  --vc-clr-white: #ffffff;

  /* Icon */
  --vc-icn-width: 1.2em;

  /* Navigation */
  --vc-nav-width: 100px;
  --vc-nav-color: #697280;
  --vc-nav-background-color: var(--vc-clr-primary);
}
</style>
