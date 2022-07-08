<script setup>
import readmore from "@/assets/svg/readmore.svg?url";
</script>
<template>
  <section id="services" class="flex min-h-full flex-col">
    <div class="flex flex-col items-center">
      <h1
        class="mt-10 self-center text-lg font-medium leading-[18px] dark:text-white lg:mt-[90px]"
      >
        Services
      </h1>
      <h2
        class="mt-[34px] self-center rounded-[36px] bg-primary-lite px-3 py-2 text-center text-base font-black leading-5 text-white xs:px-8 xs:text-lg lg:px-8 lg:py-4 lg:text-3xl lg:leading-[18px]"
      >
        World class services with Ethiopian hospitality!
      </h2>
      <p
        class="mt-[34px] max-w-[900px] text-center text-base font-light leading-[30px] dark:text-HahuGray/4 xs:text-lg"
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
        class="group relative flex max-w-[450px] flex-col items-center rounded-lg bg-white duration-300 hover:shadow-xl dark:bg-HahuGray1 4xl:max-w-[500px]"
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
          Hahu Core
        </h1>
        <p
          class="mt-8 px-6 text-center text-sm leading-[20px] dark:text-HahuGray3 xs:text-lg md:px-8 2xl:px-[68px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium quis
          massa pulvinar nec. Nisi tempus erat vulputate molestie ornare hac ac.
          In duis tortor euismod volutpat. Id scelerisque gravida scelerisque
          condimentum sagittis in eu donec nunc. Id massa viverra est congue.
          Ante vivamus ac pulvinar enim aliquam morbi pulvinar nec.
        </p>

        <hr class="mb-5 mt-7 w-10/12 rounded-full border-2 border-primary" />
      </div>

      <div
        class="group relative z-10 flex max-w-[450px] flex-col items-center rounded-lg bg-white duration-300 hover:shadow-xl dark:bg-HahuGray1 4xl:max-w-[500px]"
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium quis
          massa pulvinar nec. Nisi tempus erat vulputate molestie ornare hac ac.
          In duis tortor euismod volutpat. Id scelerisque gravida scelerisque
          condimentum sagittis in eu donec nunc. Id massa viverra est congue.
          Ante vivamus ac pulvinar enim aliquam morbi pulvinar nec.
        </p>
        <hr class="mb-5 mt-7 w-10/12 rounded-full border-2 border-primary" />
      </div>

      <div
        class="group relative flex max-w-[450px] flex-col items-center rounded-lg bg-white duration-300 hover:shadow-xl dark:bg-HahuGray1 4xl:max-w-[500px]"
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
          Hahu Industry Park
        </h1>
        <p
          class="mt-8 px-6 text-center text-sm leading-[20px] dark:text-HahuGray3 xs:text-lg md:px-8 2xl:px-[68px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium quis
          massa pulvinar nec. Nisi tempus erat vulputate molestie ornare hac ac.
          In duis tortor euismod volutpat. Id scelerisque gravida scelerisque
          condimentum sagittis in eu donec nunc. Id massa viverra est congue.
          Ante vivamus ac pulvinar enim aliquam morbi pulvinar nec.
        </p>
        <hr class="mb-5 mt-7 w-10/12 rounded-full border-2 border-primary" />
      </div>

      <div
        class="group relative flex max-w-[450px] flex-col items-center rounded-lg bg-white duration-300 hover:shadow-xl dark:bg-HahuGray1 4xl:max-w-[500px]"
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
          Hahu TVET
        </h1>
        <p
          class="mt-8 px-6 text-center text-sm leading-[20px] dark:text-HahuGray/4 xs:text-lg md:px-8 2xl:px-[68px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium quis
          massa pulvinar nec. Nisi tempus erat vulputate molestie ornare hac ac.
          In duis tortor euismod volutpat. Id scelerisque gravida scelerisque
          condimentum sagittis in eu donec nunc. Id massa viverra est congue.
          Ante vivamus ac pulvinar enim aliquam morbi pulvinar nec.
        </p>

        <hr class="mb-5 mt-7 w-10/12 rounded-full border-2 border-primary" />
      </div>

      <div
        class="group relative z-10 flex max-w-[450px] flex-col items-center rounded-lg bg-white duration-300 hover:shadow-xl dark:bg-HahuGray1 4xl:max-w-[500px]"
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
          Hahu University
        </h1>
        <p
          class="mt-8 px-6 text-center text-sm leading-[20px] dark:text-HahuGray/4 xs:text-lg md:px-8 2xl:px-[68px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium quis
          massa pulvinar nec. Nisi tempus erat vulputate molestie ornare hac ac.
          In duis tortor euismod volutpat. Id scelerisque gravida scelerisque
          condimentum sagittis in eu donec nunc. Id massa viverra est congue.
          Ante vivamus ac pulvinar enim aliquam morbi pulvinar nec.
        </p>
        <hr class="mb-5 mt-7 w-10/12 rounded-full border-2 border-primary" />
      </div>

      <div
        class="group relative flex max-w-[450px] flex-col items-center rounded-lg bg-white duration-300 hover:shadow-xl dark:bg-HahuGray1 4xl:max-w-[500px]"
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium quis
          massa pulvinar nec. Nisi tempus erat vulputate molestie ornare hac ac.
          In duis tortor euismod volutpat. Id scelerisque gravida scelerisque
          condimentum sagittis in eu donec nunc. Id massa viverra est congue.
          Ante vivamus ac pulvinar enim aliquam morbi pulvinar nec.
        </p>
        <hr class="mb-5 mt-7 w-10/12 rounded-full border-2 border-primary" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
