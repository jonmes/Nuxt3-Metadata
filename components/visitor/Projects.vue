<template>
  <section class="flex flex-col" id="projects">
    <div class="flex flex-col">
      <h1
        class="mt-10 self-center text-lg font-medium leading-5 dark:text-white md:mt-24"
      >
        Projects
      </h1>
      <h2
        class="mt-[34px] self-center rounded-[36px] bg-primary-lite px-3 py-2 text-center text-base font-black leading-5 text-white xs:px-8 xs:text-lg lg:px-8 lg:py-4 lg:text-3xl lg:leading-[18px]"
      >
        We deliver quality projects on time!
      </h2>
      <p
        class="mt-10 max-w-[750px] self-center text-center text-base font-normal leading-8 dark:text-white xs:text-lg"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa commodo
        sed nunc, justo. Potenti morbi ornare enim tortor, viverra nec.
      </p>

      <div
        class="mt-10 flex flex-col justify-center space-y-10 space-x-0 overflow-hidden lg:flex-row lg:space-y-0 lg:space-x-36 xl:space-x-[16.5rem]"
      >
        <div class="flex flex-col">
          <h2 class="leading-16 self-center text-5xl font-bold text-primary">
            27
          </h2>
          <h2
            class="self-center text-xl font-medium leading-[30px] dark:text-white"
          >
            Projects completed
          </h2>
          <hr
            class="mt-4 h-[5px] w-[167px] self-center rounded-full bg-primary-lite px-1"
          />
        </div>

        <div class="flex flex-col">
          <h2
            class="self-center text-5xl font-bold leading-[60px] text-primary"
          >
            19
          </h2>
          <h2
            class="self-center text-xl font-medium leading-[30px] dark:text-white"
          >
            Customers
          </h2>
          <hr
            class="mt-4 h-[5px] w-[167px] self-center rounded-full bg-primary-lite px-1"
          />
        </div>

        <div class="flex flex-col">
          <h2
            class="self-center text-5xl font-bold leading-[60px] text-primary"
          >
            6<span class="text-3xl">mon</span>
          </h2>
          <h2
            class="self-center text-xl font-medium leading-[30px] dark:text-white"
          >
            Projects completed
          </h2>
          <hr
            class="mt-4 h-[5px] w-[167px] self-center rounded-full bg-primary-lite px-1"
          />
        </div>
      </div>
    </div>

    <Carousel
      class="mt-20 w-full justify-center self-center"
      :cardSlider="cardSlider"
    />
  </section>
</template>

<script setup>
const cardSlider = [
  {
    thumbnail: "/images/project_thumbnail_carousel.png",
    // title: "Ethiopian Migrant Database Managment System",
    title: "One",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis ac, pharetra, lectus ac eget. Quisque eu mollis viverra urna et duis vitae vitae quis. Aliquam justo, sapien interdum magna suspendisse.",
    partner: [
      "/images/Partner_Logo_1.png",
      "/images/Partner_Logo_2.png",
      "/images/Partner_Logo_3.png",
      "/images/Partner_Logo_4.png",
    ],
    client: ["/images/Client_Logo.png"],
  },
  {
    thumbnail: "/images/project_thumbnail_carousel.png",
    // title: "Ethiopian Migrant Database Managment System",
    title: "Two",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis ac, pharetra, lectus ac eget. Quisque eu mollis viverra urna et duis vitae vitae quis. Aliquam justo, sapien interdum magna suspendisse.",
    partner: [
      "/images/Partner_Logo_1.png",
      "/images/Partner_Logo_2.png",
      "/images/Partner_Logo_3.png",
      "/images/Partner_Logo_4.png",
    ],
    client: ["/images/Client_Logo.png"],
  },
  {
    thumbnail: "/images/project_thumbnail_carousel.png",
    // title: "Ethiopian Migrant Database Managment System",
    title: "Three",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis ac, pharetra, lectus ac eget. Quisque eu mollis viverra urna et duis vitae vitae quis. Aliquam justo, sapien interdum magna suspendisse.",
    partner: [
      "/images/Partner_Logo_1.png",
      "/images/Partner_Logo_2.png",
      "/images/Partner_Logo_3.png",
      "/images/Partner_Logo_4.png",
    ],
    client: ["/images/Client_Logo.png"],
  },
  {
    thumbnail: "/images/project_thumbnail_carousel.png",
    // title: "Ethiopian Migrant Database Managment System",
    title: "Four",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis ac, pharetra, lectus ac eget. Quisque eu mollis viverra urna et duis vitae vitae quis. Aliquam justo, sapien interdum magna suspendisse.",
    partner: [
      "/images/Partner_Logo_1.png",
      "/images/Partner_Logo_2.png",
      "/images/Partner_Logo_3.png",
      "/images/Partner_Logo_4.png",
    ],
    client: ["/images/Client_Logo.png"],
  },
];
</script>

<style lang="scss" scoped></style>
