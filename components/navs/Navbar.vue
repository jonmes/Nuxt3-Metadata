<script setup>
import HahuLogo from "@/assets/svg/Hahu_logo1.svg?url";
import HahuLogoDark from "@/assets/svg/Hahu_logo1_dark.svg?url";
import dropdown from "@/assets/svg/dropDownIcon.svg?url";
import { MenuAlt3Icon } from "@heroicons/vue/solid/index.js";
import { SunIcon, MoonIcon } from "@heroicons/vue/outline/index.js"
const open = ref(false);
const sidebarOpen = ref(false);
const showShadow = ref(false);

const handleScroll = (e) => {
  if (document.documentElement.scrollTop >= 10) {
    showShadow.value = true;
  } else {
    showShadow.value = false;
  }
};

const setColorTheme = (newTheme) => {
  useColorMode().preference = newTheme
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>

<template>
  <!-- <nav
    class="sticky top-0 z-20 flex items-center justify-between bg-secondary-3 bg-opacity-80 px-8 py-6 backdrop-blur-sm duration-300 ease-in dark:bg-DarkModeBg md:px-[50px] xl:px-[100px]"
    :class="[showShadow ? 'shadow-xl' : 'shadow-none']"
  > -->
  <nav v-for="i in 1"
    class="sticky top-0 z-20 flex items-center justify-between bg-secondary-3 bg-opacity-80 px-8 py-6 backdrop-blur-sm duration-300 ease-in dark:bg-DarkModeBg md:px-12 xl:px-24">
    <div class="z-10 flex items-center">
      <span class="mr-1 text-xl text-white">
        <NuxtLink :to="{ path: '/' }">
          <img :src="HahuLogo" class="dark:hidden" />
          <img :src="HahuLogoDark" class="hidden dark:block" />
        </NuxtLink>
      </span>
    </div>
    <MenuAlt3Icon @click="open = !open" class="w-8 z-20 cursor-pointer items-center dark:text-white lg:hidden" />

    <ul
      class="absolute top-14 right-0 w-full space-y-7 bg-secondary-4 pb-10 duration-700 ease-in dark:bg-gray-700 dark:text-HahuGray/4 lg:static lg:flex lg:w-auto lg:items-center lg:space-x-9 lg:space-y-0 lg:bg-transparent lg:pb-0 dark:lg:bg-transparent"
      :class="[open ? 'z-0' : 'top-[-800%]']">
      <li class="flex justify-center">
        <NuxtLink to="/" class="text-lg font-medium leading-[35px] duration-500 hover:text-primary" :class="
          $route.fullPath == '' || $route.fullPath.length <= 1
            ? 'text-primary'
            : 'text-HahuGray1 dark:text-white'
        " @click="open = !open">Home</NuxtLink>
      </li>

      <li class="flex justify-center">
        <NuxtLink :to="{ path: '/', hash: '#about' }"
          class="text-lg font-medium leading-[35px] duration-500 hover:text-primary" :class="
            $route.fullPath == '/#about' || $route.fullPath == '/aboutus'
              ? 'text-primary'
              : 'text-HahuGray1 dark:text-white'
          " @click="open = !open">About</NuxtLink>
      </li>

      <li class="flex justify-center">
        <NuxtLink :to="{ path: '/', hash: '#services' }"
          class="text-lg font-medium leading-[35px] duration-500 hover:text-primary" :class="
            $route.fullPath == '/#services'
              ? 'text-primary'
              : 'text-HahuGray1 dark:text-white'
          " @click="open = !open">Services</NuxtLink>
      </li>

      <li class="flex justify-center">
        <NuxtLink :to="{ path: '/', hash: '#projects' }"
          class="text-lg font-medium leading-[35px] duration-500 hover:text-primary" :class="
            $route.fullPath == '/#projects' || $route.fullPath == '/projects'
              ? 'text-primary'
              : 'text-HahuGray1 dark:text-white'
          " @click="open = !open">Projects</NuxtLink>
      </li>

      <li class="flex justify-center">
        <NuxtLink :to="{ path: '/', hash: '#blog' }"
          class="text-lg font-medium leading-[35px] duration-500 hover:text-primary" :class="
            $route.fullPath == '/#blog' || $route.fullPath == '/blogs'
              ? 'text-primary'
              : 'text-HahuGray1 dark:text-white'
          " @click="open = !open">Blog</NuxtLink>
      </li>

      <li class="flex justify-center">
        <NuxtLink :to="{ path: '/', hash: '#report' }"
          class="text-lg font-medium leading-[35px] duration-500 hover:text-primary" :class="
            $route.fullPath == '/#report' || $route.fullPath == '/reports'
              ? 'text-primary'
              : 'text-HahuGray1 dark:text-white'
          " @click="open = !open">Report</NuxtLink>
      </li>

      <li class="flex justify-center">
        <NuxtLink :to="{ path: '/', hash: '#team' }"
          class="text-lg font-medium leading-[35px] duration-500 hover:text-primary" :class="
            $route.fullPath == '/#team'
              ? 'text-primary'
              : 'text-HahuGray1 dark:text-white'
          " @click="open = !open">Team</NuxtLink>
      </li>

      <li class="flex justify-center">
        <NuxtLink :to="{ path: '/', hash: '#contact' }"
          class="text-lg font-medium leading-[35px] duration-500 hover:text-primary" :class="
            $route.fullPath == '/#contact'
              ? 'text-primary'
              : 'text-HahuGray1 dark:text-white'
          " @click="open = !open">Contact</NuxtLink>
      </li>
      <li class="flex justify-center">
        <button class="mt-1 flex text-lg text-HahuGray1 font-medium leading-[35px] dark:text-white"
          @click="open = !open">
          Eng <img :src="dropdown" class="ml-[15px] self-center" />
        </button>
      </li>
      <li class="flex justify-center">
        <button @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')">
          <SunIcon class="w-5 opacity-50 hover:opacity-100 dark:hidden" />
          <MoonIcon class="w-5 opacity-50 hover:opacity-100 hidden dark:block" />
        </button>
      </li>
    </ul>
  </nav>
</template>
