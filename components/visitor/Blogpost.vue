<template>
  <section class="mt-10 flex flex-col" id="blog">
    <div class="flex flex-col items-center">
      <h1
        class="mt-10 self-center text-lg font-medium leading-[18px] dark:text-white lg:mt-[90px]"
      >
        Blog
      </h1>
      <NuxtLink :to="{ name: 'blogs' }" class="mt-[34px] self-center">
        <button
          class="rounded-[36px] bg-primary-lite px-3 py-2 text-center text-base font-black leading-5 text-white duration-300 hover:translate-x-1 hover:-translate-y-1 hover:shadow-2xl active:translate-x-0 active:translate-y-0 active:shadow-none xs:px-8 xs:text-lg lg:px-8 lg:py-4 lg:text-3xl lg:leading-[18px]"
        >
          Recent Blogs
        </button>
      </NuxtLink>
      <p
        class="mt-[34px] max-w-[900px] text-center text-base font-light leading-[30px] dark:text-HahuGray/4 xs:text-lg"
      >
        Below are some of our updates regarding our ventures with in the labor
        market and our partners offers in regards to related endeavors
      </p>
    </div>

    <div
      class="mt-16 grid grid-cols-1 justify-items-center gap-x-5 gap-y-10 lg:grid-cols-3"
    >
      <div
        class="flex max-w-[560px] flex-col rounded-t-md rounded-b-[15px] bg-white dark:bg-HahuGray1"
        v-for="(blog, i) in blogs"
        :key="i"
      >
        <img :src="blog.img" alt="blog Image" />
        <h1
          class="mt-6 ml-8 self-start rounded-[36px] bg-primary-lite px-3 py-[5px] text-xs font-medium leading-[18px] text-primary-dark"
        >
          {{ blog.catg }}
        </h1>
        <h4 class="mt-4 ml-8 text-base font-medium leading-6">
          {{ blog.date }}
        </h4>
        <p
          class="mt-4 ml-8 pr-[24px] text-xl font-bold leading-[38px] dark:text-HahuGray/4 xl:text-3xl"
        >
          {{ blog.title }}
        </p>
        <NuxtLink
          :to="{ name: `${blog.link}`, params: { id: `${blog.id}` } }"
          class="group mt-[34px] ml-8 mb-[30px] flex items-center self-start text-lg font-medium text-primary"
        >
          Read Post
          <ArrowNarrowRightIcon
            class="ml-[9px] w-[18px] text-primary duration-200 group-hover:translate-x-1"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowNarrowRightIcon } from "@heroicons/vue/solid/index.js";

const blogs = [
  {
    id: 1,
    img: "/images/blog_post_1.png",
    catg: "TECHNOLOGY",
    date: "19 Jan 2022",
    title: "Lorem ipsum dolor sit amet, consectetur elit.",
    link: "blogs-id-blogDetail",
  },
  {
    id: 2,
    img: "/images/blog_post_2.png",
    catg: "TECHNOLOGY",
    date: "19 Jan 2022",
    title: "Lorem ipsum dolor sit amet, consectetur elit.",
    link: "blogs-id-blogDetail",
  },
  {
    id: 3,
    img: "/images/blog_post_3.png",
    catg: "TECHNOLOGY",
    date: "19 Jan 2022",
    title: "Lorem ipsum dolor sit amet, consectetur elit.",
    link: "blogs-id-blogDetail",
  },
];
</script>

<style lang="scss" scoped></style>
