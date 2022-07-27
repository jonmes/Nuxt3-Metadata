<script setup>
const cardSlider = [
  {
    thumbnail:
      "/images/projects/Hipster-01.png",
    // One
    title: "HIPSTER Labor Management Database",
    text: "In June 2018 HaHuJobs was contracted by Enterprise Partners to automate components of the Hawassa Industrial Park Sourcing and Training Employees in the Region project. The program worked to change the way that markets work for the poor so that poor people were included in the benefits of growth and economic development as consumers, employees and investors. ",
    partner: [
      "/images/MLs_Logo_color.png",
      "/images/ILO_color.png",
      "/images/MOFA_color.png",
      "/images/mc_color.png",
    ],
    client: ["/images/MLs_Logo_color.png"],
    id: "1",
  },
  {
    thumbnail:
      "/images/projects/World bank-01.png",
    // Two
    title: "World bank HIPCIE research project",
    text: "The Hawassa Industrial Park Community Impact Evaluation Project is a large-scale, rigorous evaluation of the impact that the government’s flagship industrial park in Hawassa has on workers, their rural origin households, and their broader origin communities. The project team is led by two academic principal investigators and implemented in cooperation with the World Bank Group. ",
    partner: [
      "/images/MLs_Logo_color.png",
      "/images/ILO_color.png",
      "/images/MOFA_color.png",
      "/images/mc_color.png",
    ],
    client: ["/images/MLs_Logo_color.png"],
    id: "2",
  },
  {
    thumbnail:
      "https://res.cloudinary.com/dyut9eifz/image/upload/v1657870131/Hahu/project3_bwre35.png",
    // Three
    title: "Young Africa works BRIDGES program",
    text: "Funded by the Master Card Foundation and implemented by First Consult the Employment Linkage Bridge works on putting in place a worker recruitment and retention system within ten industrial parks. Interventions within this BRIDGE are focused on enhancing the efficiency of the worker recruitment process by addressing quantitative and information mismatch issues in the recruitment... ",
    partner: [
      "/images/MLs_Logo_color.png",
      "/images/ILO_color.png",
      "/images/MOFA_color.png",
      "/images/mc_color.png",
    ],
    client: ["/images/MLs_Logo_color.png"],
    id: "3",
  },
  {
    thumbnail:
      "https://res.cloudinary.com/dyut9eifz/image/upload/v1657870165/Hahu/project4A_f9i8ze.png",
    // Four
    title: "Jobs protection Facility",
    text: "As the implementer of the jobs protection facility program, in November 2021 First consult contracted HaHuJobs to build the fund application, review and reporting platform. The platform enables investors with in the industrial park to digitally apply for the support trough digital forms with clear guidelines. All successfully submitted applications were offered to officers for review for qualification. ",
    partner: [
      "/images/MLs_Logo_color.png",
      "/images/ILO_color.png",
      "/images/MOFA_color.png",
      "/images/mc_color.png",
    ],
    client: ["/images/MLs_Logo_color.png"],
    id: "4",
  },
  {
    thumbnail:
      "https://res.cloudinary.com/dyut9eifz/image/upload/v1657870130/Hahu/project5_cyrreu.png",
    // Five
    title: "The NRP",
    text: "HaHuJobs was contracted by Mercy Corps Ethiopia to build the National Recruitment Platform for the government of Ethiopia, The platform featured various function but was mainly utilized as a recruiting tool to deploy Ethiopian professionals to overseas job orders. The Ethiopian National Recruitment Platform, launched in 2019 by the government aims at creating a regular, safe ...",
    partner: [
      "/images/MLs_Logo_color.png",
      "/images/ILO_color.png",
      "/images/MOFA_color.png",
      "/images/mc_color.png",
    ],
    client: ["/images/MLs_Logo_color.png"],
    id: "5",
  },
  {
    thumbnail:
      "/images/projects/mofa-01.png",
    // Six
    title: "MOFA BLA Tool",
    text: "In regards to tragedies and abuses faced by Ethiopian migrant workers in the Middle East, labor migration and the protection of Ethiopia migrant workers in destination countries has become one of the major political discourses for the Ethiopian Government. To respond to this challenge, the government of Ethiopia have taken multiple initiatives in improving labor migration ...",
    partner: [
      "/images/MLs_Logo_color.png",
      "/images/ILO_color.png",
      "/images/MOFA_color.png",
      "/images/mc_color.png",
    ],
    client: ["/images/MLs_Logo_color.png"],
    id: "6",
  },
  {
    thumbnail:
      "/images/projects/Emdms-01.png",
    // Seven
    title: "EMDMS upgrade",
    text: "This project was contracted to HaHuJobs by ILO Ethiopia as an extension of the MoFA BLA enforcement tool to provide a holistic citizen service to both Ethiopian foreign employment seekers and deployed employees. Hence why the objectives of this project were to upgrade the former Ethiopian Migrant Data Management System (EMDMS) and integrate it with ...",
    partner: [
      "/images/MLs_Logo_color.png",
      "/images/ILO_color.png",
      "/images/MOFA_color.png",
      "/images/mc_color.png",
    ],
    client: ["/images/MLs_Logo_color.png"],
    id: "7",
  },
  {
    thumbnail:
      "/images/projects/SNV-01-01-01.png",
    // Eight
    title: "SNV RAYEE wage employment linkage",
    text: "The RAYEE program is an SNV implementation that aims to create meaningful employment in agriculture and agri-business for 240,000 young people (of which 70% are women) until the end of 2024. RAYEE will target five geographical areas: the SNNPR, Oromia, Amhara and Tigray regions as well as the Dire Dawa city. The project is funded by ...",
    partner: [
      "/images/MLs_Logo_color.png",
      "/images/ILO_color.png",
      "/images/MOFA_color.png",
      "/images/mc_color.png",
    ],
    client: ["/images/MLs_Logo_color.png"],
    id: "8",
  },
  {
    thumbnail:
      "https://res.cloudinary.com/dyut9eifz/image/upload/v1657953195/Hahu/placeholder-image_md4eym.jpg",
    // Nine
    title: "oxford university OSS",
    text: "A Research Team led by Dr. Morgan Hardy (New York University Abu Dhabi), Dr. Christian Johannes Meyer (University of Oxford), and Dr. Marc Witte (IZA Institute of Labor Economics), approached HaHuJobs with a cooperation request to share and enhance vacancy as well as jobseeker data for an academic study of the labour market of Addis Ababa, Ethiopia. ",
    partner: [
      "/images/MLs_Logo_color.png",
      "/images/ILO_color.png",
      "/images/MOFA_color.png",
      "/images/mc_color.png",
    ],
    client: ["/images/MLs_Logo_color.png"],
    id: "9",
  },
];

const target = ref(null);
const observer = shallowRef();

onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach(
      (entry) => {
        entry.target.classList.toggle(
          "lg:[&[show=true]]:opacity-100",
          entry.isIntersecting
        );
        entry.target.classList.toggle(
          "lg:[&[show=true]]:translate-y-0",
          entry.isIntersecting
        );
        entry.target.classList.toggle(
          "lg:[&[show=true]]:translate-x-0",
          entry.isIntersecting
        );
        if (entry.isIntersecting) {
          observer.value.unobserve(entry.target);
          return entry.target;
        }
      },
      {
        threshold: 0.5,
      }
    );
  });
  target.value.forEach((card) => {
    observer.value.observe(card);
  });
});

onBeforeUnmount(() => {
  observer.value.disconnect();
});
</script>

<template>
  <section class="flex flex-col" id="projects">
    <div v-for="i in 1" class="flex flex-col">
      <h1 show="true" ref="target"
        class="mt-10 lg:opacity-0 lg:translate-y-10 duration-1000 self-center text-lg font-medium leading-5 dark:text-white md:mt-24">
        Projects
      </h1>
      <h2 show="true" ref="target"
        class="mt-[34px] lg:opacity-0 lg:translate-y-10 duration-1000 self-center rounded-[36px] bg-primary-lite px-3 py-2 text-center text-base font-black leading-5 text-white xs:px-8 xs:text-lg lg:px-5 3xl:px-8 3xl:py-4 lg:py-2 lg:text-2xl 3xl:text-3xl lg:leading-[18px]">
        Our Labor market related projects
      </h2>

      <div
        class="mt-10 flex flex-col justify-center space-y-10 space-x-0 lg:flex-row lg:space-y-0 lg:space-x-36 xl:space-x-[16.5rem]">
        <div show="true" ref="target" class="lg:opacity-0 lg:translate-y-10 duration-1000 flex flex-col">
          <h2 class="leading-16 self-center text-5xl font-bold text-primary">
            27
          </h2>
          <h2 class="self-center text-xl font-medium leading-[30px] text-HahuGray1 dark:text-white">
            Projects
          </h2>
          <hr class="mt-4 border-b-2 bg-primary border-primary w-[167px] self-center rounded-full" />
        </div>

        <div show="true" ref="target" class="lg:opacity-0 lg:translate-y-10 duration-1000 delay-150 flex flex-col">
          <h2 class="self-center text-5xl font-bold leading-[60px] text-primary">
            19
          </h2>
          <h2 class="self-center text-xl font-medium leading-[30px] text-HahuGray1 dark:text-white">
            Stakeholders
          </h2>
          <hr class="mt-4 border-b-2 border-primary w-[167px] self-center rounded-full bg-primary" />
        </div>

        <div show="true" ref="target" class="lg:opacity-0 lg:translate-y-10 duration-1000 delay-300 flex flex-col">
          <h2 class="self-center text-5xl font-bold leading-[60px] text-primary">
            6<span class="text-3xl">mon</span>
          </h2>
          <h2 class="self-center text-xl font-medium leading-[30px] text-HahuGray1 dark:text-white">
            Total Durations
          </h2>
          <hr class="mt-4 border-b-2 border-primary w-[167px] self-center rounded-full bg-primary" />
        </div>
      </div>
    </div>

    <div class="overflow-hidden">
      <Carousel class="mt-20 justify-center self-center" :cardSlider="cardSlider" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
</style>
