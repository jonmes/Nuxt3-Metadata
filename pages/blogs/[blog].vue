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
    p1: "We announced that HaHuJobs have signed an MoU with the Ethiopian Investment Commission to cooperate on digitizing labour grievance reporting, investor OSSCs center service request management and worker identification with in the federal industrial parks.",
    p2: "It's with great pleasure that we announce HaHuJobs have signed an MoU with the Ethiopian Investment Commission to cooperate on digitizing labour grievance reporting, investor OSSCs center service request management and worker identification with in the federal industrial parks. We are greatful for the opportunity to contribute and look forward to merits of this engagement.",
  },
  {
    id: 2,
    img: "/images/blog_post_2.jpg",
    cat: "TECHNOLOGY",
    date: "19 Jan 2022",
    title:
      "HaHuJobs have signed an MoU with the Ethiopian Investment Commission",
  },
  {
    id: 3,
    img: "/images/blog_post_3.jpg",
    cat: "TECHNOLOGY",
    date: "19 Jan 2022",
    title: "ALx Software Engineering training programm.",
  },
  {
    id: 4,
    img: "/images/blog_post_4.jpg",
    cat: "TECHNOLOGY",
    date: "19 Jan 2022",
    title: "ALx African Career Catalyst (ACC)",
  },
  {
    id: 5,
    img: "/images/blog_post_5.jpg",
    cat: "TECHNOLOGY",
    date: "19 Jan 2022",
    title: "ALx Young Entrepreneurs Programme (YEP)",
  },
  {
    id: 6,
    img: "/images/blog_post_6.png",
    cat: "TECHNOLOGY",
    date: "19 Jan 2022",
    title: "HahuJobs have signed a service agreement with SNV",
  },
];

const router = useRoute();

const filteredBlog = ref(Blogs.find((el) => el.id == router.params.blog));
</script>

<template>
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
        <p class="text-base font-medium leading-6 text-primary">Jan 12, 2022</p>
      </div>

      <p
        class="mt-[40px] text-base font-normal leading-[30px] text-HahuGray2 dark:text-HahuGray/4 md:text-lg"
      >
        {{ filteredBlog.p1 }}
      </p>
      <img class="mt-10 md:mt-[90px] rounded-2xl" :src="filteredBlog.img" />
      <!-- <p
        class="mt-[25px] text-base font-light leading-[30px] text-HahuGray1 md:text-lg"
      >
        {{filteredBlog.title}}
      </p> -->
      <p
        class="mt-10 text-base font-normal leading-[30px] text-HahuGray1 dark:text-HahuGray/4 md:mt-[90px] md:text-lg"
      >
        {{filteredBlog.p2}}
      </p>
      <h1
        class="mt-10 text-3xl font-semibold leading-[38px] text-gray-800 dark:text-HahuGray/4 md:mt-[100px]"
      >
        Header 1
      </h1>
      <p
        class="mt-4 text-base font-normal leading-[30px] text-HahuGray1 dark:text-HahuGray/4 md:text-lg"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa.
        Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non
        massa enim vitae duis mattis. Vel in ultricies vel fringilla.
      </p>
      <div class="mt-10 flex md:mt-[78px]">
        <div class="rounded-full border-2 border-primary"></div>
        <div class="ml-[42px] flex flex-col">
          <p
            class="max-w-[723px] text-xl font-medium leading-[32px] text-HahuGray1 dark:text-HahuGray/4 lg:text-2xl"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
            massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
            purus.
          </p>
          <h3
            class="mt-4 text-base font-medium leading-7 text-HahuGray2 dark:text-HahuGray/4 md:text-lg"
          >
            — John Doe, CEO & Founder
          </h3>
        </div>
      </div>
      <p
        class="mt-6 text-base font-normal leading-[30px] text-HahuGray1 dark:text-HahuGray/4 md:text-lg"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa.
        Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non
        massa enim vitae duis mattis. Vel in ultricies vel fringilla.
      </p>
      <img class="mt-10 md:mt-[86px]" src="/images/BlogImg2.png" />
      <h2
        class="mt-4 text-base font-light leading-[30px] text-HahuGray1 dark:text-HahuGray/4 md:text-lg"
      >
        Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.
      </h2>

      <h1
        class="mt-8 text-2xl font-semibold leading-[38px] text-gray-800 dark:text-HahuGray/4 lg:text-3xl"
      >
        Header 1
      </h1>

      <p
        class="mt-4 text-base font-normal leading-[30px] text-HahuGray1 dark:text-HahuGray/4 md:text-base md:text-lg"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa.
        Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non
        massa enim vitae duis mattis. Vel in ultricies vel fringilla.
      </p>

      <p
        class="mt-10 text-base font-normal leading-[30px] text-HahuGray1 dark:text-HahuGray/4 md:text-lg"
      >
        Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas
        sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum
        lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at
        diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus
        vulputate gravida id. Sed quis auctor vulputate hac elementum gravida
        cursus dis.
      </p>

      <ol
        class="mt-10 flex flex-col gap-y-5 text-base font-normal leading-[30px] text-HahuGray1 dark:text-HahuGray/4 md:text-lg"
      >
        <li class="dark:text-HahuGray/4">
          1. Lectus id duis vitae porttitor enim gravida morbi.
        </li>
        <li class="dark:text-HahuGray/4">
          2. Eu turpis posuere semper feugiat volutpat elit, ultrices
          suspendisse. Auctor vel in vitae placerat.
        </li>
        <li class="dark:text-HahuGray/4">
          3. Suspendisse maecenas ac donec scelerisque diam sed est duis purus.
        </li>
      </ol>

      <p
        class="mt-10 text-base font-normal leading-[30px] text-HahuGray1 dark:text-HahuGray/4 md:text-lg"
      >
        Vestibulum placerat magna nulla, sit amet venenatis sapien consequat ut.
        Cras pulvinar, lorem tristique pharetra finibus, dui erat finibus orci,
        a vehicula arcu sapien id metus. Quisque quis lorem a sem porttitor
        feugiat. Etiam quis congue est. Donec fermentum ac libero a pretium.
        Nulla nisl sem, euismod ut eros vitae, egestas scelerisque enim.
        <a href="#" class="text-primary underline dark:text-HahuGray/4"
          >Vivamus id pharetra massa.</a
        >
        Nulla aliquet erat elit, a gravida dui efficitur vel. Sed pulvinar diam
        sed neque ullamcorper semper. Nulla elementum arcu lacus, quis porta
        nisl posuere varius. Quisque tempus libero sed urna posuere hendrerit.
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
</template>

<style scoped></style>
