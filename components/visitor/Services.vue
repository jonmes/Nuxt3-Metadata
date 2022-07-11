<script setup>
import readmore from "@/assets/svg/readmore.svg?url";
const count = ref(1);
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries, self) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle(
          "[&[show=true]]:opacity-100",
          entry.isIntersecting
        );
        entry.target.classList.toggle(
          "[&[show=true]]:translate-y-0",
          entry.isIntersecting
        );
        if (entry.isIntersecting) {
          self.unobserve(entry.target);
          return entry.target;
        }
      });
    },
    {
      threshold: 0.2,
    }
  );
  document.querySelectorAll(".servicei").forEach((card) => {
    observer.observe(card);
  });
});
</script>
<template>
  <section id="services" class="flex min-h-full flex-col">
    <div class="flex flex-col items-center">
      <h1
        show="true"
        class="servicei opacity-0 translate-y-20 duration-700 mt-10 self-center text-lg font-medium leading-[18px] dark:text-white lg:mt-[90px]"
      >
        Services
      </h1>
      <h2
        show="true"
        class="servicei opacity-0 duration-700 translate-y-20 mt-[34px] self-center rounded-[36px] bg-primary-lite px-3 py-2 text-center text-base font-black leading-5 text-white xs:px-8 xs:text-lg lg:px-8 lg:py-4 lg:text-3xl lg:leading-[18px]"
      >
        Standard service with Ethiopian hospitality!
      </h2>
      <p
        show="true"
        class="servicei opacity-0 translate-y-20 duration-700 mt-[34px] max-w-[900px] text-center text-base font-light leading-[30px] dark:text-HahuGray/4 xs:text-lg"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui urna,
        ullamcorper odio odio turpis ipsum imperdiet turpis. Elit, nec, leo
        morbi elit enim semper cras. Sapien
      </p>
    </div>
    <div
      class="mt-[76px] grid grid-cols-1 justify-items-center gap-y-12 md:grid-cols-2 md:gap-x-12 md:gap-y-12 xl:grid-cols-3 xl:gap-x-12 xl:gap-y-12"
    >
      <div
        show="true"
        class="servicei opacity-0 translate-y-20 group relative flex max-w-[450px] flex-col items-center rounded-lg bg-white duration-300 hover:shadow-xl dark:bg-HahuGray1 4xl:max-w-[500px]"
      >
        <NuxtLink
          class="invisible absolute h-full w-full rounded-lg opacity-0 transition duration-300 ease-linear hover:shadow-xl group-hover:visible group-hover:opacity-100"
          to="https://hahu.jobs/"
        >
          <div
            class="flex h-full w-full justify-center rounded-lg bg-HaHuGreen/4/75"
          >
            <button
              class="flex items-center self-center rounded-md bg-primary px-5 py-3 text-base font-medium leading-6 text-white"
            >
              <img :src="readmore" class="mr-[13px]" /> Read More
            </button>
          </div>
        </NuxtLink>

        <img
          class="mt-[15px] w-9/12 object-contain xs:w-auto md:w-9/12 lg:w-auto"
          src="/images/HahuCore.png"
          alt="Hahucore"
        />
        <h1
          class="mt-[13px] text-xl font-black leading-6 dark:text-HahuGray/4 lg:text-2xl xl:text-3xl"
        >
          HaHu Core services
        </h1>
        <p
          class="mt-8 px-6 text-center text-sm leading-[20px] dark:text-HahuGray3 xs:text-lg md:px-8 2xl:px-[68px]"
        >
          HaHU core services is a deployment targeting the Ethiopian jobseeker,
          with both online and assisted models the platform caters to the tool
          needs of looking for a job in all levels of employment. It features
          vacancy aggregation and posting from various sources as well as
          enterprises, build career profiles, apply for jobs and subscribe to
          customized alerts for each user.
        </p>

        <hr class="mb-5 mt-7 w-10/12 rounded-full border-2 border-primary" />
      </div>

      <div
        show="true"
        class="servicei opacity-0 delay-100 translate-y-20 group relative z-10 flex max-w-[450px] flex-col items-center rounded-lg bg-white duration-700 hover:shadow-xl dark:bg-HahuGray1 4xl:max-w-[500px]"
      >
        <NuxtLink
          class="invisible absolute h-full w-full rounded-lg opacity-0 transition duration-300 ease-linear hover:shadow-xl group-hover:visible group-hover:opacity-100"
          to="/HahuEnterprise"
        >
          <div
            class="flex h-full w-full justify-center rounded-lg bg-HaHuGreen/4/75"
          >
            <button
              class="flex items-center self-center rounded-md bg-primary px-5 py-3 text-base font-medium leading-6 text-white"
            >
              <img :src="readmore" class="mr-[13px]" /> Read More
            </button>
          </div>
        </NuxtLink>
        <img
          class="mt-[15px] w-9/12 object-contain xs:w-auto md:w-9/12 lg:w-auto"
          src="/images/HahuEnterprise.png"
          alt="enterprise"
        />
        <h2
          class="mt-[13px] text-xl font-black leading-6 dark:text-HahuGray/4 lg:text-2xl xl:text-3xl"
        >
          Hahu Enterprise
        </h2>
        <p
          class="mt-8 px-6 text-center text-sm leading-[20px] dark:text-HahuGray3 xs:text-lg md:px-8 2xl:px-[68px]"
        >
          Provides human resources and related services starting from job
          vacancy announcements, recruitment, all the way to human resources
          management until termination. This deployment also offers unique
          services to a category of businesses that operate within industry
          parks, in addition to Addis Ababa based foreign employment agencies.
        </p>
        <hr class="mb-5 mt-7 w-10/12 rounded-full border-2 border-primary" />
      </div>

      <div
        show="true"
        class="servicei opacity-0 delay-200 translate-y-20 group relative flex max-w-[450px] flex-col items-center rounded-lg bg-white duration-700 hover:shadow-xl dark:bg-HahuGray1 4xl:max-w-[500px]"
      >
        <NuxtLink
          class="invisible absolute h-full w-full rounded-lg opacity-0 transition duration-300 ease-linear hover:shadow-xl group-hover:visible group-hover:opacity-100"
          to="/HahuIndustry"
        >
          <div
            class="flex h-full w-full justify-center rounded-lg bg-HaHuGreen/4/75"
          >
            <button
              class="flex items-center self-center rounded-md bg-primary px-5 py-3 text-base font-medium leading-6 text-white"
            >
              <img :src="readmore" class="mr-[13px]" /> Read More
            </button>
          </div>
        </NuxtLink>
        <img
          class="mt-[15px] max-h-[198px] w-9/12 object-contain xs:w-auto md:w-9/12 lg:w-auto"
          src="/images/industryPark.png"
          alt="industryPark"
        />
        <h1
          class="mt-[13px] text-xl font-black leading-6 dark:text-HahuGray/4 lg:text-2xl xl:text-3xl"
        >
          HaHu Industry Parks
        </h1>
        <p
          class="mt-8 px-6 text-center text-sm leading-[20px] dark:text-HahuGray3 xs:text-lg md:px-8 2xl:px-[68px]"
        >
          With biometric based identification to both register workers and job
          seekers. The process begins with mass registration of employment
          seekers to build a digital pool of job seekers from which they are
          allocated for labor demands from factories with in the industry parks.
          It logs the recruitment status of allocated jobseekers and indexes
          transaction data for analytics.
        </p>
        <hr class="mb-5 mt-7 w-10/12 rounded-full border-2 border-primary" />
      </div>

      <div
        show="true"
        class="servicei opacity-0 translate-y-20 group relative flex max-w-[450px] flex-col items-center rounded-lg bg-white duration-300 hover:shadow-xl dark:bg-HahuGray1 4xl:max-w-[500px]"
      >
        <NuxtLink
          class="invisible absolute h-full w-full rounded-lg opacity-0 transition duration-300 ease-linear hover:shadow-xl group-hover:visible group-hover:opacity-100"
          to="/HahuTvet"
        >
          <div
            class="flex h-full w-full justify-center rounded-lg bg-HaHuGreen/4/75"
          >
            <button
              class="flex items-center self-center rounded-md bg-primary px-5 py-3 text-base font-medium leading-6 text-white"
            >
              <img :src="readmore" class="mr-[13px]" /> Read More
            </button>
          </div>
        </NuxtLink>
        <img
          class="mt-[15px] w-9/12 object-contain xs:w-auto md:w-9/12 lg:w-auto"
          src="/images/HahuTvet.png"
          alt="tvet"
        />
        <h1
          class="mt-[13px] text-xl font-black leading-6 dark:text-HahuGray3 lg:text-2xl xl:text-3xl"
        >
          HaHuJob TVET
        </h1>
        <p
          class="mt-8 px-6 text-center text-sm leading-[20px] dark:text-HahuGray/4 xs:text-lg md:px-8 2xl:px-[68px]"
        >
          HaHuJobs TVET is a targeted service deployment to trace skill-based
          education graduates and content encoding service offered for TVET
          institutes intended for both formal as well as career guiding lesson
          materials. The platform aims to capacitate deliverlogy departments of
          both private and government TVET institutes for digitized graduate
          tracing and supporting TVET trainers to provide curricular as well as
          non-structured digital learning materially.
        </p>

        <hr class="mb-5 mt-7 w-10/12 rounded-full border-2 border-primary" />
      </div>

      <div
        show="true"
        class="servicei opacity-0 delay-100 translate-y-20 group relative z-10 flex max-w-[450px] flex-col items-center rounded-lg bg-white duration-700 hover:shadow-xl dark:bg-HahuGray1 4xl:max-w-[500px]"
      >
        <NuxtLink
          class="invisible absolute h-full w-full rounded-lg opacity-0 transition duration-300 ease-linear hover:shadow-xl group-hover:visible group-hover:opacity-100"
          to="/HahuUniversity"
        >
          <div
            class="flex h-full w-full justify-center rounded-lg bg-HaHuGreen/4/75"
          >
            <button
              class="flex items-center self-center rounded-md bg-primary px-5 py-3 text-base font-medium leading-6 text-white"
            >
              <img :src="readmore" class="mr-[13px]" /> Read More
            </button>
          </div>
        </NuxtLink>
        <img
          class="mt-[15px] w-9/12 object-contain xs:w-auto md:w-9/12 lg:w-auto"
          src="/images/HahuUniversity.png"
          alt="university"
        />
        <h1
          class="mt-[13px] text-xl font-black leading-6 dark:text-HahuGray3 lg:text-2xl xl:text-3xl"
        >
          HaHu University
        </h1>
        <p
          class="mt-8 px-6 text-center text-sm leading-[20px] dark:text-HahuGray/4 xs:text-lg md:px-8 2xl:px-[68px]"
        >
          HaHuJobs university is a deployment intended to serve the needs of
          deliver ology departments, offer alternative digital contend
          disbursement for instructors and tracing graduates of Ethiopian
          universities that are subscribers of these services. The service
          offers a reporting and visualization for all its service components
          cospeciating higher education institute with a well compiled data to
          acquire relevant insights regarding the labor market and competence
          requirements.
        </p>
        <hr class="mb-5 mt-7 w-10/12 rounded-full border-2 border-primary" />
      </div>

      <div
        show="true"
        class="servicei opacity-0 delay-200 translate-y-20 group relative flex max-w-[450px] flex-col items-center rounded-lg bg-white duration-700 hover:shadow-xl dark:bg-HahuGray1 4xl:max-w-[500px]"
      >
        <NuxtLink
          class="invisible absolute h-full w-full rounded-lg opacity-0 transition duration-300 ease-linear hover:shadow-xl group-hover:visible group-hover:opacity-100"
          to="/HahuMuya"
        >
          <div
            class="flex h-full w-full justify-center rounded-lg bg-HaHuGreen/4/75"
          >
            <button
              class="flex items-center self-center rounded-md bg-primary px-5 py-3 text-base font-medium leading-6 text-white"
            >
              <img :src="readmore" class="mr-[13px]" /> Read More
            </button>
          </div>
        </NuxtLink>
        <img
          class="mt-[15px] max-h-[198px] w-9/12 object-contain xs:w-auto md:w-9/12 lg:w-auto"
          src="/images/MuyaMain.png"
          alt="muya"
        />
        <h1
          class="mt-[13px] text-xl font-black leading-6 dark:text-HahuGray3 lg:text-2xl xl:text-3xl"
        >
          Hahu Muya
        </h1>
        <p
          class="mt-8 px-6 text-center text-sm leading-[20px] dark:text-HahuGray/4 xs:text-lg md:px-8 2xl:px-[68px]"
        >
          HaHuJobs Muya is capacity building and training platform intended for
          both jobseeker and students’ which sources various digital contents
          from training institutes in both document and multimedia formats. It
          offers users a digitally enabled environment to consume both formal
          and non-formal training material sourced from instructors with in the
          local context. Resources can be offered in both targeted or public
          access formats depending on the choice of the contributor.
        </p>
        <hr class="mb-5 mt-7 w-10/12 rounded-full border-2 border-primary" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
