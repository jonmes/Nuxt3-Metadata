<script setup>
import Partner1 from "@/assets/svg/projectPartner1.svg?url";
import Partner2 from "@/assets/svg/projectPartner2.svg?url";
import Partner3 from "@/assets/svg/projectPartner3.svg?url";
import Partner4 from "@/assets/svg/projectPartner4.svg?url";
import {
  ArrowNarrowRightIcon,
  ArrowNarrowLeftIcon,
} from "@heroicons/vue/solid/index.js";

const partners = [Partner1, Partner2, Partner3, Partner4];

const crumb = [
  { id: 1, name: "Projects", link: "Projects", current: false },
  { id: 2, name: "Project Detail", link: "", current: true },
];
</script>
<template>
  <div class="min-h-screen px-8 md:px-[50px] xl:px-[100px]">
    <section
      class="mt-10 flex flex-col rounded-[15px] bg-white px-5 duration-500 ease-in dark:bg-HahuGray1 sm:px-10 md:px-20 lg:px-40 3xl:px-24"
    >
      <div class="relative mb-10 flex items-end font-bold">
        <Contained :crumb="crumb" />
        <div class="ml-auto flex">
          <NuxtLink class="mt-[38px] flex self-end" :to="{ name: 'index' }">
            <button
              class="group flex items-center justify-end self-end rounded-md bg-primary px-2 py-1 text-base font-medium leading-6 text-white lg:px-5 lg:py-3"
            >
              <ArrowNarrowLeftIcon
                class="mr-[9px] inline-block h-5 w-5 text-white duration-300 group-hover:-translate-x-2"
              />Back
            </button>
          </NuxtLink>
        </div>
      </div>

      <h1
        class="mt-5 text-xl font-black leading-6 text-primary lg:mt-[78px] lg:text-2xl xl:text-3xl"
      >
        Ethiopian Migrant Database Managment System
      </h1>
      <p
        class="mt-[35px] text-base font-normal leading-[30px] duration-500 ease-in dark:text-HahuGray/4 md:text-lg"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum
        etiam elit vel ligula massa sagittis sit. At nec massa fermentum
        consectetur diam faucibus hendrerit. Fringilla sit arcu eu vitae. Diam
        euismod varius ac sed neque cursus in. Tellus nunc posuere morbi ac
        tellus cursus malesuada blandit. Purus ut laoreet ornare amet, vel,
        porttitor eleifend egestas mauris. Blandit odio aliquet egestas magna
        amet.
      </p>
      <img class="mt-[54px]" src="/images/project_banner.png" />

      <p
        class="mt-5 text-base font-light leading-9 duration-500 ease-in dark:text-HahuGray/4 md:text-lg"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p
        class="mt-14 text-base font-normal leading-[30px] duration-500 ease-in dark:text-HahuGray/4 md:text-lg"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor viverra
        odio id nisi at luctus. Praesent nunc elementum est eu at in morbi erat
        fermentum. Duis fames leo posuere erat volutpat faucibus bibendum
        tortor. Tortor viverra ac quam eu. Magna venenatis felis malesuada
        eleifend orci libero. In odio et massa nisi, elit. Egestas consectetur
        ut leo risus, at gravida et. Blandit nunc id ut vivamus id nam cursus
        sed. Augue nibh semper velit commodo vestibulum amet. Lorem vulputate
        aliquet iaculis id lacus. Tristique orci, volutpat elementum morbi. Arcu
        diam non lacinia at mattis nulla nisl dictum. Pellentesque facilisis
        facilisis nisl sodales vitae cras tortor elit. Leo ultrices dignissim eu
        fusce et, augue. Suspendisse elit gravida porta diam integer mauris
        laoreet nunc, eu. Magnis neque arcu condimentum consequat. Commodo,
        ultricies gravida purus curabitur vitae sed adipiscing accumsan, id.
        Senectus lobortis nam commodo, mauris faucibus. Habitant enim diam nunc,
        neque id. Sapien, velit quam mollis et. Aenean viverra faucibus aliquet
        odio leo amet, orci, tristique mattis. Rutrum aenean egestas pharetra
        tincidunt nunc quam ut eget tortor. Massa purus a nunc mauris cras urna
        neque lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
        elementum etiam elit vel ligula massa sagittis sit. At nec massa
        fermentum consectetur diam faucibus hendrerit. Fringilla sit arcu eu
        vitae. Diam euismod varius ac sed neque cursus in. Tellus nunc posuere
        morbi ac tellus cursus malesuada blandit. Purus ut laoreet
      </p>

      <div class="mt-20 flex">
        <div class="mr-24 flex flex-col">
          <h2 class="text-xl font-black leading-[30px] dark:text-white">
            Client
          </h2>
          <img class="mt-10" src="/images/projectC1.png" />
        </div>
        <div class="mt-16 rounded-full border-[3px] border-HahuGray3" />
        <div class="ml-28 flex flex-col">
          <h2 class="text-xl font-black leading-[30px] dark:text-white">
            Partners
          </h2>
          <div class="mt-10 grid grid-cols-2 gap-x-16 gap-y-10">
            <img v-for="img in partners" class="object-contain" :src="img" />
          </div>
        </div>
      </div>

      <div class="mb-[78px] mt-20 flex flex-col">
        <h2 class="text-xl font-black leading-[30px] dark:text-white">Team</h2>
        <div
          class="mt-12 flex flex-col gap-y-10 gap-x-20 md:flex-row md:gap-y-10"
        >
          <div class="flex flex-col items-center">
            <img class="object-contain" src="/images/Ellipse1.png" />
            <h2
              class="mt-[15px] text-xl font-normal leading-[30px] duration-500 ease-in dark:text-HahuGray/4"
            >
              Teklawol Belayneh
            </h2>
            <h2 class="text-base font-normal leading-[30px] text-primary">
              Backend Developer
            </h2>
          </div>
          <div class="flex flex-col items-center">
            <img class="object-contain" src="/images/Ellipse2.png" />
            <h2
              class="mt-[15px] text-xl font-normal leading-[30px] duration-500 ease-in dark:text-HahuGray/4"
            >
              Jane Doe
            </h2>
            <h2 class="text-base font-normal leading-[30px] text-primary">
              Project Manager
            </h2>
          </div>
          <div class="flex flex-col items-center">
            <img class="object-contain" src="/images/Ellipse3.png" />
            <h2
              class="mt-[15px] text-xl font-normal leading-[30px] duration-500 ease-in dark:text-HahuGray/4"
            >
              Jane Doe
            </h2>
            <h2 class="text-base font-normal leading-[30px] text-primary">
              Graphics Designer
            </h2>
          </div>
          <div class="flex flex-col items-center">
            <img class="object-contain" src="/images/Ellipse4.png" />

            <h2
              class="mt-[15px] text-xl font-normal leading-[30px] duration-500 ease-in dark:text-HahuGray/4"
            >
              Jane Doe
            </h2>
            <h2 class="text-base font-normal leading-[30px] text-primary">
              Frontend Developer
            </h2>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped></style>
