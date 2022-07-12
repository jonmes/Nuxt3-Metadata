<script setup>
const route = useRoute();
const layout = ref("visitor");
watchEffect(() => {
  if (route.path == "/") {
    layout.value = "visitor";
  } else if (route.path == "/admin") {
    layout.value = "default";
  } else if (route.path == "/HahuEnterprise") {
    layout.value = "enterprise";
  } else if (route.path == "/HahuIndustry") {
    layout.value = "industrylay";
  } else if (route.path == "/HahuTvet") {
    layout.value = "tvetlay";
  } else if (route.path == "/HahuMuya") {
    layout.value = "muyalay";
  } else if (route.path == "/HahuUniversity") {
    layout.value = "universitylay";
  }
});
</script>

<template>
  <div>
    <div
      class="fixed px-3 py-2 text-sm font-bold text-white bg-gray-900 rounded bottom-4 left-4 z-50"
    >
      <span class="xs:hidden">DEFAULT</span>
      <span class="hidden xs:inline-block sm:hidden">XS</span>
      <span class="hidden sm:inline-block md:hidden">SM</span>
      <span class="hidden md:inline-block lg:hidden">MD</span>
      <span class="hidden lg:inline-block xl:hidden">LG</span>
      <span class="hidden xl:inline-block 2xl:hidden">XL</span>
      <span class="hidden 2xl:inline-block 3xl:hidden">2XL</span>
      <span class="hidden 3xl:inline-block 4xl:hidden">3XL</span>
      <span class="hidden 4xl:inline-block">4XL</span>
    </div>

    <NuxtLayout :name="layout">
      <NuxtPage class="text-HahuGray1" />
    </NuxtLayout>
  </div>
</template>
