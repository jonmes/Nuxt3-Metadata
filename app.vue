<script setup>
const route = useRoute();
const layout = ref("visitor");
if (route.path == "/admin") {
  layout.value = "default";
}

useHead({
  title: "HaHu Jobs",
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "HaHu Jobs" }],
  bodyAttrs: {
    class: "test",
  },
});
</script>

<template>
  <div>
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
