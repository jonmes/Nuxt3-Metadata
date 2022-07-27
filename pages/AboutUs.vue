<script setup>
import {
  ArrowNarrowRightIcon,
  ArrowNarrowLeftIcon,
} from "@heroicons/vue/solid";

import Twitter from "@/assets/svg/Tech_twitter.svg?url"
import LinkedIn from "@/assets/svg/Tech_linkedin.svg?url"
import Github from "@/assets/svg/Tech_github.svg?url"
import FounderTwitter from '@/assets/svg/Founder_twitter.svg?url'
import FounderLinkedIn from '@/assets/svg/Founder_linkedIn.svg?url'
import FounderTelegram from '@/assets/svg/Founder_telegram.svg?url'

const crumb = [{ id: 1, name: "About Us", link: "", current: true }];


const team = [
  {
    name: "Lorem Ipsum",
    position: "Technical Advisor",
    plot: "A full stack developer specializing in front end implementation and architecture design. With over nine years of working experience Michael leads all the technology advances of all HaHuJobs product deployments.",
  },
  {
    name: "Lorem Ipsum",
    position: "Technical Advisor",
    plot: "A full stack developer specializing in front end implementation and architecture design. With over nine years of working experience Michael leads all the technology advances of all HaHuJobs product deployments.",
  },
  {
    name: "Lorem Ipsum",
    position: "Technical Advisor",
    plot: "A full stack developer specializing in front end implementation and architecture design. With over nine years of working experience Michael leads all the technology advances of all HaHuJobs product deployments.",
  },
  {
    name: "Lorem Ipsum",
    position: "Technical Advisor",
    plot: "A full stack developer specializing in front end implementation and architecture design. With over nine years of working experience Michael leads all the technology advances of all HaHuJobs product deployments.",
  },
];
</script>

<template>
  <div class="min-h-screen px-8 md:px-10 3xl:px-[100px]">
    <section class="mt-10 flex flex-col px-1 md:px-16 lg:px-16 3xl:px-[100px]">
      <div class="relative mb-10 flex items-start justify-between font-bold">
        <Contained :crumb="crumb" />
        <div class="flex">
          <NuxtLink class="" :to="{ name: 'index' }">
            <button
              class="group flex items-center justify-end self-end rounded-md bg-primary px-2 py-1 text-base font-medium leading-6 text-white lg:px-5 lg:py-3">
              <ArrowNarrowLeftIcon
                class="mr-[9px] inline-block h-5 w-5 text-white duration-300 group-hover:-translate-x-1" />Back
            </button>
          </NuxtLink>
        </div>
      </div>
      <h2 class="mt-10 text-3xl font-black leading-6 text-primary md:mt-0">
        About HaHu
      </h2>

      <div class="flex flex-col-reverse xl:flex-row-reverse xl:justify-between">
        <div class="flex xl:flex-1 lg:w-[50vw] xl:w-6/12 justify-end">
          <img class="object-contain block dark:hidden xl:w-10/12 3xl:w-9/12" src="/images/Hahu_core_light.png"
            alt="hahuCore" />
          <img class="object-contain hidden dark:block xl:w-10/12 3xl:w-9/12" src="/images/Hahu_core_dark.png"
            alt="hahuCore" />
        </div>

        <p class="mt-12 flex-1 text-base text-justify font-normal leading-7 dark:text-HahuGray/4 3xl:text-lg">
          HaHuJobs a cloud services operating to capture structured data of the
          Ethiopian skilled and non-skilled labor market through digitally
          connecting thousands of job seekers in major Ethiopian cities as well
          as industrial parks. The platform in a collection of micro services
          groped to compose web application modules that offer a set of
          functionalities. HaHuJobs is an electronic product sold as service to
          a category of clients as per their specific needs in the labor market
          of Ethiopia. It features various service categories which revolves
          around data driven job matching of the right candidate with the right
          job opening, student tracing, capacity building and assessing of
          Jobseekers. This platform has sub services tailored to the specific
          industries and stakeholders, but as a primary concept HaHuJobs has a
          strong biometric based jobseeker identification and an automated
          method of matching workers with appropriate vacancy through structured
          data formats.
          <br />
          <br />
          The service is built as an ecosystem of digital services to offer a
          holistic approach to respond to various data and automation gaps with
          in the Ethiopian labor market. It features layers and network of
          deployments that provide services to various types of industry
          stakeholders like, the jobseekers, employers, the government and
          development partners.
        </p>
      </div>
      <p class="mt-10 text-base font-normal leading-7 dark:text-HahuGray/4 3xl:text-lg text-justify">

        HaHuJobs services also include deliverology tacking and an online career
        capacity development platform called Muya that targets both universities
        and federal TVET organization graduates, and students. This allows for a
        data reference that eases the process of verifying jobseeker claimed
        qualification; furthermore, the service also keeps track of recruitment
        and employment of an individual through a module provide to employers
        (companies) of all category allowing for tracking recruitment trends. In
        addition to vacancies availed thorough HaHuJobs it also features a
        module that collects and standardizes aggregated job vacancies from
        local digital and analog posting entities.
        <br />
        <br />
        The discussed components and services were conceived and implemented by
        our founders each of whom has notable experience in labor economics and
        a well demonstrated cababaility in software development. Each with their
        own pillar of contribution always are working hard to work on the next
        feature or service to even propel the product further. The founders
        tremendously realy on the technical advices offered by the technical
        advisory who are international experts in the labour market sector.
      </p>
      <h2 class="mt-28 flex justify-center text-3xl font-black leading-6 text-primary">
        Founders
      </h2>

      <div class="mt-32 flex flex-col items-center gap-y-20 xl:flex-row xl:justify-center xl:gap-y-0 xl:gap-x-[74px]">
        <div class="flex max-w-[385px] flex-col items-center rounded-[15px] bg-HaHuGreen/2 dark:bg-LightDark">
          <img class="relative bottom-10 self-center rounded-full object-contain" src="/images/Founder.png"
            alt="Founder" />
          <h1 class="text-3xl font-semibold leading-[30px] text-white">
            Michael Sahlu
          </h1>
          <h2 class="leading[30px] mt-[10px] text-base font-medium text-HahuGray/4 md:text-lg">
            CTO/CO-Founder
          </h2>
          <p
            class="mt-10 mb-8 px-2 text-base font-medium leading-[30px] text-HahuGray/4 md:text-lg xl:px-7 text-center">
            A full stack developer specializing in front end implementation and
            architecture design. With over nine years of working experience
            Michael leads all the technology advances of all HaHuJobs product
            deployments.
          </p>
          <div class="flex gap-5 mb-5">
            <button>
              <img :src="FounderTwitter" alt="twitterIcon" class="hover:brightness-50 hover:invert" />
            </button>
            <button>
              <img :src="FounderLinkedIn" alt="LinkedIn" class="hover:brightness-50 hover:invert" />
            </button>
            <button>
              <img :src="FounderTelegram" alt="Github" class="hover:brightness-50 hover:invert" />
            </button>
          </div>
        </div>

        <div class="flex max-w-[385px] flex-col items-center rounded-[15px] bg-HaHuGreen/2 dark:bg-LightDark">
          <img class="relative bottom-10 self-center rounded-full object-contain" src="/images/Founder2.png"
            alt="Founder" />
          <h1 class="text-3xl font-semibold leading-[30px] text-white">
            Kaleab Mezgebu
          </h1>
          <h2 class="leading[30px] mt-[10px] text-base font-medium text-HahuGray/4 md:text-lg">
            CEO/CO-Founder
          </h2>
          <p
            class="mt-10 mb-8 px-2 text-center text-base font-medium leading-[30px] text-HahuGray/4 md:text-lg xl:px-7">
            A system analyst and solutions architect with active involvement in
            system designs, incepting real world application of service
            components and managing stakeholder communications Kaleab leads the
            overall operation of HaHuJobs.
          </p>
          <div class="flex gap-5 mb-5">
            <button>
              <img :src="FounderTwitter" alt="twitterIcon" class="hover:brightness-50 hover:invert" />
            </button>
            <button>
              <img :src="FounderLinkedIn" alt="LinkedIn" class="hover:brightness-50 hover:invert" />
            </button>
            <button>
              <img :src="FounderTelegram" alt="Github" class="hover:brightness-50 hover:invert" />
            </button>
          </div>
        </div>

        <div class="flex max-w-[385px] flex-col items-center rounded-[15px] bg-HaHuGreen/2 dark:bg-LightDark">
          <img class="relative bottom-10 self-center rounded-full object-contain" src="/images/Founder3.png"
            alt="Founder" />
          <h1 class="text-3xl font-semibold leading-[30px] text-white">
            Eskinder Mamo
          </h1>
          <h2 class="leading[30px] mt-[10px] text-base font-medium text-HahuGray/4 md:text-lg">
            CBO/CO-Founder
          </h2>
          <p
            class="mt-10 mb-8 px-2 text-center text-base font-medium leading-[30px] text-HahuGray/4 md:text-lg xl:px-7">
            Innovation manager by training and with over eleven years of
            experience, Eskinder is involved in business and project
            development, specifically in developing concepts and proposals as
            well as securing funding for HaHuJobs.
          </p>
          <div class="flex gap-5 mb-5">
            <button>
              <img :src="FounderTwitter" alt="twitterIcon" class="hover:brightness-50 hover:invert" />
            </button>
            <button>
              <img :src="FounderLinkedIn" alt="LinkedIn" class="hover:brightness-50 hover:invert" />
            </button>
            <button>
              <img :src="FounderTelegram" alt="Github" class="hover:brightness-50 hover:invert" />
            </button>
          </div>
        </div>
      </div>

      <h2 class="mt-28 flex justify-center text-3xl font-black leading-6 text-primary">
        Technical advisor
      </h2>

      <!-- <div
        class="mt-32 flex flex-col items-center gap-y-20 xl:flex-row xl:justify-center xl:gap-y-20 xl:gap-x-[74px] flex-wrap"> -->
      <!-- background-color: #2a2a72;
background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%); -->
      <div class="mt-32 grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-x-10 gap-y-20 justify-items-center">
        <div
          class="flex flex-col items-center rounded-[15px] bg-HaHuGreen/2 dark:bg-LightDark xl:last:col-span-3 2xl:last:col-span-1 2xl:last:max-w-none xl:last:max-w-[25vw]"
          v-for="t in team">
          <img class="self-center rounded-full object-contain mt-3" src="/images/About_avatar.png" alt="advisor" />
          <h1 class="text-lg font-semibold leading-[30px] text-primary ">
            {{ t.name }}
          </h1>
          <h2 class="leading[30px] mt-2 text-base font-medium text-HahuGray/4 md:text-lg">
            {{ t.position }}
          </h2>
          <p
            class="mt-6 mb-8 px-2 text-center text-base font-medium leading-7  text-white md:text-lg xl:px-4 line-clamp-8 hover:line-clamp-none">
            {{ t.plot }}
          </p>
          <div class="flex gap-5 mb-5">
            <button>
              <img :src="Twitter" class="hover:brightness-0 hover:invert" alt="twitterIcon" />
            </button>
            <button>
              <img :src="LinkedIn" alt="LinkedIn" class="hover:brightness-0 hover:invert" />
            </button>
            <button>
              <img :src="Github" alt="Github" class="hover:brightness-0 hover:invert" />
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>
