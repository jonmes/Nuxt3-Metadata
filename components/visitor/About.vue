<script setup>
import { ArrowNarrowRightIcon } from "@heroicons/vue/solid/index.js";
const target = ref(null);
const observer = shallowRef();

onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach(
      (entry) => {
        entry.target.classList.toggle(
          "lg:[&[show=true]]:opacity-100",
          entry.isIntersecting
        );
        entry.target.classList.toggle(
          "lg:[&[show=true]]:translate-y-0",
          entry.isIntersecting
        );
        entry.target.classList.toggle(
          "lg:[&[show=true]]:translate-x-0",
          entry.isIntersecting
        );
        if (entry.isIntersecting) {
          observer.value.unobserve(entry.target);
          return entry.target;
        }
      },
      {
        threshold: 0.5,
      }
    );
  });
  target.value.forEach((card) => {
    observer.value.observe(card);
  });
});

onBeforeUnmount(() => {
  observer.value.disconnect();
});
</script>

<template>
  <section>
    <div v-for="i in 1" id="about">
      <div class="flex flex-col items-center">
        <h1 ref="target" show="true"
          class="lg:translate-y-20 lg:opacity-0 mt-20 self-center text-lg font-medium leading-5 duration-1000 dark:text-white lg:mt-24">
          About
        </h1>
        <h2 ref="target" show="true"
          class="lg:translate-y-20 lg:opacity-0 mt-8 self-center rounded-[36px] duration-1000 bg-primary-lite px-3 py-2 text-center text-base font-black leading-5 text-white xs:px-8 xs:text-lg lg:px-4 lg:py-2 lg:text-xl 3xl:text-3xl lg:leading-5">
          What is HaHuJobs?
        </h2>
      </div>
      <div class="flex flex-col items-center lg:mt-10 xl:flex-row overflow-hidden">
        <div ref="target" show="true"
          class="lg:translate-x-10 lg:opacity-0 flex overflow-hidden duration-1000 lg:w-6/12 2xl:w-6/12 lg:px-7 xl:pr-28 3xl:pr-40 justify-start">
          <img show="true" class="object-contain dark:hidden" alt="hahu core" src="/images/Hahu_core_light.png" />
          <img show="true" class="object-contain hidden dark:block" alt="hahu core" src="/images/Hahu_core_dark.png" />
        </div>
        <article class="mt-14 xl:w-6/12 2xl:w-6/12">
          <p show="true" ref="target"
            class="lg:translate-y-20 lg:opacity-0 text-justify text-lg xl:text-base 2xl:text-base 3xl:text-lg font-normal duration-1000 leading-7 dark:text-HahuGray/4">
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
          <p show="true" ref="target"
            class="lg:translate-y-20 lg:opacity-0 text-justify text-lg xl:text-base 3xl:text-lg font-normal duration-1000 leading-7 dark:text-HahuGray/4">
            The service is built as an ecosystem of digital services to offer a
            holistic approach to respond to various data and automation gaps
            with in the Ethiopian labor market. It features layers and network
            of deployments that provide services to various types of industry
            stakeholders like, the jobseekers, employers, the government and
            development partners.
          </p>

          <div ref="target" show="true" class="lg:translate-y-20 lg:opacity-0 mt-12 mb-14 flex duration-1000">
            <NuxtLink :to="{ name: 'AboutUs' }" class="group">
              <button
                class="flex items-center self-end rounded-md bg-primary px-5 py-3 text-base font-medium leading-6 text-white">
                Explore More
                <ArrowNarrowRightIcon
                  class="ml-3 inline-block h-5 w-5 text-white duration-300 group-hover:translate-x-1" />
              </button>
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
