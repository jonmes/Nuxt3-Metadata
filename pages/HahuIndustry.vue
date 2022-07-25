<template>
  <div class="min-h-screen overflow-y-auto px-8 md:px-[50px] xl:px-[100px]">
    <section class="flex flex-col items-center lg:pb-20 lg:min-h-screen lg:flex-row xl:space-x-[89px]" id="home">
      <div class="mt-20 flex-1 xl:mt-0">
        <img class="object-contain" src="/images/HahuEnter_amharic.png" alt="hahujobsImg" />
        <h1 class="items-center text-[50px] font-black leading-[50px] dark:text-HahuGray/4">
          HaHu Industry park
        </h1>
        <div class="lg:hidden mt-10 lg:mt-0 flex-shrink max-w-[70vw]">
          <img class="object-contain" src="/images/industryPark.png" alt="industryPark" />
        </div>
        <p class="mt-10 items-center text-lg font-normal leading-[35px] text-HahuGray2 dark:text-HahuGray/4">
          The platform uses biometric based identification to both register
          workers and job seekers. The process begins with mass registration of
          employment seekers to build a digital pool of job seekers. From this
          digital pool, job seekers are allocated for worker requests collected
          from factories in the industry park. This platform logs and profiles
          the recruitment status of each allocated jobseeker and indexes each
          transaction data for data analytics as well as visualization.
        </p>
        <button class="mt-24 rounded-md bg-primary px-[50px] py-[13px] text-base font-medium leading-6 text-white">
          Login
        </button>
      </div>
      <div class="hidden lg:block flex-1 flex-shrink-0 mt-10 xs:mt-0">
        <img class="object-fit w-auto 4xl:min-w-[960px]" src="/images/industryPark.png" alt="industryPark" />
      </div>
    </section>

    <section class="flex flex-col" id="partners">
      <h3
        class="mt-24 self-center rounded-[36px] bg-primary-lite px-[33px] py-[2px] text-xs font-medium leading-[18px] text-primary-dark">
        Services
      </h3>
      <h2 class="mt-7 self-center text-3xl font-semibold leading-[35px] text-HahuGray1 dark:text-HahuGray/4">
        Our Partners
      </h2>
      <p
        class="mt-[17px] max-w-[1270px] self-center text-center text-lg font-normal leading-[35px] text-HahuGray2 dark:text-HahuGray/4">
        These services are rendered under a service-level cooperation with our
        foreign, and local partners. The Ethiopian Investment Commission being
        the lead on this multi stakeholder engagement is partnering with the
        Mastercard Foundation and First Consult. Learn more about our partners,
        and their respective roles, below.
      </p>

      <div
        class="mt-16 mb-10 lg:mg-0 grid min-h-[750px] grid-cols-1 justify-items-center gap-y-10 md:min-h-[800px] lg:min-h-[400px] lg:w-auto lg:grid-cols-3 lg:gap-x-10 3xl:min-h-[310px]">
        <div
          class="transition-newtransition group dark:text-white flex h-full w-auto flex-col items-center overflow-hidden rounded-2xl shadow-full duration-500 hover:bg-white dark:bg-HahuGray1 dark:lg:hover:bg-HahuGray1 hover:shadow-full sm:w-9/12 md:h-40 md:shadow-none hover:md:h-[300px] lg:w-auto hover:lg:h-[400px] hover:3xl:h-[310px]">
          <img
            class="mt-5 object-contain transition dark:xl:group-hover:brightness-100 dark:xl:group-hover:invert-0 dark:xl:brightness-10 dark:xl:invert xl:grayscale xl:group-hover:grayscale-0 duration-700"
            src="/images/mastercard_colored.png" alt="masterCard" />
          <hr
            class="my-4 w-10/12 border-b-[1px] border-black dark:border-white opacity-20 duration-500 md:invisible md:opacity-0 md:group-hover:visible md:group-hover:opacity-20" />
          <p
            class="mb-5 w-10/12 text-center text-sm font-normal leading-5 duration-500 md:invisible group-hover:md:visible">
            The Mastercard Foundation’s new strategy, Young Africa Works,
            outlines how, over the next decade, the organization will focus on
            finding solutions to the youth employment challenge and reducing
            poverty in African institute profiles, as part of this initiative in
            Ethiopia Master card is funding the BRIDGES program implemented by
            First Consult PLC.
          </p>
        </div>
        <div
          class="transition-newtransition group dark:text-white flex h-full w-auto flex-col items-center overflow-hidden rounded-2xl shadow-full duration-700 hover:bg-white dark:bg-HahuGray1 dark:lg:hover:bg-HahuGray1 hover:shadow-full sm:w-9/12 md:h-40 md:shadow-none hover:md:h-[300px] lg:w-auto hover:lg:h-[400px] hover:3xl:h-[310px]">
          <img
            class="mt-5 object-contain transition dark:xl:group-hover:brightness-100 dark:xl:group-hover:invert-0 dark:xl:brightness-0 dark:xl:invert  xl:grayscale xl:group-hover:grayscale-0 duration-300"
            src="/images/first_consult_colored.png" alt="firstConsult" />
          <hr
            class="my-4 w-10/12 border-b-[1px] border-black dark:border-white opacity-20 duration-500 md:invisible md:opacity-0 md:group-hover:visible md:group-hover:opacity-20" />
          <p
            class="mb-5 w-10/12 text-center text-sm font-normal leading-5 duration-500 md:invisible group-hover:md:visible">
            First Consult PLC is an Ethiopian based consultation implementing a five-year initiative called BRISGES, to
            support the creation of close to 600,000 jobs for young people (80% women) and 15,000 micro, small, and
            medium enterprises (MSMEs). Furthermore, the program will train 300,000 unemployed youth through industrial
            park job creation initiatives, and market linkage between industrial parks and MSMEs.
          </p>
        </div>
        <div
          class="transition-newtransition group dark:text-white flex h-full w-auto flex-col items-center overflow-hidden rounded-2xl shadow-full duration-500 hover:bg-white dark:bg-HahuGray1 dark:lg:hover:bg-HahuGray1 hover:shadow-full sm:w-9/12 md:h-40 md:shadow-none hover:md:h-[300px] lg:w-auto hover:lg:h-[400px] hover:3xl:h-[310px]">
          <img
            class="mt-5 object-contain transition dark:xl:group-hover:brightness-100 dark:xl:group-hover:invert-0 dark:xl:brightness-0 dark:xl:invert xl:grayscale xl:group-hover:grayscale-0 duration-700"
            src="/images/minab_colorized.png" alt="EIC" />
          <hr
            class="my-4 w-10/12 border-b-[1px] border-black dark:border-white opacity-20 duration-500 md:invisible md:opacity-0 md:group-hover:visible md:group-hover:opacity-20" />
          <p
            class="mb-5 w-10/12 text-center text-sm font-normal leading-5 duration-500 md:invisible group-hover:md:visible">
            Ethiopian Investment commission is the lead coordinator of this Industry park LMIS intervention in
            supervising the development of the IP labour database and manage its data collection and aggregation of
            information from all participating industrial parks. The EIC will also work to ensure proper buy-in and
            utilization of the database by stakeholders and investors.
          </p>
        </div>
      </div>
    </section>

    <section class="flex flex-col" id="about">
      <h3
        class="self-center rounded-[36px] bg-primary-lite px-[33px] py-[2px] text-xs font-medium leading-[18px] text-primary-dark dark:text-HahuGray/4 mt-24">
        About
      </h3>
      <h2
        class="mt-[30px] self-center text-center text-3xl font-semibold leading-[35px] text-HahuGray1 dark:text-HahuGray/4">
        What is in HaHu jobs IP ?
      </h2>
      <p
        class="mt-[17px] max-w-[1400px] self-center text-center text-lg font-normal leading-[35px] text-HahuGray2 dark:text-HahuGray/4">
        HaHuJobs Industry Park is a multi-layer cloud service platform that
        incorporates multiple service components that work together across
        deployment models that will automate industry park specific labour
        management use cases.
      </p>
      <div class="mt-[59px] grid grid-cols-1 justify-items-center gap-[38px] lg:grid-cols-3">
        <div
          class="group flex h-full max-w-[485px] flex-col items-center rounded-[15px] border-2 border-transparent bg-white shadow-full duration-500 hover:border-primary dark:bg-HahuGray1">
          <div
            class="mt-[38px] flex h-[141px] w-[141px] items-center justify-center rounded-full border-2 bg-HaHuGreen/4 shadow-lg duration-500 group-hover:border-primary">
            <img class="object-contain" src="/images/InduRegistration.png" alt="registration" />
          </div>
          <h2
            class="mt-[44px] self-center text-center text-xl font-bold leading-[35px] text-HahuGray1 dark:text-HahuGray/4">
            Registration
          </h2>
          <p
            class="mt-[26px] self-center px-5 pb-[42px] text-center text-lg font-light leading-[30px] dark:text-HahuGray/4 2xl:px-[59px]">
            Active worker and job seeker biometric identification on graduate,
            as well as non-graduate levels, through digital registration with
            their biometrics as unique identifier. These registrations capture
            details of the professional competency as well as HR required
            details to ease the burden of factory human resource management
            personnel.
          </p>
        </div>

        <div
          class="group flex h-full max-w-[485px] flex-col items-center rounded-[15px] border-2 border-transparent bg-white shadow-full duration-500 hover:border-primary dark:bg-HahuGray1">
          <div
            class="mt-[38px] flex h-[141px] w-[141px] items-center justify-center rounded-full border-2 bg-HaHuGreen/4 shadow-lg duration-500 group-hover:border-primary">
            <img class="object-contain" src="/images/InduAllocation.png" alt="allocation" />
          </div>
          <h2
            class="mt-[44px] self-center text-center text-xl font-bold leading-[35px] text-HahuGray1 dark:text-HahuGray/4">
            Allocation
          </h2>
          <p
            class="mt-[26px] self-center px-5 pb-[42px] text-center text-lg font-light leading-[30px] dark:text-HahuGray/4 2xl:px-[59px]">
            Enterprise worker demand and supply management is one of the main
            components of this service deployment. The tools are closely coupled
            with the HaHuJobs enterprise module to allow all industry park
            companies to submit white collar vacancies and labor demands through
            the platform with a fully automated digital recruitment process.
          </p>
        </div>
        <div
          class="group flex h-full max-w-[485px] flex-col items-center rounded-[15px] border-2 border-transparent bg-white shadow-full duration-500 hover:border-primary dark:bg-HahuGray1">
          <div
            class="mt-[38px] flex h-[141px] w-[141px] items-center justify-center rounded-full border-2 bg-HaHuGreen/4 shadow-lg duration-500 group-hover:border-primary">
            <img class="object-contain" src="/images/InduReport.png" alt="report" />
          </div>
          <h2
            class="mt-[44px] self-center text-center text-xl font-bold leading-[35px] text-HahuGray1 dark:text-HahuGray/4">
            Report
          </h2>
          <p
            class="mt-[26px] self-center px-5 pb-[42px] text-center text-lg font-light leading-[30px] dark:text-HahuGray/4 2xl:px-[59px]">
            Data collection and reporting is part of this entire service which
            allows stakeholders to keep track of project KPIs in real time. This
            platform offers robust reporting dashboards through indexed data
            that use dynamic visualizations for summarized representation of
            ground operations. The platform also offers periodic monthly insight
            reports.
          </p>
        </div>
      </div>
    </section>

    <section class="flex flex-col">
      <h2 class="mt-20 text-center text-3xl font-semibold leading-[35px] dark:text-HahuGray/4 xl:mt-40">
        Our Achievements So Far
      </h2>
      <p
        class="mt-[67px] max-w-[860px] self-center text-center text-lg font-normal leading-[35px] text-HahuGray2 dark:text-HahuGray/4">
        We are currently serving all active industry parks in EIC and all the
        companies’ operating within them. Operations have commenced mid-2018,
        and reflect the current status to date.
      </p>

      <div
        class="mt-[73px] mb-[117px] flex flex-col justify-center space-y-10 space-x-0 lg:flex-row lg:space-y-0 lg:space-x-36 xl:justify-evenly xl:space-x-[16.5rem]">
        <div class="flex flex-col">
          <h2 class="self-center text-5xl font-bold leading-[60px] text-primary">
            9
          </h2>
          <h3 class="self-center text-xl font-medium leading-[30px] dark:text-HahuGray/4">
            Industry parks
          </h3>
          <hr class="mt-4 w-[167px] self-center rounded-full border-2 border-primary-lite bg-primary-lite px-1" />
        </div>

        <div class="flex flex-col">
          <h2 class="self-center text-5xl font-bold leading-[60px] text-primary">
            104,251
          </h2>
          <h3 class="self-center text-xl font-medium leading-[30px] dark:text-HahuGray/4">
            Users
          </h3>
          <hr class="mt-4 w-[167px] self-center rounded-full border-2 border-primary-lite bg-primary-lite px-1" />
        </div>

        <div class="flex flex-col">
          <h2 class="self-center text-5xl font-bold leading-[60px] text-primary">
            88
          </h2>
          <h3 class="self-center text-xl font-medium leading-[30px] dark:text-HahuGray/4">
            Companies
          </h3>
          <hr class="mt-4 w-[167px] self-center rounded-full border-2 border-primary-lite bg-primary-lite px-1" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
#height_hover {
  transition: height 2s ease-in;
}
</style>
