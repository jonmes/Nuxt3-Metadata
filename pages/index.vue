<script setup>
import { gsap } from "gsap";
import { ArrowNarrowRightIcon } from "@heroicons/vue/solid";
</script>
<template>
  <div class="min-h-screen px-8 md:px-12 xl:px-14 2xl:px-24">
    <section
      class="mb-0 flex flex-col items-center overflow-hidden overflow-y-hidden lg:mb-0 lg:min-h-[83vh] xl:space-x-20 lg:flex-row"
      id="home">
      <div class="mt-14 3xl:mt-20 lg:flex-1">
        <div class="w-6/12 sm:w-4/12 2xl:w-full">
          <img class="object-contain dark:hidden" src="/images/Hahu-031.png" alt="hahuLogo" v-motion :initial="{
            y: 300,
          }" :enter="{
  y: 0,
  transition: {
    delay: 180,
    duration: 600,
    type: 'spring',
    stiffness: 60,
  },
}" />
          <img class="hidden object-contain dark:block" src="/images/Hahu-031_dark.png" alt="hahuLogo" v-motion
            :initial="{
              y: 300,
            }" :enter="{
  y: 0,
  transition: {
    delay: 180,
    duration: 600,
    type: 'spring',
    stiffness: 60,
  },
}" />
        </div>
        <div class="w-8/12 sm:w-6/12 3xl:w-full">
          <img class="mt-10 object-contain dark:hidden" src="/images/Hahu_logo2.png" alt="hahujobsLogo" v-motion
            :initial="{
              y: 300,
            }" :enter="{
  y: 0,
  transition: {
    delay: 210,
    duration: 600,
    type: 'spring',
    stiffness: 60,
  },
}" />
          <img class="mt-10 hidden object-contain dark:block" src="/images/Hahu_logo2_dark.png" alt="hahujobsLogo"
            v-motion :initial="{
              y: 300,
            }" :enter="{
  y: 0,
  transition: {
    delay: 220,
    duration: 600,
    type: 'spring',
    stiffness: 60,
  },
}" />
        </div>
        <p class="mt-12 3xl:mt-20 w-full text-base 3xl:text-lg font-normal leading-8 dark:text-HahuGray/4" v-motion
          :initial="{
            y: 300,
          }" :enter="{
  y: 0,
  transition: {
    delay: 230,
    duration: 600,
    type: 'spring',
    stiffness: 60,
  },
}">
          Hey there, ሰላም ነው? Welcome to HaHuJobs the largest data-driven job
          matching and labor market information platform in Ethiopia. With
          various service deployments to address the Ethiopian labor market
          needs; we stand at the forefront of the local digital job matching
          industry.
        </p>
        <div class="mt-5 md:mt-14 3xl:20 flex">
          <a href="#services" class="group">
            <button class="flex items-center self-center rounded-md bg-primary py-3 px-5 text-white" v-motion :initial="{
              y: 300,
            }" :enter="{
  y: 0,
  transition: {
    delay: 250,
    duration: 600,
    type: 'spring',
    stiffness: 60,
  },
}">
              Our Services
              <span class="pl-3">
                <ArrowNarrowRightIcon class="h-5 w-5 duration-200 group-hover:translate-x-1" />
              </span>
            </button>
          </a>
        </div>
      </div>
      <div class="flex-1 hidden md:block 4xl:w-full">
        <img class="overflow-hidden object-contain md:mb-32 lg:mb-10 lg:flex-1 block dark:hidden"
          src="/images/landing_page_dark.png" alt="hahuWelcomeSvg" v-motion :initial="{
            y: -100,
          }" :enter="{
  y: 0,
  transition: {
    delay: 200,
    duration: 600,
    type: 'spring',
    stiffness: 100,
    ease: 'easeIn',
  },
}" />
        <img class="overflow-hidden object-contain md:mb-32 lg:mb-10 lg:flex-1 hidden dark:block"
          src="/images/landing_page_dark.png" alt="hahuWelcomeSvg" v-motion :initial="{
            y: -100,
          }" :enter="{
  y: 0,
  transition: {
    delay: 200,
    duration: 600,
    type: 'spring',
    stiffness: 100,
    ease: 'easeIn',
  },
}" />
      </div>
    </section>
    <main>
      <VisitorAbout />
      <VisitorServices />
      <VisitorProjects />
      <VisitorBlogpost />
      <VisitorReportspost />
    </main>
    <VisitorTeam />
    <VisitorContact />
  </div>
</template>

<style lang="scss" scoped>
</style>
