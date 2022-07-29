<template>
  <div class="min-h-screen overflow-y-auto px-8 md:px-[50px] xl:px-[100px]">
    <section class="flex flex-col items-center lg:min-h-screen xl:space-x-[89px] 2xl:flex-row" id="home">
      <div class="mt-20 flex-1 xl:mt-0">
        <img class="object-contain" src="/images/HahuEnter_amharic.png" alt="hahuLogo" />
        <h1 class="items-center text-[50px] font-black leading-[50px] dark:text-HahuGray/4">
          HaHuJobs Muya
        </h1>
        <div class="lg:hidden mt-10 lg:mt-0 flex-shrink max-w-[70vw]">
          <img class="object-contain" src="/images/MuyaMain.png" alt="hahuMuya" />
        </div>
        <p class="mt-[27px] items-center text-lg font-normal leading-[35px] text-HahuGray2 dark:text-HahuGray/4">
          Muya provides a variety of resources to assist Ethiopian students and
          alumni with career exploration and guidance, job and internship search
          as well as scholarships. Training and learning materials are
          accessible in various formats, such as videos, audios and text.
        </p>
        <button class="mt-[113px] rounded-md bg-primary px-[50px] py-[13px] text-base font-medium leading-6 text-white">
          Login
        </button>
      </div>
      <div class="hidden lg:block flex-1 flex-shrink">
        <img class="object-contain 3xl:min-w-[950px]" src="/images/MuyaMain.png" alt="hahuMuya" />
      </div>
    </section>

    <section class="flex flex-col" id="partners">
      <h3
        class="mt-24 self-center rounded-[36px] bg-primary-lite px-[33px] py-[2px] text-xs font-medium leading-[18px] text-primary-dark">
        Partners
      </h3>
      <h2 class="mt-[30px] self-center text-3xl font-semibold leading-[35px] text-HahuGray1 dark:text-HahuGray/4">
        Our Partners
      </h2>
      <p
        class="mt-[17px] w-9/12 self-center text-center text-lg font-normal leading-[35px] text-HahuGray2 dark:text-HahuGray/4">
        The United States Agency for International Development (USAID)’s
        Building the Potential of Youth Activity (POTENTIAL) a five-year project
        implemented by Save the Children as well as the Ministry of Science and
        Higher Education are partners in this implementation. This partnership
        in cooperation with participating universities aims to equip graduates
        with the skills necessary to pursue and land appropriate job
        opportunities.
      </p>

      <div
        class="min-h-60 mt-[59px] grid grid-cols-1 justify-items-center gap-y-10 pb-10 lg:pb-0 xl:grid-cols-3 xl:gap-y-0 xl:gap-x-5">
        <div
          class="transition-newtransition group flex h-[500px] max-w-[560px] flex-col items-center overflow-hidden rounded-t-[15px] bg-white px-5 duration-500 hover:bg-white hover:shadow-full dark:bg-HahuGray1 dark:hover:bg-HahuGray1 xs:h-[420px] sm:h-[400px] xl:h-60 xl:bg-transparent hover:xl:h-[420px] hover:3xl:h-[380px] 2xl:px-10">
          <img
            class="mt-10 object-contain dark:xl:group-hover:brightness-100 dark:xl:group-hover:invert-0 dark:xl:brightness-0 dark:xl:invert xl:opacity-60 xl:group-hover:opacity-100 xl:grayscale xl:group-hover:grayscale-0 duration-300"
            src="/images/USAID_colored.png" alt="USAID" />
          <hr
            class="mt-6 w-full border-t-[1px] border-HahuGray2 group-hover:visible dark:border-HahuGray/4 xl:invisible" />
          <p
            class="mt-5 text-center text-lg font-normal leading-[30px] group-hover:visible dark:text-HahuGray/4 xl:invisible">
            The United States Agency for International Development is an independent agency of the U.S. federal
            government that is primarily responsible for administering civilian foreign aid and development assistance
            to nations in need.
          </p>
        </div>

        <div
          class="transition-newtransition group flex h-[500px] max-w-[560px] flex-col items-center overflow-hidden rounded-t-[15px] bg-white px-5 duration-500 hover:bg-white hover:shadow-full dark:bg-HahuGray1 dark:hover:bg-HahuGray1 xs:h-[420px] sm:h-[400px] xl:h-60 xl:bg-transparent hover:xl:h-[420px] hover:3xl:h-[380px] 2xl:px-10">
          <img
            class="mt-10 object-contain dark:xl:group-hover:brightness-100 dark:xl:group-hover:invert-0 dark:xl:brightness-0 dark:xl:invert xl:opacity-60 xl:group-hover:opacity-100 xl:grayscale xl:group-hover:grayscale-0 duration-300"
            src="/images/Savethechildren_colored.png" alt="saveTheChildren" />
          <hr
            class="mt-6 w-full border-t-[1px] border-HahuGray2 group-hover:visible dark:border-HahuGray/4 xl:invisible" />
          <p
            class="mt-5 text-center text-lg font-normal leading-[30px] group-hover:visible dark:text-HahuGray/4 xl:invisible 2xl:mb-[110px]">
            Save the Children, was established in the United Kingdom in 1919 to improve the lives of children through
            better education, health care, and economic opportunities, as well as providing emergency aid in natural
            disasters, war, and other conflicts.
          </p>
        </div>

        <div
          class="transition-newtransition group flex h-[500px] max-w-[560px] flex-col items-center overflow-hidden rounded-t-[15px] bg-white px-5 duration-500 hover:bg-white hover:shadow-full dark:bg-HahuGray1 dark:hover:bg-HahuGray1 xs:h-[420px] sm:h-[400px] xl:h-60 xl:bg-transparent hover:xl:h-[420px] hover:3xl:h-[380px] 2xl:px-10">
          <img
            class="mt-10 object-contain dark:xl:group-hover:brightness-100 dark:xl:group-hover:invert-0 dark:xl:brightness-0 dark:xl:invert xl:opacity-60 xl:group-hover:opacity-100 xl:grayscale xl:group-hover:grayscale-0 duration-300"
            src="/images/MOSHE_colored.png" alt="MOSHE" />
          <hr
            class="mt-6 w-full border-t-[1px] border-HahuGray2 group-hover:visible dark:border-HahuGray/4 xl:invisible" />
          <p
            class="mt-5 text-center text-lg font-normal leading-[30px] group-hover:visible dark:text-HahuGray/4 xl:invisible 2xl:mb-[110px]">
            Ministry of Science and Higher Education is the Federal Democratic Republic of Ethiopia's ministry which has
            a responsibility to lead the development of science, higher education, and technical and vocational
            education and training in the country.
          </p>
        </div>
      </div>
    </section>

    <section class="flex flex-col" id="about">
      <h3
        class="self-center rounded-[36px] bg-primary-lite px-[33px] py-[2px] text-xs font-medium leading-[18px] text-primary-dark mt-24">
        About
      </h3>
      <h2
        class="mt-8 self-center text-center text-3xl font-semibold leading-[35px] text-HahuGray1 dark:text-HahuGray/4">
        What is in Muya?
      </h2>
      <p
        class="mt-[17px] max-w-[860px] self-center text-center text-lg font-normal leading-[35px] text-HahuGray2 dark:text-HahuGray/4">
        Partnering institutions provide content that equips graduates with the
        skills necessary to pursue and land appropriate job opportunities,
        including high-order thinking skills, positive self-concepts, and
        self-control. Students can also build intuitive CVs online in order to
        showcase their skillsets.
      </p>
      <div class="mt-[59px] flex flex-col items-center justify-center gap-[38px] xl:flex-row">
        <div
          class="group flex shadow-full max-w-[485px] flex-col items-center rounded-[15px] border-2 border-transparent bg-white duration-500 hover:border-primary dark:bg-HahuGray1">
          <div
            class="mt-[38px] flex h-[141px] w-[141px] items-center justify-center rounded-full border-2 bg-HaHuGreen/4 shadow-lg duration-500 group-hover:border-primary">
            <img class="object-contain" src="/images/MuyaJob.png" alt="muyaJobs" />
          </div>
          <h2 class="mt-[44px] self-center text-center text-xl font-bold leading-[35px] text-HahuGray1 dark:text-white">
            Jobs & Scholarships
          </h2>
          <p
            class="mt-[26px] self-center px-5 pb-[42px] text-center text-lg font-light leading-[30px] dark:text-HahuGray/4 3xl:px-[59px]">
            Fresh graduates often face challenges finding jobs that are aimed at
            their skillsets. Muya aggregates job and scholarship opportunities
            for fresh graduates from all over the country and presents free of
            charge in one place, while companies can advertise their vacancies.
            are also made available
          </p>
        </div>

        <div
          class="group flex shadow-full max-w-[485px] flex-col items-center rounded-[15px] border-2 border-transparent bg-white duration-500 hover:border-primary dark:bg-HahuGray1">
          <div
            class="mt-[38px] flex h-[141px] w-[141px] items-center justify-center rounded-full border-2 border-transparent bg-HaHuGreen/4 shadow-lg duration-500 group-hover:border-primary">
            <img class="object-contain" src="/images/MuyaCareer.png" alt="MuyaCarreer" />
          </div>
          <h2 class="mt-[44px] self-center text-center text-xl font-bold leading-[35px] text-HahuGray1 dark:text-white">
            Career Guidance & CV Building
          </h2>
          <p
            class="mt-[26px] self-center px-5 pb-[42px] text-center text-lg font-light leading-[30px] dark:text-HahuGray/4 3xl:px-[59px]">
            Partnering institutions provide content that equips graduates with
            the skills necessary to pursue and land appropriate job
            opportunities, including high-order thinking skills, positive
            self-concepts, and self-control. Students can also build intuitive
            CVs online in order to showcase their skillsets
          </p>
        </div>

        <div
          class="group flex shadow-full max-w-[485px] flex-col items-center rounded-[15px] border-2 border-transparent bg-white duration-500 hover:border-primary dark:bg-HahuGray1">
          <div
            class="mt-[38px] flex h-[141px] w-[141px] items-center justify-center rounded-full border-2 bg-HaHuGreen/4 shadow-lg group-hover:border-primary">
            <img class="object-contain" src="/images/MuyaEducation.png" alt="education" />
          </div>
          <h2 class="mt-[44px] self-center text-center text-xl font-bold leading-[35px] text-HahuGray1 dark:text-white">
            Content & Assessment
          </h2>
          <p
            class="mt-[26px] self-center px-5 pb-[42px] text-center text-lg font-light leading-[30px] dark:text-HahuGray/4 3xl:px-[59px]">
            Due to the Covid-19 pandemic all in-person education at higher
            education facilities is momentarily suspended. Educators can make
            learning materials accessible to students in various formats,
            including videos, audios and texts. Furthermore, they can make
            online assessments
          </p>
        </div>
      </div>
    </section>

    <section class="flex flex-col">
      <h2 class="mt-20 text-center text-3xl font-semibold leading-[35px] dark:text-HahuGray/4 xl:mt-40">
        Growing community
      </h2>
      <p
        class="mt-16 max-w-[860px] self-center text-center text-lg font-normal leading-[35px] text-HahuGray2 dark:text-HahuGray/4">
        Our community of students, educators and contents is growing by the day.
        Below is a live look into the current numbers.
      </p>

      <div
        class="mt-[73px] mb-[117px] flex flex-col justify-center space-y-10 space-x-0 lg:flex-row lg:space-y-0 lg:space-x-36 xl:justify-evenly xl:space-x-[16.5rem]">
        <div class="flex flex-col">
          <h2 class="self-center text-5xl font-bold leading-[60px] text-primary">
            7
          </h2>
          <h3 class="self-center text-xl font-medium leading-[30px] dark:text-HahuGray/4">
            Content
          </h3>
          <hr class="mt-4 w-[167px] self-center rounded-full border-2 border-primary-lite bg-primary-lite px-1" />
        </div>

        <div class="flex flex-col">
          <h2 class="self-center text-5xl font-bold leading-[60px] text-primary">
            30,000
          </h2>
          <h3 class="self-center text-xl font-medium leading-[30px] dark:text-HahuGray/4">
            Users
          </h3>
          <hr class="mt-4 w-[167px] self-center rounded-full border-2 border-primary-lite bg-primary-lite px-1" />
        </div>

        <div class="flex flex-col">
          <h2 class="self-center text-5xl font-bold leading-[60px] text-primary">
            30
          </h2>
          <h3 class="self-center text-xl font-medium leading-[30px] dark:text-HahuGray/4">
            Institutes
          </h3>
          <hr class="mt-4 w-[167px] self-center rounded-full border-2 border-primary-lite bg-primary-lite px-1" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>
