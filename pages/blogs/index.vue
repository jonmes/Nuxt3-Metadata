<script setup>
import {
  ArrowNarrowRightIcon,
  ArrowNarrowLeftIcon,
  ArrowNarrowDownIcon,
  SearchIcon,
} from "@heroicons/vue/solid/index.js";
const category = [
  { name: "All Category", link: "#all" },
  { name: "Technology", link: "#tech" },
  { name: "Development", link: "#dev" },
  { name: "Marketing", link: "#market" },
  { name: "Start-up", link: "#startup" },
];

const Blogs = [
  {
    id: 6,
    img: "https://res.cloudinary.com/dyut9eifz/image/upload/v1657870126/Hahu/blog_post_6_ec3adk.png",
    cat: "TECHNOLOGY",
    date: "19 Jan 2022",
    title: "HahuJobs have signed a service agreement with SNV",
  },
  {
    id: 7,
    img: "https://res.cloudinary.com/dyut9eifz/image/upload/v1657870127/Hahu/blog_post_7_xvfdrv.jpg",
    cat: "TECHNOLOGY",
    date: "19 Jan 2022",
    title:
      "Three-month training program for Bahir Dar Institute of Technology Students",
  },
  {
    id: 8,
    img: "https://res.cloudinary.com/dyut9eifz/image/upload/v1657870127/Hahu/blog_post_8_yiayrt.jpg",
    cat: "TECHNOLOGY",
    date: "19 Jan 2022",
    title: "HahuJobs online job application skill training",
  },
  {
    id: 1,
    img: "https://res.cloudinary.com/dyut9eifz/image/upload/v1657870126/Hahu/blog_post_1_tcgtow.jpg",
    cat: "TECHNOLOGY",
    date: "19 Jan 2022",
    title:
      "HaHuJobs have signed an MoU with the Ethiopian Investment Commission",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dyut9eifz/image/upload/v1657870126/Hahu/blog_post_2_gv5r5e.jpg",
    cat: "TECHNOLOGY",
    date: "19 Jan 2022",
    title: "Hey! Today let's introduce you to AWAQI",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dyut9eifz/image/upload/v1657870126/Hahu/blog_post_3_lpyg2a.jpg",
    cat: "TECHNOLOGY",
    date: "19 Jan 2022",
    title: "ALx Software Engineering training programme.",
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/dyut9eifz/image/upload/v1657870126/Hahu/blog_post_4_i51xnl.jpg",
    cat: "TECHNOLOGY",
    date: "19 Jan 2022",
    title: "ALx African Career Catalyst (ACC)",
  },
  {
    id: 5,
    img: "https://res.cloudinary.com/dyut9eifz/image/upload/v1657870126/Hahu/blog_post_5_b0ozfd.jpg",
    cat: "TECHNOLOGY",
    date: "19 Jan 2022",
    title: "ALx Young Entrepreneurs Programme (YEP)",
  },
];

const currentLink = ref("");
onMounted(() => {
  currentLink.value = window.location.href;
});
</script>

<template>
  <div class="min-h-screen">
    <Head>
      <Title>Blogs</Title>
      <Meta
        data-n-head="ssr"
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <Meta
        data-n-head="ssr"
        data-hid="og:title"
        property="og:title"
        content="Blogs"
      />
      <Meta
        data-n-head="ssr"
        data-hid="description"
        property="description"
        content="You can read our blogs about Technology, Development, Marketing and Start-ups"
      />
      <Meta
        data-n-head="ssr"
        data-hid="og:description"
        property="og:description"
        content="You can read our blogs about Technology, Development, Marketing and Start-ups"
      />
      <Meta
        data-n-head="ssr"
        data-hid="og:url"
        property="og:url"
        :content="currentLink"
      />
      <Meta data-n-head="ssr" property="og:type" content="website" />
      <Meta
        data-n-head="ssr"
        data-hid="og:image"
        property="og:image"
        content="https://res.cloudinary.com/dyut9eifz/image/upload/v1657870128/Hahu/Hahu_MetaCard_e38h2i.png"
      />
      <Meta
        data-n-head="ssr"
        data-hid="twitter:card"
        property="twitter:card"
        content="summary_large_image"
      />
      <Meta
        data-n-head="ssr"
        data-hid="twitter:domain"
        property="twitter:domain"
        content="hahu.verce.app"
      />
      <Meta
        data-n-head="ssr"
        data-hid="twitter:url"
        property="twitter:url"
        :content="currentLink"
      />
      <Meta
        data-n-head="ssr"
        data-hid="twitter:title"
        property="twitter:title"
        content="Blogs"
      />
      <Meta
        data-n-head="ssr"
        data-hid="twitter:description"
        property="twitter:description"
        content="You can read our blogs about Technology, Development, Marketing and Start-ups"
      />
      <Meta
        data-n-head="ssr"
        data-hid="twitter:image"
        property="twitter:image"
        content="https://res.cloudinary.com/dyut9eifz/image/upload/v1657870128/Hahu/Hahu_MetaCard_e38h2i.png"
      />
    </Head>
    <section
      class="mt-10 flex flex-col px-5 md:px-20 lg:px-20 xl:px-36 2xl:px-[230px]"
    >
      <div class="mt-11 flex justify-between md:px-8">
        <h2
          class="text-start mt-5 self-start rounded-full bg-primary-lite px-3 py-1 text-base font-medium leading-[18px] text-white md:text-lg lg:px-8 lg:py-2 lg:text-xl xl:mt-0 xl:text-2xl"
        >
          Blogs
        </h2>
        <NuxtLink class="flex" :to="{ name: 'index' }">
          <button
            class="group flex items-center justify-end self-end rounded-md bg-primary px-2 py-1 text-base font-medium leading-6 text-white lg:px-5 lg:py-3"
          >
            <ArrowNarrowLeftIcon
              class="mr-[9px] inline-block h-5 w-5 text-white duration-300 group-hover:-translate-x-1"
            />Back
          </button>
        </NuxtLink>
      </div>

      <div class="relative mt-24 flex items-center">
        <input
          class="w-full rounded-2xl dark:text-whitePrimary dark:bg-LightDark px-8 py-4 text-xl font-normal leading-6 text-HahuGray2 focus:outline-primary md:px-16 md:py-7"
          placeholder="Search"
        />
        <SearchIcon
          class="relative right-10 h-6 w-6 dark:text-whitePrimary cursor-pointer md:right-20"
        />
      </div>
      <div
        class="flex flex-wrap items-center md:gap-4 lg:gap-10 xl:ml-[196px] xl:gap-x-20"
      >
        <NuxtLink
          :href="catg.link"
          class="mt-8 lg:mt-16 rounded-md px-4 py-2 text-sm font-bold leading-5"
          v-for="catg in category"
          :class="
            $router.options.history.location.indexOf(catg.link) !== -1
              ? 'bg-HaHuGreen/4 bg-opacity-80 text-primary'
              : 'text-gray-400'
          "
        >
          {{ catg.name }}
        </NuxtLink>
      </div>

      <div
        class="mt-[56px] grid grid-cols-1 gap-y-[68px] lg:grid-cols-2 lg:gap-x-[100px] xl:gap-x-[155px]"
      >
        <NuxtLink
          :to="'/blogs/' + blog.id"
          class="flex flex-col self-start rounded-2xl bg-white duration-500 ease-in dark:bg-HahuGray1"
          v-for="(blog, index) in Blogs"
          :key="index"
        >
          <img :src="blog.img" class="object-contain rounded-t-2xl" alt="blogImg"/>
          <h3
            class="mt-6 ml-8 self-start rounded-full bg-primary-lite px-3 py-[5px] text-xs font-medium leading-[18px] text-primary-dark"
          >
            {{ blog.cat }}
          </h3>
          <h3 class="ml-8 mt-4 dark:text-HahuGray/4">{{ blog.date }}</h3>
          <h2
            class="mt-4 ml-8 mx-2 text-xl font-bold leading-[38px] text-gray-800 dark:text-HahuGray/4 sm:text-2xl 2xl:text-3xl"
          >
            {{ blog.title }}
          </h2>
          <button
            class="mt-[34px] ml-8 mb-[30px] flex items-center self-start group text-lg font-medium text-primary"
          >
            Read Post
            <ArrowNarrowRightIcon
              class="ml-[9px] w-[18px] text-primary group-hover:translate-x-2 duration-300"
            />
          </button>
        </NuxtLink>
      </div>

      <button
        class="mt-[78px] flex items-center self-center rounded-md bg-primary py-2 pl-4 pr-5 text-sm font-medium leading-5 text-HahuGray/4"
      >
        <span class="pr-3">View more</span
        ><ArrowNarrowDownIcon class="h-4 w-4 fill-white" />
      </button>
    </section>
  </div>
</template>

<style>
#reportSearch {
  padding-top: "28px";
  padding-bottom: "28px";
  padding-left: "66px";
}
</style>
