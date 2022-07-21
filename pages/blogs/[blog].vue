<script setup>
const router = useRoute();

const blog = ref(router.params.blog);
</script>

<template>
  <div>
    <NuxtLink to="/blogs">{{$t("backtoblogs")}}</NuxtLink>
    <h1>{{ $t("blog") }} {{ blog }}</h1>
  </div>
</template>
