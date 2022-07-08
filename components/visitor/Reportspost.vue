<script setup>
import { ArrowNarrowRightIcon } from "@heroicons/vue/solid/index.js";
</script>

<template>
  <section class="flex flex-col" id="report">
    <div class="flex flex-col items-center">
      <h1
        class="mt-10 self-center text-lg font-medium leading-[18px] dark:text-white lg:mt-[90px]"
      >
        Report
      </h1>
      <h2
        class="mt-[34px] self-center rounded-[36px] bg-primary-lite px-3 py-2 text-center text-base font-black leading-5 text-white xs:px-8 xs:text-lg lg:px-8 lg:py-4 lg:text-3xl lg:leading-[18px]"
      >
        We release reports on the performace of Industry parks and employment in
        Ethiopia!
      </h2>
    </div>
    <div class="flex flex-col 2xl:flex-row">
      <div class="flex flex-1 overflow-hidden">
        <img class="object-contain" src="/images/robo_analysis-01.png" />
      </div>
      <article class="flex-1 2xl:mt-[100px] 2xl:ml-[137px]">
        <p class="text-lg font-normal leading-[35px] dark:text-HahuGray/4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
          ultricies aliquet sed vel eu dictumst sed. Amet, habitant augue
          pharetra risus bibendum scelerisque tellus. Mi imperdiet elit elit
          quam ornare massa egestas id. Consectetur dolor at eget sem lectus
          maecenas in. Volutpat vitae sed egestas vitae habitasse mollis
          pharetra sit. Tellus vitae arcu massa vivamus in odio. Adipiscing sed
          ante ut magna nullam. Tincidunt nullam ornare orci in. Phasellus eu
          mi, adipiscing vivamus. Arcu, eu adipiscing convallis at faucibus eget
          tincidunt magna. Quisque adipiscing quis sit libero in malesuada
          rhoncus egestas. Varius sem nec, consequat elit, aliquam nullam. In
          augue facilisis feugiat vulputate tristique commodo, turpis. In
          fermentum tempus sed potenti eget tortor gravida netus tempor.
          <br />
          <br />
          Adipiscing sed ante ut magna nullam. Tincidunt nullam ornare orci in.
          Phasellus eu mi, adipiscing vivamus. Arcu, eu adipiscing convallis at
          faucibus eget tincidunt magna. Quisque adipiscing quis sit libero in
          malesuada rhoncus egestas. Varius sem nec, consequat elit, aliquam
          nullam. In augue facilisis feugiat vulputate tristique commodo,
          turpis. In fermentum tempus sed potenti eget tortor gravida netus
          tempor.
        </p>
        <div class="mt-12 flex">
          <NuxtLink to="/reports" class="group flex">
            <button
              class="flex items-center rounded-md bg-primary px-5 py-3 text-base font-medium leading-6 text-white"
            >
              Explore More
              <ArrowNarrowRightIcon
                class="ml-3 inline-block h-5 w-5 text-white duration-300 group-hover:translate-x-1"
              />
            </button>
          </NuxtLink>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped></style>
