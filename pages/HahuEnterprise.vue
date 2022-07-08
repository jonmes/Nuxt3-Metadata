<template>
  <div class="min-h-screen overflow-y-auto px-8 md:px-[50px] xl:px-[100px]">
    <section
      class="mb-10 mt-10 flex flex-col items-center pb-20 lg:my-0 lg:min-h-screen lg:flex-row xl:space-x-[89px]"
    >
      <div class="mt-20 flex-1 xl:mt-0" id="Home">
        <img class="object-contain" src="/images/HahuEnter_amharic.png" />
        <h1
          class="items-center text-[50px] font-black leading-[50px] dark:text-HahuGray/4"
        >
          HAHU ENTERPRISE
        </h1>

        <p
          class="mt-[27px] items-center text-lg font-normal leading-[35px] text-HahuGray2 dark:text-HahuGray/4"
        >
          Provides human resources and related services starting from job
          vacancy announcements, recruitment, all the way to human resources
          management until termination. This deployment also offers unique
          services to a category of businesses that operate within industry
          parks, in addition to foreign employment agencies.
        </p>
        <button
          class="mt-[113px] rounded-md bg-primary px-[50px] py-[13px] text-base font-medium leading-6 text-white"
        >
          Login
        </button>
      </div>
      <div class="flex-1 flex-shrink">
        <img
          class="object-contain 4xl:min-w-[950px]"
          src="/images/enterprise_art.png"
        />
      </div>
    </section>

    <section class="flex flex-col" id="services">
      <h3
        class="mt-32 self-center rounded-[36px] bg-primary-lite px-[33px] py-[2px] text-xs font-medium leading-[18px] text-primary-dark"
      >
        Services
      </h3>
      <h2
        class="mt-[30px] self-center text-center text-3xl font-semibold leading-[35px] text-HahuGray1 dark:text-HahuGray/4"
      >
        What is HaHu Enterprise?
      </h2>
      <p
        class="mt-[17px] max-w-[1410px] self-center text-center text-lg font-normal leading-[35px] text-HahuGray2 dark:text-HahuGray/4"
      >
        HaHuJobs Enterprise is a cloud service that digitalizes employee
        recruitment and related human resource management (HRM) services for
        Ethiopian companies. The platform offers three major service strands;
        overall human resource management, worker recruitment, and industry park
        specific enterprise services.
      </p>
      <div
        class="mt-[59px] flex flex-col items-center justify-center gap-[38px] xl:flex-row"
      >
        <div
          class="group flex min-h-[570px] max-w-[485px] flex-col items-center rounded-[15px] border-2 border-transparent bg-white shadow-full duration-500 hover:border-primary dark:bg-HahuGray1"
        >
          <div
            class="mt-[38px] flex h-[141px] w-[141px] items-center justify-center rounded-full border-2 bg-HaHuGreen/4 shadow-lg duration-500 group-hover:border-primary"
          >
            <img :src="HahuEnter_hrms" />
          </div>
          <h2
            class="mt-[44px] self-center text-center text-xl font-bold leading-[35px] text-HahuGray1 dark:text-HahuGray/4"
          >
            HRMS
          </h2>
          <p
            class="mt-[26px] self-center px-5 pb-[42px] text-center text-lg font-light leading-[30px] dark:text-HahuGray/4 2xl:px-[59px]"
          >
            HaHuJobs offers a cloud based human resource management platform
            that encompasses nearly all the HRMs needs for an Ethiopian
            enterprise. The service features functionalities such as leave
            requests, and attendance management; payroll processing, and
            employee training control.
          </p>
        </div>

        <div
          class="group flex min-h-[570px] max-w-[485px] flex-col items-center rounded-[15px] border-2 border-transparent bg-white shadow-full duration-500 hover:border-primary dark:bg-HahuGray1"
        >
          <div
            class="mt-[38px] flex h-[141px] w-[141px] items-start justify-center rounded-full border-2 bg-HaHuGreen/4 shadow-lg duration-500 group-hover:border-primary"
          >
            <img class="object-contain" src="/images/HahuEnter_recruit.png" />
          </div>
          <h2
            class="mt-[44px] self-center text-center text-xl font-bold leading-[35px] text-HahuGray1 dark:text-HahuGray/4"
          >
            Recruitments
          </h2>
          <p
            class="mt-[26px] self-center px-5 pb-[42px] text-center text-lg font-light leading-[30px] dark:text-HahuGray/4 2xl:px-[59px]"
          >
            Enterprise deployment of HaHuJobs offers Ethiopian enterprises with
            a digital vacancy posting along with a fully digital recruitment
            module. The service features a job posting module with applicant
            management and a recruitment process automation service offered in
            multiple platforms.
          </p>
        </div>

        <div
          class="group flex min-h-[570px] max-w-[485px] flex-col items-center rounded-[15px] border-2 border-transparent bg-white shadow-full duration-500 hover:border-primary dark:bg-HahuGray1"
        >
          <div
            class="mt-[38px] flex h-[141px] w-[141px] items-center justify-center rounded-full border-2 bg-HaHuGreen/4 shadow-lg duration-500 group-hover:border-primary"
          >
            <img class="object-contain" src="/images/HahuEnter_indu.png" />
          </div>
          <h2
            class="mt-[44px] self-center text-center text-xl font-bold leading-[35px] text-HahuGray1 dark:text-HahuGray/4"
          >
            Industry Park
          </h2>
          <p
            class="mt-[26px] self-center px-5 pb-[42px] text-center text-lg font-light leading-[30px] dark:text-HahuGray/4 2xl:px-[59px]"
          >
            Industrial park services offered are specialized worker sourcing and
            recruitment services tailored to factories that operate within
            Ethiopian industrial parks across the nation. Services offered are
            features such as mass worker requests and allocation with additional
            jobseeker identification features for information accuracy.
          </p>
        </div>
      </div>
    </section>

    <section class="flex flex-col" id="modules">
      <h3
        class="mt-20 self-center rounded-[36px] bg-primary-lite px-[33px] py-[2px] text-xs font-medium leading-[18px] text-primary-dark xl:mt-[200px]"
      >
        Modules
      </h3>
      <h2
        class="mt-8 self-center text-center text-3xl font-semibold leading-[35px] text-HahuGray1 dark:text-HahuGray/4"
      >
        HaHu Enterprise Modules
      </h2>
      <p
        class="mt-4 max-w-[1785px] self-center text-center text-lg font-normal leading-[35px] text-HahuGray2 dark:text-HahuGray/4"
      >
        This deployment houses multiple modules working together to offer
        services for companies or organizations with employees. Each module
        houses a set of system functionalities to automate human resource
        management activities including attendance tracking, payroll,
        recruitment automation, and employee profile.
      </p>

      <carousel :items-to-show="itemsToShow" class="mt-8 mb-16 lg:mb-28">
        <slide v-for="(slide, index) in cFile" :key="index" class="group py-4">
          <div
            class="lg:min-h-auto group mx-5 flex h-full flex-col items-center rounded-[15px] border-2 border-primary bg-white shadow-full duration-500 dark:group-hover:bg-HahuGray1 lg:border-transparent lg:bg-transparent lg:group-hover:border-primary lg:group-hover:bg-white xl:min-h-[570px]"
          >
            <!-- <div
              class="flex flex-col items-center rounded-[15px] bg-white px-[53px] dark:bg-HahuGray1"
            > -->
            <div
              class="mt-2 flex w-32 items-center justify-center rounded-full border-2 border-transparent bg-HaHuGreen/4 p-4 shadow-full duration-500 group-hover:border-primary"
            >
              <img class="object-contain" :src="slide.img" />
            </div>
            <h2
              class="mt-5 text-center text-2xl font-bold leading-[35px] dark:text-HahuGray/4"
            >
              {{ slide.title }}
            </h2>
            <!-- </div> -->
            <!-- <p
              class="px-5 pb-12 text-center text-lg font-normal leading-[35px] dark:text-HahuGray/4 xs:px-[53px] lg:invisible lg:group-hover:visible"
            > -->
            <p
              class="px-5 pt-5 text-center text-lg font-normal leading-[35px] dark:text-HahuGray/4 xs:px-10"
            >
              {{ slide.p }}
            </p>
          </div>
        </slide>
        <template #addons>
          <navigation class="-mt-10 w-10 sm:mx-0 md:w-auto" />
          <!-- <navigation class="-mt-10" :class="{ hidden: !showNav }" /> -->
        </template>
      </carousel>
    </section>

    <section class="flex flex-col">
      <h2
        class="text-center text-3xl font-semibold leading-[35px] text-black dark:text-HahuGray/4"
      >
        Our achievements So Far
      </h2>
      <p
        class="mt-10 max-w-[860px] self-center text-center text-lg font-normal leading-[35px] text-HahuGray2 dark:text-HahuGray/4 lg:mt-[67px]"
      >
        Beginning with our services toward the end of 2019, we are currently
        serving all enterprises as per their HRMs needs. The following figures
        below summarize our progress so far.
      </p>

      <div
        class="mt-[73px] mb-[117px] flex flex-col justify-center space-y-10 space-x-0 lg:flex-row lg:space-y-0 lg:space-x-36 xl:justify-evenly xl:space-x-[16.5rem]"
      >
        <div class="flex flex-col">
          <h2
            class="self-center text-5xl font-bold leading-[60px] text-primary"
          >
            31
          </h2>
          <h3
            class="self-center text-xl font-medium leading-[30px] dark:text-HahuGray/4"
          >
            Companies
          </h3>
          <hr
            class="mt-4 w-[167px] self-center rounded-full border-2 border-primary bg-primary-lite px-1"
          />
        </div>

        <div class="flex flex-col">
          <h2
            class="self-center text-5xl font-bold leading-[60px] text-primary"
          >
            46,816
          </h2>
          <h3
            class="self-center text-xl font-medium leading-[30px] dark:text-HahuGray/4"
          >
            Users
          </h3>
          <hr
            class="mt-4 w-[167px] self-center rounded-full border-2 border-primary bg-primary-lite px-1"
          />
        </div>

        <div class="flex flex-col">
          <h2
            class="self-center text-5xl font-bold leading-[60px] text-primary"
          >
            8
          </h2>
          <h3
            class="self-center text-xl font-medium leading-[30px] dark:text-HahuGray/4"
          >
            Sectors
          </h3>
          <hr
            class="mt-4 w-[167px] self-center rounded-full border-2 border-primary bg-primary-lite px-1"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import HahuEnter_hrms from "@/assets/svg/HahuEnter_hrms.svg?url";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { ref, onMounted } from "vue";

const cFile = [
  {
    img: "/images/carosel_training.png",
    title: "Training",
    p: "This service module enables companies to track and control the training offered to their employees both through internal and external trainers. This module also records and keeps track of time-bound trainings of employees with a built-in notification feature.",
  },
  {
    img: "/images/carosel_employee.png",
    title: "Employee",
    p: "This module allows a company to keep a digital record of all employees under, seven main profile information strands. These are employee educational background, working experience, personal details with emergency contact, skill sets, training, and employment contract.",
  },
  {
    img: "/images/carosel_attendance.png",
    title: "Attendance",
    p: "Attendance is monitored through an employee ‘time worked’ tracker per defined contracts of each employee. This module offers communication plugins to incorporate fingerprint-based attendance machines for automated time keeping. It also supports attendance and worked hour approvals, if required.",
  },
  {
    img: "/images/carosel_leave.png",
    title: "Leave",
    p: "The leave management module enables a digitalized and automated process of employee leave balance tracking. This module also enables dynamic definition of leave types as per the company requirements with customized labeling and coding for allocation, as needed.",
  },
  {
    img: "/images/carosel_payroll.png",
    title: "Payroll",
    p: "The payroll management module allows an organization to dynamically define company standard additions and deductions to fully automate payroll processing. The HaHuJobs payroll generates payroll based on pre-set configurations customized as per the specific finance structure of each organization.",
  },
  {
    img: "/images/carosel_training.png",
    title: "Vaccancy",
    p: "As the name indicates, this module allows organizations to post vacancies for free, on all HaHuJobs job portal outlets and automate the application process. This module is also coupled with a set of recruitment features to schedule, conduct, and set scores of interviews for job applicants.",
  },
  {
    img: "/images/HahuEnter_indu.png",
    title: "IP",
    p: "The industrial park module for enterprises is intended to provide services for companies with factories in one of the Ethiopian industrial parks. The module offers specialized worker demand and supply management features specific to industry park use cases, with a dedicated case reporting tool.",
  },
];
const itemsToShow = ref(1);
const showNav = ref(false);


const carWidth = (windowWidth) => {
  if (windowWidth < 768) {
    itemsToShow.value = 1;
    showNav.value = false;
  } else if (windowWidth > 768 && windowWidth < 1280) {
    itemsToShow.value = 2;
    showNav.value = true;
  } else if (windowWidth > 1280 && windowWidth < 1600) {
    itemsToShow.value = 3;
    showNav.value = true;
  } else if (windowWidth > 1600) {
    itemsToShow.value = 4;
    showNav.value = true;
  }
};

onMounted(() => {
  const windowWidth = ref(window.innerWidth);
  carWidth(window.innerWidth);
  window.onresize = () => {
    windowWidth.value = window.innerWidth;
    // console.log("screen width", windowWidth.value);
    carWidth(windowWidth.value);
  };
});


</script>
