<template>
  <section class="flex flex-col" id="team">
    <div class="flex flex-col items-center">
      <h2
        class="mt-10 self-center text-lg font-medium leading-[18px] dark:text-white lg:mt-[90px]"
      >
        OUR TEAM
      </h2>
      <h2
        class="mt-[34px] self-center rounded-[36px] bg-primary-lite px-3 py-2 text-center text-base font-black leading-5 text-white xs:px-8 xs:text-lg lg:px-8 lg:py-4 lg:text-3xl lg:leading-[18px]"
      >
        Our team is the best in the business.
      </h2>
      <p
        class="mt-[34px] max-w-[900px] text-center text-base font-light leading-[30px] dark:text-HahuGray/4 xs:text-lg"
      >
        Highly professional and capable of running your business across all
        digital channels.
      </p>
    </div>

    <div
      class="mt-11 flex flex-wrap items-center justify-center gap-x-0 gap-y-6 md:gap-x-4 lg:gap-x-6 lg:gap-y-6 4xl:gap-x-16 4xl:gap-y-16"
    >
      <div
        class="self-center rounded-md bg-white duration-500 hover:shadow-lg dark:bg-HahuGray1"
        v-for="(person, i) in team"
      >
        <div class="relative mt-[20px] flex flex-row justify-center">
          <img class="self-center" :src="person.img" alt="team" />
          <img :src="person.icon" class="absolute top-[-5px] right-5" />
        </div>
        <h2
          class="mt-1 items-center text-center text-3xl font-black leading-[38px] dark:text-HahuGray/4"
        >
          {{ person.name }}
        </h2>
        <h2 class="mt-2 text-center text-lg font-medium leading-7 text-primary">
          {{ person.pos }}
        </h2>
        <p
          class="mx-8 mt-6 mb-[88px] max-w-[295px] text-center text-base font-medium leading-6 dark:text-HahuGray3"
        >
          {{ person.prov }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import CEO from "@/assets/svg/CEO.svg?url";
import Law from "@/assets/svg/law.svg?component";
import Finance from "@/assets/svg/finance.svg?component";
import Project from "@/assets/svg/ProjectManager.svg?component";
import Support from "@/assets/svg/support.svg?component";
import Backend from "@/assets/svg/Devloper.svg?component";
import Design from "@/assets/svg/design.svg?component";

const team = [
  {
    name: "Elen Benitez",
    img: "/images/CEO.png",
    icon: CEO,
    pos: "CEO",
    prov: "The only way to do great work is to love what you do.",
  },
  {
    name: "Jhon Doe",
    img: "/images/Attorney.png",
    icon: Law,
    pos: "Attorney",
    prov: "The only way to do great work is to love what you do.",
  },
  {
    name: "Jhon Doe",
    img: "/images/Finance.png",
    icon: Finance,
    pos: "Finance Manager",
    prov: "The only way to do great work is to love what you do.",
  },
  {
    name: "Jhon Doe",
    img: "/images/Project_Manager.png",
    icon: Project,
    pos: "Project Manager",
    prov: "The only way to do great work is to love what you do.",
  },
  {
    name: "Jhon Doe",
    img: "/images/IT.png",
    icon: Support,
    pos: "IT Support",
    prov: "The only way to do great work is to love what you do.",
  },
  {
    name: "Jhon Doe",
    img: "/images/Backend.png",
    icon: Backend,
    pos: "Backend Developer",
    prov: "The only way to do great work is to love what you do.",
  },
  {
    name: "Jhon Doe",
    img: "/images/Graphics.png",
    icon: Design,
    pos: "Graphics Designer",
    prov: "The only way to do great work is to love what you do.",
  },
];
</script>

<style scoped></style>
