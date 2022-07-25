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
    img: "https://res.cloudinary.com/dyut9eifz/image/upload/v1657870126/Hahu/blog_post_1_tcgtow.jpg",
    cat: "TECHNOLOGY",
    date: "19 Jan 2022",
    title: "Hey! Today let's introduce you to AWAQI",
    p1: "Awaqi, aims to be the catalyst for the young people of Ethiopia, aiming to serve as a youth-centered online training and coaching platform focused on mindset, soft skills and information sharing. All with the end-goal of pushing the country’s youth to take control of their futures by actively working on themselves to have an entrepreneurial mindset. It will also serve as a training platform for young entrepreneurs, small and medium enterprises (MSMEs) and opportunities for growth. Awaqi are set to work with HaHuJobs on entrepreneurship, employment training and career guidance, and we will provide you with a range of multimedia resources that promote weekly skills development and professional thinking.",
    p2: "",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dyut9eifz/image/upload/v1657870126/Hahu/blog_post_2_gv5r5e.jpg",
    cat: "TECHNOLOGY",
    date: "19 Jan 2022",
    title:
      "HaHuJobs have signed an MoU with the Ethiopian Investment Commission",
    p1: "We announce that HaHuJobs have signed an MoU with the Ethiopian Investment Commission to cooperate on digitizing labour grievance reporting, investor OSSCs center service request management and worker identification with in the federal industrial parks. We are greatful for the opportunity to contribute and look forward to merits of this engagement.",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dyut9eifz/image/upload/v1657870126/Hahu/blog_post_3_lpyg2a.jpg",
    cat: "TECHNOLOGY",
    date: "19 Jan 2022",
    title: "ALx Software Engineering training programme.",
    p1: "a 12-month Programme that prepares the youth with the technical and work-ready skills for a global career as a Full-Stack Developer which target from age 18-28, any background. Our programmes focus on building the skillsets, through real-time project-based learning, to get youths ready to transform our world.",
    p2: "Software Engineers are highly in demand and earn great salaries. Delivered in partnership with the Holberton School, the Software Engineering program is structured as follows: Foundation: 9 Months Low-level Programming - work in C and Unix programming, graphical programming, data structures and algorithms, and reverse engineering and security protocols.",
    p2: "Higher Level programming - advanced algorithms, space and time complexity, database management, and front-end programming.",
    p3: "System Engineering and DevOps - while developing previously mentioned skills, emphasizes automation, scalability, and reliability so that you are familiar with the infrastructure and best practices similar to those in tech powerhouses. \n Specialization: 3 Months Front-end development Back-end web development",
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/dyut9eifz/image/upload/v1657870126/Hahu/blog_post_4_i51xnl.jpg",
    cat: "TECHNOLOGY",
    date: "19 Jan 2022",
    title: "ALx African Career Catalyst (ACC)",
    p1: "Starting your career but unable to translate your value into a job you want? Often it’s for lack of soft skills such as CV preparation, interviewing, problem solving. ALX’s Career Catalyst is a bootcamp designed to address these gaps with tools to get you ready for work. African Career Catalyst (ACC) is a 5-week Sprint, that equips the youth with the tools that helps them understand what employers/recruiters are looking for. The training is set for age from 18-34, looking for an entry level opportunity, building practical, technical and soft skills combined with network and relationship building.",
    p2: "",
  },
  {
    id: 5,
    img: "https://res.cloudinary.com/dyut9eifz/image/upload/v1657870126/Hahu/blog_post_5_b0ozfd.jpg",
    cat: "TECHNOLOGY",
    date: "19 Jan 2022",
    title: "ALx Young Entrepreneurs Programme (YEP)",
    p1: "Are you a young, early-stage business owner keen to learn from experienced entrepreneurs that have built, managed, and grown businesses? Accelerate your business with mentors and a community of entrepreneurs with ALX’s Young Entrepreneurs Programme. Young Entrepreneurs Programme (YEP) is a 4-Week Sprint, designed to provide young entrepreneurs with the skills, mentorship, and community they need to take their business to the next level The program targets from age 18-35, and able to Provide young entrepreneurs with the know-how to move their companies to a new stage of growth.",
    p2: "",
  },
  {
    id: 6,
    img: "https://res.cloudinary.com/dyut9eifz/image/upload/v1657870126/Hahu/blog_post_6_ec3adk.png",
    cat: "TECHNOLOGY",
    date: "19 Jan 2022",
    title: "HahuJobs have signed a service agreement with SNV",
    p1: "We are happy to announce that we have signed a service agreement with #SNV to provide our industry park services to Bure, Yirgalem and Bulbula integrated agro industrial parks under the RAYEE program one of master card foundation initiatives. This marks a significate mile stone in our industry park LMIS operation, we are now serving 11 industrial parks across Ethiopia.",
    p2: "",
  },
  {
    id: 7,
    img: "https://res.cloudinary.com/dyut9eifz/image/upload/v1657870127/Hahu/blog_post_7_xvfdrv.jpg",
    cat: "TECHNOLOGY",
    date: "19 Jan 2022",
    title:
      "Three-month training program for Bahir Dar Institute of Technology Students",
    p1: "A three-month training introductory program was held for students of Bahir Dar Institute of Technology students. We discussed with Bahir Dar Institute of Technology in an opening ceremony to provide training for students who are interested in web and mobile application enrichment. Our planned training will last for 3 months and will include modules such as Front End, Back End and Mobile app Development.",
    p2: "",
  },
  {
    id: 8,
    img: "https://res.cloudinary.com/dyut9eifz/image/upload/v1657870127/Hahu/blog_post_8_yiayrt.jpg",
    cat: "TECHNOLOGY",
    date: "19 Jan 2022",
    title: "HahuJobs online job application skill training",
    p1: "HahuJobs provides an online job application skill training and tips for jobseekers. After noticing lack of competence and preparation on jobseekers, HahuJobs organize to give skill set training in the following portions: how a jobseeker can apply for online job applications, how a jobseeker can apply for an online job application via email, how a jobseeker can fill forms in online job application, and different ways to apply in an online job application. The training inaugurate; January 9th, 2022 morning 10:00 am and will be a free online training via the HahuJobs telegram channel live stream session and will last for an hour and a half.",
    p2: "",
  },
];
const filteredBlog = ref(Blogs.find((el) => el.id == router.params.blog));

const copyLinkInp = ref("");
onMounted(() => {
  copyLinkInp.value = window.location.href;
});
const copyLinkFunc = () => {
  let copyText = document.getElementById("myLink");

  copyText.select();

  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);
};
</script>

<template>
  <div>
    <Head>
      <Title>{{ filteredBlog.title }}</Title>
      <Meta
        data-n-head="ssr"
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <Meta
        data-n-head="ssr"
        data-hid="og:title"
        property="og:title"
        :content="filteredBlog.title"
      />
      <Meta
        data-n-head="ssr"
        data-hid="og:description"
        property="og:description"
        :content="filteredBlog.p1"
      />
      <Meta
        data-n-head="ssr"
        data-hid="description"
        name="description"
        :content="filteredBlog.p1"
      />
      <Meta
        data-n-head="ssr"
        data-hid="og:url"
        property="og:url"
        content="https://nuxt-stat-dep--hahuone.netlify.app/"
      />
      <Meta data-n-head="ssr" property="og:type" content="website" />
      <Meta data-n-head="ssr" property="og:image" :content="filteredBlog.img" />
      <Meta
        data-n-head="ssr"
        property="twitter:card"
        content="summary_large_image"
      />
      <Meta
        data-n-head="ssr"
        property="twitter:domain"
        content="hahuone.netlify.app"
      />
      <Meta
        property="twitter:url"
        content="https://nuxt-stat-dep--hahuone.netlify.app/"
      />
      <Meta
        data-n-head="ssr"
        data-hid="twitter:title"
        name="twitter:title"
        property="twitter:title"
        :content="filteredBlog.title"
      />
      <Meta
        data-n-head="ssr"
        name="twitter:description"
        property="twitter:description"
        data-hid="twitter:description"
        :content="filteredBlog.p1"
      />

      <Meta
        data-n-head="ssr"
        property="twitter:image"
        :content="filteredBlog.img"
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
        <img class="mt-10 md:mt-[90px] rounded-2xl" :src="filteredBlog.img" alt="blogImg"/>
        <p
          v-if="filteredBlog.p2"
          class="mt-10 text-base font-normal leading-[30px] text-HahuGray1 dark:text-HahuGray/4 md:mt-[90px] md:text-lg"
        >
          {{ filteredBlog.p2 }}
        </p>

        <div class="mt-10 mb-16 flex flex-wrap justify-center gap-2 xl:mt-20">
          <button
            class="flex items-center rounded-md border-2 border-gray-300 bg-white duration-500 ease-in dark:bg-HahuGray/4 sm:mr-[102px]"
            @click="copyLinkFunc()"
          >
            <input class="hidden" id="myLink" v-model="copyLinkInp" />
            <img class="object-contain pl-4" :src="CopyLink" alt="copyLink"/>
            <span class="py-2 pr-4 pl-[7px]">Copy Link</span>
          </button>
          <div class="flex gap-2">
            <a
              :href="`http://www.facebook.com/sharer/sharer.php?u=https://nuxt-stat-dep--hahuone.netlify.app${$route.fullPath}&t=${filteredBlog.title}`"
              target="_blank"
              class="share-popup rounded-md border-2 border-gray-300 bg-white duration-500 ease-in dark:bg-HahuGray/4"
            >
              <img class="object-contain px-[13px] py-[9px]" :src="Facebook" alt="facebook"/>
            </a>
            <button
              class="rounded-md border-2 border-gray-300 bg-white duration-500 ease-in dark:bg-HahuGray/4"
            >
              <img class="object-contain px-[13px] py-[9px]" :src="Insta" alt="instagram"/>
            </button>
            <a
              :href="`http://twitter.com/share?text=${filteredBlog.title}&url=https://nuxt-stat-dep--hahuone.netlify.app${$route.fullPath}&hashtags=HahuJobs,Minab_ICT_Solutions`"
              class="rounded-md border-2 border-gray-300 bg-white duration-500 ease-in dark:bg-HahuGray/4"
            >
              <img class="object-contain px-[13px] py-[9px]" :src="Twitter" alt="twitter"/>
            </a>
            <a
              :href="`https://t.me/share/url?url=https://nuxt-stat-dep--hahuone.netlify.app${$route.fullPath}&text=${filteredBlog.title}`"
              class="rounded-md border-2 border-gray-300 bg-white duration-500 ease-in dark:bg-HahuGray/4"
            >
              <img class="object-contain px-[13px] py-[9px]" :src="Telegram" alt="telegram"/>
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped></style>
