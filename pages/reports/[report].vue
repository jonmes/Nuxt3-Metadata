<script setup>
import {
  ArrowNarrowRightIcon,
  ArrowNarrowLeftIcon,
  ArrowNarrowDownIcon,
  SearchIcon,
  ChevronRightIcon,
} from "@heroicons/vue/solid";
import Facebook from "@/assets/svg/facebookShare.svg?url";
import Insta from "@/assets/svg/instaShare.svg?url";
import Twitter from "@/assets/svg/twitterShare.svg?url";
import Telegram from "@/assets/svg/telegramShare.svg?url";
import YoutubeButton from "@/assets/svg/YoutubeButton.svg?url";
import CopyLink from "@/assets/svg/copyLinkIcon.svg?url";
import { useClipboard, usePermission } from "@vueuse/core";

const router = useRoute();
const crumb = [
  { id: 1, name: "Report", link: "reports", current: false },
  { id: 2, name: "Report Detail", link: "", current: true },
];

const Reports = [
  {
    id: "1",
    img: "https://res.cloudinary.com/dyut9eifz/image/upload/v1657870130/Hahu/report-1_gx0h1y.jpg",
    title: "Job by sector from 2019 – 2020 ",
    range: "Monthly",
    date: "Jan 12, 2022",
    content:
      "Starting from November 2018, we began collecting job vacancies from various sources and started delivering them to our subscribers. From June 2019 to January 2020, we posted more than 6,559 vacancies on the HaHuJobs platform. From these vacancies, jobs in the finance sector were 24%, holding the largest percentage of the total jobs, followed by jobs in the business sector with 23.26%.",
    p1: "",
    videoId: "",
  },
  {
    id: "2",
    img: "/images/YouTube_annual_report.png",
    title: "Jobs by source from September 2019 - September 2020",
    range: "Annually",
    date: "Jan 12, 2022",
    content:
      "From september 2019 to september 2020, we have been able to collect job vacancies from 10 different sources, including newspapers, and presented them in a more user-friendly manner on the HaHuJobs platform. Vacancies from the Ethiopian Reporter newspaper posses the highest number with 8,484 job posts, according to the published report.",
    p1: "",
    videoId: "",
  },
  {
    id: "3",
    img: "/images/YouTube_annual_report.png",
    title: "Jobs by sector from September 2019 - September 2020",
    range: "Annually",
    date: "Jan 12, 2022",
    content:
      "From september 2019 to september 2020, we have been able to deliver more than 19,000 job vacancies of various sectors to our subscribers on the HaHuJobs platform. Aggregated jobs from Business, Finance and Engineering Sector hold the largest percentage of the various job positions posted on HahuJobs platform.",
    p1: "",
    videoId: "",
  },
  {
    id: "4",
    img: "",
    title: "Jobs by sector from September 2020 - September 2021",
    videoId: "yeP33pVuLxE",
    range: "Annually",
    date: "Jan 12, 2022",
    content:
      "From september 2020 to september 2021, we have been able to deliver more than 28,000 job vacancies from 16 different sectors to our subscribers on the HaHuJobs platform. Aggregated jobs from Business, Finance and Engineering Sector hold the largest percentage of the various job positions posted on HahuJobs platform.",
    p1: "",
  },
  {
    id: "5",
    img: "",
    title: "Jobs by years of experience from September 2020 - September 2021",
    videoId: "pmQtD9bBnEI",
    range: "Annually",
    date: "Jan 12, 2022",
    content:
      "From september 2020 to september 2021, we have been able to deliver more than 28,000 job vacancies of 16 different sectors to our followers on the HaHuJobs platform. Job vacancies requiring 1-2 years of work experience account for 30% of all job vacancies published, amounting for 7,856 of the vacancies delivered to our subscribers.",
    p1: "",
  },
  {
    id: "6",
    img: "",
    title: "Supply and demand data in 7 industry parks in the year 2020/21",
    videoId: "YQFx2aCzK0E",
    range: "Annually",
    date: "Jan 12, 2022",
    content:
      "Under Bridges Ethiopia a Mastercard Foundation program implemented by First Consult support of our operations in 7 industrial parks in partnership with Ethiopian Investment Commission, this report shows a data of supply and demand from Sept 2020 to 2021.",
    p1: "",
  },
  {
    id: "7",
    img: "https://res.cloudinary.com/dyut9eifz/image/upload/v1657870133/Hahu/report-7_jsviv4.jpg",
    title: "Monthly Job Post from April 01-30, 2022",
    range: "Annually",
    date: "Jan 12, 2022",
    content:
      "From April 01 - 30, 2022, more than 1,800 job postings were collected from different sources and delivered through the HaHuJobs platform. On average, we have been able to deliver more than 60 job vacancies per day during the specified month of the year alone. Vacancies from business, finance and engineering are the most frequent job categories posted on our platform. During the specified period, jobs requiring 2 years of work experience held the most data showed in the report.",
    p1: "",
    videoId: "",
  },
  {
    id: "8",
    img: "https://res.cloudinary.com/dyut9eifz/image/upload/v1657870133/Hahu/report-8_tdjmyq.jpg",
    title: "Monthly Job Post from May 01-31, 2022",
    range: "Monthly",
    date: "Jan 12, 2022",
    content:
      "From May 01 - 31, 2022, more than 1,899 job postings were collected from different sources and delivered through the HaHuJobs platform. On average, we have been able to deliver more than 61 job vacancies per day during the specified month of the year alone. Vacancies from business, finance and engineering are the most frequent job categories posted on our platform. During the specified period, jobs requiring 2 years of work experience held the most data showed in the report.",
    p1: "",
    videoId: "",
  },
  {
    id: "9",
    img: "https://res.cloudinary.com/dyut9eifz/image/upload/v1657870133/Hahu/report-9_azlr9k.jpg",
    title: "Monthly Job Post from June 01-30, 2022",
    range: "Monthly",
    date: "Jan 12, 2022",
    content:
      "From June 01 - 30, 2022, more than 1,922 job postings were collected from different sources and delivered through the HaHuJobs platform. On average, we have been able to deliver more than 64 job vacancies per day during the specified month of the year alone. Vacancies from business, finance and engineering are the most frequent job sectors posted on our platform. During the specified period, jobs requiring 2 years of work experience held the most data showed in the report.",
    p1: "",
    videoId: "",
  },
];

const filteredReport = ref(Reports.find((el) => el.id == router.params.report));

const copyLink = ref("");
onMounted(() => {
  copyLink.value = window.location.href;
});

const copyLinkFunc = () => {
  let copyText = document.getElementById("myLink");

  copyText.select();

  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);
};
</script>

<template>
  <div class="flex min-h-screen justify-center px-8 md:px-[50px] xl:px-[100px]">

    <Head>
      <Title>{{ filteredReport.title }}</Title>
      <Meta data-n-head="ssr" name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <Meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Hahu" />
      <Meta data-n-head="ssr" data-hid="og:type" property="og:type" content="website" />
      <Meta data-n-head="ssr" data-hid="og:title" property="og:title" :content="filteredReport.title" />
      <Meta data-n-head="ssr" data-hid="og:description" property="og:description" :content="filteredReport.content" />
      <Meta data-n-head="ssr" data-hid="description" :content="filteredReport.content" />
      <Meta data-n-head="ssr" data-hid="og:url" property="og:url" :content="copyLink" />
      <Meta data-n-head="ssr" data-hid="og:image" property="og:image" :content="filteredReport.img" />
      <Meta data-n-head="ssr" data-hid="og:image:secure_url" property="og:image:secure_url"
        :content="filteredReport.img" />
      <Meta data-n-head="ssr" data-hid="og:image:alt" property="og:image:alt" content="Hahu" />
      <Meta data-n-head="ssr" data-hid="twitter:card" property="twitter:card" content="summary_large_image" />
      <Meta data-n-head="ssr" data-hid="twitter:domain" property="twitter:domain" content="hahu io" />
      <Meta data-n-head="ssr" data-hid="twitter:site" name="twitter:site" :content="copyLink" />
      <Meta data-n-head="ssr" data-hid="twitter:url" property="twitter:url" :content="copyLink" />
      <Meta data-n-head="ssr" data-hid="twitter:title" property="twitter:title" :content="filteredReport.title" />
      <Meta data-n-head="ssr" data-hid="twitter:description" property="twitter:description"
        :content="filteredReport.content" />
      <Meta data-n-head="ssr" data-hid="twitter:image" property="twitter:image" :content="filteredReport.img" />

      <div v-if="filteredReport.videoId">
        <Meta property="og:title" :content="filteredReport.title" />
        <Meta property="og:type" content="video.episode" />
        <Meta property="og:description" :content="filteredReport.content" />
        <Meta property="og:image" :content="`https://img.youtube.com/vi/${filteredReport.videoId}/maxresdefault.jpg`" />
        <Meta property="og:video" :content="`https://www.youtube.com/embed/${filteredReport.videoId}`" />
        <Meta property="og:video:width" content="350" />
        <Meta property="og:video:height" content="200" />
        <Meta property="og:video:duration" content="300" />
        <Meta property="og:url" :content="copyLink" />

        <!-- ================= Twitter Video Player works for twitter and telegram ================== -->

        <Meta name="twitter:card" content="player" />
        <Meta name="twitter:title" :content="filteredReport.videoId" />
        <Meta name="twitter:site" content="@hahujobs" />
        <Meta name="twitter:description" :content="filteredReport.content" />
        <Meta name="twitter:player" :content="`https://www.youtube.com/embed/${filteredReport.videoId}`" />
        <Meta name="twitter:player:width" content="360" />
        <Meta name="twitter:player:height" content="200" />
        <Meta name="twitter:image"
          :content="`https://img.youtube.com/vi/${filteredReport.videoId}/maxresdefault.jpg`" />
      </div>
    </Head>

    <section
      class="mt-10 flex max-w-[80vw] flex-col rounded-2xl bg-white px-5 duration-500 ease-in dark:bg-HahuGray1 md:max-w-[70vw] md:px-20">
      <div class="relative mb-10 mt-6 flex flex-wrap items-end font-bold">
        <Contained :crumb="crumb" />
        <div class="ml-auto flex">
          <NuxtLink class="mt-[38px] flex self-end" :to="{ name: 'reports' }">
            <button
              class="group flex items-center justify-end self-end rounded-md bg-primary px-2 py-1 text-base font-medium leading-6 text-white lg:px-5 lg:py-3">
              <ArrowNarrowLeftIcon
                class="mr-[9px] inline-block h-5 w-5 text-white duration-300 group-hover:-translate-x-1" />Back
            </button>
          </NuxtLink>
        </div>
      </div>

      <h2
        class="mt-10 text-xl font-bold leading-[30px] text-HahuGray1 duration-500 ease-in dark:text-HahuGray/4 lg:text-2xl xl:text-3xl 2xl:mt-1">
        {{ filteredReport.title }}
      </h2>
      <div class="mt-9 flex gap-x-7">
        <h4
          class="self-center rounded-full bg-primary-lite px-4 py-[2px] text-xs font-normal leading-[18px] text-HahuGray/4">
          Monthly
        </h4>
        <h4 class="text-base font-light leading-6 text-primary">
          Jan 12, 2022
        </h4>
      </div>
      <p class="mt-[42px] text-base font-normal leading-[30px] duration-500 ease-in dark:text-HahuGray/4 lg:text-lg">
        {{ filteredReport.content }}
      </p>
      <img v-if="filteredReport.img" :src="filteredReport.img" class="mt-[54px] self-start object-contain"
        alt="reportImage" />
      <div class="mt-14 flex justify-center">
        <iframe v-if="filteredReport.videoId"
          :src="`https://www.youtube.com/embed/${filteredReport.videoId}?loop=1&modestbranding=1`" width="640"
          height="360" />
      </div>

      <p class="mt-[68px] text-base font-normal leading-[30px] duration-500 ease-in dark:text-HahuGray/4 lg:text-lg">
        {{ filteredReport.p1 }}
      </p>

      <div class="mt-20 mb-16 flex flex-wrap justify-start gap-2 sm:justify-center">
        <button id="copyLinkButton"
          class="mr-[102px] flex items-center rounded-md border-2 border-gray-200 duration-500 ease-in dark:bg-HahuGray/4"
          @click="copyLinkFunc()">
          <input class="hidden" id="myLink" v-model="copyLink" />
          <img class="object-contain pl-4" :src="CopyLink" alt="copyLink" />
          <span class="py-2 pr-4 pl-[7px]">Copy Link</span>
        </button>
        <div class="flex gap-2">
          <a :href="`http://www.facebook.com/sharer/sharer.php?u=${copyLink}&t=${filteredReport.title}`" target="_blank"
            class="share-popup rounded-md border-2 border-gray-200 duration-500 ease-in dark:bg-HahuGray/4">
            <img class="object-contain px-[13px] py-[9px]" :src="Facebook" alt="facebook" />
          </a>
          <button class="rounded-md border-2 border-gray-200 duration-500 ease-in dark:bg-HahuGray/4">
            <img class="object-contain px-[13px] py-[9px]" :src="Insta" alt="instagram" />
          </button>
          <a :href="`http://twitter.com/share?text=${filteredReport.title}&url=${copyLink}&hashtags=HahuJobs,Minab_ICT_Solutions`"
            class="rounded-md border-2 border-gray-200 duration-500 ease-in dark:bg-HahuGray/4">
            <img class="object-contain px-[13px] py-[9px]" :src="Twitter" alt="twitter" />
          </a>
          <a :href="`https://t.me/share/url?url=${copyLink}&text=${filteredReport.title}`"
            class="rounded-md border-2 border-gray-200 duration-500 ease-in dark:bg-HahuGray/4">
            <img class="object-contain px-[13px] py-[9px]" :src="Telegram" alt="telegram" />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
</style>
