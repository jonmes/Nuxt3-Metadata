<template>
  <div class="min-h-screen px-8 md:px-[50px] xl:px-[100px]">
    <section class="mt-10 flex flex-col px-1 md:px-16 lg:px-16 2xl:px-[100px]">
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
      <p
        class="mt-16 w-9/12 text-base font-normal leading-[35px] dark:text-HahuGray/4 md:text-lg"
      >
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
            Michael Sahlu
          </h1>
          <h2
            class="leading[30px] mt-[10px] text-base font-medium text-HahuGray/4 md:text-lg"
          >
            CTO/CO-Founder
          </h2>
          <p
            class="mt-10 mb-[30px] px-2 text-center text-base font-medium leading-[30px] text-HahuGray/4 md:text-lg xl:px-7"
          >
            A full stack developer specializing in front end implementation and
            architecture design. With over nine years of working experience
            Michael leads all the technology advances of all HaHuJobs product
            deployments.
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
            Kaleab Mezgebu
          </h1>
          <h2
            class="leading[30px] mt-[10px] text-base font-medium text-HahuGray/4 md:text-lg"
          >
            CEO/CO-Founder
          </h2>
          <p
            class="mt-10 mb-[30px] px-2 text-center text-base font-medium leading-[30px] text-HahuGray/4 md:text-lg xl:px-7"
          >
            A system analyst and solutions architect with active involvement in
            system designs, incepting real world application of service
            components and managing stakeholder communications Kaleab leads the
            overall operation of HaHuJobs
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
            Eskinder Mamo
          </h1>
          <h2
            class="leading[30px] mt-[10px] text-base font-medium text-HahuGray/4 md:text-lg"
          >
            CBO/CO-Founder
          </h2>
          <p
            class="mt-10 mb-[30px] px-2 text-center text-base font-medium leading-[30px] text-HahuGray/4 md:text-lg xl:px-7"
          >
            Innovation manager by training and with over eleven years of
            experience, Eskinder is involved in business and project
            development, specifically in developing concepts and proposals as
            well as securing funding for HaHuJobs.
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
