<template>
  <div
    class="mt-10 flex flex-col flex-wrap items-center justify-between space-y-10 bg-white px-8 duration-500 ease-in dark:bg-DarkModeBg md:px-[50px] lg:flex-row xl:px-[100px]">
    <div class="flex flex-col">
      <h1 class="mt-[27px] dark:text-HahuGray/4">Powered by</h1>
      <img src="/images/Hahu_footer_logo1.png" class="mt-[13px] object-contain dark:hidden" alt="hahuLogoFooterIcon"/>
      <img src="/images/Hahu_footer_logo1_dark.png" class="mt-[13px] hidden object-contain dark:block" alt="hahuLogoFooterIcon"/>

      <img src="/images/Hahu_footer_logo2.png" class="mt-[9px] mb-[41px] object-contain dark:hidden" alt="hahuLogoFooterIcon"/>
      <img src="/images/Hahu_footer_logo2_dark.png" class="mt-[9px] mb-[41px] hidden object-contain dark:block" alt="hahuLogoFooterIcon"/>
    </div>
    <div class="flex flex-col space-y-10 lg:flex-row lg:space-x-16 lg:space-y-0 xl:space-x-[85px]">
      <NuxtLink :to="{ name: 'index' }"
        class="transform-gpu text-xl font-medium leading-[30px] text-gray-500 duration-200 hover:rotate-12 hover:text-black dark:text-HahuGray/4">
        Services</NuxtLink>
      <NuxtLink :to="{ name: 'index' }"
        class="transform-gpu text-xl font-medium leading-[30px] text-gray-500 duration-200 hover:rotate-12 hover:text-black dark:text-HahuGray/4">
        About Us</NuxtLink>
      <NuxtLink :to="{ name: 'index' }"
        class="transform-gpu text-xl font-medium leading-[30px] text-gray-500 duration-200 hover:rotate-12 hover:text-black dark:text-HahuGray/4">
        Contact Us</NuxtLink>
      <NuxtLink :to="{ name: 'index' }"
        class="transform-gpu text-xl font-medium leading-[30px] text-gray-500 duration-200 hover:rotate-12 hover:text-black dark:text-HahuGray/4">
        Help</NuxtLink>
      <NuxtLink :to="{ name: 'index' }"
        class="transform-gpu text-xl font-medium leading-[30px] text-gray-500 duration-200 hover:rotate-12 hover:text-black dark:text-HahuGray/4">
        Privacy</NuxtLink>
    </div>
    <!-- <div class="flex items-center pb-10">
      <Switch v-model="enabled" @click="
        $colorMode.preference == 'light'
          ? ($colorMode.preference = 'dark')
          : ($colorMode.preference = 'light');
      " :class="enabled ? 'bg-gray-300' : 'bg-gray-300'"
        class="relative inline-flex h-9 w-24 items-center rounded-full">
        <span class="absolute left-4 text-sm font-bold leading-4 text-black"
          :class="enabled ? 'block' : 'hidden'">Dark</span>
        <span class="flex w-full items-center justify-between duration-500"
          :class="enabled ? 'translate-x-[62px]' : 'translate-x-1'">
          <div class="h-full rounded-full bg-white px-2 py-2">
            <img :src="DarkIcon" class="h-full w-full fill-white" :class="enabled ? 'block' : 'hidden'" />
            <img :src="LightIcon" class="h-full w-full fill-white" :class="!enabled ? 'block' : 'hidden'" />
          </div>
        </span>
        <span class="absolute right-4 text-sm font-bold leading-4 text-white delay-500 duration-100 ease-in-out"
          :class="!enabled ? 'block' : 'hidden'">Light</span>
      </Switch>
    </div> -->
  </div>
  <hr class="border-1 w-full border-gray-100" />
  <div
    class="flex h-[93px] flex-col items-center justify-center space-y-10 bg-white px-8 duration-500 ease-in dark:bg-DarkModeBg md:px-[50px] lg:mb-0 lg:flex-row lg:justify-between lg:space-y-0 xl:px-[100px]">
    <h1 class="text-base font-medium leading-6 text-gray-400">
      © 2022 HaHu Jobs. All rights reserved.
    </h1>
    <div class="ml-10 flex space-x-7 lg:mr-28">
      <button>
        <img class="object-contain" :src="Facebook" alt="facebookIcon"/>
      </button>
      <button>
        <img class="object-contain" :src="Twitter" alt="TwitterIcon"/>
      </button>
      <button>
        <img class="object-contain" :src="LinkedIn" alt="LinkedInIcon"/>
      </button>
    </div>
  </div>
</template>

<script setup>
import { Switch } from "@headlessui/vue";
import LightIcon from "@/assets/svg/lightIcon.svg?url";
import DarkIcon from "@/assets/svg/darkIcon.svg?url";
import Facebook from "@/assets/svg/Facebookfooter.svg?url";
import Twitter from "@/assets/svg/Twitterfooter.svg?url";
import LinkedIn from "@/assets/svg/LinkedInFooter.svg?url";

</script>

<style scoped>
</style>
