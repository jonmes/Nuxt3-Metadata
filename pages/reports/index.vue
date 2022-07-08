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

const Reports = [
  {
    id: 1,
    link: "reports-id-reportDetail",
    img: "/images/MonthlyReport.png",
    title: "ባሳለፍነው የፈረንጆች ወር ያወጣናቸው የስራ ማስታወቂያዎች መረጃ ምን ይመስላል?",
    range: "Monthly",
    date: "Jan 12, 2022",
    content:
      " ከ March 01 - 31, 2022 ባለው ግዜ ውስጥ ከ 2,700 በላይ የስራ ማስታወቂያዎችን በHaHuJobs \
            (https://t.me/hahujobs) የተሰበሰቡ ሲሆን ይህም ከ Feb 1 - 31 ከወጡ የስራ ማስታወቂያዎች \
            የ 14.04 % ብልጫን አሳይቷል ። በአማካኝ በቀን ከ88 በላይ የስራ ማስታወቂያዎችን ባሳለፍነው የፈረንጆች \
            ወር ብቻ ወደ ተከታዮቻችን ማድረስም ችለናል ። ካወጣናቸው የስራ ማስታወቂያዎች ውስጥ በቢዝነስ፣ በፋይናንስ እና ኢንጂነሪንግ የስራ ዘርፍ የወጡ የስራ \
            ማስታወቂያዎች አብዛኛውን ቦታ ይይዛሉ። የስራ ልምድን ከሚጠይቁ የስራ ማስታወቂያዎች መካከል ደሞ የ2 ዓመት \
            የስራ ልምድን የሚጠይቁ የስራ ማስታወቂያዎች ትልቁን ድርሻ ይዘው ነበር። መልካም ቀን!!",
  },
  {
    id: 2,
    link: "reports-id-reportDetail",
    img: "/images/YouTube_annual_report.png",
    title: "ባሳለፍነው የፈረንጆች ወር ያወጣናቸው የስራ ማስታወቂያዎች መረጃ ምን ይመስላል?",
    range: "Monthly",
    date: "Jan 12, 2022",
    content:
      " ከ March 01 - 31, 2022 ባለው ግዜ ውስጥ ከ 2,700 በላይ የስራ ማስታወቂያዎችን በHaHuJobs \
            (https://t.me/hahujobs) የተሰበሰቡ ሲሆን ይህም ከ Feb 1 - 31 ከወጡ የስራ ማስታወቂያዎች \
            የ 14.04 % ብልጫን አሳይቷል ። በአማካኝ በቀን ከ88 በላይ የስራ ማስታወቂያዎችን ባሳለፍነው የፈረንጆች \
            ወር ብቻ ወደ ተከታዮቻችን ማድረስም ችለናል ። ካወጣናቸው የስራ ማስታወቂያዎች ውስጥ በቢዝነስ፣ በፋይናንስ እና ኢንጂነሪንግ የስራ ዘርፍ የወጡ የስራ \
            ማስታወቂያዎች አብዛኛውን ቦታ ይይዛሉ። የስራ ልምድን ከሚጠይቁ የስራ ማስታወቂያዎች መካከል ደሞ የ2 ዓመት \
            የስራ ልምድን የሚጠይቁ የስራ ማስታወቂያዎች ትልቁን ድርሻ ይዘው ነበር። መልካም ቀን!!",
  },
  {
    id: 3,
    link: "reports-id-reportDetail",
    img: "/images/HahuYearlyReport.png",
    title: "ባሳለፍነው የፈረንጆች ወር ያወጣናቸው የስራ ማስታወቂያዎች መረጃ ምን ይመስላል?",
    range: "Monthly",
    date: "Jan 12, 2022",
    content:
      " ከ March 01 - 31, 2022 ባለው ግዜ ውስጥ ከ 2,700 በላይ የስራ ማስታወቂያዎችን በHaHuJobs \
            (https://t.me/hahujobs) የተሰበሰቡ ሲሆን ይህም ከ Feb 1 - 31 ከወጡ የስራ ማስታወቂያዎች \
            የ 14.04 % ብልጫን አሳይቷል ። በአማካኝ በቀን ከ88 በላይ የስራ ማስታወቂያዎችን ባሳለፍነው የፈረንጆች \
            ወር ብቻ ወደ ተከታዮቻችን ማድረስም ችለናል ። ካወጣናቸው የስራ ማስታወቂያዎች ውስጥ በቢዝነስ፣ በፋይናንስ እና ኢንጂነሪንግ የስራ ዘርፍ የወጡ የስራ \
            ማስታወቂያዎች አብዛኛውን ቦታ ይይዛሉ። የስራ ልምድን ከሚጠይቁ የስራ ማስታወቂያዎች መካከል ደሞ የ2 ዓመት \
            የስራ ልምድን የሚጠይቁ የስራ ማስታወቂያዎች ትልቁን ድርሻ ይዘው ነበር። መልካም ቀን!!",
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

          <NuxtLink
            v-for="(report, index) in Reports"
            :key="index"
            :to="{ name: `${report.link}`, params: { id: `${report.id}` } }"
            class="mt-10 flex flex-col justify-around gap-x-[67px] self-start rounded-[15px] bg-white px-7 pt-[58px] duration-500 ease-in dark:bg-HahuGray1 lg:mt-[105px] lg:flex-row xl:pl-12 4xl:min-w-[1263px]"
          >
            <img :src="report.img" class="mb-2 object-contain" />
            <div class="flex flex-col">
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
              <p
                class="mt-11 text-xs font-normal leading-[18px] text-HahuGray1 duration-500 ease-in dark:text-HahuGray/4"
              >
                Share
              </p>
              <div class="mt-2 mb-10 flex gap-2">
                <button
                  class="rounded-md border-2 border-gray-200 duration-500 ease-in dark:bg-HahuGray/4"
                >
                  <img
                    class="object-contain px-[13px] py-[9px]"
                    :src="Facebook"
                  />
                </button>
                <button
                  class="rounded-md border-2 border-gray-200 duration-500 ease-in dark:bg-HahuGray/4"
                >
                  <img class="object-contain px-[13px] py-[9px]" :src="Insta" />
                </button>
                <button
                  class="rounded-md border-2 border-gray-200 duration-500 ease-in dark:bg-HahuGray/4"
                >
                  <img
                    class="object-contain px-[13px] py-[9px]"
                    :src="Twitter"
                  />
                </button>
                <button
                  class="rounded-md border-2 border-gray-200 duration-500 ease-in dark:bg-HahuGray/4"
                >
                  <img
                    class="object-contain px-[13px] py-[9px]"
                    :src="Telegram"
                  />
                </button>
              </div>
            </div>
          </NuxtLink>

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
