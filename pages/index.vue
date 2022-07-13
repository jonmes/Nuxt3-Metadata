<script setup>
import { gsap } from "gsap";
import { ArrowNarrowRightIcon } from "@heroicons/vue/solid/index.js";
</script>
<template>
  <div class="min-h-screen px-8 md:px-12 xl:px-14 2xl:px-24">
    <section
      class="mb-0 flex flex-col items-center overflow-hidden overflow-y-hidden lg:mb-0 lg:min-h-[83vh] xl:space-x-[89px] 2xl:flex-row"
      id="home"
    >
      <div class="mt-20 xl:flex-1">
        <img
          class="object-contain dark:hidden"
          src="/images/Hahu-031.png"
          v-motion
          :initial="{
            y: 300,
          }"
          :enter="{
            y: 0,
            transition: {
              delay: 180,
              duration: 600,
              type: 'spring',
              stiffness: 60,
            },
          }"
        />
        <img
          class="hidden object-contain dark:block"
          src="/images/Hahu-031_dark.png"
          v-motion
          :initial="{
            y: 300,
          }"
          :enter="{
            y: 0,
            transition: {
              delay: 180,
              duration: 600,
              type: 'spring',
              stiffness: 60,
            },
          }"
        />
        <img
          class="mt-10 w-4/6 object-contain dark:hidden xs:w-auto"
          src="/images/Hahu_logo2.png"
          v-motion
          :initial="{
            y: 300,
          }"
          :enter="{
            y: 0,
            transition: {
              delay: 210,
              duration: 600,
              type: 'spring',
              stiffness: 60,
            },
          }"
        />
        <img
          class="mt-10 hidden w-4/6 object-contain dark:block xs:w-auto"
          src="/images/Hahu_logo2_dark.png"
          v-motion
          :initial="{
            y: 300,
          }"
          :enter="{
            y: 0,
            transition: {
              delay: 220,
              duration: 600,
              type: 'spring',
              stiffness: 60,
            },
          }"
        />
        <p
          class="mt-[78px] w-11/12 text-lg font-normal leading-9 dark:text-HahuGray/4"
          v-motion
          :initial="{
            y: 300,
          }"
          :enter="{
            y: 0,
            transition: {
              delay: 230,
              duration: 600,
              type: 'spring',
              stiffness: 60,
            },
          }"
        >
          Hey there, ሰላም ነው? Welcome to HaHuJobs the larges data driven job
          matching and labor market information platform in Ethiopia. With
          various service deployments to address the Ethiopian labor market
          needs; we stand at the for front of the local digital job matching
          industry.
        </p>
        <div class="mt-5 md:mt-20 flex">
          <a href="#services" class="group">
            <button
              class="flex items-center self-center rounded-md bg-primary py-3 px-5 text-white"
              v-motion
              :initial="{
                y: 300,
              }"
              :enter="{
                y: 0,
                transition: {
                  delay: 250,
                  duration: 600,
                  type: 'spring',
                  stiffness: 60,
                },
              }"
            >
              Our Services
              <span class="pl-3">
                <ArrowNarrowRightIcon
                  class="h-5 w-5 duration-200 group-hover:translate-x-1"
                />
              </span>
            </button>
          </a>
        </div>
      </div>
      <div>
        <img
          class="hidden w-[570px] overflow-hidden object-contain dark:hidden md:mb-32 md:block lg:mb-10 lg:flex-1 xl:w-[750px] 2xl:w-[570px] 4xl:w-full"
          src="/images/landing_page_1.png"
          v-motion
          :initial="{
            y: -100,
          }"
          :enter="{
            y: 0,
            transition: {
              delay: 200,
              duration: 600,
              type: 'spring',
              stiffness: 100,
              ease: 'easeIn',
            },
          }"
        />
        <img
          class="hidden w-[570px] object-contain md:mb-32 dark:md:block lg:mb-10 lg:flex-1 xl:w-[750px] 2xl:w-[570px] 4xl:w-full"
          src="/images/landing_page_dark.png"
          v-motion
          :initial="{
            y: -1000,
          }"
          :enter="{
            y: 0,
            transition: {
              delay: 200,
              duration: 600,
              type: 'spring',
              stiffness: 100,
            },
          }"
        />
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

<style lang="scss" scoped></style>
