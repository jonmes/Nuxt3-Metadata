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
    id: 1,
    img: "/images/blog_post_1.jpg",
    cat: "TECHNOLOGY",
    date: "19 Jan 2022",
    title: "Hey! Today let's introduce yout to AWAQI",
    link: "blogs-id-blogDetail",
  },
  {
    id: 2,
    img: "/images/blog_post_2.jpg",
    cat: "TECHNOLOGY",
    date: "19 Jan 2022",
    title:
      "HaHuJobs have signed an MoU with the Ethiopian Investment Commission",
    link: "blogs-id-blogDetail",
  },
  {
    id: 3,
    img: "/images/blog_post_3.jpg",
    cat: "TECHNOLOGY",
    date: "19 Jan 2022",
    title: "ALx Software Engineering training programm.",
    link: "blogs-id-blogDetail",
  },
  {
    id: 4,
    img: "/images/blog_post_4.jpg",
    cat: "TECHNOLOGY",
    date: "19 Jan 2022",
    title: "ALx African Career Catalyst (ACC)",
    link: "blogs-id-blogDetail",
  },
  {
    id: 5,
    img: "/images/blog_post_5.jpg",
    cat: "TECHNOLOGY",
    date: "19 Jan 2022",
    title: "ALx Young Entrepreneurs Programme (YEP)",
    link: "blogs-id-blogDetail",
  },
  {
    id: 6,
    img: "/images/blog_post_6.png",
    cat: "TECHNOLOGY",
    date: "19 Jan 2022",
    title: "HahuJobs have signed a service agreement with SNV",
    link: "blogs-id-blogDetail",
  },
  // {
  //   id: 4,
  //   img: "/images/Blog4.png",
  //   cat: "TECHNOLOGY",
  //   date: "19 Jan 2022",
  //   title: "Lorem ipsum dolor sit amet, consectetur elit.",
  //   link: "blogs-id-blogDetail",
  // },
  // {
  //   id: 5,
  //   img: "/images/Blog5.png",
  //   cat: "TECHNOLOGY",
  //   date: "19 Jan 2022",
  //   title: "Lorem ipsum dolor sit amet, consectetur elit.",
  //   link: "blogs-id-blogDetail",
  // },
  // {
  //   id: 6,
  //   img: "/images/Blog6.png",
  //   cat: "TECHNOLOGY",
  //   date: "19 Jan 2022",
  //   title: "Lorem ipsum dolor sit amet, consectetur elit.",
  //   link: "blogs-id-blogDetail",
  // },
];
</script>

<template>
  <div class="min-h-screen">
    <Head>
      <Title>Blogs</Title>
      <Meta
        data-n-head="1"
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <Meta data-n-head="1" property="og:title" content="Blogs" />
      <Meta
        data-n-head="1"
        property="og:description"
        content="You can read our blogs about Technology, Development, Marketing and Start-ups"
      />
      <Meta
        data-n-head="1"
        data-hid="description"
        name="description"
        content="You can read our blogs about Technology, Development, Marketing and Start-ups"
      />
      <Meta
        data-n-head="1"
        property="og:url"
        content="https://hahuone.netlify.app/"
      />
      <Meta data-n-head="1" property="og:type" content="website" />
      <Meta
        data-n-head="1"
        property="og:image"
        content="https://hahuone.netlify.app/images/meta_img.png"
      />
      <Meta
        data-n-head="1"
        property="twitter:card"
        content="summary_large_image"
      />
      <Meta
        data-n-head="1"
        property="twitter:domain"
        content="hahuone.netlify.app"
      />
      <Meta property="twitter:url" content="https://hahuone.netlify.app/" />
      <Meta data-n-head="1" property="twitter:title" content="Blogs" />
      <Meta
        data-n-head="1"
        property="twitter:description"
        content="You can read our blogs about Technology, Development, Marketing and Start-ups"
      />
      <Meta
        name="twitter:image"
        content="https://hahuone.netlify.app/images/meta_img.png"
      />
      <Meta
        data-n-head="1"
        property="twitter:image"
        content="https://hahuone.netlify.app/images/meta_img.png"
      />
    </Head>
    <section
      class="mt-10 flex flex-col px-5 md:px-20 lg:px-20 xl:px-36 2xl:px-[230px]"
    >
      <div class="mt-[42px] flex justify-between px-8">
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
          class="w-full rounded-2xl px-8 py-4 text-xl font-normal leading-6 text-HahuGray2 focus:outline-primary md:px-16 md:py-7"
          placeholder="Search"
        />
        <SearchIcon
          class="relative right-10 h-6 w-6 cursor-pointer md:right-20"
        />
      </div>
      <div class="flex flex-wrap items-center gap-10 xl:ml-[196px] xl:gap-x-20">
        <NuxtLink
          :href="catg.link"
          class="mt-16 rounded-md px-4 py-2 text-sm font-bold leading-5"
          v-for="catg in category"
          :class="
            $router.options.history.location.indexOf(catg.link) !== -1
              ? 'bg-HaHuGreen/4 text-primary'
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
          <img :src="blog.img" class="object-contain rounded-t-2xl" />
          <h3
            class="mt-6 ml-8 self-start rounded-full bg-primary-lite px-3 py-[5px] text-xs font-medium leading-[18px] text-primary-dark"
          >
            {{ blog.cat }}
          </h3>
          <h3 class="ml-8 mt-4 dark:text-HahuGray/4">{{ blog.date }}</h3>
          <h2
            class="mt-4 ml-8 text-xl font-bold leading-[38px] text-gray-800 dark:text-HahuGray/4 sm:text-2xl 2xl:text-3xl"
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
