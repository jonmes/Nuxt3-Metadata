<script setup>
import { ref } from "vue";
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
    img: "/images/report-1.jpg",
    title: "Job by sector from 2019 – 2020 ",
    range: "Monthly",
    date: "Jan 12, 2022",
    content:
      "Starting from November 2018, we began collecting job vacancies from various sources and started delivering them to our subscribers. From June 2019 to January 2020, we posted more than 6,559 vacancies on the HaHuJobs platform. From these vacancies, jobs in the finance sector were 24%, holding the largest percentage of the total jobs, followed by jobs in the business sector with 23.26%.",
  },
  {
    id: "2",
    link: "reports-id-reportDetail",
    img: "/images/YouTube_annual_report.png",
    title: "Jobs by source from 2019 - 2020",
    range: "Annually",
    date: "Jan 12, 2022",
    content:
      "From 2019 to 2020, we have been able to collect job vacancies from 10 different sources, including newspapers, and presented them in a more user-friendly manner on the HaHuJobs platform. Vacancies from the Ethiopian Reporter newspaper posses the highest number with 8,484 job posts, according to the published report.",
  },
  {
    id: "3",
    link: "reports-id-reportDetail",
    img: "/images/YouTube_annual_report.png",
    title: "Total aggregated jobs by sector from 2019 - 2020",
    range: "Annually",
    date: "Jan 12, 2022",
    content:
      "From 2019 to 2020, we have been able to deliver more than 19,000 job vacancies of various sectors to our subscribers on the HaHuJobs platform. Aggregated jobs from Business, Finance and Engineering Sector hold the largest percentage of the various job positions posted on HahuJobs platform.",
  },
  {
    id: "4",
    link: "reports-id-reportDetail",
    img: "/images/YouTube_annual_report.png",
    title: "Total aggregated jobs by sector 2020-2021",
    range: "Annually",
    date: "Jan 12, 2022",
    content:
      "From 2020 to 2021, we have been able to deliver more than 28,000 job vacancies from 16 different sectors to our subscribers on the HaHuJobs platform. Aggregated jobs from Business, Finance and Engineering Sector hold the largest percentage of the various job positions posted on HahuJobs platform.",
  },
  {
    id: "5",
    link: "reports-id-reportDetail",
    img: "/images/YouTube_annual_report.png",
    title: "Jobs by years of experience from 2020 - 2021",
    range: "Annually",
    date: "Jan 12, 2022",
    content:
      "From 2020 to 2021, we have been able to deliver more than 28,000 job vacancies of 16 different sectors to our followers on the HaHuJobs platform. Job vacancies requiring 1-2 years of work experience account for 30% of all job vacancies published, amounting for 7,856 of the vacancies delivered to our subscribers.",
  },
  {
    id: "6",
    link: "reports-id-reportDetail",
    img: "/images/YouTube_annual_report.png",
    title: "Industry Parks service yearly report ",
    range: "Annually",
    date: "Jan 12, 2022",
    content:
      "Under Bridges Ethiopia a Mastercard Foundation program implemented by First Consult support of our operations in 7 industrial parks in partnership with Ethiopian Investment Commission, this report shows a data of supply and demand from Sept 2020 to 2021.",
  },
  {
    id: "7",
    link: "reports-id-reportDetail",
    img: "/images/report-7.jpg",
    title: "Monthly Job Post from April 01-30, 2022",
    range: "Annually",
    date: "Jan 12, 2022",
    content:
      "From April 01 - 30, 2022, more than 1,800 job postings were collected from different sources and delivered through the HaHuJobs platform. On average, we have been able to deliver more than 60 job vacancies per day during the specified month of the year alone. Vacancies from business, finance and engineering are the most frequent job categories posted on our platform. During the specified period, jobs requiring 2 years of work experience held the most data showed in the report.",
  },
  {
    id: "8",
    link: "reports-id-reportDetail",
    img: "/images/report-8.jpg",
    title: "Monthly Job Post from May 01-31, 2022",
    range: "Monthly",
    date: "Jan 12, 2022",
    content:
      "From May 01 - 31, 2022, more than 1,899 job postings were collected from different sources and delivered through the HaHuJobs platform. On average, we have been able to deliver more than 61 job vacancies per day during the specified month of the year alone. Vacancies from business, finance and engineering are the most frequent job categories posted on our platform. During the specified period, jobs requiring 2 years of work experience held the most data showed in the report.",
  },
  {
    id: "9",
    link: "reports-id-reportDetail",
    img: "/images/report-9.jpg",
    title: "Monthly Job Post from June 01-30, 2022",
    range: "Monthly",
    date: "Jan 12, 2022",
    content:
      "From June 01 - 30, 2022, more than 1,922 job postings were collected from different sources and delivered through the HaHuJobs platform. On average, we have been able to deliver more than 64 job vacancies per day during the specified month of the year alone. Vacancies from business, finance and engineering are the most frequent job sectors posted on our platform. During the specified period, jobs requiring 2 years of work experience held the most data showed in the report.",
  },
];

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
</script>
<template>
  <div class="min-h-screen">
    <Head>
      <Title>Reports</Title>
      <Meta
        data-n-head="1"
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <Meta data-n-head="1" property="og:title" content="Reports" />
      <Meta
        data-n-head="1"
        property="og:description"
        content="You can find our weekly, montly and annually reports here"
      />
      <Meta
        data-n-head="1"
        data-hid="description"
        name="description"
        content="You can find our weekly, montly and annually reports here"
      />
      <Meta
        data-n-head="1"
        property="og:url"
        content="https://hahuone.netlify.app/"
      />
      <Meta data-n-head="1" property="og:type" content="website" />
      <Meta
        data-n-head="1"
        property="og:image"
        content="https://hahuone.netlify.app/images/meta_img.png"
      />
      <Meta
        data-n-head="1"
        property="twitter:card"
        content="summary_large_image"
      />
      <Meta
        data-n-head="1"
        property="twitter:domain"
        content="hahuone.netlify.app"
      />
      <Meta property="twitter:url" content="https://hahuone.netlify.app/" />
      <Meta data-n-head="1" property="twitter:title" content="Reports" />
      <Meta
        data-n-head="1"
        property="twitter:description"
        content="You can find our weekly, montly and annually reports here"
      />
      <Meta
        name="twitter:image"
        content="https://hahuone.netlify.app/images/meta_img.png"
      />
      <Meta
        data-n-head="1"
        property="twitter:image"
        content="https://hahuone.netlify.app/images/meta_img.png"
      />
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
        <div class="relative mt-[55px] flex items-center max-w-[1240px]">
          <input
            class="w-full rounded-2xl px-8 py-4 text-xl font-normal leading-6 text-HahuGray2 focus:outline-primary dark:text-HahuGray/4 md:px-16 md:py-7"
            placeholder="Search"
          />
          <SearchIcon
            class="relative right-10 h-6 w-6 cursor-pointer md:right-20"
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
            <img :src="report.img" class="mb-2 object-contain" />
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
                :href="`http://www.facebook.com/sharer/sharer.php?u=https://nuxt-stat-dep--hahuone.netlify.app${$route.fullPath}/${report.id}&t=${report.title}`"
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
                :href="`http://twitter.com/share?text=${report.title}&url=https://nuxt-stat-dep--hahuone.netlify.app${$route.fullPath}/${report.id}&hashtags=HahuJobs,Minab_ICT_Solutions`"
                class="rounded-md border-2 border-gray-200 duration-500 ease-in dark:bg-HahuGray/4"
              >
                <img class="object-contain px-[13px] py-[9px]" :src="Twitter" />
              </a>
              <a
                :href="`https://t.me/share/url?url=https://nuxt-stat-dep--hahuone.netlify.app${$route.fullPath}/${report.id}&text=${report.title}`"
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
