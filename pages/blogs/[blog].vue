<script setup>
const router = useRoute();

const blog = ref(router.params.blog);
</script>

<template>
  <div>
    <NuxtLink to="/blogs">Back to Blogs</NuxtLink>
    <h1>Blog {{ blog }}</h1>
  </div>
</template>
