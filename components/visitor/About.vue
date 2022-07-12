<script setup>
import { ArrowNarrowRightIcon } from "@heroicons/vue/solid/index.js";

// onMounted(() => {
//   // console.log("about class mounted");
//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         // console.log("here we start again");
//         entry.target.classList.add(
//           "[&[show=true]]:opacity-100",
//           entry.isIntersecting
//         );
//         entry.target.classList.add(
//           "[&[show=true]]:translate-y-0",
//           entry.isIntersecting
//         );
//         if (entry.isIntersecting) {
//           observer.unobserve(entry.target);
//           return entry.target;
//         }
//       });
//     },
//     {
//       threshold: 0.1,
//     }
//   );
//   document.querySelectorAll(".abouti").forEach((selection) => {
//     observer.observe(selection);
//   });
// });
</script>

<template>
  <section>
    <div id="about">
      <div class="flex flex-col items-center">
        <h1
          show="true"
          class="mt-20 self-center text-lg font-medium leading-[18px] dark:text-white lg:mt-[90px]"
        >
          About
        </h1>
        <h2
          show="true"
          class="mt-[34px] self-center rounded-[36px] bg-primary-lite px-3 py-2 text-center text-base font-black leading-5 text-white xs:px-8 xs:text-lg lg:px-8 lg:py-4 lg:text-3xl lg:leading-[18px]"
        >
          What is HaHuJobs?
        </h2>
      </div>
      <div class="flex flex-col lg:mt-10 3xl:flex-row">
        <div class="flex flex-1 overflow-hidden">
          <img
            show="true"
            class="object-contain"
            alt="hahu core"
            src="/images/Hahu_core.png"
          />
        </div>
        <article class="mt-[54px] flex-1">
          <p
            show="true"
            class="text-lg font-normal leading-[35px] dark:text-HahuGray/4"
          >
            HaHuJobs a cloud services operating to capture structured data of
            the Ethiopian skilled and non-skilled labor market through digitally
            connecting thousands of job seekers in major Ethiopian cities as
            well as industrial parks. The platform in a collection of micro
            services groped to compose web application modules that offer a set
            of functionalities. HaHuJobs is an electronic product sold as
            service to a category of clients as per their specific needs in the
            labor market of Ethiopia. It features various service categories
            which revolves around data driven job matching of the right
            candidate with the right job opening, student tracing, capacity
            building and assessing of Jobseekers. This platform has sub services
            tailored to the specific industries and stakeholders, but as a
            primary concept HaHuJobs has a strong biometric based jobseeker
            identification and an automated method of matching workers with
            appropriate vacancy through structured data formats.
          </p>
          <br />
          <br />
          <p
            show="true"
            class="text-lg font-normal leading-[35px] dark:text-HahuGray/4"
          >
            The service is built as an ecosystem of digital services to offer a
            holistic approach to respond to various data and automation gaps
            with in the Ethiopian labor market. It features layers and network
            of deployments that provide services to various types of industry
            stakeholders like, the jobseekers, employers, the government and
            development partners.
          </p>

          <div show="true" class="mt-12 mb-14 flex">
            <NuxtLink :to="{ name: 'AboutUs' }" class="group">
              <button
                class="flex items-center self-end rounded-md bg-primary px-5 py-3 text-base font-medium leading-6 text-white"
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
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
