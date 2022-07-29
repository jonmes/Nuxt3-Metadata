<script setup>
import readmore from "@/assets/svg/readmore.svg?url";

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
  <section v-for="i in 1" id="services" class="flex min-h-full flex-col">
    <div class="flex flex-col items-center">
      <h1 show="true" ref="target"
        class="lg:opacity-0 lg:translate-y-20 duration-1000 mt-10 self-center text-lg font-medium leading-[18px] dark:text-white lg:mt-24">
        Services
      </h1>
      <h2 show="true" ref="target"
        class="lg:opacity-0 lg:translate-y-20 duration-1000 mt-[34px] self-center rounded-[36px] bg-primary-lite px-3 py-2 text-center text-base font-black leading-5 text-white xs:px-8 xs:text-lg lg:px-5 3xl:px-8 3xl:py-4 lg:py-2 lg:text-2xl 3xl:text-3xl lg:leading-[18px]">
        Standardized services with Ethiopian hospitality!
      </h2>
      <p show="true" ref="target"
        class="mt-[34px] max-w-[900px] text-center text-base font-light leading-[30px] dark:text-HahuGray/4 xs:text-lg lg:translate-y-20 duration-1000">
        We provide a category of services to offer a holistic solution to the multi-faceted needs of the Ethiopian
        labor market.
      </p>
    </div>
    <div
      class="mt-[76px] grid grid-cols-1 justify-items-center gap-y-12 md:grid-cols-2 md:gap-x-12 md:gap-y-12 xl:grid-cols-3 xl:gap-x-12 xl:gap-y-12">
      <div show="true" ref="target"
        class="lg:translate-y-20 group relative flex max-w-[450px] flex-col items-center rounded-lg bg-white duration-1000 hover:shadow-xl dark:bg-HahuGray1 4xl:max-w-[500px]">
        <NuxtLink
          class="invisible absolute h-full w-full rounded-lg opacity-0 transition duration-300 ease-linear hover:shadow-xl group-hover:visible group-hover:opacity-100"
          to="https://hahu.jobs/">
          <div class="flex h-full w-full justify-center rounded-lg bg-HaHuGreen/4/75 dark:bg-HahuGray3/20">
            <button
              class="flex items-center self-center rounded-md bg-primary px-5 py-3 text-base font-medium leading-6 text-white">
              <img :src="readmore" class="mr-[13px]" alt="button" /> Read More
            </button>
          </div>
        </NuxtLink>

        <img class="mt-[15px] w-9/12 object-contain xs:w-auto md:w-9/12 xl:w-7/12 3xl:w-auto" src="/images/HahuCore.png"
          alt="Hahucore" />
        <h1 class="mt-[13px] text-xl font-black leading-6 dark:text-HahuGray/4 lg:text-2xl 3xl:text-3xl">
          HaHu Core services
        </h1>
        <p
          class="line-clamp-8 mt-8 px-6 text-justify text-sm leading-[20px] dark:text-HahuGray3 xl:text-base 3xl:text-lg md:px-8 2xl:px-12 3xl:px-16">
          HaHU core services is a deployment targeting the Ethiopian jobseeker,
          with both online and assisted models the platform caters to the tool
          needs of looking for a job in all levels of employment. It features
          vacancy aggregation and posting from various sources as well as
          enterprises, build career profiles, apply for jobs and subscribe to
          customized alerts for each user.
        </p>

        <hr class="mb-5 bg-primary mt-7 w-10/12 rounded-full border-2 border-primary" />
      </div>

      <div show="true" ref="target"
        class="lg:translate-y-20 group relative delay-150 z-10 flex max-w-[450px] flex-col items-center rounded-lg bg-white duration-1000 hover:shadow-xl dark:bg-HahuGray1 4xl:max-w-[500px]">
        <NuxtLink
          class="invisible absolute h-full w-full rounded-lg opacity-0 transition duration-300 ease-linear hover:shadow-xl group-hover:visible group-hover:opacity-100"
          to="https://enterprises.hahu.jobs">
          <div class="flex h-full w-full justify-center rounded-lg bg-HaHuGreen/4/75 dark:bg-HahuGray3/20">
            <button
              class="flex items-center self-center rounded-md bg-primary px-5 py-3 text-base font-medium leading-6 text-white">
              <img :src="readmore" class="mr-[13px]" alt="button" /> Read More
            </button>
          </div>
        </NuxtLink>
        <img class="mt-[15px] w-9/12 object-contain xs:w-auto md:w-9/12 xl:w-7/12 3xl:w-auto"
          src="/images/HahuEnterprise.png" alt="enterprise" />
        <h2 class="mt-[13px] text-xl font-black leading-6 dark:text-HahuGray/4 lg:text-2xl 3xl:text-3xl">
          Hahu Enterprise
        </h2>
        <p
          class="line-clamp-8 mt-8 px-6 text-justify text-sm leading-[20px] dark:text-HahuGray3 xl:text-base 3xl:text-lg md:px-8 2xl:px-12 3xl:px-16">
          Provides human resources and related services starting from job vacancy announcements, and recruitment, all
          the way to human resources management until termination. This deployment also offers unique services to a
          category of businesses that operate within industrial parks, in addition to Addis Ababa-based foreign
          employment agencies.
        </p>
        <hr class="bg-primary mb-5 mt-7 w-10/12 rounded-full border-2 border-primary" />
      </div>

      <div show="true" ref="target"
        class="lg:translate-y-20 group relative delay-300 flex max-w-[450px] flex-col items-center rounded-lg bg-white duration-1000 hover:shadow-xl dark:bg-HahuGray1 4xl:max-w-[500px]">
        <NuxtLink
          class="invisible absolute h-full w-full rounded-lg opacity-0 transition duration-300 ease-linear hover:shadow-xl group-hover:visible group-hover:opacity-100"
          to="https://industryparks.hahu.jobs">
          <div class="flex h-full w-full justify-center rounded-lg bg-HaHuGreen/4/75 dark:bg-HahuGray3/20">
            <button
              class="flex items-center self-center rounded-md bg-primary px-5 py-3 text-base font-medium leading-6 text-white">
              <img :src="readmore" class="mr-[13px]" alt="button" /> Read More
            </button>
          </div>
        </NuxtLink>
        <img class="mt-[15px] max-h-[198px] w-9/12 object-contain xs:w-auto md:w-9/12 xl:w-7/12 3xl:w-auto"
          src="/images/industryPark.png" alt="industryPark" />
        <h1 class="mt-[13px] text-xl font-black leading-6 dark:text-HahuGray/4 lg:text-2xl 3xl:text-3xl">
          HaHu Industry Parks
        </h1>
        <p
          class="line-clamp-8 mt-8 px-6 text-justify text-sm leading-[20px] dark:text-HahuGray3 xl:text-base 3xl:text-lg md:px-8 2xl:px-12 3xl:px-16">
          With biometric-based identification to both register workers and job seekers. The process begins with mass
          registration of employment seekers to build a digital pool of job seekers from which they are allocated for
          labor demands from factories within the industrial parks. It logs the recruitment status of allocated
          jobseekers and indexes transaction data for analytics.
        </p>
        <hr class="bg-primary mb-5 mt-7 w-10/12 rounded-full border-2 border-primary" />
      </div>

      <div show="true" ref="target"
        class="lg:translate-y-20 group relative flex max-w-[450px] flex-col items-center rounded-lg bg-white duration-1000 hover:shadow-xl dark:bg-HahuGray1 4xl:max-w-[500px]">
        <NuxtLink
          class="invisible absolute h-full w-full rounded-lg opacity-0 transition duration-300 ease-linear hover:shadow-xl group-hover:visible group-hover:opacity-100"
          to="/HahuTvet">
          <div class="flex h-full w-full justify-center rounded-lg bg-HaHuGreen/4/75 dark:bg-HahuGray3/20">
            <button
              class="flex items-center self-center rounded-md bg-primary px-5 py-3 text-base font-medium leading-6 text-white">
              <img :src="readmore" class="mr-[13px]" alt="button" /> Read More
            </button>
          </div>
        </NuxtLink>
        <img class="mt-[15px] w-9/12 object-contain xs:w-auto md:w-9/12 xl:w-7/12 3xl:w-auto" src="/images/HahuTvet.png"
          alt="tvet" />
        <h1 class="mt-[13px] text-xl font-black leading-6 dark:text-HahuGray3 lg:text-2xl 3xl:text-3xl">
          HaHuJob TVET
        </h1>
        <p
          class="line-clamp-8 mt-8 px-6 text-justify text-sm leading-[20px] dark:text-HahuGray/4 xl:text-base 3xl:text-lg md:px-8 2xl:px-12 3xl:px-16">
          HaHuJobs TVET is a targeted service deployment to trace skill-based education graduates and content-encoding
          service offered for TVET institutes intended for both formal as well as career guiding lesson materials. The
          platform aims to capacitate delivery departments of both private and government TVET institutes for digitized
          graduate tracing and supporting TVET trainers to provide curricular as well as non-structured digital learning
          materially.
        </p>

        <hr class="bg-primary mb-5 mt-7 w-10/12 rounded-full border-2 border-primary" />
      </div>

      <div show="true" ref="target"
        class="lg:translate-y-20 group delay-150 relative z-10 flex max-w-[450px] flex-col items-center rounded-lg bg-white duration-1000 hover:shadow-xl dark:bg-HahuGray1 4xl:max-w-[500px]">
        <NuxtLink
          class="invisible absolute h-full w-full rounded-lg opacity-0 transition duration-300 ease-linear hover:shadow-xl group-hover:visible group-hover:opacity-100"
          to="/HahuUniversity">
          <div class="flex h-full w-full justify-center rounded-lg bg-HaHuGreen/4/75 dark:bg-HahuGray3/20">
            <button
              class="flex items-center self-center rounded-md bg-primary px-5 py-3 text-base font-medium leading-6 text-white">
              <img :src="readmore" class="mr-[13px]" alt="button" /> Read More
            </button>
          </div>
        </NuxtLink>
        <img class="mt-[15px] w-9/12 object-contain xs:w-auto md:w-9/12 xl:w-7/12 3xl:w-auto"
          src="/images/HahuUniversity.png" alt="university" />
        <h1 class="mt-[13px] text-lg font-black leading-6 dark:text-HahuGray3 lg:text-2xl 3xl:text-3xl">
          HaHu University
        </h1>
        <p
          class="line-clamp-8 mt-8 px-6 text-justify text-sm leading-[20px] dark:text-HahuGray/4 xl:text-base 3xl:text-lg md:px-8 2xl:px-12 3xl:px-16">
          HaHuJobs university is a deployment intended to serve the needs of deliverology departments, offer alternative
          digital contend disbursement for instructors, and trace graduates of Ethiopian universities that are
          subscribers of these services. The service offers a reporting and visualization for all its service components
          cospeciation higher education institutes with well-compiled data to acquire relevant insights regarding the
          labor market and competence requirements.
        </p>
        <hr class="bg-primary mb-5 mt-7 w-10/12 rounded-full border-2 border-primary" />
      </div>

      <div show="true" ref="target"
        class="lg:translate-y-20 group delay-300 relative flex max-w-[450px] flex-col items-center rounded-lg bg-white duration-1000 hover:shadow-xl dark:bg-HahuGray1 4xl:max-w-[500px]">
        <NuxtLink
          class="invisible absolute h-full w-full rounded-lg opacity-0 transition duration-300 ease-linear hover:shadow-xl group-hover:visible group-hover:opacity-100"
          to="/HahuMuya">
          <div class="flex h-full w-full justify-center rounded-lg bg-HaHuGreen/4/75 dark:bg-HahuGray3/20">
            <button
              class="flex items-center self-center rounded-md bg-primary px-5 py-3 text-base font-medium leading-6 text-white">
              <img :src="readmore" class="mr-[13px]" alt="button" /> Read More
            </button>
          </div>
        </NuxtLink>
        <img class="mt-[15px] max-h-[198px] w-9/12 object-contain xs:w-auto md:w-9/12 xl:w-6/12 3xl:w-auto"
          src="/images/MuyaMain.png" alt="muya" />
        <h1 class="mt-[13px] text-lg font-black leading-6 dark:text-HahuGray3 lg:text-2xl 3xl:text-3xl">
          Hahu Muya
        </h1>
        <p
          class="line-clamp-8 mt-8 px-6 text-justify text-sm leading-[20px] dark:text-HahuGray/4 xl:text-base 3xl:text-lg md:px-8 2xl:px-12 3xl:px-16">
          HaHuJobs Muya is a capacity-building and training platform intended for both jobseeker and students’ which
          sources various digital contents from training institutes in both document and multimedia formats. It offers
          users a digitally enabled environment to consume both formal and non-formal training material sourced from
          instructors within the local context. Resources can be offered in targeted or public access formats depending
          on the contributor's choice.
        </p>
        <hr class="bg-primary mb-5 mt-7 w-10/12 rounded-full border-2 border-primary" />
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
