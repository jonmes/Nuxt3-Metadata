<script setup>
import {
  ArrowNarrowRightIcon,
  ArrowNarrowLeftIcon,
  ArrowNarrowDownIcon,
  SearchIcon,
  ChevronRightIcon,
} from "@heroicons/vue/solid/index.js";

import Facebook from "@/assets/svg/facebookShare.svg?url";
import Insta from "@/assets/svg/instaShare.svg?url";
import Twitter from "@/assets/svg/twitterShare.svg?url";
import Telegram from "@/assets/svg/telegramShare.svg?url";
import YoutubeButton from "@/assets/svg/YoutubeButton.svg?url";
import CopyLink from "@/assets/svg/copyLinkIcon.svg?url";
// import Contained from "@/components/svg/contained.vue";

const crumb = [
  { id: 1, name: "Report", link: "reports", current: false },
  { id: 2, name: "Report Detail", link: "", current: true },
];
</script>

<template>
  <div class="flex min-h-screen justify-center px-8 md:px-[50px] xl:px-[100px]">
    <section
      class="mt-10 flex max-w-[80vw] flex-col rounded-2xl bg-white px-5 duration-500 ease-in dark:bg-HahuGray1 md:max-w-[70vw] md:px-20"
    >
      <div class="relative mb-10 mt-6 flex flex-wrap items-end font-bold">
        <Contained :crumb="crumb" />
        <div class="ml-auto flex">
          <router-link
            class="mt-[38px] flex self-end"
            :to="{ name: 'reports' }"
          >
            <button
              class="group flex items-center justify-end self-end rounded-md bg-primary px-2 py-1 text-base font-medium leading-6 text-white lg:px-5 lg:py-3"
            >
              <ArrowNarrowLeftIcon
                class="mr-[9px] inline-block h-5 w-5 text-white duration-300 group-hover:-translate-x-1"
              />Back
            </button>
          </router-link>
        </div>
      </div>

      <h2
        class="mt-10 text-xl font-bold leading-[30px] text-HahuGray1 duration-500 ease-in dark:text-HahuGray/4 lg:text-2xl xl:text-3xl 2xl:mt-1"
      >
        ባሳለፍነው የፈረንጆች ወር ያወጣናቸው የስራ ማስታወቂያዎች መረጃ ምን ይመስላል?
      </h2>
      <div class="mt-9 flex gap-x-7">
        <h4
          class="self-center rounded-full bg-primary-lite px-4 py-[2px] text-xs font-normal leading-[18px] text-HahuGray/4"
        >
          Monthly
        </h4>
        <h4 class="text-base font-light leading-6 text-primary">
          Jan 12, 2022
        </h4>
      </div>
      <p
        class="mt-[42px] text-base font-normal leading-[30px] duration-500 ease-in dark:text-HahuGray/4 lg:text-lg"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum
        etiam elit vel ligula massa sagittis sit. At nec massa fermentum
        consectetur diam faucibus hendrerit. Fringilla sit arcu eu vitae. Diam
        euismod varius ac sed neque cursus in. Tellus nunc posuere morbi ac
        tellus cursus malesuada blandit. Purus ut laoreet ornare amet, vel,
        porttitor eleifend egestas mauris. Blandit odio aliquet egestas magna
        amet.
      </p>
      <img
        src="/images/MonthlyReport.png"
        class="mt-[54px] self-start object-contain"
      />

      <p
        class="mt-[68px] text-base font-normal leading-[30px] duration-500 ease-in dark:text-HahuGray/4 lg:text-lg"
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
        neque lorem.

        <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
        elementum etiam elit vel ligula massa sagittis sit. At nec massa
        fermentum consectetur diam faucibus hendrerit. Fringilla sit arcu eu
        vitae. Diam euismod varius ac sed neque cursus in. Tellus nunc posuere
        morbi ac tellus cursus malesuada blandit. Purus ut laoreet
      </p>

      <div
        class="mt-20 mb-16 flex flex-wrap justify-start gap-2 sm:justify-center"
      >
        <button
          class="mr-[102px] flex items-center rounded-md border-2 border-gray-200 duration-500 ease-in dark:bg-HahuGray/4"
        >
          <img class="object-contain pl-4" :src="CopyLink" />
          <span class="py-2 pr-4 pl-[7px]">Copy Link</span>
        </button>
        <div class="flex gap-2">
          <button
            class="rounded-md border-2 border-gray-200 duration-500 ease-in dark:bg-HahuGray/4"
          >
            <img class="object-contain px-[13px] py-[9px]" :src="Facebook" />
          </button>
          <button
            class="rounded-md border-2 border-gray-200 duration-500 ease-in dark:bg-HahuGray/4"
          >
            <img class="object-contain px-[13px] py-[9px]" :src="Insta" />
          </button>
          <button
            class="rounded-md border-2 border-gray-200 duration-500 ease-in dark:bg-HahuGray/4"
          >
            <img class="object-contain px-[13px] py-[9px]" :src="Twitter" />
          </button>
          <button
            class="rounded-md border-2 border-gray-200 duration-500 ease-in dark:bg-HahuGray/4"
          >
            <img class="object-contain px-[13px] py-[9px]" :src="Telegram" />
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>
