<script setup>
const route = useRoute();
const layout = ref("visitor");
if (route.path == "/admin") {
  layout.value = "default";
}

useHead({
  title: "HaHu Jobs",
  link: [{ rel: "icon", type: "image/x-icon", href: "/images/favicon.ico" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "HaHu Jobs" }],
  bodyAttrs: {
    class: "test",
  },
  link: [{ rel: "preconnect", href: "https://fonts.gstatic.com" }],
  link: [
    {
      href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;600;700;800;900&display=swap",
      rel: "stylesheet",
    },
  ],
});
</script>

<template>
  <div>
    <NuxtLayout :name="layout">
      <NuxtPage class="text-HahuGray1" />
    </NuxtLayout>
  </div>
</template>
