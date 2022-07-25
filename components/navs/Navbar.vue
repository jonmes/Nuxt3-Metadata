<script setup>
import HahuLogo from "@/assets/svg/Hahu_logo1.svg?url";
import HahuLogoDark from "@/assets/svg/Hahu_logo1_dark.svg?url";
import dropdown from "@/assets/svg/dropDownIcon.svg?url";
import { MenuAlt3Icon } from "@heroicons/vue/solid/index.js";
import { SunIcon, MoonIcon } from "@heroicons/vue/outline/index.js"
import { Switch } from "@headlessui/vue";
import LightIcon from "@/assets/svg/lightIcon.svg?url";
import DarkIcon from "@/assets/svg/darkIcon.svg?url";
const open = ref(false);
const sidebarOpen = ref(false);
const showShadow = ref(false);
const enabled = ref(true);

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

onBeforeMount(() => {
})

onMounted(() => {
  console.log(localStorage.getItem('nuxt-color-mode'));
  enabled.value = localStorage.getItem('nuxt-color-mode') == 'light' ? true : false
  console.log(enabled.value)
  window.addEventListener("scroll", handleScroll);
});
</script>

<template>
  <!-- <nav
    class="sticky top-0 z-20 flex items-center justify-between bg-secondary-3 bg-opacity-80 px-8 py-6 backdrop-blur-sm duration-300 ease-in dark:bg-DarkModeBg md:px-[50px] xl:px-[100px]"
    :class="[showShadow ? 'shadow-xl' : 'shadow-none']"
  > -->
  <nav v-for="i in 1"
    class="sticky top-0 z-20 flex items-center justify-between bg-secondary-3 bg-opacity-80 px-8 py-6 backdrop-blur-sm duration-300 ease-in dark:bg-DarkModeBg md:px-12 xl:pl-24  3xl:px-24">
    <div class="z-10 flex items-center">
      <span class="mr-1 text-xl text-white">
        <NuxtLink :to="{ path: '/' }">
          <img :src="HahuLogo" class="dark:hidden" alt="hahuLogo" />
          <img :src="HahuLogoDark" class="hidden dark:block" alt="hahuLogo" />
        </NuxtLink>
      </span>
    </div>
    <div class="flex flex-row-reverse xl:flex-row justify-between">
      <MenuAlt3Icon @click="open = !open" class="w-8 z-20 cursor-pointer items-center dark:text-white xl:hidden" />
      <ul
        class="absolute top-14 right-0 w-full gap-y-7 bg-secondary-4 pb-10 duration-700 ease-in dark:bg-gray-700 dark:text-HahuGray/4 xl:static xl:flex xl:w-auto xl:items-center xl:gap-x-7 xl:gap-y-0 xl:bg-transparent xl:pb-0 dark:xl:bg-transparent"
        :class="[open ? 'z-0' : 'top-[-800%]']">
        <li class="flex justify-center">
          <NuxtLink to="/"
            class="text-lg font-medium leading-[35px] duration-500 hover:text-primary dark:hover:text-primary" :class="
              $route.fullPath == '' || $route.fullPath.length <= 1
                ? 'text-primary'
                : 'text-HahuGray1 dark:text-white '
            " @click="open = !open">Home</NuxtLink>
        </li>

        <li class="flex justify-center">
          <NuxtLink :to="{ path: '/', hash: '#about' }"
            class="text-lg font-medium leading-[35px] duration-500 hover:text-primary dark:hover:text-primary" :class="
              $route.fullPath == '/#about' || $route.fullPath == '/aboutus'
                ? 'text-primary'
                : 'text-HahuGray1 dark:text-white'
            " @click="open = !open">About</NuxtLink>
        </li>

        <li class="flex justify-center">
          <NuxtLink :to="{ path: '/', hash: '#services' }"
            class="text-lg font-medium leading-[35px] duration-500 hover:text-primary dark:hover:text-primary" :class="
              $route.fullPath == '/#services'
                ? 'text-primary'
                : 'text-HahuGray1 dark:text-white'
            " @click="open = !open">Services</NuxtLink>
        </li>

        <li class="flex justify-center">
          <NuxtLink :to="{ path: '/', hash: '#projects' }"
            class="text-lg font-medium leading-[35px] duration-500 hover:text-primary dark:hover:text-primary" :class="
              $route.fullPath == '/#projects' || $route.fullPath == '/projects'
                ? 'text-primary'
                : 'text-HahuGray1 dark:text-white'
            " @click="open = !open">Projects</NuxtLink>
        </li>

        <li class="flex justify-center">
          <NuxtLink :to="{ path: '/', hash: '#blog' }"
            class="text-lg font-medium leading-[35px] duration-500 hover:text-primary dark:hover:text-primary" :class="
              $route.fullPath == '/#blog' || $route.fullPath == '/blogs'
                ? 'text-primary'
                : 'text-HahuGray1 dark:text-white'
            " @click="open = !open">Blog</NuxtLink>
        </li>

        <li class="flex justify-center">
          <NuxtLink :to="{ path: '/', hash: '#report' }"
            class="text-lg font-medium leading-[35px] duration-500 hover:text-primary dark:hover:text-primary" :class="
              $route.fullPath == '/#report' || $route.fullPath == '/reports'
                ? 'text-primary'
                : 'text-HahuGray1 dark:text-white'
            " @click="open = !open">Report</NuxtLink>
        </li>

        <li class="flex justify-center">
          <NuxtLink :to="{ path: '/', hash: '#team' }"
            class="text-lg font-medium leading-[35px] duration-500 hover:text-primary dark:hover:text-primary" :class="
              $route.fullPath == '/#team'
                ? 'text-primary'
                : 'text-HahuGray1 dark:text-white'
            " @click="open = !open">Team</NuxtLink>
        </li>

        <li class="flex justify-center">
          <NuxtLink :to="{ path: '/', hash: '#contact' }"
            class="text-lg font-medium leading-[35px] duration-500 hover:text-primary dark:hover:text-primary" :class="
              $route.fullPath == '/#contact'
                ? 'text-primary'
                : 'text-HahuGray1 dark:text-white'
            " @click="open = !open">Contact</NuxtLink>
        </li>
        <li class="flex justify-center">
          <button
            class="mt-1 flex text-lg text-HahuGray1 font-medium leading-[35px] dark:text-white dark:hover:text-primary"
            @click="open = !open">
            Eng <img :src="dropdown" class="ml-[15px] self-center" alt="dropdownIcon" />
          </button>
        </li>
        <!-- <li class="flex justify-center">
          <button @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')">
            <SunIcon class="w-5 opacity-50 hover:opacity-100 dark:hidden duration-300" />
            <MoonIcon class="w-5 opacity-50 hover:opacity-100 hidden dark:block duration-300" />
          </button>
        </li> -->
      </ul>
      <div class="flex items-center px-4">
        <Switch v-model="enabled" @click="
  $colorMode.preference == 'light'
    ? ($colorMode.preference = 'dark')
    : ($colorMode.preference = 'light'); enabled = !enabled
        " class="relative inline-flex h-6 w-[88px] items-center rounded-full bg-gray-300">
          <span class="absolute left-3 text-sm font-bold leading-4 text-white"
            :class="enabled ? 'block' : 'hidden'">Light</span>
          <span class="flex w-full items-center justify-between duration-500"
            :class="enabled ? 'translate-x-[62px]' : 'translate-x-1'">
            <div class="h-full rounded-full">
              <MoonIcon class="h-6 fill-white" :class="!enabled ? 'block' : 'hidden'" />
              <SunIcon class="h-6 fill-white" :class="enabled ? 'block' : 'hidden'" />
            </div>
          </span>
          <span class="absolute right-4 text-sm font-bold leading-4 text-black delay-500 duration-100 ease-in-out"
            :class="!enabled ? 'block' : 'hidden'">Dark</span>
        </Switch>
      </div>
    </div>
  </nav>

</template>
