<template>
  <div class="min-h-screen overflow-y-auto px-8 md:px-[50px] xl:px-[100px]">
    <section class="flex flex-col items-center lg:min-h-screen xl:space-x-[89px] lg:flex-row" id="home">
      <div class="mt-20 flex-1 xl:mt-0">
        <img class="object-contain" src="/images/HahuEnter_amharic.png" alt="hahuLogo" />
        <h1 class="items-center text-[50px] font-black leading-[50px] dark:text-HahuGray/4">
          HaHuJobs university
        </h1>
        <div class="lg:hidden mt-10 lg:mt-0 flex-shrink max-w-[70vw]">
          <img class="object-contain" src="/images/UniMain.png" alt="hahuUniversity" />
        </div>
        <p class="mt-[27px] items-center text-lg font-normal leading-[35px] text-HahuGray2 dark:text-HahuGray/4">
          HaHuJobs university is a deployment intended to serve the needs of
          deliver ology departments, offer alternative digital contend
          disbursement for instructors and tracing graduates of Ethiopian
          universities that are subscribers of these services. The service
          offers a reporting and visualization for all its service components
          cospeciating higher education institute with a well compiled data to
          acquire relevant insights regarding the labor market and competence
          requirements.
        </p>
        <button class="mt-24 rounded-md bg-primary px-[50px] py-[13px] text-base font-medium leading-6 text-white">
          Login
        </button>
      </div>
      <div class="hidden lg:block flex-1 flex-shrink">
        <img class="object-contain 3xl:min-w-[950px]" src="/images/UniMain.png" alt="hahuUniversity" />
      </div>
    </section>

    <section class="flex flex-col" id="services">
      <h3
        class="mt-32 self-center rounded-[36px] bg-primary-lite px-[33px] py-[2px] text-xs font-medium leading-[18px] text-primary-dark">
        Services
      </h3>
      <h2
        class="mt-[30px] self-center text-center text-3xl font-semibold leading-[35px] text-HahuGray1 dark:text-HahuGray/4">
        What is in HaHuJobs University?
      </h2>
      <p
        class="mt-[17px] max-w-[860px] self-center text-center text-lg font-normal leading-[35px] text-HahuGray2 dark:text-HahuGray/4">
        The HaHuJobs University deployment are a set of services pillared in
        three primary categories, digital student tracing, digital material
        encoding and assessments
      </p>

      <div class="mt-[59px] flex flex-col items-center justify-center gap-[38px] xl:flex-row">
        <div
          class="group shadow-full flex max-w-[485px] flex-col items-center rounded-[15px] border-2 border-transparent bg-white duration-500 hover:border-primary dark:bg-HahuGray1">
          <div
            class="mt-[38px] flex h-[141px] w-[141px] items-center justify-center rounded-full border-2 bg-HaHuGreen/4 shadow-lg duration-500 group-hover:border-primary">
            <img class="object-contain" src="/images/TvetTracer.png" alt="tvetTracer" />
          </div>
          <h2
            class="mt-[44px] self-center text-center text-xl font-bold leading-[35px] text-HahuGray1 dark:text-HahuGray/4">
            Graduate tracer
          </h2>
          <p
            class="mt-[26px] self-center px-5 pb-[42px] text-center text-lg font-light leading-[30px] dark:text-HahuGray/4 2xl:px-[59px]">
            This service enables universities of all types to conduct biometric
            based registration of both their students and graduates that have
            successfully completed their required course work. The registration
            identifies enrolled course per semester and a competence profile
            based on which education materials are dispersed as per relevance to
            the university student.
          </p>
        </div>

        <div
          class="group shadow-full flex max-w-[485px] flex-col items-center rounded-[15px] border-2 border-transparent bg-white duration-500 hover:border-primary dark:bg-HahuGray1">
          <div
            class="mt-[38px] flex h-[141px] w-[141px] items-center justify-center rounded-full border-2 bg-HaHuGreen/4 shadow-lg duration-500 group-hover:border-primary">
            <img class="object-contain" src="/images/TvetContent.png" alt="hahuContent" />
          </div>
          <h2
            class="mt-[44px] self-center text-center text-xl font-bold leading-[35px] text-HahuGray1 dark:text-HahuGray/4">
            Digital Contents
          </h2>
          <p
            class="mt-[26px] self-center px-5 pb-[42px] text-center text-lg font-light leading-[30px] dark:text-HahuGray/4 2xl:px-[59px]">
            Contents relevant to all levels of the university students can be
            submitted by the institution using these services, contents
            delivered through our training platform called HaHuJobs muya. Each
            of these contents can have a dynamically defined curricular
            structure or can be offered in an informal format based on the
            convenience need of the university instructors.
          </p>
        </div>

        <div
          class="group shadow-full flex max-w-[485px] flex-col items-center rounded-[15px] border-2 border-transparent bg-white duration-500 hover:border-primary dark:bg-HahuGray1">
          <div
            class="mt-[38px] flex h-[141px] w-[141px] items-center justify-center rounded-full border-2 bg-HaHuGreen/4 shadow-lg duration-500 group-hover:border-primary">
            <img class="object-contain" src="/images/TvetAssess.png" alt="assess" />
          </div>
          <h2
            class="mt-[44px] self-center text-center text-xl font-bold leading-[35px] text-HahuGray1 dark:text-HahuGray/4">
            Digital assessment
          </h2>
          <p
            class="mt-[26px] self-center px-5 pb-[42px] text-center text-lg font-light leading-[30px] dark:text-HahuGray/4 2xl:px-[59px]">
            These set of university services are extension of the HaHuJobs core
            assessment services customized for academic purposed to evaluate
            specific competence of students or graduates regarding a set of
            topics for which training materials have been provided. Assessments
            can be conducted in both supervised and unsupervised model.
          </p>
        </div>
      </div>
    </section>

    <section class="flex flex-col" id="about">
      <h3
        class="mt-20 self-center rounded-[36px] bg-primary-lite px-[33px] py-[2px] text-xs font-medium leading-[18px] text-primary-dark xl:mt-[200px]">
        About
      </h3>
      <h2
        class="mt-[30px] self-center text-center text-3xl font-semibold leading-[35px] text-HahuGray1 dark:text-HahuGray/4">
        HaHuJobs University service values
      </h2>
      <p
        class="mt-[17px] max-w-[860px] self-center text-center text-lg font-normal leading-[35px] text-HahuGray2 dark:text-HahuGray/4">
        These services are essential to offer a holistic tracing of skills from
        their sourcing to qualification offer values in providing
        institutionalized training content, building a qualified set of
        jobseekers, and tracking progress through reporting
      </p>
      <div class="mt-[59px] flex flex-col items-center justify-center gap-[38px] xl:flex-row">
        <div
          class="group shadow-full flex max-w-[485px] flex-col items-center rounded-[15px] border-2 border-transparent bg-white duration-500 hover:border-primary dark:bg-HahuGray1">
          <div
            class="mt-[38px] flex h-[141px] w-[141px] items-center justify-center rounded-full border-2 bg-HaHuGreen/4 shadow-lg duration-500 group-hover:border-primary">
            <img class="object-contain" src="/images/TvetMuya.png" alt="muya" />
          </div>
          <h2
            class="mt-[44px] self-center text-center text-xl font-bold leading-[35px] text-HahuGray1 dark:text-HahuGray/4">
            Muya
          </h2>
          <p
            class="mt-[26px] self-center px-5 pb-[42px] text-center text-lg font-light leading-[30px] dark:text-HahuGray/4 2xl:px-[59px]">
            HaHuJobs Muya is capacity building and training platform intended
            for both jobseeker and students’ which sources various digital
            contents from training institutes in both document and multimedia
            formats. It offers users a digitally enabled environment to consume
            both formal and non-formal training material sourced from
            instructors with in the local context
          </p>
        </div>

        <div
          class="group shadow-full flex max-w-[485px] flex-col items-center rounded-[15px] border-2 border-transparent bg-white duration-500 hover:border-primary dark:bg-HahuGray1">
          <div
            class="mt-[38px] flex h-[141px] w-[141px] items-center justify-center rounded-full border-2 bg-HaHuGreen/4 shadow-lg duration-500 group-hover:border-primary">
            <img class="object-contain" src="/images/TvetPool.png" alt="Pool" />
          </div>
          <h2
            class="mt-[44px] self-center text-center text-xl font-bold leading-[35px] text-HahuGray1 dark:text-HahuGray/4">
            Job seekers pool
          </h2>
          <p
            class="mt-[26px] self-center px-5 pb-[42px] text-center text-lg font-light leading-[30px] dark:text-HahuGray/4 2xl:px-[59px]">
            Any student or graduate registered in HaHuJobs university services
            will automatically join our jobseekers’ pools and based on their
            consent their details will be availed for employers as well as
            enterprises that offer internship opportunities. Each profile data
            set is consistent throughout HaHuJobs services hence no need for
            recapture of these details.
          </p>
        </div>

        <div
          class="group shadow-full flex max-w-[485px] flex-col items-center rounded-[15px] border-2 border-transparent bg-white duration-500 hover:border-primary dark:bg-HahuGray1">
          <div
            class="mt-[38px] flex h-[141px] w-[141px] items-center justify-center rounded-full border-2 bg-HaHuGreen/4 shadow-lg duration-500 group-hover:border-primary">
            <img class="object-contain" src="/images/TvetReport.png" alt="report"/>
          </div>
          <h2
            class="mt-[44px] self-center text-center text-xl font-bold leading-[35px] text-HahuGray1 dark:text-HahuGray/4">
            Reporting
          </h2>
          <p
            class="mt-[26px] self-center px-5 pb-[42px] text-center text-lg font-light leading-[30px] dark:text-HahuGray/4 2xl:px-[59px]">
            One of the primary challenges of training providing institutes is
            lack of compiled data to plan for demand driven training and tracing
            the success of trainees or graduates after joining the work force.
            To this end the HaHuJobs university deployment offers graduate
            employment status tracking and labor market demand insights through
            standardized KPIs.
          </p>
        </div>
      </div>
    </section>

    <section class="flex flex-col">
      <h2 class="mt-20 text-center text-3xl font-semibold leading-[35px] dark:text-HahuGray/4 xl:mt-40">
        Some of our achievements so far
      </h2>
      <!-- <p
        class="mt-16 max-w-[860px] self-center text-center text-lg font-normal leading-[35px] text-HahuGray2 dark:text-HahuGray/4"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
        aliquam duis nulla augue eget pellentesque aliquam. Placerat imperdiet
        fringilla mi vitae, a nunc massa ultrices non.
      </p> -->

      <div
        class="mt-[73px] mb-[117px] flex flex-col justify-center space-y-10 space-x-0 lg:flex-row lg:space-y-0 lg:space-x-36 xl:justify-evenly xl:space-x-[16.5rem]">
        <div class="flex flex-col">
          <h2 class="self-center text-5xl font-bold leading-[60px] text-primary">
            7
          </h2>
          <h3 class="self-center text-xl font-medium leading-[30px] dark:text-HahuGray/4">
            Universities
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
            Content
          </h3>
          <hr class="mt-4 w-[167px] self-center rounded-full border-2 border-primary-lite bg-primary-lite px-1" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>
