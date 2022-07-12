<script setup>
import Facebook from "@/assets/svg/facebookShare.svg?url";
import Insta from "@/assets/svg/instaShare.svg?url";
import Twitter from "@/assets/svg/twitterShare.svg?url";
import Telegram from "@/assets/svg/telegramShare.svg?url";
import CopyLink from "@/assets/svg/copyLinkIcon.svg?url";
import {
  ArrowNarrowRightIcon,
  ArrowNarrowLeftIcon,
  ArrowNarrowDownIcon,
} from "@heroicons/vue/solid/index.js";

const router = useRoute();
const crumb = [
  { id: 1, name: "Blog", link: "blogs", current: false },
  { id: 2, name: "Blog Detail", link: "", current: true },
];

const Blogs = [
  {
    id: 1,
    img: "/images/blog_post_1.jpg",
    cat: "TECHNOLOGY",
    date: "19 Jan 2022",
    title: "Hey! Today let's introduce yout to AWAQI",
    p1: "Awaqi is a youth-focused thinking skills training and information exchange channel. The training Includes short videos, trainings and job opportunities for the youth. It will also serve as a training center for young entrepreneurs, small and medium enterprises (MSMEs) and opportunities for growth. Awaqi are set to work with HaHuJobs on entrepreneurship, employment training and career guidance, and we will provide you with a range of multimedia resources that promote weekly skills development and professional thinking.",
    p2: "",
  },
  {
    id: 2,
    img: "/images/blog_post_2.jpg",
    cat: "TECHNOLOGY",
    date: "19 Jan 2022",
    title:
      "HaHuJobs have signed an MoU with the Ethiopian Investment Commission",
    p1: "We announced that HaHuJobs have signed an MoU with the Ethiopian Investment Commission to cooperate on digitizing labour grievance reporting, investor OSSCs center service request management and worker identification with in the federal industrial parks.",
    p2: "It's with great pleasure that we announce HaHuJobs have signed an MoU with the Ethiopian Investment Commission to cooperate on digitizing labour grievance reporting, investor OSSCs center service request management and worker identification with in the federal industrial parks. We are greatful for the opportunity to contribute and look forward to merits of this engagement.",
  },
  {
    id: 3,
    img: "/images/blog_post_3.jpg",
    cat: "TECHNOLOGY",
    date: "19 Jan 2022",
    title: "ALx Software Engineering training programm.",
    p1: "a 12-month Programme that prepares the youth with the technical and work-ready skills for a global career as a Full-Stack Developer which target from age 18-28, any background. Our programmes focus on building the skillsets, through real-time project-based learning, to get youths ready to transform our world.",
    p2: "Software Engineers are highly in demand and earn great salaries. Delivered in partnership with the Holberton School, the Software Engineering program is structured as follows: Foundation: 9 Months Low-level Programming - work in C and Unix programming, graphical programming, data structures and algorithms, and reverse engineering and security protocols. Higher Level programming - advanced algorithms, space and time complexity, database management, and front-end programming. System Engineering and DevOps - while developing previously mentioned skills, emphasizes automation, scalability, and reliability so that you are familiar with the infrastructure and best practices similar to those in tech powerhouses. Specialization: 3 Months Front-end development Back-end web development",
  },
  {
    id: 4,
    img: "/images/blog_post_4.jpg",
    cat: "TECHNOLOGY",
    date: "19 Jan 2022",
    title: "ALx African Career Catalyst (ACC)",
    p1: "Starting your career but unable to translate your value into a job you want? Often it’s for lack of soft skills such as CV preparation, interviewing, problem solving. ALX’s Career Catalyst is a bootcamp designed to address these gaps with tools to get you ready for work. African Career Catalyst (ACC) is a 5-week Sprint, that equips the youth with the tools that helps them understand what employers/recruiters are looking for. The training is set for age from 18-34, looking for an entry level opportunity, building practical, technical and soft skills combined with network and relationship building.",
    p2: "",
  },
  {
    id: 5,
    img: "/images/blog_post_5.jpg",
    cat: "TECHNOLOGY",
    date: "19 Jan 2022",
    title: "ALx Young Entrepreneurs Programme (YEP)",
    p1: "Are you a young, early-stage business owner keen to learn from experienced entrepreneurs that have built, managed, and grown businesses? Accelerate your business with mentors and a community of entrepreneurs with ALX’s Young Entrepreneurs Programme.",
    p2: "Young Entrepreneurs Programme (YEP) is a 4-Week Sprint, designed to provide young entrepreneurs with the skills, mentorship, and community they need to take their business to the next level The program targets from age 18-35, and able to Provide young entrepreneurs with the know-how to move their companies to a new stage of growth.",
  },
  {
    id: 6,
    img: "/images/blog_post_6.png",
    cat: "TECHNOLOGY",
    date: "19 Jan 2022",
    title: "HahuJobs have signed a service agreement with SNV",
    p1: "We are happy to announce that we have signed a service agreement with #SNV to provide our industry park services to Bure, Yirgalem and Bulbula integrated agro industrial parks under the RAYEE program one of master card foundation initiatives. This marks a significate mile stone in our industry park LMIS operation, we are now serving 11 industrial parks across Ethiopia.",
    p2: "",
  },
];

const filteredBlog = ref(Blogs.find((el) => el.id == router.params.blog));
</script>

<template>
  <div>
    <Head>
      <Title>{{ filteredBlog.title }}</Title>
      <!-- <Meta name="description" :content="filteredBlog.p1" /> -->
      <meta
        data-n-head="1"
        property="og:description"
        :content="filteredBlog.p1"
      />
      <meta
        data-n-head="1"
        data-hid="description"
        name="description"
        :content="filteredBlog.p1"
      />
      <meta
        data-n-head="1"
        property="og:url"
        content="https://nuxt-static-dep.netlify.app/"
      />
      <meta data-n-head="1" property="og:type" content="website" />
      <meta
        data-n-head="1"
        property="og:image"
        :content="'https://nuxt-static-dep.netlify.app' + filteredBlog.img"
      />
      <meta
        data-n-head="1"
        property="twitter:card"
        content="summary_large_image"
      />
      <meta
        data-n-head="1"
        property="twitter:domain"
        content="nuxt-static-dep.netlify.app"
      />
      <meta
        property="twitter:url"
        content="https://nuxt-static-dep.netlify.app/"
      />
      <meta data-n-head="1" property="twitter:title" content="Hahu Jobs" />
      <meta data-n-head="1" property="twitter:title" content="Hahu Jobs" />
      <meta name="twitter:image" :content="'https://hahu-nuxt-deployment.netlify.app' + filteredBlog.img" />
      <meta
        data-n-head="1"
        property="twitter:image"
        :content="'https://hahu-nuxt-deployment.netlify.app' + filteredBlog.img"
      />
    </Head>
    <div class="flex min-h-screen justify-center md:px-11 xl:px-24">
      <section
        class="mt-3 flex w-11/12 xs:w-9/12 flex-col rounded-xl bg-white dark:bg-HahuGray1 px-4 xs:px-10 sm:px-10 md:px-20 xl:px-40 2xl:px-40"
      >
        <div
          class="relative mb-10 mt-6 flex flex-wrap flex-col xs:flex-row justify-start xs:justify-between items-end xs:items-center font-bold"
        >
          <Contained :crumb="crumb" class="self-start" />
          <div class="flex">
            <NuxtLink
              class="mt-[38px] sm:mt-0 flex self-start sm:self-end"
              to="/blogs"
            >
              <button
                class="group flex items-center justify-end self-end rounded-md bg-primary px-2 py-1 text-base font-medium leading-6 text-white lg:px-5 lg:py-3"
              >
                <ArrowNarrowLeftIcon
                  class="mr-[9px] inline-block h-5 w-5 text-white duration-300 group-hover:-translate-x-1"
                />Back
              </button>
            </NuxtLink>
          </div>
        </div>
        <h1
          class="mt-10 text-2xl font-bold leading-[60px] text-HahuGray1 dark:text-HahuGray/4 xl:text-3xl"
        >
          {{ filteredBlog.title }}
        </h1>
        <div class="mt-6 flex items-center gap-14">
          <h1
            class="rounded-full bg-primary-lite px-3 py-[5px] text-xs font-medium leading-[18px] text-primary"
          >
            {{ filteredBlog.cat }}
          </h1>
          <p class="text-base font-medium leading-6 text-primary">
            Jan 12, 2022
          </p>
        </div>

        <p
          class="mt-[40px] text-base font-normal leading-[30px] text-HahuGray2 dark:text-HahuGray/4 md:text-lg"
        >
          {{ filteredBlog.p1 }}
        </p>
        <img class="mt-10 md:mt-[90px] rounded-2xl" :src="filteredBlog.img" />
        <p
          v-if="filteredBlog.p2"
          class="mt-10 text-base font-normal leading-[30px] text-HahuGray1 dark:text-HahuGray/4 md:mt-[90px] md:text-lg"
        >
          {{ filteredBlog.p2 }}
        </p>

        <div class="mt-10 mb-16 flex flex-wrap justify-center gap-2 xl:mt-20">
          <button
            class="flex items-center rounded-md border-2 border-gray-300 bg-white duration-500 ease-in dark:bg-HahuGray/4 sm:mr-[102px]"
          >
            <img class="object-contain pl-4" :src="CopyLink" />
            <span class="py-2 pr-4 pl-[7px]">Copy Link</span>
          </button>
          <div class="flex gap-2">
            <button
              class="rounded-md border-2 border-gray-300 bg-white duration-500 ease-in dark:bg-HahuGray/4"
            >
              <img class="object-contain px-[13px] py-[9px]" :src="Facebook" />
            </button>
            <button
              class="rounded-md border-2 border-gray-300 bg-white duration-500 ease-in dark:bg-HahuGray/4"
            >
              <img class="object-contain px-[13px] py-[9px]" :src="Insta" />
            </button>
            <button
              class="rounded-md border-2 border-gray-300 bg-white duration-500 ease-in dark:bg-HahuGray/4"
            >
              <img class="object-contain px-[13px] py-[9px]" :src="Twitter" />
            </button>
            <button
              class="rounded-md border-2 border-gray-300 bg-white duration-500 ease-in dark:bg-HahuGray/4"
            >
              <img class="object-contain px-[13px] py-[9px]" :src="Telegram" />
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped></style>
