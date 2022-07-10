<script setup>
import HahuLogo from "@/assets/svg/Hahu_logo1.svg?url";
import HahuLogoDark from "@/assets/svg/Hahu_logo1_dark.svg?url";
import dropdown from "@/assets/svg/dropDownIcon.svg?url";
import { MenuAlt3Icon } from "@heroicons/vue/solid/index.js";

const open = ref(false);

const sidebarOpen = ref(false);
</script>

<template>
  <nav
    class="sticky top-0 z-20 flex items-center justify-between bg-secondary-3 bg-opacity-80 px-8 py-6 backdrop-blur-sm duration-300 ease-in dark:bg-DarkModeBg md:px-[50px] xl:px-[100px]"
  >
    <div class="z-10 flex items-center">
      <span class="mr-1 text-xl text-white">
        <NuxtLink :to="{ path: '/' }">
          <img :src="HahuLogo" class="dark:hidden" />
          <img :src="HahuLogoDark" class="hidden dark:block" />
        </NuxtLink>
        <h1 class="mt-2 text-base font-light leading-4 text-[#444F60]">
          Industry Park
        </h1>
      </span>
    </div>
    <MenuAlt3Icon
      @click="open = !open"
      class="w-8 z-20 cursor-pointer items-center dark:text-white lg:hidden"
    />

    <ul
      class="absolute top-14 right-0 w-full space-y-7 bg-secondary-4 pb-10 duration-700 ease-in dark:bg-gray-700 dark:text-HahuGray/4 lg:static lg:flex lg:w-auto lg:items-center lg:space-x-9 lg:space-y-0 lg:bg-transparent lg:pb-0 dark:lg:bg-transparent"
      :class="[open ? 'z-0' : 'top-[-800%]']"
    >
      <li class="flex justify-center">
        <NuxtLink
          to="/HahuIndustry"
          class="text-lg font-medium leading-[35px] duration-500 hover:text-primary"
          :class="
            $route.fullPath == '/HahuIndustry'
              ? 'text-primary'
              : 'text-HahuGray1 dark:text-white'
          "
          @click="open = !open"
          >Home</NuxtLink
        >
      </li>

      <li class="flex justify-center">
        <NuxtLink
          :to="{ path: '/HahuIndustry', hash: '#partners' }"
          class="text-lg font-medium leading-[35px] duration-500 hover:text-primary"
          :class="
            $route.fullPath == '/HahuIndustry#partners'
              ? 'text-primary'
              : 'text-HahuGray1 dark:text-white'
          "
          @click="open = !open"
          >Partners</NuxtLink
        >
      </li>

      <li class="flex justify-center">
        <NuxtLink
          :to="{ path: '/HahuIndustry', hash: '#about' }"
          class="text-lg font-medium leading-[35px] duration-500 hover:text-primary"
          :class="
            $route.fullPath == '/HahuIndustry#about'
              ? 'text-primary'
              : 'text-HahuGray1 dark:text-white'
          "
          @click="open = !open"
          >About</NuxtLink
        >
      </li>

      <li class="flex justify-center">
        <button
          class="rounded-md bg-primary px-[25px] py-2 text-base font-medium leading-6 text-white"
        >
          Login
        </button>
      </li>

      <li class="flex justify-center hover:text-primary">
        <button
          class="mt-1 flex text-lg font-medium leading-[35px]"
          @click="open = !open"
        >
          Eng <img :src="dropdown" class="ml-[15px] self-center" />
        </button>
      </li>
    </ul>
  </nav>
</template>

<style></style>
