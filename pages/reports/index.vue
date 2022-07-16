<script setup>
import {
  ArrowNarrowRightIcon,
  ArrowNarrowLeftIcon,
  ArrowNarrowDownIcon,
  SearchIcon,
} from "@heroicons/vue/solid/index.js";

import Facebook from "@/assets/svg/facebookShare.svg?url";
import Insta from "@/assets/svg/instaShare.svg?url";
import Twitter from "@/assets/svg/twitterShare.svg?url";
import Telegram from "@/assets/svg/telegramShare.svg?url";
import YoutubeButton from "@/assets/svg/YoutubeButton.svg?url";
import readmoreGreen from "@/assets/svg/readmoreGreen.svg?url";

const Reports = [
  {
    id: "1",
    link: "reports-id-reportDetail",
    img: "https://res.cloudinary.com/dyut9eifz/image/upload/v1657870130/Hahu/report-1_gx0h1y.jpg",
    title: "Jobs by sector from June 2019 - January 2020",
    range: "Monthly",
    date: "Jan 12, 2022",
    content:
      "Starting from November 2018, we began collecting job vacancies from various sources and started delivering them to our subscribers. From June 2019 to January 2020, we posted more than 6,559 vacancies on the HaHuJobs platform. From these vacancies, jobs in the finance sector were 24%, holding the largest percentage of the total jobs, followed by jobs in the business sector with 23.26%.",
  },
  {
    id: "4",
    link: "reports-id-reportDetail",
    videoId: "yeP33pVuLxE",
    title: "Jobs by sector from September 2020 - September 2021",
    range: "Annually",
    date: "Jan 12, 2022",
    content:
      "From September 2020 to September 2021, we have been able to deliver more than 28,000 job vacancies from 16 different sectors to our subscribers on the HaHuJobs platform. Aggregated jobs from Business, Finance and Engineering Sector hold the largest percentage of the various job positions posted on HahuJobs platform.",
  },
  {
    id: "5",
    link: "reports-id-reportDetail",
    videoId: "pmQtD9bBnEI",
    title: "Jobs by years of experience from September 2020 - September 2021",
    range: "Annually",
    date: "Jan 12, 2022",
    content:
      "From 2020 to 2021, we have been able to deliver more than 28,000 job vacancies of 16 different sectors to our followers on the HaHuJobs platform. Job vacancies requiring 1-2 years of work experience account for 30% of all job vacancies published, amounting for 7,856 of the vacancies delivered to our subscribers.",
  },
  {
    id: "6",
    link: "reports-id-reportDetail",
    videoId: "YQFx2aCzK0E",
    title: "Supply and demand data in 7 industry parks in the year 2020/21",
    range: "Annually",
    date: "Jan 12, 2022",
    content:
      "Under Bridges Ethiopia a Mastercard Foundation program implemented by First Consult support of our operations in 7 industrial parks in partnership with Ethiopian Investment Commission, this report shows a data of supply and demand from Sept 2020 to 2021.",
  },
  {
    id: "2",
    link: "reports-id-reportDetail",
    img: "/images/YouTube_annual_report.png",
    title: "Jobs by source from September 2019 - September 2020",
    range: "Annually",
    date: "Jan 12, 2022",
    content:
      "From September 2019 to September 2020, we have been able to collect job vacancies from 10 different sources, including newspapers, and presented them in a more user-friendly manner on the HaHuJobs platform. Vacancies from the Ethiopian Reporter newspaper posses the highest number with 8,484 job posts, according to the published report.",
  },
  {
    id: "3",
    link: "reports-id-reportDetail",
    img: "/images/YouTube_annual_report.png",
    title: "Jobs by sector from September 2019 - September 2020",
    range: "Annually",
    date: "Jan 12, 2022",
    content:
      "From September 2019 to September 2020, we have been able to deliver more than 19,000 job vacancies of various sectors to our subscribers on the HaHuJobs platform. Aggregated jobs from Business, Finance and Engineering Sector hold the largest percentage of the various job positions posted on HahuJobs platform.",
  },
  {
    id: "7",
    link: "reports-id-reportDetail",
    img: "https://res.cloudinary.com/dyut9eifz/image/upload/v1657870133/Hahu/report-7_jsviv4.jpg",
    title: "Monthly Job Post from April 01-30, 2022",
    range: "Annually",
    date: "Jan 12, 2022",
    content:
      "From April 01 - 30, 2022, more than 1,800 job postings were collected from different sources and delivered through the HaHuJobs platform. On average, we have been able to deliver more than 60 job vacancies per day during the specified month of the year alone. Vacancies from business, finance and engineering are the most frequent job categories posted on our platform. During the specified period, jobs requiring 2 years of work experience held the most data showed in the report.",
  },
  {
    id: "8",
    link: "reports-id-reportDetail",
    img: "https://res.cloudinary.com/dyut9eifz/image/upload/v1657870133/Hahu/report-8_tdjmyq.jpg",
    title: "Monthly Job Post from May 01-31, 2022",
    range: "Monthly",
    date: "Jan 12, 2022",
    content:
      "From May 01 - 31, 2022, more than 1,899 job postings were collected from different sources and delivered through the HaHuJobs platform. On average, we have been able to deliver more than 61 job vacancies per day during the specified month of the year alone. Vacancies from business, finance and engineering are the most frequent job categories posted on our platform. During the specified period, jobs requiring 2 years of work experience held the most data showed in the report.",
  },
  {
    id: "9",
    link: "reports-id-reportDetail",
    img: "https://res.cloudinary.com/dyut9eifz/image/upload/v1657870133/Hahu/report-9_azlr9k.jpg",
    title: "Monthly Job Post from June 01-30, 2022",
    range: "Monthly",
    date: "Jan 12, 2022",
    content:
      "From June 01 - 30, 2022, more than 1,922 job postings were collected from different sources and delivered through the HaHuJobs platform. On average, we have been able to deliver more than 64 job vacancies per day during the specified month of the year alone. Vacancies from business, finance and engineering are the most frequent job sectors posted on our platform. During the specified period, jobs requiring 2 years of work experience held the most data showed in the report.",
  },
];

const selectedReport = ref("");
const currentLink = ref("");
const all = ref(true);
const weekly = ref(false);
const monthly = ref(false);
const annually = ref(false);
const filter = (e) => {
  if (e == "all") {
    weekly.value = false;
    monthly.value = false;
    annually.value = false;
    all.value = true;
  } else if (e == "weekly") {
    all.value = false;
    monthly.value = false;
    annually.value = false;
    weekly.value = true;
  } else if (e == "monthly") {
    all.value = false;
    weekly.value = false;
    annually.value = false;
    monthly.value = true;
  } else if (e == "annually") {
    all.value = false;
    weekly.value = false;
    monthly.value = false;
    annually.value = true;
  }
};

onMounted(() => {
  currentLink.value = window.location.href;
});

const forMeta = (i) => {
  selectedReport.value = Reports.value.find((e) => e.id == i);
};
</script>
<template>
  <div class="min-h-screen">
    <Head>
      <Title>Reports</Title>
      <Meta
        data-n-head="ssr"
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <Meta
        data-n-head="ssr"
        data-hid="og:title"
        property="og:title"
        content="Reports"
      />
      <Meta
        data-n-head="ssr"
        data-hid="description"
        property="description"
        content="You can find our weekly, monthly and annually reports here"
      />
      <Meta
        data-n-head="ssr"
        data-hid="og:description"
        property="og:description"
        content="You can find our weekly, monthly and annually reports here"
      />
      <Meta
        data-n-head="ssr"
        data-hid="og:url"
        property="og:url"
        :content="currentLink"
      />
      <Meta data-n-head="ssr" property="og:type" content="website" />
      <Meta
        data-n-head="ssr"
        data-hid="og:image"
        property="og:image"
        content="https://res.cloudinary.com/dyut9eifz/image/upload/v1657870128/Hahu/Hahu_MetaCard_e38h2i.png"
      />
      <Meta
        data-n-head="ssr"
        data-hid="twitter:card"
        property="twitter:card"
        content="summary_large_image"
      />
      <Meta
        data-n-head="ssr"
        data-hid="twitter:domain"
        property="twitter:domain"
        content="hahu.vercel.app"
      />
      <Meta
        data-n-head="ssr"
        data-hid="twitter:url"
        property="twitter:url"
        :content="currentLink"
      />
      <Meta
        data-n-head="ssr"
        data-hid="twitter:title"
        property="twitter:title"
        content="Reports"
      />
      <Meta
        data-n-head="ssr"
        data-hid="twitter:description"
        property="twitter:description"
        content="You can find our weekly, montly and annually reports here"
      />
      <Meta
        data-n-head="ssr"
        data-hid="twitter:image"
        property="twitter:image"
        content="https://res.cloudinary.com/dyut9eifz/image/upload/v1657870128/Hahu/Hahu_MetaCard_e38h2i.png"
      />

      <!-- =================== video player for Facebook ================= -->

      <div v-if="selectedReport.videoId">
        <Meta property="og:title" content="Mux Video" />
        <Meta property="og:type" content="video.episode" />
        <Meta property="og:description" :content="selectedReport.content" />
        <Meta
          property="og:image"
          :content="`https://img.youtube.com/vi/${selectedReport.videoId}/maxresdefault.jpg`"
        />
        <Meta
          property="og:video"
          content="https://www.youtube.com/embed/rRVlWEwmbfQ"
        />
        <Meta property="og:video:width" content="350" />
        <Meta property="og:video:height" content="200" />
        <Meta property="og:video:duration" content="300" />
        <Meta property="og:url" content="http://mux.com" />

        <!-- ================= Twitter Video Player works for twitter and telegram ================== -->

        <Meta name="twitter:card" content="player" />
        <Meta name="twitter:title" :content="selectedReport.title" />
        <Meta name="twitter:site" content="@hahujobs" />
        <Meta name="twitter:description" content="video by @hahujobs" />
        <Meta
          name="twitter:player"
          :content="`https://www.youtube.com/embed/${selectedReport.videoId}`"
        />
        <Meta name="twitter:player:width" content="360" />
        <Meta name="twitter:player:height" content="200" />
        <Meta
          name="twitter:image"
          :content="`https://img.youtube.com/vi/${selectedReport.videoId}/maxresdefault.jpg`"
        />
      </div>
    </Head>
    <!-- <section class="mt-10 px-[230px] flex flex-col"> -->
    <section
      class="mt-10 flex flex-col justify-center px-5 md:px-20 lg:px-20 2xl:px-[230px]"
    >
      <div class="mt-[42px] flex max-w-[1240px] justify-between">
        <h2
          class="text-start mt-5 self-start rounded-full bg-primary-lite px-2 py-1 text-base font-medium leading-[18px] text-white md:text-lg lg:px-8 lg:py-2 lg:text-xl xl:mt-0 xl:text-2xl"
        >
          Reports
        </h2>
        <NuxtLink class="flex" :to="{ name: 'index' }">
          <button
            class="group flex items-center justify-end self-end rounded-md bg-primary px-2 py-1 text-base font-medium leading-6 text-white lg:px-5 lg:py-3"
          >
            <ArrowNarrowLeftIcon
              class="mr-[9px] inline-block h-5 w-5 text-white duration-300 group-hover:-translate-x-1"
            />Back
          </button>
        </NuxtLink>
      </div>
      <div class="flex max-w-[1240px] flex-col">
        <div class="relative mt-24 flex items-center">
          <input
            class="w-full rounded-2xl dark:text-whitePrimary dark:bg-LightDark px-8 py-4 text-xl font-normal leading-6 text-HahuGray2 focus:outline-primary md:px-16 md:py-7"
            placeholder="Search"
          />
          <SearchIcon
            class="relative right-10 h-6 w-6 dark:text-whitePrimary cursor-pointer md:right-20"
          />
        </div>

        <div
          class="mt-[67px] ml-10 flex flex-wrap gap-14 lg:gap-[118px] xl:ml-[196px]"
        >
          <NuxtLink
            href="#"
            class="text-sm font-bold leading-5"
            :class="
              all
                ? 'border-b-2 border-primary text-primary'
                : 'text-gray-400 duration-300 hover:scale-110 hover:text-HahuGray1'
            "
            @click="filter('all')"
          >
            All
          </NuxtLink>
          <NuxtLink
            href="#"
            class="text-sm font-bold leading-5"
            :class="
              weekly
                ? 'border-b-2 border-primary text-primary'
                : 'text-gray-400 duration-300 hover:scale-110 hover:text-HahuGray1'
            "
            @click="filter('weekly')"
            >Weekly</NuxtLink
          >
          <NuxtLink
            href="#"
            class="text-sm font-bold leading-5"
            :class="
              monthly
                ? 'border-b-2 border-primary text-primary'
                : 'text-gray-400 duration-300 hover:scale-110 hover:text-HahuGray1'
            "
            @click="filter('monthly')"
            >Monthly</NuxtLink
          >
          <NuxtLink
            href="#"
            class="text-sm font-bold leading-5"
            :class="
              annually
                ? 'border-b-2 border-primary text-primary'
                : 'text-gray-400 duration-300 hover:scale-110 hover:text-HahuGray1'
            "
            @click="filter('annually')"
            >Annually</NuxtLink
          >
        </div>

        <div
          v-for="(report, index) in Reports"
          :key="index"
          class="mt-10 flex flex-col justify-around gap-x-[67px] self-start rounded-[15px] bg-white px-7 pt-[58px] duration-500 ease-in dark:bg-HahuGray1 lg:mt-[105px] lg:flex-row xl:pl-12 4xl:min-w-[1263px]"
        >
          <NuxtLink :to="'/reports/' + report.id" class="flex flex-1 w-4/12">
            <img
              v-if="report.img"
              :src="report.img"
              class="mb-2 object-contain"
            />
            <iframe
              v-if="report.videoId"
              :src="`https://www.youtube.com/embed/${report.videoId}?loop=1&modestbranding=1`"
              width="640"
              height="360"
            />
          </NuxtLink>
          <div class="flex flex-1 flex-col">
            <h1
              class="text-lg font-bold leading-[30px] text-HahuGray1 duration-500 ease-in dark:text-HahuGray/4"
            >
              {{ report.title }}
            </h1>
            <div class="mt-11 flex gap-x-7">
              <h4
                class="self-center rounded-full bg-primary-lite px-4 py-[2px] text-xs font-normal leading-[18px] duration-500 ease-in dark:text-HahuGray/4"
              >
                {{ report.range }}
              </h4>
              <h4 class="text-base font-light leading-6 text-primary">
                {{ report.date }}
              </h4>
            </div>
            <p
              class="mt-7 max-w-[590px] duration-500 ease-in dark:text-HahuGray/4 lg:pr-2 xl:pr-[89px]"
            >
              {{ report.content }}
            </p>

            <NuxtLink
              :to="'/reports/' + report.id"
              class="rounded-md px-2 py-1 hover:bg-primary-lite space-x-3 mt-4 self-start flex justify-between border-2 border-primary duration-200 ease-in dark:bg-HahuGray/4"
            >
              <span>Read More</span> <img :src="readmoreGreen" />
            </NuxtLink>

            <p
              class="mt-11 text-xs font-normal leading-[18px] text-HahuGray1 duration-500 ease-in dark:text-HahuGray/4"
            >
              Share
            </p>
            <div class="mt-2 mb-10 flex gap-2">
              <a
                :href="`http://www.facebook.com/sharer/sharer.php?u=${currentLink}/${report.id}&t=${report.title}`"
                @click="forMeta(report.id)"
                target="_blank"
                class="share-popup rounded-md border-2 border-gray-200 duration-500 ease-in dark:bg-HahuGray/4"
              >
                <img
                  class="object-contain px-[13px] py-[9px]"
                  :src="Facebook"
                />
              </a>
              <button
                class="rounded-md border-2 border-gray-200 duration-500 ease-in dark:bg-HahuGray/4"
              >
                <img class="object-contain px-[13px] py-[9px]" :src="Insta" />
              </button>
              <a
                @click="forMeta(report.id)"
                :href="`http://twitter.com/share?text=${report.title}&url=${currentLink}/${report.id}&hashtags=HahuJobs,Minab_ICT_Solutions`"
                class="rounded-md border-2 border-gray-200 duration-500 ease-in dark:bg-HahuGray/4"
              >
                <img class="object-contain px-[13px] py-[9px]" :src="Twitter" />
              </a>
              <a
                @click="forMeta(report.id)"
                :href="`https://t.me/share/url?url=${currentLink}/${report.id}&text=${report.title}`"
                class="rounded-md border-2 border-gray-200 duration-500 ease-in dark:bg-HahuGray/4"
              >
                <img
                  class="object-contain px-[13px] py-[9px]"
                  :src="Telegram"
                />
              </a>
            </div>
          </div>
        </div>

        <button
          class="group mt-[78px] flex items-center self-center rounded-md bg-primary py-2 pl-4 pr-5 text-sm font-medium leading-5 text-HahuGray/4"
        >
          <span class="pr-3">View more</span
          ><ArrowNarrowDownIcon
            class="h-4 w-4 fill-white duration-300 ease-out group-hover:translate-y-1"
          />
        </button>
      </div>
    </section>
  </div>
</template>

<style>
#reportSearch {
  padding-top: "28px";
  padding-bottom: "28px";
  padding-left: "66px";
}
</style>
