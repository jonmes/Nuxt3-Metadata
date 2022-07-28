<script setup>
import { ArrowNarrowRightIcon } from "@heroicons/vue/solid";

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
  <section v-for="i in 1" class="flex flex-col" id="report">
    <div ref="target" class="flex flex-col items-center lg:duration-1000 lg:translate-y-20">
      <h1 show="true" class="mt-10 self-center text-base md:text-lg font-medium leading-[18px] dark:text-white lg:mt-0">
        Report
      </h1>
      <h2 show="true"
        class="mt-[34px] self-center rounded-[36px] bg-primary-lite px-3 py-2 text-center text-base font-black leading-5 text-white xs:px-8 xs:text-base lg:px-5 3xl:px-8 3xl:py-4 lg:py-2 lg:text-2xl 3xl:text-3xl lg:leading-[18px]">
        HaHuJobs offers various reports
      </h2>
    </div>
    <div class="flex flex-col 2xl:flex-row">
      <div ref="target" class="flex flex-1 overflow-hidden lg:duration-1000 lg:translate-y-20 max-w-2xl">
        <img show="true" class="object-contain" src="/images/robo_analysis-01.png" alt="reportRobotImage" />
      </div>
      <article class="flex-1 2xl:mt-48 2xl:ml-24">
        <p show="true" ref="target"
          class="lg:opacity-0 lg:duration-1000 lg:translate-y-20 text-base text-justify 3xl:text-lg font-normal leading-7 dark:text-HahuGray/4">
          Three service pillars data vacancy data aggregation and analysis of vacancies, defining jobseekers' career
          profiles based on predefined data structure, and data-driven digital job matching. each generates a large
          quantity of data that offers insight into the labor market of Ethiopia within the scope of HaHuJobs operation
          scale. These reported insights also address all levels of the labor market from low and medium-skill workers
          to highly specialized professionals covering anything within the range span. Each report communicates a given
          scope of information on specific periodic service operations of HaHuJobs deployed platforms.
          <br />
          <br />
          Our reports are periodic and presented in multiple communication formats selected based on their best fit to
          the information set forth. Reports usually are composed using visualized data charts, infographic videos, and
          metrics. All our reports follow a consistent format incorporating accurate insights on data insights we aim to
          communicate to all our audience.
        </p>
        <br />
        <br />
        <div show="true" ref="target" class="mt-12 flex lg:translate-y-20 lg:duration-1000">
          <NuxtLink to="/reports" class="group flex">
            <button
              class="flex items-center rounded-md bg-primary text-sm px-2 py-1 md:px-5 md:py-3 mdtext-base font-medium leading-6 text-white">
              Explore More
              <ArrowNarrowRightIcon
                class="ml-3 inline-block h-5 w-5 text-white duration-300 group-hover:translate-x-1" />
            </button>
          </NuxtLink>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
</style>
