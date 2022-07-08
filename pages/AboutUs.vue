<template>
    <div class="min-h-screen px-8 md:px-[50px] xl:px-[100px]">
      <section
        class="mt-10 flex flex-col px-1 md:px-16 lg:px-16 2xl:px-[100px]"
      >
        <div class="relative mb-10 flex items-start justify-between font-bold">
          <Contained :crumb="crumb" />
          <div class="flex">
            <NuxtLink class="" :to="{ name: 'index' }">
              <button
                class="group flex items-center justify-end self-end rounded-md bg-primary px-2 py-1 text-base font-medium leading-6 text-white lg:px-5 lg:py-3"
              >
                <ArrowNarrowLeftIcon
                  class="mr-[9px] inline-block h-5 w-5 text-white duration-300 group-hover:-translate-x-1"
                />Back
              </button>
            </NuxtLink>
          </div>
        </div>
        <h2 class="mt-10 text-3xl font-black leading-6 text-primary md:mt-0">
          About HaHu
        </h2>

        <div class="flex flex-col-reverse 3xl:flex-row-reverse">
          <img class="object-contain" src="/images/Hahu_core.png" />

          <p
            class="mt-[50px] flex-1 text-base font-normal leading-[35px] dark:text-HahuGray/4 md:text-lg"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
            ultricies aliquet sed vel eu dictumst sed. Amet, habitant augue
            pharetra risus bibendum scelerisque tellus. Mi imperdiet elit elit
            quam ornare massa egestas id. Consectetur dolor at eget sem lectus
            maecenas in. Volutpat vitae sed egestas vitae habitasse mollis
            pharetra sit. Tellus vitae arcu massa vivamus in odio. Adipiscing
            sed ante ut magna nullam. Tincidunt nullam ornare orci in. Phasellus
            eu mi, adipiscing vivamus. Arcu, eu adipiscing convallis at faucibus
            eget tincidunt magna. Quisque adipiscing quis sit libero in
            malesuada rhoncus egestas. Varius sem nec, consequat elit, aliquam
            nullam. In augue facilisis feugiat vulputate tristique commodo,
            turpis. In fermentum tempus sed potenti eget tortor gravida netus
            tempor.
            <br />
            <br />
            Adipiscing sed ante ut magna nullam. Tincidunt nullam ornare orci
            in. Phasellus eu mi, adipiscing vivamus. Arcu, eu adipiscing
            convallis at faucibus eget tincidunt magna. Quisque adipiscing quis
            sit libero in malesuada rhoncus egestas. Varius sem nec, consequat
            elit, aliquam nullam. In augue facilisis feugiat vulputate tristique
            commodo, turpis. In fermentum tempus sed potenti eget tortor gravida
            netus tempor.
          </p>
        </div>
        <p
          class="mt-[78px] max-w-[1200px] text-base font-normal leading-[35px] dark:text-HahuGray/4 md:text-lg"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor viverra
          odio id nisi at luctus. Praesent nunc elementum est eu at in morbi
          erat fermentum. Duis fames leo posuere erat volutpat faucibus bibendum
          tortor. Tortor viverra ac quam eu. Magna venenatis felis malesuada
          eleifend orci libero. In odio et massa nisi, elit. Egestas consectetur
          ut leo risus, at gravida et. Blandit nunc id ut vivamus id nam cursus
          sed. Augue nibh semper velit commodo vestibulum amet. Lorem vulputate
          aliquet iaculis id lacus. Tristique orci, volutpat elementum morbi.
          Arcu diam non lacinia at mattis nulla nisl dictum. Pellentesque
          facilisis facilisis nisl sodales vitae cras tortor elit. Leo ultrices
          dignissim eu fusce et, augue. Suspendisse elit gravida porta diam
          integer mauris laoreet nunc, eu. Magnis neque arcu condimentum
          consequat. Commodo, ultricies gravida purus curabitur vitae sed
          adipiscing accumsan, id. Senectus lobortis nam commodo, mauris
          faucibus. Habitant enim diam nunc, neque id. Sapien, velit quam mollis
          et.
        </p>
        <h2 class="mt-[118px] text-3xl font-black leading-6 text-primary">
          Founders
        </h2>

        <div
          class="mt-[141px] flex flex-col items-center space-y-20 xl:flex-row xl:space-y-0 xl:space-x-[74px]"
        >
          <div
            class="flex max-w-[385px] flex-col items-center rounded-[15px] bg-HaHuGreen/2"
          >
            <img
              class="relative bottom-10 self-center rounded-full object-contain"
              src="/images/Founder.png"
            />
            <h1 class="text-3xl font-semibold leading-[30px] text-white">
              Jane Doe
            </h1>
            <h2
              class="leading[30px] mt-[10px] text-base font-medium text-HahuGray/4 md:text-lg"
            >
              CFO/Co-founder
            </h2>
            <p
              class="mt-10 mb-[30px] px-2 text-center text-base font-medium leading-[30px] text-HahuGray/4 md:text-lg xl:px-7"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida
              vel pharetra a faucibus egestas ut. Sodales tristique tristique
              habitasse sem mattis. Phasellus at est quis quis fames commodo,
              blandit vulputate.
            </p>
          </div>

          <div
            class="flex max-w-[385px] flex-col items-center rounded-[15px] bg-HaHuGreen/2"
          >
            <img
              class="relative bottom-10 self-center rounded-full object-contain"
              src="/images/Founder2.png"
            />
            <h1 class="text-3xl font-semibold leading-[30px] text-white">
              Brayen Jr.
            </h1>
            <h2
              class="leading[30px] mt-[10px] text-base font-medium text-HahuGray/4 md:text-lg"
            >
              CFO/Co-founder
            </h2>
            <p
              class="mt-10 mb-[30px] px-2 text-center text-base font-medium leading-[30px] text-HahuGray/4 md:text-lg xl:px-7"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida
              vel pharetra a faucibus egestas ut. Sodales tristique tristique
              habitasse sem mattis. Phasellus at est quis quis fames commodo,
              blandit vulputate.
            </p>
          </div>

          <div
            class="flex max-w-[385px] flex-col items-center rounded-[15px] bg-HaHuGreen/2"
          >
            <img
              class="relative bottom-10 self-center rounded-full object-contain"
              src="/images/Founder3.png"
            />
            <h1 class="text-3xl font-semibold leading-[30px] text-white">
              Frank Lapen
            </h1>
            <h2
              class="leading[30px] mt-[10px] text-base font-medium text-HahuGray/4 md:text-lg"
            >
              CFO/Co-founder
            </h2>
            <p
              class="mt-10 mb-[30px] px-2 text-center text-base font-medium leading-[30px] text-HahuGray/4 md:text-lg xl:px-7"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida
              vel pharetra a faucibus egestas ut. Sodales tristique tristique
              habitasse sem mattis. Phasellus at est quis quis fames commodo,
              blandit vulputate.
            </p>
          </div>
        </div>
      </section>
    </div>
</template>

<script setup>
import {
  ArrowNarrowRightIcon,
  ArrowNarrowLeftIcon,
} from "@heroicons/vue/solid/index.js";

const crumb = [{ id: 1, name: "About Us", link: "", current: true }];
</script>
<style scoped></style>
