<template>
  <div
    class="mt-10 flex flex-col flex-wrap items-center justify-between space-y-10 bg-white px-8 duration-500 ease-in dark:bg-DarkModeBg md:px-[50px] lg:flex-row xl:px-[100px]">
    <div class="flex flex-col">
      <h1 class="mt-[27px] dark:text-HahuGray/4">Powered by</h1>
      <img src="/images/Hahu_footer_logo1.png" class="mt-[13px] object-contain dark:hidden" alt="hahuLogoFooterIcon" />
      <img src="/images/Hahu_footer_logo1_dark.png" class="mt-[13px] hidden object-contain dark:block"
        alt="hahuLogoFooterIcon" />

      <img src="/images/Hahu_footer_logo2.png" class="mt-[9px] mb-[41px] object-contain dark:hidden"
        alt="hahuLogoFooterIcon" />
      <img src="/images/Hahu_footer_logo2_dark.png" class="mt-[9px] mb-[41px] hidden object-contain dark:block"
        alt="hahuLogoFooterIcon" />
    </div>
    <div class="flex flex-col space-y-10 lg:flex-row lg:space-x-16 lg:space-y-0 xl:space-x-[85px]">
      <NuxtLink :to="{ path: '/', hash: '#services' }"
        class="transform-gpu text-xl font-medium leading-[30px] text-gray-500 duration-200 hover:rotate-12 hover:text-black dark:text-HahuGray/4">
        Services</NuxtLink>
      <NuxtLink :to="{ path: '/', hash: '#about' }"
        class="transform-gpu text-xl font-medium leading-[30px] text-gray-500 duration-200 hover:rotate-12 hover:text-black dark:text-HahuGray/4">
        About Us</NuxtLink>
      <NuxtLink :to="{ path: '/', hash: '#contact' }"
        class="transform-gpu text-xl font-medium leading-[30px] text-gray-500 duration-200 hover:rotate-12 hover:text-black dark:text-HahuGray/4">
        Contact Us</NuxtLink>
      <NuxtLink :to="{ path: '/' }"
        class="transform-gpu text-xl font-medium leading-[30px] text-gray-500 duration-200 hover:rotate-12 hover:text-black dark:text-HahuGray/4">
        Help</NuxtLink>
      <NuxtLink :to="{ path: '/' }"
        class="transform-gpu text-xl font-medium leading-[30px] text-gray-500 duration-200 hover:rotate-12 hover:text-black dark:text-HahuGray/4">
        Privacy</NuxtLink>
    </div>
  </div>
  <hr class="border-1 w-full border-gray-100" />
  <div
    class="flex h-[93px] flex-col items-center justify-center space-y-10 bg-white px-8 duration-500 ease-in dark:bg-DarkModeBg md:px-[50px] lg:mb-0 lg:flex-row lg:justify-between lg:space-y-0 xl:px-[100px]">
    <h1 class="text-base font-medium leading-6 text-gray-400">
      © 2022 HaHu Jobs. All rights reserved.
    </h1>
    <div class="ml-10 flex space-x-7 lg:mr-28">
      <button>
        <img class="object-contain" :src="Facebook" alt="facebookIcon" />
      </button>
      <button>
        <img class="object-contain" :src="Twitter" alt="TwitterIcon" />
      </button>
      <button>
        <img class="object-contain" :src="LinkedIn" alt="LinkedInIcon" />
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
