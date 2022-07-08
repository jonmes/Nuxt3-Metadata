<script setup>
const route = useRoute();
const layout = ref("visitor");
if (route.path == "/admin") {
  layout.value = "default";
}
</script>

<template>
  <div>
    <NuxtLayout :name="layout">
      <NuxtPage class="text-HahuGray1" />
    </NuxtLayout>
  </div>
</template>
