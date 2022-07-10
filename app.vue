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
    <NuxtLayout :name="layout">
      <NuxtPage class="text-HahuGray1" />
    </NuxtLayout>
  </div>
</template>
