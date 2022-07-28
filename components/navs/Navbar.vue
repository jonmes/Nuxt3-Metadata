<script setup>
import HahuLogo from "@/assets/svg/Hahu_logo1.svg?url";
import HahuLogoDark from "@/assets/svg/Hahu_logo1_dark.svg?url";
import dropdown from "@/assets/svg/dropDownIcon.svg?url";
import { MenuAlt3Icon } from "@heroicons/vue/solid";
import { SunIcon, MoonIcon } from "@heroicons/vue/outline"
import { Switch } from "@headlessui/vue";

import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  MenuIcon,
  XIcon,
} from "@heroicons/vue/outline";
const enabled = ref(true);
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
onMounted(() => {
  console.log(localStorage.getItem('nuxt-color-mode'));
  enabled.value = localStorage.getItem('nuxt-color-mode') == 'light' ? true : false
  console.log(enabled.value)
  window.addEventListener("scroll", handleScroll);
});

</script>

<template>
  <div class="sticky top-0 z-50 bg-transparent">
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative right-0 z-50 xl:hidden" @close="open = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
          enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
          leave-to="opacity-0">
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex justify-end">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
            enter-from="translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0" leave-to="translate-x-full">
            <DialogPanel
              class="relative flex w-6/12 max-w-xs flex-col overflow-y-auto bg-white dark:bg-DarkModeBg pb-12 shadow-xl xs:w-5/12 md:w-full">
              <div class="flex px-4 pt-5 pb-2">
                <button type="button" class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                  @click="open = false">
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div class="space-y-6 border-t border-gray-200 py-6 px-4">
                <div class="flow-root flex-col">
                  <NuxtLink to="/"
                    class="-m-2 block p-2 font-medium uppercase  hover:bg-gray-100 focus:bg-gray-200 active:bg-gray-300"
                    :class="
                      $route.fullPath == '' || $route.fullPath.length <= 1
                        ? 'text-primary'
                        : 'text-HahuGray1 dark:text-white'
                    " @click="open = false">
                    home
                  </NuxtLink>
                  <NuxtLink :to="{ path: '/', hash: '#about' }"
                    class="-m-2 block p-2 font-medium uppercase  hover:bg-gray-100 focus:bg-gray-200 active:bg-gray-300"
                    :class="
                      $route.fullPath == '/#about' || $route.fullPath == '/aboutus'
                        ? 'text-primary'
                        : 'text-HahuGray1 dark:text-white'
                    " @click="open = false">
                    About </NuxtLink>

                  <NuxtLink :to="{ path: '/', hash: '#services' }"
                    class="-m-2 block p-2 font-medium uppercase  hover:bg-gray-100 focus:bg-gray-200 active:bg-gray-300"
                    :class="
                      $route.fullPath == '/#services'
                        ? 'text-primary'
                        : 'text-HahuGray1 dark:text-white'
                    " @click="open = false">
                    Services </NuxtLink>
                  <NuxtLink :to="{ path: '/', hash: '#projects' }"
                    class="-m-2 block p-2 font-medium uppercase hover:bg-gray-100 focus:bg-gray-200 active:bg-gray-300"
                    :class="
                      $route.fullPath == '/#projects' || $route.fullPath == '/projects'
                        ? 'text-primary'
                        : 'text-HahuGray1 dark:text-white'
                    " @click="open = false">
                    Projects </NuxtLink>
                  <NuxtLink :to="{ path: '/', hash: '#blog' }"
                    class="-m-2 block p-2 font-medium uppercase  hover:bg-gray-100 focus:bg-gray-200 active:bg-gray-300"
                    :class="
                      $route.fullPath == '/#blog' || $route.fullPath == '/blogs'
                        ? 'text-primary'
                        : 'text-HahuGray1 dark:text-white'
                    " @click="open = false">
                    Blog </NuxtLink>
                  <NuxtLink :to="{ path: '/', hash: '#report' }"
                    class="-m-2 block p-2 font-medium uppercase  hover:bg-gray-100 focus:bg-gray-200 active:bg-gray-300"
                    :class="
                      $route.fullPath == '/#report' || $route.fullPath == '/reports'
                        ? 'text-primary'
                        : 'text-HahuGray1 dark:text-white'
                    " @click="open = false">
                    Report </NuxtLink>
                  <NuxtLink :to="{ path: '/', hash: '#team' }"
                    class="-m-2 block p-2 font-medium uppercase  hover:bg-gray-100 focus:bg-gray-200 active:bg-gray-300"
                    :class="
                      $route.fullPath == '/#team'
                        ? 'text-primary'
                        : 'text-HahuGray1 dark:text-white'
                    " @click="open = false">
                    Team </NuxtLink>
                  <NuxtLink :to="{ path: '/', hash: '#contact' }"
                    class="-m-2 block p-2 font-medium uppercase  hover:bg-gray-100 focus:bg-gray-200 active:bg-gray-300"
                    :class="
                      $route.fullPath == '/#contact'
                        ? 'text-primary'
                        : 'text-HahuGray1 dark:text-white'
                    " @click="open = false">
                    Contact </NuxtLink>
                </div>
              </div>

              <div class="space-y-6 border-t border-gray-200 py-6 px-4">
                <HeadlessListbox
                  class="text-lg font-medium leading-[35px] duration-500 hover:text-primary dark:hover:text-primary" />
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <nav
      class="sticky top-0 z-20 flex items-center justify-between bg-secondary-3 bg-opacity-80 px-8 py-6 backdrop-blur-sm duration-300 ease-in dark:bg-DarkModeBg md:px-12 xl:pl-24  3xl:px-24">
      <div class="z-10 flex items-center">
        <span class="mr-1 text-xl text-white">
          <NuxtLink :to="{ path: '/' }">
            <img :src="HahuLogo" class="dark:hidden" alt="hahuLogo" />
            <img :src="HahuLogoDark" class="hidden dark:block" alt="hahuLogo" />
          </NuxtLink>
          <h1 class="mt-2 text-base font-light flex justify-center leading-4 text-[#444F60] dark:text-white">
            IO
          </h1>
        </span>
      </div>
      <div class="flex flex-row-reverse xl:flex-row justify-between">
        <!-- <MenuAlt3Icon @click="open = !open" class="w-8 z-20 cursor-pointer items-center dark:text-white xl:hidden" /> -->
        <button type="button"
          class="rounded-md bg-white dark:bg-DarkModeBg border-white border-[1px] p-2 text-gray-400 xl:hidden z-20"
          @click="open = true">
          <span class="sr-only">Open menu</span>
          <MenuAlt3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
        <ul
          class="absolute hidden bg-secondary-4 duration-700 ease-in dark:bg-gray-700 dark:text-HahuGray/4 xl:static xl:flex xl:w-auto xl:items-center xl:gap-x-7 xl:gap-y-0 xl:bg-transparent xl:pb-0 dark:xl:bg-transparent">
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
            <div class="relative">
              <HeadlessListbox
                class="text-lg font-medium leading-[35px] duration-500 hover:text-primary dark:hover:text-primary" />
            </div>
          </li>
        </ul>
        <div class="flex items-center px-4 overflow-hidden">
          <Switch v-model="enabled"
            @click="$colorMode.preference == 'light' ? ($colorMode.preference = 'dark') : ($colorMode.preference = 'light'); enabled = !enabled"
            class="relative inline-flex h-6 w-[88px] items-center rounded-full bg-gray-300">
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
  </div>

</template>
