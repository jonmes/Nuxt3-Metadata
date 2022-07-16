<script setup>
import Partner1 from "@/assets/svg/projectPartner1.svg?url";
import Partner2 from "@/assets/svg/projectPartner2.svg?url";
import Partner3 from "@/assets/svg/projectPartner3.svg?url";
import Partner4 from "@/assets/svg/projectPartner4.svg?url";
import {
  ArrowNarrowRightIcon,
  ArrowNarrowLeftIcon,
} from "@heroicons/vue/solid/index.js";

const partners = [Partner1, Partner2, Partner3, Partner4];

const crumb = [
  { id: 1, name: "Projects", link: "index", current: false },
  { id: 2, name: "Project Detail", link: "index", current: true },
];

const projects = [
  {
    id: "1",
    title: "HIPSTER Labor Management Database",
    p1: "In June 2018 HaHuJobs was contracted by Enterprise Partners to automate components of the Hawassa Industrial Park Sourcing and Training Employees in the Region project. The program worked to change the way that markets work for the poor so that poor people were included in the benefits of growth and economic development as consumers, employees and investors. In each sector and sub-sector, Enterprise Partners identified key constraints and developed socially and environmentally sensitive strategies to transform markets by working with industry actors to introduce better business models. In this particular engagement with HaHuJobs the project aimed to streamline the process of sourcing, screening, recruiting and allocation of jobseekers to labor demands from companies in Hawassa industrial park. HaHuJobs was contracted to digitize the process of capturing details of sourced and screened jobseekers, capture details of their grading, digitally allocate them and follow their recruitment status.",
    p2: "HaHuJobs offered a labor management platform initially to the Hawassa Industrial Park which kept a unique record of jobseekers looking for employment in the industrial park, this registration identified their relevant details like age, education background, origination details, and given name. This later grew to two more parks, Kobolcha and Mekelle. The process starts with biometric based registration of candidates who will then be asked to undergo a set of dexterity tests to identify and set their grading labels. Graded jobseekers will then be identified using their finger prints for attendance and allocated to a company with system submitted demands. After allocation digital details of these candidates will be presented to employing companies through the platform on which they provide their recruitment status. All the above operation procedures generate data relevant to stakeholders and offered through digital summary dashboards. This process aided the definition of HaHuJobs’s job matching model as it offered scale as well as a controlled environment to test system functions. Also offered various inputs to restructure our industry park platform from consultancy to a service model which heavily inspired our HaHuJobs Industry Park services.",
    img: "/images/project1.png",
  },
  {
    id: "2",
    title: "World bank HIPCIE research project",
    p1: "The Hawassa Industrial Park Community Impact Evaluation Project is a large-scale, rigorous evaluation of the impact that the government’s flagship industrial park in Hawassa has on workers, their rural origin households, and their broader origin communities. The project team is led by two academic principal investigators and implemented in cooperation with the World Bank Group. The project combines primary survey data across communities in Ethiopia’s Southern Nations, Nationalities and People’s (SNNP) Region with administrative data from the Hawassa Industrial Park Sourcing and Training Employees in the Region (HIPSTER) scheme that sources and hires workers from across SNNPR.",
    p2: "The administrative data was managed by HaHuJobs under contract with Enterprise partners signed in June of 2018 with the oversight of the Ethiopian Investment commission. In this collaboration the HaHuJobs team provided digital tracking tool to trace employment trend of the research subjects and provided a comprehensive log on their movement. This data was used to conduct impact surveys and trace workers employment logs as a component to the study.",
    img: "/images/project2.png",
  },
  {
    id: "3",
    title: "Young Africa works BRIDGES program",
    p1: "Funded by the Master Card Foundation and implemented by First Consult the Employment Linkage Bridge works on putting in place a worker recruitment and retention system within ten industrial parks. Interventions within this BRIDGE are focused on enhancing the efficiency of the worker recruitment process by addressing quantitative and information mismatch issues in the recruitment process. Additionally, this BRIDGE targets retention within factories through the development of soft skill training programs and curriculum aimed at easing the transition of workers into the industrial workforce.",
    p2: "To this aim HaHuJobs was contracted by the program to provide our industrial park services that capture a unique record of Jobseekers and build their career profiles via a predefine data structure. These registered individuals will be allocated to labor demands from the industrial park factories details of which are also submitted through the cloud service. This process generates a significant amount of data regarding the labor flow of a given park. This BRIDGE project contracted our services to both automate and standardize the labour supply of 8 industrial parks, namely Hawassa, Kombolcha, Adama, Bahirdar, Mekelle, Diredawa, Debrebirhan and Boble Lemi annualy since 2021 under the oversight of the Ethiopian Investment commission.",
    img: "/images/project3.png",
  },
  {
    id: "4",
    title: "Jobs protection Facility",
    p1: "As the implementer of the jobs protection facility program, in November 2021 First consult contracted HaHuJobs to build the fund application, review and reporting platform. The platform enables investors with in the industrial park to digitally apply for the support trough digital forms with clear guidelines. All successfully submitted applications were offered to officers for review for qualification. The platform also offered a reporting ",
    p2: "The Jobs protection facility is a COVID 19 impact response landmark fund set-up between the UK, US and Germany with the support of the Government of Ethiopia (JCC & EIC) could save thousands of jobs in Ethiopia’s textile and garments industry, while helping to support the country’s economic recovery from COVID-19. With $6.5 million invested at launch, the partnership aims to help safeguard a critical industry and protect the livelihoods of those working within it.",
    p3: "Through the fund, textile factories in Ethiopia’s industrial parks can apply for wage subsidies – similar to the furlough schemes operating in many countries including the UK and Germany – and incentives to reward businesses that are able to adapt in response to COVID-19. The funding announced today will kickstart the Facility and the partnership may further expand its reach through additional support in the coming months.",
    img: "/images/project4A.png",
    img2: "/images/project4B.png",
  },
  {
    id: "5",
    title: "The NRP",
    p1: "HaHuJobs was contracted by Mercy Corps Ethiopia to build the National Recruitment Platform for the government of Ethiopia, The platform featured various function but was mainly utilized as a recruiting tool to deploy Ethiopian professionals to overseas job orders. The Ethiopian National Recruitment Platform, launched in 2019 by the government aims at creating a regular, safe and orderly labor mobility program, targeting semi-skilled and skilled Ethiopian Job seekers while maintaining current temporary migration of low skilled workers abroad. In a sector where there is a clear surplus of job seekers the government has planned to redouble recruitment and placement of workers in host countries with expressed interest in migrant labor.",
    p2: "The platform is developed for the Ethiopian National Employment program under the Jobs Creation Commission. It is designed to registers, builds profile, provides free screening, keep track of all training, testing & certification of overseas jobseekers while digitalizing the documentation process for legal and safe ways of working abroad. In doing so the platform will also be able to map out the national jobseeker landscape and provide a data driven job matching public services for both local and foreign needs.",
    img: "/images/project5.png",
  },
  {
    id: "6",
    title: "MOFA BLA Tool",
    p1: "In regards to tragedies and abuses faced by Ethiopian migrant workers in the Middle East, labor migration and the protection of Ethiopia migrant workers in destination countries has become one of the major political discourses for the Ethiopian Government. To respond to this challenge, the government of Ethiopia have taken multiple initiatives in improving labor migration governance, to state a few, put in place new legal instruments, institutional restructuring, established Ethiopian overseas employment registration platform, capacity building of all relevant stakeholders and signing of Bilateral labor agreement or Memorandum of Understanding with destination countries. Currently the Ethiopian Government have signed BLA/MoUs with Jordan, KSA, UAE and Qatar as a major instrument for the protection of migrant workers. However, there is no mechanism to monitor the implementation of these BLAs/MoUs.",
    p2: "To support the government in improving labour migration governance and protect migrant workers, the ILO is implemented a project entitled “Improved labour migration governance to protect migrant workers and combat irregular migration in Ethiopia” funded by United Kingdom’s Foreign, Commonwealth and Development Office (FCDO). Through this project the ILO is supporting the Government of Ethiopia (GoE) and its partners to address irregular migration and protection risks faced by migrants in countries of destination by working on legal and regulatory frameworks for fair recruitment, bilateral labour agreement, strengthening and building the capacity of Federal, regional, zonal and woreda (district) government offices as well as Ethiopian foreign missions and migrant communities.",
    p3: "As par of this support HaHuJobs was contracted by ILO Ethiopia  to build a platform that allowed both formally and informally migrated workers to have their data captured and featuring their biometric details as an identifier so that they can submit request both in person and online. The platform automates various services offered by the Ministry of foreign affairs of Ethiopia and was developed und er the oversight of the ministry.",
    img: "/images/placeholder-image.jpg",
    img2: "/images/placeholder-image.jpg",
  },
  {
    id: "7",
    title: "EMDMS upgrade",
    p1: "This project was contracted to HaHuJobs by ILO Ethiopia as an extension of the MoFA BLA enforcement tool to provide a holistic citizen service to both Ethiopian foreign employment seekers and deployed employees. Hence why the objectives of this project were to upgrade the former Ethiopian Migrant Data Management System (EMDMS) and integrate it with the National Recruitment Platform (NRP) and MoFAs electronic monitoring system for following up the implementation of BLA and MoU. The Ethiopian Migrant Worker management system features digitization citizen cervices offered by the Ministry of Labor and Skills. The platform servers all foreign employment agencies, the ministry of labor and skills, and the citizens of Ethiopia.",
    p2: "The platform digitized the process of foreign employment agencies, licensing, job order and contract approval services offered by the ministry of labor and skills. It also automated almost all of the back-office processing of foreign employment services offered by the federal government of Ethiopia. HaHuJobs developed and delivered the required trainings for all the stake holders of this project.",
    img: "/images/placeholder-image.jpg",
  },
  {
    id: "8",
    title: "SNV RAYEE wage employment linkage",
    p1: "The RAYEE program is an SNV implementation that aims to create meaningful employment in agriculture and agri-business for 240,000 young people (of which 70% are women) until the end of 2024. RAYEE will target five geographical areas: the SNNPR, Oromia, Amhara and Tigray regions as well as the Dire Dawa city. The project is funded by the Mastercard Foundation as part of its Young Africa Works strategy.",
    p2: "As part of this implementation HaHuJobs was contracted to offer its industrial park services to the integrated Agro idustrial parks in Bure, Yirgalem and Bulbual. The service captures details of jobseekers through unique biometric identification and allocates them to labor demand of the agro industrial parks using HaHuJobs cloud LMIS services.",
    img: "/images/placeholder-image.jpg",
  },
  {
    id: "9",
    title: "oxford university OSS",
    p1: "A Research Team led by Dr. Morgan Hardy (New York University Abu Dhabi), Dr. Christian Johannes Meyer (University of Oxford), and Dr. Marc Witte (IZA Institute of Labor Economics), approached HaHuJobs with a cooperation request to share and enhance vacancy as well as jobseeker data for an academic study of the labour market of Addis Ababa, Ethiopia. The study titled “Building Effective Employment Services Through Digital Technologies”",
    p2: "The collaboration was framed via an MoU between the research team and HaHuJobs and the collaboration helped the enhance HaHuJobs capacity to analyze vacancies to improve matching indexes. In return HaHuJobs capacitated the research team with a technology tool to keep track of vacancies posted from various sources on HaHuJobs core services.",
    img: "/images/placeholder-image.jpg",
  },
];

const router = useRoute();

const filteredPro = ref(projects.find((el) => el.id == router.params.project));
</script>
<template>
  <div class="min-h-screen px-8 md:px-[50px] xl:px-[100px]">
    <Head>
      <Title>{{ filteredPro.title }}</Title>
      <Meta
        data-n-head="1"
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <Meta data-n-head="1" property="og:title" :content="filteredPro.title" />
      <Meta
        data-n-head="1"
        property="og:description"
        :content="filteredPro.p1"
      />
      <Meta
        data-n-head="1"
        data-hid="description"
        name="description"
        :content="filteredPro.p1"
      />
      <Meta
        data-n-head="1"
        property="og:url"
        content="https://nuxt-stat-dep--hahuone.netlify.app/"
      />
      <Meta data-n-head="1" property="og:type" content="website" />
      <Meta
        data-n-head="1"
        property="og:image"
        :content="
          'https://nuxt-stat-dep--hahuone.netlify.app' + filteredPro.img
        "
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
      <Meta
        property="twitter:url"
        content="https://nuxt-stat-dep--hahuone.netlify.app/"
      />
      <Meta
        data-n-head="1"
        property="twitter:title"
        :content="filteredPro.title"
      />
      <Meta
        data-n-head="1"
        property="twitter:description"
        :content="filteredPro.p1"
      />
      <Meta
        name="twitter:image"
        :content="
          'https://nuxt-stat-dep--hahuone.netlify.app' + filteredPro.img
        "
      />
      <Meta
        data-n-head="1"
        property="twitter:image"
        :content="
          'https://nuxt-stat-dep--hahuone.netlify.app' + filteredPro.img
        "
      />
    </Head>
    <section
      class="mt-10 flex flex-col rounded-[15px] bg-white px-5 duration-500 ease-in dark:bg-HahuGray1 sm:px-10 md:px-12 lg:px-24 3xl:px-24"
    >
      <div class="relative mb-10 mt-10 sm:mt-0 flex items-end font-bold">
        <Contained :crumb="crumb" />
        <div class="ml-auto flex">
          <NuxtLink class="mt-10 flex self-end" :to="{ name: 'index' }">
            <button
              class="hidden group sm:flex items-center justify-end self-end rounded-md bg-primary px-2 py-1 text-base font-medium leading-6 text-white lg:px-5 lg:py-3"
            >
              <ArrowNarrowLeftIcon
                class="mr-[9px] inline-block h-5 w-5 text-white duration-300 group-hover:-translate-x-2"
              />Back
            </button>
          </NuxtLink>
        </div>
      </div>

      <h1
        class="mt-5 text-xl font-black leading-6 text-primary lg:mt-[78px] lg:text-2xl xl:text-3xl"
      >
        {{ filteredPro.title }}
      </h1>
      <p
        class="mt-[35px] text-base font-normal leading-[30px] duration-500 ease-in dark:text-HahuGray/4 md:text-lg"
      >
        {{ filteredPro.p1 }}
      </p>
      <img class="mt-[54px] rounded-lg" :src="filteredPro.img" />

      <p
        class="mt-5 text-base font-light leading-9 duration-500 ease-in dark:text-HahuGray/4 md:text-lg"
      >
        {{ filteredPro.title }}
      </p>
      <p
        class="mt-6 md:mt-14 text-base font-normal leading-[30px] duration-500 ease-in dark:text-HahuGray/4 md:text-lg"
      >
        {{ filteredPro.p2 }}
      </p>
      <img
        class="mt-[54px] rounded-lg"
        v-if="filteredPro.img2"
        :src="filteredPro.img2"
      />
      <p
        class="mt-14 text-base font-normal leading-[30px] duration-500 ease-in dark:text-HahuGray/4 md:text-lg"
        v-if="filteredPro.p3"
      >
        {{ filteredPro.p3 }}
      </p>

      <div class="mt-20 flex flex-col md:flex-row">
        <div class="mr-6 md:mr-10 lg:mr-24 flex flex-col">
          <h2 class="text-xl font-black leading-[30px] dark:text-white">
            Client
          </h2>
          <div>
            <img class="mt-10" src="/images/projectC1.png" />
          </div>
        </div>
        <div class="mt-16 rounded-full border-[3px] border-HahuGray3" />
        <div class="mt-10 md:mt-0 ml-6 md:ml-10 lg:ml-28 flex flex-col">
          <h2 class="text-xl font-black leading-[30px] dark:text-white">
            Partners
          </h2>
          <div
            class="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-10 sm:gap-x-16 sm:gap-y-10"
          >
            <img v-for="img in partners" class="object-contain" :src="img" />
          </div>
        </div>
      </div>

      <div class="mb-[78px] mt-20 flex flex-col">
        <h2 class="text-xl font-black leading-[30px] dark:text-white">Team</h2>
        <div
          class="mt-12 flex flex-col gap-y-10 gap-x-20 md:flex-row md:gap-y-10"
        >
          <div class="flex flex-col items-center">
            <img class="object-contain" src="/images/Ellipse1.png" />
            <h2
              class="mt-[15px] text-xl font-normal leading-[30px] duration-500 ease-in dark:text-HahuGray/4"
            >
              Teklawol Belayneh
            </h2>
            <h2 class="text-base font-normal leading-[30px] text-primary">
              Backend Developer
            </h2>
          </div>
          <div class="flex flex-col items-center">
            <img class="object-contain" src="/images/Ellipse2.png" />
            <h2
              class="mt-[15px] text-xl font-normal leading-[30px] duration-500 ease-in dark:text-HahuGray/4"
            >
              Jane Doe
            </h2>
            <h2 class="text-base font-normal leading-[30px] text-primary">
              Project Manager
            </h2>
          </div>
          <div class="flex flex-col items-center">
            <img class="object-contain" src="/images/Ellipse3.png" />
            <h2
              class="mt-[15px] text-xl font-normal leading-[30px] duration-500 ease-in dark:text-HahuGray/4"
            >
              Jane Doe
            </h2>
            <h2 class="text-base font-normal leading-[30px] text-primary">
              Graphics Designer
            </h2>
          </div>
          <div class="flex flex-col items-center">
            <img class="object-contain" src="/images/Ellipse4.png" />

            <h2
              class="mt-[15px] text-xl font-normal leading-[30px] duration-500 ease-in dark:text-HahuGray/4"
            >
              Jane Doe
            </h2>
            <h2 class="text-base font-normal leading-[30px] text-primary">
              Frontend Developer
            </h2>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped></style>
