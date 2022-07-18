<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol role="list" class="flex space-x-4 rounded-md bg-white dark:bg-LightDark px-1 xs:px-6 shadow">
      <li class="flex">
        <div class="flex items-center">
          <NuxtLink :to="{ name: 'index' }" class="text-gray-400 hover:text-gray-500">
            <HomeIcon class="h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
            <span class="sr-only">Home</span>
          </NuxtLink>
        </div>
      </li>
      <li v-for="(page, i) in props.crumb" :key="i" class="flex">
        <div class="flex items-center">
          <svg class="h-full w-6 flex-shrink-0 text-gray-200 dark:text-gray-400" viewBox="0 0 24 44"
            preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
          </svg>
          <NuxtLink :to="{ name: `${page.link}` }" class="ml-4 text-sm font-medium text-primary dark:text-white duration-300"
            :aria-current="page.current ? 'page' : undefined" :class="{ 'disabled text-gray-500 ': isLast(i) }">{{
                page.name
            }}</NuxtLink>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { HomeIcon } from "@heroicons/vue/solid/index.js";

// const pages = [
//   { id: 1, name: "Projects", link: "Projects", current: false },
//   { id: 2, name: "Project Detail", link: "Projects", current: true },
// ];

const props = defineProps({ crumb: Array });
// console.log('props value', props.crumb);
const isLast = (i) => {
  return i === props.crumb.length - 1;
};
</script>
